import Foundation

struct DealDetector {
    /// Analyzes listings against market data and assigns deal labels.
    static func analyze(listings: [Listing], avgRecentSale: Double, totalActive: Int) -> [Listing] {
        return listings.map { listing in
            var updated = listing

            guard avgRecentSale > 0 else { return updated }

            let dealScore = (avgRecentSale - listing.price) / avgRecentSale

            if dealScore >= 0.25 {
                updated.dealLabel = .belowMarket
            } else if dealScore >= 0.15 {
                updated.dealLabel = .goodDeal
            }

            // Rare listing if very few exist
            if totalActive <= 3 && updated.dealLabel == nil {
                updated.dealLabel = .rareListing
            }

            return updated
        }
    }

    /// Quick check if a listing qualifies as any deal type.
    static func isDeal(price: Double, avgRecentSale: Double) -> Bool {
        guard avgRecentSale > 0 else { return false }
        let score = (avgRecentSale - price) / avgRecentSale
        return score >= 0.15
    }
}
