import SwiftUI

struct ListingRow: View {
    let listing: Listing

    var body: some View {
        HStack(spacing: 12) {
            // Thumbnail
            ZStack {
                RoundedRectangle(cornerRadius: 6)
                    .fill(Color(.tertiarySystemBackground))
                    .frame(width: 48, height: 64)

                Image(systemName: "book.closed.fill")
                    .font(.system(size: 16))
                    .foregroundColor(.secondary.opacity(0.4))
            }

            // Details
            VStack(alignment: .leading, spacing: 4) {
                HStack(spacing: 6) {
                    // Grading badge
                    Text(listing.formattedGrade)
                        .font(Typography.caption)
                        .fontWeight(.bold)
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(listing.gradingCompany.color.opacity(0.2))
                        .foregroundColor(listing.gradingCompany.color)
                        .cornerRadius(4)

                    if let label = listing.dealLabel {
                        DealBadge(label: label)
                    }
                }

                HStack(spacing: 6) {
                    Image(systemName: listing.marketplace.iconName)
                        .font(.system(size: 10))
                        .foregroundColor(listing.marketplace.color)
                    Text(listing.marketplace.rawValue)
                        .font(Typography.caption)
                        .foregroundColor(.secondary)
                    Text("•")
                        .foregroundColor(.secondary.opacity(0.5))
                    Text(listing.listingAge)
                        .font(Typography.caption)
                        .foregroundColor(.secondary)
                }
            }

            Spacer()

            // Price + Link
            VStack(alignment: .trailing, spacing: 4) {
                Text(listing.formattedPrice)
                    .font(Typography.priceSmall)
                    .foregroundColor(listing.isDeal ? ColorTheme.dealGood : .primary)

                Link(destination: URL(string: listing.listingUrl)!) {
                    HStack(spacing: 3) {
                        Text("View")
                            .font(Typography.caption)
                        Image(systemName: "arrow.up.right")
                            .font(.system(size: 9))
                    }
                    .foregroundColor(ColorTheme.accent)
                }
            }
        }
        .padding(12)
        .background(Color(.secondarySystemBackground))
        .cornerRadius(10)
    }
}
