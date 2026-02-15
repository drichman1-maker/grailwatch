import SwiftUI

struct DealBadge: View {
    let label: DealLabel

    var body: some View {
        HStack(spacing: 3) {
            Image(systemName: iconName)
                .font(.system(size: 8, weight: .bold))
            Text(label.rawValue)
                .font(.system(size: 10, weight: .bold))
        }
        .padding(.horizontal, 6)
        .padding(.vertical, 3)
        .background(badgeColor.opacity(0.15))
        .foregroundColor(badgeColor)
        .cornerRadius(4)
    }

    private var badgeColor: Color {
        switch label {
        case .goodDeal: return ColorTheme.dealGood
        case .belowMarket: return ColorTheme.dealBelow
        case .rareListing: return ColorTheme.dealRare
        }
    }

    private var iconName: String {
        switch label {
        case .goodDeal: return "arrow.down"
        case .belowMarket: return "bolt.fill"
        case .rareListing: return "diamond.fill"
        }
    }
}
