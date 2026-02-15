import SwiftUI

struct SettingsView: View {
    @AppStorage("isDarkMode") private var isDarkMode = true

    var body: some View {
        NavigationStack {
            List {
                // Appearance
                Section("Appearance") {
                    Toggle(isOn: $isDarkMode) {
                        Label("Dark Mode", systemImage: "moon.fill")
                    }
                    .tint(ColorTheme.accent)
                }

                // Data Sources
                Section("Data Sources") {
                    ForEach(Marketplace.allCases) { source in
                        HStack(spacing: 10) {
                            Image(systemName: source.iconName)
                                .foregroundColor(source.color)
                                .frame(width: 24)
                            Text(source.rawValue)
                                .font(Typography.body)
                            Spacer()
                            Image(systemName: "checkmark.circle.fill")
                                .foregroundColor(ColorTheme.accent)
                        }
                    }
                }

                // Grading Companies
                Section("Supported Grading Companies") {
                    ForEach(GradingCompany.allCases) { company in
                        HStack(spacing: 10) {
                            Text(company.rawValue)
                                .font(Typography.headline)
                                .foregroundColor(company.color)
                                .frame(width: 50, alignment: .leading)
                            Text(company.fullName)
                                .font(Typography.body)
                                .foregroundColor(.secondary)
                        }
                    }
                }

                // About
                Section("About") {
                    HStack {
                        Text("Version")
                        Spacer()
                        Text("1.0.0")
                            .foregroundColor(.secondary)
                    }
                }

                // Privacy
                Section {
                    VStack(alignment: .leading, spacing: 8) {
                        HStack(spacing: 8) {
                            Image(systemName: "lock.shield.fill")
                                .foregroundColor(ColorTheme.accent)
                            Text("Privacy-First Design")
                                .font(Typography.headline)
                        }

                        Text("GrailWatch does not collect, store, or transmit any personal data. Your watchlist and preferences are stored entirely on your device. We include no analytics SDKs, no tracking pixels, and no third-party data collection.")
                            .font(Typography.caption)
                            .foregroundColor(.secondary)
                    }
                    .padding(.vertical, 4)
                }

                // Pro Teaser
                Section {
                    VStack(alignment: .leading, spacing: 8) {
                        HStack(spacing: 8) {
                            Image(systemName: "sparkles")
                                .foregroundColor(ColorTheme.accent)
                            Text("GrailWatch Pro")
                                .font(Typography.headline)
                        }
                        Text("Advanced analytics, unlimited alerts, and deeper historical data — coming soon.")
                            .font(Typography.caption)
                            .foregroundColor(.secondary)
                    }
                    .padding(.vertical, 4)
                }
            }
            .navigationTitle("Settings")
        }
    }
}
