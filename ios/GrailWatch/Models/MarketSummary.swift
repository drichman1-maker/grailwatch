import Foundation

enum TrendDirection: String, Codable {
    case up = "up"
    case down = "down"
    case stable = "stable"

    var icon: String {
        switch self {
        case .up: return "arrow.up.right"
        case .down: return "arrow.down.right"
        case .stable: return "arrow.right"
        }
    }

    var label: String {
        switch self {
        case .up: return "Trending Up"
        case .down: return "Trending Down"
        case .stable: return "Stable"
        }
    }
}

struct MarketSummary: Codable {
    let comicId: String
    let grade: Double
    let avgRecentSale: Double
    let lowestActive: Double
    let highestActive: Double
    let priceSpread: Double
    let trend30Day: TrendDirection
    let trendPercentage: Double
    let estimatedFairValue: Double
    let totalActiveListings: Int
    let recentSalesCount: Int

    var formattedAvg: String {
        "$\(String(format: "%.0f", avgRecentSale))"
    }

    var formattedLowest: String {
        "$\(String(format: "%.0f", lowestActive))"
    }

    var formattedFairValue: String {
        "$\(String(format: "%.0f", estimatedFairValue))"
    }

    var formattedSpread: String {
        "$\(String(format: "%.0f", priceSpread))"
    }

    var formattedTrend: String {
        let sign = trendPercentage >= 0 ? "+" : ""
        return "\(sign)\(String(format: "%.1f", trendPercentage))%"
    }
}
