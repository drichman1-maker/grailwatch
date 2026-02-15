import Foundation

struct Comic: Identifiable, Codable, Hashable {
    let id: String
    let title: String
    let issueNumber: Int
    let year: Int
    let publisher: String
    let thumbnailUrl: String

    var displayTitle: String {
        "\(title) #\(issueNumber)"
    }

    var subtitle: String {
        "\(publisher) • \(year)"
    }
}
