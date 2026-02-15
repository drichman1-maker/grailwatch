import SwiftUI

struct ComicDetailView: View {
    let comic: Comic
    @StateObject private var watchlist = WatchlistStore()
    @State private var selectedGrade: Double = 9.8
    @State private var sortOption: SortOption = .lowestPrice

    private let dataService = MockDataService.shared

    enum SortOption: String, CaseIterable {
        case lowestPrice = "Lowest Price"
        case newest = "Newest"
        case bestDeal = "Best Deal"
    }

    var body: some View {
        let allListings = dataService.listings(for: comic.id)
        let filteredListings = sortedListings(allListings.filter { $0.grade == selectedGrade })
        let summary = dataService.marketSummary(for: comic.id, grade: selectedGrade)
        let priceHistory = dataService.priceHistory(for: comic.id, grade: selectedGrade)

        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                // Comic header
                comicHeader

                // Market Summary Card
                MarketSummaryCard(summary: summary)

                // Grade Selector
                gradeSelector

                // Price Chart
                PriceChartView(pricePoints: priceHistory)

                // Sort & Listings
                sortBar
                listingsFeed(filteredListings)
            }
            .padding(.horizontal)
            .padding(.bottom, 32)
        }
        .navigationTitle(comic.displayTitle)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button(action: { watchlist.toggle(comic) }) {
                    Image(systemName: watchlist.isWatched(comic) ? "eye.fill" : "eye")
                        .foregroundColor(watchlist.isWatched(comic) ? ColorTheme.accent : .secondary)
                }
            }
        }
    }

    // MARK: - Header

    private var comicHeader: some View {
        HStack(spacing: 16) {
            // Cover placeholder
            ZStack {
                RoundedRectangle(cornerRadius: 10)
                    .fill(LinearGradient(
                        colors: [ColorTheme.accent.opacity(0.2), ColorTheme.accent.opacity(0.05)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ))
                    .frame(width: 80, height: 110)

                Image(systemName: "book.closed.fill")
                    .font(.system(size: 32))
                    .foregroundColor(ColorTheme.accent.opacity(0.5))
            }

            VStack(alignment: .leading, spacing: 6) {
                Text(comic.displayTitle)
                    .font(Typography.title2)
                    .foregroundColor(.primary)

                Text(comic.subtitle)
                    .font(Typography.subheadline)
                    .foregroundColor(.secondary)

                HStack(spacing: 6) {
                    ForEach(GradingCompany.allCases) { company in
                        Text(company.rawValue)
                            .font(Typography.caption)
                            .fontWeight(.semibold)
                            .padding(.horizontal, 8)
                            .padding(.vertical, 3)
                            .background(company.color.opacity(0.2))
                            .foregroundColor(company.color)
                            .cornerRadius(4)
                    }
                }
            }
        }
        .padding(.top, 8)
    }

    // MARK: - Grade Selector

    private var gradeSelector: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Grade")
                .font(Typography.footnote)
                .fontWeight(.semibold)
                .foregroundColor(.secondary)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 8) {
                    ForEach([9.8, 9.6, 9.4, 9.2, 9.0, 8.5, 8.0], id: \.self) { grade in
                        Button(action: { selectedGrade = grade }) {
                            Text(String(format: "%.1f", grade))
                                .font(Typography.footnote)
                                .fontWeight(.semibold)
                                .padding(.horizontal, 14)
                                .padding(.vertical, 7)
                                .background(selectedGrade == grade
                                    ? ColorTheme.accent
                                    : Color(.secondarySystemBackground))
                                .foregroundColor(selectedGrade == grade ? .white : .primary)
                                .cornerRadius(8)
                        }
                    }
                }
            }
        }
    }

    // MARK: - Sort Bar

    private var sortBar: some View {
        HStack {
            Text("Active Listings")
                .font(Typography.headline)
                .foregroundColor(.primary)

            Spacer()

            Menu {
                ForEach(SortOption.allCases, id: \.self) { option in
                    Button(action: { sortOption = option }) {
                        HStack {
                            Text(option.rawValue)
                            if sortOption == option {
                                Image(systemName: "checkmark")
                            }
                        }
                    }
                }
            } label: {
                HStack(spacing: 4) {
                    Text(sortOption.rawValue)
                        .font(Typography.caption)
                    Image(systemName: "chevron.down")
                        .font(.system(size: 10))
                }
                .foregroundColor(ColorTheme.accent)
            }
        }
    }

    // MARK: - Listings Feed

    private func listingsFeed(_ listings: [Listing]) -> some View {
        LazyVStack(spacing: 10) {
            ForEach(listings) { listing in
                ListingRow(listing: listing)
            }
        }
    }

    // MARK: - Sort Logic

    private func sortedListings(_ listings: [Listing]) -> [Listing] {
        switch sortOption {
        case .lowestPrice:
            return listings.sorted { $0.price < $1.price }
        case .newest:
            return listings.sorted { $0.listingDate > $1.listingDate }
        case .bestDeal:
            return listings.sorted { ($0.dealLabel != nil ? 0 : 1) < ($1.dealLabel != nil ? 0 : 1) }
        }
    }
}
