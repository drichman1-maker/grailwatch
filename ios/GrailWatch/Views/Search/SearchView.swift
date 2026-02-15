import SwiftUI

struct SearchView: View {
    @State private var searchText = ""
    @State private var results: [Comic] = []
    private let dataService = MockDataService.shared

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                // Search field
                searchField

                if searchText.isEmpty {
                    suggestionsView
                } else if results.isEmpty {
                    emptyState
                } else {
                    resultsList
                }

                Spacer()
            }
            .navigationTitle("Search")
            .background(Color(.systemBackground))
        }
    }

    // MARK: - Search Field

    private var searchField: some View {
        HStack(spacing: 10) {
            Image(systemName: "magnifyingglass")
                .foregroundColor(.secondary)

            TextField("Spider-Man #300, Batman, CGC 9.8...", text: $searchText)
                .font(Typography.body)
                .autocorrectionDisabled()
                .onChange(of: searchText) { _, newValue in
                    results = dataService.search(query: newValue)
                }

            if !searchText.isEmpty {
                Button(action: {
                    searchText = ""
                    results = []
                }) {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundColor(.secondary)
                }
            }
        }
        .padding(12)
        .background(Color(.secondarySystemBackground))
        .cornerRadius(12)
        .padding(.horizontal)
        .padding(.top, 8)
    }

    // MARK: - Suggestions

    private var suggestionsView: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Popular Searches")
                .font(Typography.headline)
                .foregroundColor(.primary)
                .padding(.top, 20)

            ForEach(["Amazing Spider-Man #300", "Incredible Hulk #181", "New Mutants #98", "Giant-Size X-Men #1"], id: \.self) { suggestion in
                Button(action: {
                    searchText = suggestion.components(separatedBy: " #").first ?? suggestion
                    results = dataService.search(query: searchText)
                }) {
                    HStack(spacing: 10) {
                        Image(systemName: "magnifyingglass")
                            .foregroundColor(.secondary)
                            .font(.system(size: 14))
                        Text(suggestion)
                            .font(Typography.body)
                            .foregroundColor(.primary)
                        Spacer()
                        Image(systemName: "arrow.up.left")
                            .foregroundColor(.secondary)
                            .font(.system(size: 12))
                    }
                    .padding(.vertical, 8)
                }
            }

            Text("Search Tips")
                .font(Typography.headline)
                .foregroundColor(.primary)
                .padding(.top, 12)

            VStack(alignment: .leading, spacing: 8) {
                tipRow(icon: "book.fill", text: "Search by title: \"Amazing Spider-Man\"")
                tipRow(icon: "number", text: "Include issue number: \"Spider-Man 300\"")
                tipRow(icon: "calendar", text: "Filter by year: \"1988\"")
                tipRow(icon: "building.2.fill", text: "Search by publisher: \"Marvel\"")
            }
        }
        .padding(.horizontal)
    }

    private func tipRow(icon: String, text: String) -> some View {
        HStack(spacing: 8) {
            Image(systemName: icon)
                .foregroundColor(ColorTheme.accent)
                .font(.system(size: 12))
                .frame(width: 20)
            Text(text)
                .font(Typography.caption)
                .foregroundColor(.secondary)
        }
    }

    // MARK: - Results

    private var resultsList: some View {
        List(results) { comic in
            NavigationLink(destination: ComicDetailView(comic: comic)) {
                SearchResultRow(comic: comic)
            }
            .listRowBackground(Color.clear)
            .listRowSeparatorTint(Color(.separator).opacity(0.3))
        }
        .listStyle(.plain)
    }

    // MARK: - Empty

    private var emptyState: some View {
        VStack(spacing: 12) {
            Image(systemName: "magnifyingglass")
                .font(.system(size: 40))
                .foregroundColor(.secondary.opacity(0.5))
            Text("No results found")
                .font(Typography.headline)
                .foregroundColor(.secondary)
            Text("Try a different search term")
                .font(Typography.caption)
                .foregroundColor(.secondary.opacity(0.7))
        }
        .padding(.top, 60)
    }
}
