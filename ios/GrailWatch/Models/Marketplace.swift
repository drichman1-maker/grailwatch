import Foundation
import SwiftUI

enum Marketplace: String, Codable, CaseIterable, Identifiable {
    case ebay = "eBay"
    case heritageAuctions = "Heritage Auctions"
    case comicLink = "ComicLink"
    case myComicShop = "MyComicShop"
    case hipComic = "HipComic"

    var id: String { rawValue }

    var color: Color {
        switch self {
        case .ebay: return Color(hex: "E53238")
        case .heritageAuctions: return Color(hex: "1B3A5C")
        case .comicLink: return Color(hex: "D4A843")
        case .myComicShop: return Color(hex: "2E8B57")
        case .hipComic: return Color(hex: "9B59B6")
        }
    }

    var iconName: String {
        switch self {
        case .ebay: return "cart.fill"
        case .heritageAuctions: return "building.columns.fill"
        case .comicLink: return "link.circle.fill"
        case .myComicShop: return "book.fill"
        case .hipComic: return "star.circle.fill"
        }
    }
}

enum GradingCompany: String, Codable, CaseIterable, Identifiable {
    case cgc = "CGC"
    case cbcs = "CBCS"

    var id: String { rawValue }

    var fullName: String {
        switch self {
        case .cgc: return "Certified Guaranty Company"
        case .cbcs: return "Comic Book Certification Service"
        }
    }

    var color: Color {
        switch self {
        case .cgc: return Color(hex: "FFD700")
        case .cbcs: return Color(hex: "4A90D9")
        }
    }
}
