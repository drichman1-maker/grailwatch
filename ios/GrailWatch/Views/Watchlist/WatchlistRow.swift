import SwiftUI

struct WatchlistRow: View {
    let comic: Comic

    var body: some View {
        let summary = MockDataService.shared.marketSummary(for: comic.id)

        HStack(spacing: 12) {
            // Thumbnail
            ZStack {
                RoundedRectangle(cornerRadius: 8)
                    .fill(LinearGradient(
                        colors: [ColorTheme.accent.opacity(0.15), ColorTheme.accent.opacity(0.05)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ))
                    .frame(width: 50, height: 65)

                Image(systemName: "book.closed.fill")
                    .font(.system(size: 18))
                    .foregroundColor(ColorTheme.accent.opacity(0.5))
            }

            VStack(alignment: .leading, spacing: 4) {
                Text(comic.displayTitle)
                    .font(Typography.headline)
                    .foregroundColor(.primary)

                Text(comic.subtitle)
                    .font(Typography.caption)
                    .foregroundColor(.secondary)

                HStack(spacing: 8) {
                    Text(summary.formattedFairValue)
                        .font(Typography.priceSmall)
                        .foregroundColor(.primary)

                    HStack(spacing: 2) {
                        Image(systemName: summary.trend30Day.icon)
                            .font(.system(size: 10, weight: .bold))
                        Text(summary.formattedTrend)
                            .font(Typography.caption)
                    }
                    .foregroundColor(trendColor(summary.trend30Day))
                }
            }

            Spacer()

            VStack(alignment: .trailing, spacing: 4) {
                Text("\(summary.totalActiveListings)")
                    .font(Typography.headline)
                    .foregroundColor(.primary)
                Text("listings")
                    .font(Typography.caption)
                    .foregroundColor(.secondary)
            }
        }
        .padding(.vertical, 4)
    }

    private func trendColor(_ trend: TrendDirection) -> Color {
        switch trend {
        case .up: return ColorTheme.trendUp
        case .down: return ColorTheme.trendDown
        case .stable: return ColorTheme.trendStable
        }
    }
}
