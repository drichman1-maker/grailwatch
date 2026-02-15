import SwiftUI

struct ColorTheme {
    // Primary colors
    static let accent = Color(hex: "6C5CE7")
    static let accentLight = Color(hex: "A29BFE")

    // Deal colors
    static let dealGood = Color(hex: "00B894")
    static let dealBelow = Color(hex: "0984E3")
    static let dealRare = Color(hex: "E17055")

    // Trend colors
    static let trendUp = Color(hex: "00B894")
    static let trendDown = Color(hex: "D63031")
    static let trendStable = Color(hex: "636E72")

    // Surface colors that adapt to color scheme
    static let cardBackground = Color("CardBackground")
    static let secondaryText = Color("SecondaryText")
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}
