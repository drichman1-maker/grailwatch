import SwiftUI

struct WatchlistView: View {
    @StateObject private var watchlist = WatchlistStore()
    private let dataService = MockDataService.shared

    var body: some View {
        NavigationStack {
            Group {
                if watchlist.watchedComics.isEmpty {
                    emptyState
                } else {
                    watchlistContent
                }
            }
            .navigationTitle("Watchlist")
            .background(Color(.systemBackground))
        }
    }

    // MARK: - Empty State

    private var emptyState: some View {
        VStack(spacing: 16) {
            Image(systemName: "eye.slash")
                .font(.system(size: 48))
                .foregroundColor(.secondary.opacity(0.4))

            Text("No comics watched")
                .font(Typography.title3)
                .foregroundColor(.primary)

            Text("Tap the eye icon on any comic\nto start tracking its market value")
                .font(Typography.subheadline)
                .foregroundColor(.secondary)
                .multilineTextAlignment(.center)

            NavigationLink(destination: SearchView()) {
                HStack(spacing: 6) {
                    Image(systemName: "magnifyingglass")
                    Text("Search Comics")
                }
                .font(Typography.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 24)
                .padding(.vertical, 12)
                .background(ColorTheme.accent)
                .cornerRadius(12)
            }
            .padding(.top, 8)
        }
        .padding()
    }

    // MARK: - Watchlist Content

    private var watchlistContent: some View {
        List {
            ForEach(watchlist.watchedComics) { comic in
                NavigationLink(destination: ComicDetailView(comic: comic)) {
                    WatchlistRow(comic: comic)
                }
                .listRowBackground(Color.clear)
                .listRowSeparatorTint(Color(.separator).opacity(0.3))
            }
            .onDelete { indexSet in
                for index in indexSet {
                    watchlist.remove(watchlist.watchedComics[index])
                }
            }
        }
        .listStyle(.plain)
    }
}
