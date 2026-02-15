import SwiftUI

struct Typography {
    // Headlines
    static let largeTitle = Font.system(.largeTitle, design: .serif).weight(.bold)
    static let title = Font.system(.title, design: .serif).weight(.bold)
    static let title2 = Font.system(.title2, design: .serif).weight(.semibold)
    static let title3 = Font.system(.title3, design: .serif).weight(.semibold)

    // Body
    static let headline = Font.system(.headline, design: .default).weight(.semibold)
    static let body = Font.system(.body, design: .default)
    static let callout = Font.system(.callout, design: .default)
    static let subheadline = Font.system(.subheadline, design: .default)
    static let footnote = Font.system(.footnote, design: .default)
    static let caption = Font.system(.caption, design: .default)

    // Monospaced (prices)
    static let price = Font.system(.title3, design: .monospaced).weight(.bold)
    static let priceSmall = Font.system(.callout, design: .monospaced).weight(.semibold)
    static let priceLarge = Font.system(.title, design: .monospaced).weight(.bold)
}
