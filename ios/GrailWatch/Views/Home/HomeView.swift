import SwiftUI

struct HomeView: View {
    @StateObject private var watchlist = WatchlistStore()
    private let dataService = MockDataService.shared

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    // Hero Section
                    heroSection

                    // Trending Now
                    sectionHeader(title: "Trending Now", icon: "flame.fill")
                    trendingGrid

                    // Hot Deals
                    sectionHeader(title: "Hot Deals", icon: "tag.fill")
                    hotDealsSection

                    // Privacy Trust Statement
                    trustStatement
                }
                .padding(.horizontal)
                .padding(.bottom, 32)
            }
            .navigationTitle("GrailWatch")
            .background(Color(.systemBackground))
        }
    }

    // MARK: - Hero

    private var heroSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Track the real value\nof graded comics")
                .font(Typography.title)
                .foregroundColor(.primary)

            Text("Aggregating listings across eBay, Heritage, ComicLink, MyComicShop & HipComic")
                .font(Typography.subheadline)
                .foregroundColor(.secondary)
        }
        .padding(.top, 8)
    }

    // MARK: - Section Header

    private func sectionHeader(title: String, icon: String) -> some View {
        HStack(spacing: 6) {
            Image(systemName: icon)
                .foregroundColor(ColorTheme.accent)
                .font(.system(size: 16, weight: .semibold))
            Text(title)
                .font(Typography.title3)
                .foregroundColor(.primary)
        }
    }

    // MARK: - Trending Grid

    private var trendingGrid: some View {
        LazyVGrid(columns: [
            GridItem(.flexible(), spacing: 12),
            GridItem(.flexible(), spacing: 12)
        ], spacing: 12) {
            ForEach(dataService.trendingComics) { comic in
                NavigationLink(destination: ComicDetailView(comic: comic)) {
                    TrendingCard(comic: comic)
                }
                .buttonStyle(.plain)
            }
        }
    }

    // MARK: - Hot Deals

    private var hotDealsSection: some View {
        let allListings = dataService.comics.prefix(4).flatMap { comic in
            dataService.listings(for: comic.id).filter { $0.isDeal }
        }.prefix(5)

        return ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 12) {
                ForEach(Array(allListings)) { listing in
                    if let comic = dataService.comics.first(where: { $0.id == listing.comicId }) {
                        NavigationLink(destination: ComicDetailView(comic: comic)) {
                            DealCard(listing: listing, comic: comic)
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
        }
    }

    // MARK: - Trust Statement

    private var trustStatement: some View {
        HStack(spacing: 10) {
            Image(systemName: "lock.shield.fill")
                .foregroundColor(ColorTheme.accent)
                .font(.system(size: 20))
            VStack(alignment: .leading, spacing: 2) {
                Text("Your collection interests stay on your device.")
                    .font(Typography.footnote)
                    .fontWeight(.medium)
                    .foregroundColor(.primary)
                Text("No accounts • No tracking • No analytics")
                    .font(Typography.caption)
                    .foregroundColor(.secondary)
            }
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color(.secondarySystemBackground))
        .cornerRadius(12)
    }
}

// MARK: - Deal Card

struct DealCard: View {
    let listing: Listing
    let comic: Comic

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            // Thumbnail placeholder
            ZStack(alignment: .topTrailing) {
                RoundedRectangle(cornerRadius: 8)
                    .fill(LinearGradient(
                        colors: [ColorTheme.accent.opacity(0.2), ColorTheme.accent.opacity(0.05)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ))
                    .frame(height: 100)
                    .overlay(
                        Image(systemName: "book.closed.fill")
                            .font(.system(size: 30))
                            .foregroundColor(ColorTheme.accent.opacity(0.5))
                    )

                if let label = listing.dealLabel {
                    DealBadge(label: label)
                        .padding(6)
                }
            }

            Text(comic.displayTitle)
                .font(Typography.footnote)
                .fontWeight(.semibold)
                .foregroundColor(.primary)
                .lineLimit(1)

            Text(listing.formattedGrade)
                .font(Typography.caption)
                .foregroundColor(.secondary)

            Text(listing.formattedPrice)
                .font(Typography.priceSmall)
                .foregroundColor(ColorTheme.dealGood)
        }
        .frame(width: 150)
        .padding(10)
        .background(Color(.secondarySystemBackground))
        .cornerRadius(12)
    }
}
