import Foundation

struct PricePoint: Identifiable, Codable {
    let id: String
    let date: Date
    let price: Double
    let source: Marketplace
    let grade: Double

    var formattedPrice: String {
        "$\(String(format: "%.0f", price))"
    }

    var formattedDate: String {
        let formatter = DateFormatter()
        formatter.dateStyle = .short
        return formatter.string(from: date)
    }
}
