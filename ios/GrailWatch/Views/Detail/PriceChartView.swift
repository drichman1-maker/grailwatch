import SwiftUI

struct PriceChartView: View {
    let pricePoints: [PricePoint]

    @State private var selectedPoint: PricePoint?

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text("Price History")
                    .font(Typography.headline)
                    .foregroundColor(.primary)
                Spacer()
                Text("\(pricePoints.count) sales")
                    .font(Typography.caption)
                    .foregroundColor(.secondary)
            }

            if let selected = selectedPoint {
                HStack(spacing: 8) {
                    Text(selected.formattedPrice)
                        .font(Typography.priceSmall)
                        .foregroundColor(ColorTheme.accent)
                    Text(selected.formattedDate)
                        .font(Typography.caption)
                        .foregroundColor(.secondary)
                    Text(selected.source.rawValue)
                        .font(Typography.caption)
                        .foregroundColor(selected.source.color)
                }
                .transition(.opacity)
            }

            // Chart
            GeometryReader { geometry in
                chartPath(in: geometry.size)
            }
            .frame(height: 120)
            .padding(.top, 4)

            // Date range
            HStack {
                if let first = pricePoints.first {
                    Text(first.formattedDate)
                        .font(Typography.caption)
                        .foregroundColor(.secondary)
                }
                Spacer()
                if let last = pricePoints.last {
                    Text(last.formattedDate)
                        .font(Typography.caption)
                        .foregroundColor(.secondary)
                }
            }
        }
        .padding(16)
        .background(Color(.secondarySystemBackground))
        .cornerRadius(14)
    }

    @ViewBuilder
    private func chartPath(in size: CGSize) -> some View {
        let prices = pricePoints.map(\.price)
        let minPrice = (prices.min() ?? 0) * 0.95
        let maxPrice = (prices.max() ?? 1) * 1.05
        let range = maxPrice - minPrice

        ZStack {
            // Grid lines
            ForEach(0..<4, id: \.self) { i in
                let y = size.height * CGFloat(i) / 3
                Path { path in
                    path.move(to: CGPoint(x: 0, y: y))
                    path.addLine(to: CGPoint(x: size.width, y: y))
                }
                .stroke(Color(.separator).opacity(0.2), lineWidth: 0.5)
            }

            // Area fill
            Path { path in
                guard pricePoints.count > 1 else { return }
                let stepX = size.width / CGFloat(pricePoints.count - 1)

                path.move(to: CGPoint(x: 0, y: size.height))
                for (i, point) in pricePoints.enumerated() {
                    let x = stepX * CGFloat(i)
                    let y = size.height - ((point.price - minPrice) / range * Double(size.height))
                    if i == 0 {
                        path.addLine(to: CGPoint(x: x, y: y))
                    } else {
                        path.addLine(to: CGPoint(x: x, y: y))
                    }
                }
                path.addLine(to: CGPoint(x: size.width, y: size.height))
                path.closeSubpath()
            }
            .fill(LinearGradient(
                colors: [ColorTheme.accent.opacity(0.3), ColorTheme.accent.opacity(0.02)],
                startPoint: .top,
                endPoint: .bottom
            ))

            // Line
            Path { path in
                guard pricePoints.count > 1 else { return }
                let stepX = size.width / CGFloat(pricePoints.count - 1)

                for (i, point) in pricePoints.enumerated() {
                    let x = stepX * CGFloat(i)
                    let y = size.height - ((point.price - minPrice) / range * Double(size.height))
                    if i == 0 {
                        path.move(to: CGPoint(x: x, y: y))
                    } else {
                        path.addLine(to: CGPoint(x: x, y: y))
                    }
                }
            }
            .stroke(ColorTheme.accent, style: StrokeStyle(lineWidth: 2, lineCap: .round, lineJoin: .round))

            // Dots
            ForEach(Array(pricePoints.enumerated()), id: \.element.id) { i, point in
                let stepX = size.width / CGFloat(max(pricePoints.count - 1, 1))
                let x = stepX * CGFloat(i)
                let y = size.height - ((point.price - minPrice) / range * Double(size.height))

                Circle()
                    .fill(selectedPoint?.id == point.id ? ColorTheme.accent : Color.white)
                    .frame(width: 6, height: 6)
                    .shadow(color: ColorTheme.accent.opacity(0.3), radius: 2)
                    .position(x: x, y: y)
                    .onTapGesture {
                        withAnimation(.easeInOut(duration: 0.2)) {
                            selectedPoint = selectedPoint?.id == point.id ? nil : point
                        }
                    }
            }
        }
    }
}
