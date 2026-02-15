import SwiftUI

struct TrendingCard: View {
    let comic: Comic

    var body: some View {
        let summary = MockDataService.shared.marketSummary(for: comic.id)

        VStack(alignment: .leading, spacing: 8) {
            // Comic cover placeholder
            ZStack {
                RoundedRectangle(cornerRadius: 8)
                    .fill(LinearGradient(
                        colors: [
                            Color(hex: coverGradientColor(for: comic.publisher)).opacity(0.3),
                            Color(hex: coverGradientColor(for: comic.publisher)).opacity(0.08)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ))
                    .frame(height: 80)

                Image(systemName: "book.closed.fill")
                    .font(.system(size: 24))
                    .foregroundColor(Color(hex: coverGradientColor(for: comic.publisher)).opacity(0.6))
            }

            VStack(alignment: .leading, spacing: 3) {
                Text(comic.displayTitle)
                    .font(Typography.footnote)
                    .fontWeight(.bold)
                    .foregroundColor(.primary)
                    .lineLimit(1)

                Text(comic.subtitle)
                    .font(Typography.caption)
                    .foregroundColor(.secondary)
                    .lineLimit(1)
            }

            HStack {
                Text(summary.formattedFairValue)
                    .font(Typography.priceSmall)
                    .foregroundColor(.primary)

                Spacer()

                HStack(spacing: 2) {
                    Image(systemName: summary.trend30Day.icon)
                        .font(.system(size: 10, weight: .bold))
                    Text(summary.formattedTrend)
                        .font(Typography.caption)
                }
                .foregroundColor(trendColor(summary.trend30Day))
            }
        }
        .padding(10)
        .background(Color(.secondarySystemBackground))
        .cornerRadius(12)
    }

    private func trendColor(_ trend: TrendDirection) -> Color {
        switch trend {
        case .up: return ColorTheme.trendUp
        case .down: return ColorTheme.trendDown
        case .stable: return ColorTheme.trendStable
        }
    }

    private func coverGradientColor(for publisher: String) -> String {
        switch publisher {
        case "Marvel": return "E53238"
        case "DC": return "0476F2"
        case "Image": return "FF6B00"
        default: return "6C5CE7"
        }
    }
}
