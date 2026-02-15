import Foundation

class MockDataService {
    static let shared = MockDataService()

    // MARK: - Sample Comics

    let comics: [Comic] = [
        Comic(id: "asm300", title: "Amazing Spider-Man", issueNumber: 300, year: 1988, publisher: "Marvel", thumbnailUrl: "asm300"),
        Comic(id: "batman423", title: "Batman", issueNumber: 423, year: 1988, publisher: "DC", thumbnailUrl: "batman423"),
        Comic(id: "hulk181", title: "Incredible Hulk", issueNumber: 181, year: 1974, publisher: "Marvel", thumbnailUrl: "hulk181"),
        Comic(id: "xmen1", title: "X-Men", issueNumber: 1, year: 1991, publisher: "Marvel", thumbnailUrl: "xmen1"),
        Comic(id: "spawn1", title: "Spawn", issueNumber: 1, year: 1992, publisher: "Image", thumbnailUrl: "spawn1"),
        Comic(id: "nm98", title: "New Mutants", issueNumber: 98, year: 1991, publisher: "Marvel", thumbnailUrl: "nm98"),
        Comic(id: "uf4", title: "Ultimate Fallout", issueNumber: 4, year: 2011, publisher: "Marvel", thumbnailUrl: "uf4"),
        Comic(id: "tasm129", title: "Amazing Spider-Man", issueNumber: 129, year: 1974, publisher: "Marvel", thumbnailUrl: "tasm129"),
        Comic(id: "gsxm1", title: "Giant-Size X-Men", issueNumber: 1, year: 1975, publisher: "Marvel", thumbnailUrl: "gsxm1"),
        Comic(id: "af15", title: "Amazing Fantasy", issueNumber: 15, year: 1962, publisher: "Marvel", thumbnailUrl: "af15"),
        Comic(id: "ij1", title: "Iron Jaw", issueNumber: 1, year: 1975, publisher: "Atlas", thumbnailUrl: "ij1"),
        Comic(id: "tmnt1", title: "Teenage Mutant Ninja Turtles", issueNumber: 1, year: 1984, publisher: "Mirage", thumbnailUrl: "tmnt1"),
    ]

    // MARK: - Trending

    var trendingComics: [Comic] {
        Array(comics.prefix(6))
    }

    // MARK: - Search

    func search(query: String) -> [Comic] {
        let q = query.lowercased().trimmingCharacters(in: .whitespaces)
        guard !q.isEmpty else { return comics }
        return comics.filter { comic in
            comic.title.lowercased().contains(q) ||
            comic.publisher.lowercased().contains(q) ||
            String(comic.issueNumber).contains(q) ||
            String(comic.year).contains(q)
        }
    }

    // MARK: - Listings

    func listings(for comicId: String) -> [Listing] {
        let grades: [Double] = [9.8, 9.6, 9.4, 9.2, 9.0, 8.5, 8.0]
        let companies: [GradingCompany] = [.cgc, .cbcs]
        let marketplaces = Marketplace.allCases

        var result: [Listing] = []
        let basePrices: [String: Double] = [
            "asm300": 1850, "batman423": 320, "hulk181": 12500,
            "xmen1": 85, "spawn1": 280, "nm98": 950,
            "uf4": 650, "tasm129": 3200, "gsxm1": 6800,
            "af15": 85000, "ij1": 45, "tmnt1": 9500
        ]
        let basePrice = basePrices[comicId] ?? 500

        for i in 0..<15 {
            let grade = grades[i % grades.count]
            let gradeMultiplier = grade / 9.8
            let company = companies[i % companies.count]
            let marketplace = marketplaces[i % marketplaces.count]

            let variation = Double.random(in: 0.75...1.30)
            let price = (basePrice * gradeMultiplier * variation).rounded()

            let daysAgo = Int.random(in: 0...30)
            let date = Calendar.current.date(byAdding: .day, value: -daysAgo, to: Date()) ?? Date()

            result.append(Listing(
                id: "\(comicId)-listing-\(i)",
                comicId: comicId,
                grade: grade,
                gradingCompany: company,
                price: price,
                marketplace: marketplace,
                listingUrl: "https://example.com/listing/\(comicId)-\(i)",
                listingDate: date,
                thumbnailUrl: comicId
            ))
        }

        // Apply deal detection
        let avg = result.map(\.price).reduce(0, +) / Double(result.count)
        result = DealDetector.analyze(listings: result, avgRecentSale: avg, totalActive: result.count)

        return result.sorted { $0.price < $1.price }
    }

    // MARK: - Market Summary

    func marketSummary(for comicId: String, grade: Double = 9.8) -> MarketSummary {
        let listings = self.listings(for: comicId).filter { $0.grade == grade }
        let prices = listings.map(\.price)
        let avg = prices.isEmpty ? 0 : prices.reduce(0, +) / Double(prices.count)
        let low = prices.min() ?? 0
        let high = prices.max() ?? 0

        return MarketSummary(
            comicId: comicId,
            grade: grade,
            avgRecentSale: avg * 0.95,
            lowestActive: low,
            highestActive: high,
            priceSpread: high - low,
            trend30Day: [.up, .down, .stable].randomElement()!,
            trendPercentage: Double.random(in: -8...12),
            estimatedFairValue: avg * 0.97,
            totalActiveListings: listings.count,
            recentSalesCount: Int.random(in: 5...25)
        )
    }

    // MARK: - Price History

    func priceHistory(for comicId: String, grade: Double = 9.8) -> [PricePoint] {
        let basePrices: [String: Double] = [
            "asm300": 1850, "batman423": 320, "hulk181": 12500,
            "xmen1": 85, "spawn1": 280, "nm98": 950,
            "uf4": 650, "tasm129": 3200, "gsxm1": 6800,
            "af15": 85000, "ij1": 45, "tmnt1": 9500
        ]
        let base = basePrices[comicId] ?? 500
        var points: [PricePoint] = []

        for i in 0..<20 {
            let daysAgo = (20 - i) * 5
            let date = Calendar.current.date(byAdding: .day, value: -daysAgo, to: Date()) ?? Date()
            let variation = Double.random(in: 0.85...1.15)
            let trendFactor = 1.0 + (Double(i) * 0.005)
            let price = (base * variation * trendFactor).rounded()

            points.append(PricePoint(
                id: "\(comicId)-price-\(i)",
                date: date,
                price: price,
                source: Marketplace.allCases.randomElement()!,
                grade: grade
            ))
        }

        return points.sorted { $0.date < $1.date }
    }
}
