import SwiftUI

struct MarketSummaryCard: View {
    let summary: MarketSummary

    var body: some View {
        VStack(spacing: 16) {
            // Top row: Fair Value + Trend
            HStack(alignment: .top) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("Estimated Fair Value")
                        .font(Typography.caption)
                        .foregroundColor(.secondary)
                    Text(summary.formattedFairValue)
                        .font(Typography.priceLarge)
                        .foregroundColor(.primary)
                }

                Spacer()

                VStack(alignment: .trailing, spacing: 4) {
                    Text("30-Day Trend")
                        .font(Typography.caption)
                        .foregroundColor(.secondary)
                    HStack(spacing: 4) {
                        Image(systemName: summary.trend30Day.icon)
                            .font(.system(size: 14, weight: .bold))
                        Text(summary.formattedTrend)
                            .font(Typography.headline)
                    }
                    .foregroundColor(trendColor)
                }
            }

            Divider()

            // Stats grid
            HStack {
                statItem(label: "Avg Sale", value: summary.formattedAvg)
                Spacer()
                statItem(label: "Lowest", value: summary.formattedLowest)
                Spacer()
                statItem(label: "Spread", value: summary.formattedSpread)
                Spacer()
                statItem(label: "Listings", value: "\(summary.totalActiveListings)")
            }
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(Color(.secondarySystemBackground))
                .shadow(color: .black.opacity(0.06), radius: 8, y: 4)
        )
    }

    private func statItem(label: String, value: String) -> some View {
        VStack(spacing: 3) {
            Text(label)
                .font(Typography.caption)
                .foregroundColor(.secondary)
            Text(value)
                .font(Typography.priceSmall)
                .foregroundColor(.primary)
        }
    }

    private var trendColor: Color {
        switch summary.trend30Day {
        case .up: return ColorTheme.trendUp
        case .down: return ColorTheme.trendDown
        case .stable: return ColorTheme.trendStable
        }
    }
}
