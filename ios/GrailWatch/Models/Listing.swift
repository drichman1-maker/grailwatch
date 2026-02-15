import Foundation

enum DealLabel: String, Codable {
    case goodDeal = "Good Deal"
    case belowMarket = "Below Market"
    case rareListing = "Rare Listing"
}

struct Listing: Identifiable, Codable {
    let id: String
    let comicId: String
    let grade: Double
    let gradingCompany: GradingCompany
    let price: Double
    let marketplace: Marketplace
    let listingUrl: String
    let listingDate: Date
    let thumbnailUrl: String
    var dealLabel: DealLabel?

    var formattedPrice: String {
        "$\(String(format: "%.2f", price))"
    }

    var formattedGrade: String {
        "\(gradingCompany.rawValue) \(String(format: "%.1f", grade))"
    }

    var listingAge: String {
        let days = Calendar.current.dateComponents([.day], from: listingDate, to: Date()).day ?? 0
        if days == 0 { return "Today" }
        if days == 1 { return "Yesterday" }
        if days < 7 { return "\(days) days ago" }
        if days < 30 { return "\(days / 7) weeks ago" }
        return "\(days / 30) months ago"
    }

    var isDeal: Bool {
        dealLabel != nil
    }
}
