import Foundation

/// Protocol that each marketplace connector must conform to.
/// v1 uses MockDataService; future versions swap in real API adapters.
protocol MarketplaceAdapter {
    var marketplace: Marketplace { get }
    func fetchListings(for comic: Comic, grade: Double?, gradingCompany: GradingCompany?) async throws -> [Listing]
    func fetchRecentSales(for comic: Comic, grade: Double?) async throws -> [PricePoint]
}
