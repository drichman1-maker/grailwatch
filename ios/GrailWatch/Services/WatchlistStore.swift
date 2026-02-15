import Foundation
import SwiftUI

class WatchlistStore: ObservableObject {
    private static let key = "grailwatch_watchlist"

    @Published var watchedComics: [Comic] = []

    init() {
        load()
    }

    func isWatched(_ comic: Comic) -> Bool {
        watchedComics.contains(where: { $0.id == comic.id })
    }

    func toggle(_ comic: Comic) {
        if isWatched(comic) {
            remove(comic)
        } else {
            add(comic)
        }
    }

    func add(_ comic: Comic) {
        guard !isWatched(comic) else { return }
        watchedComics.insert(comic, at: 0)
        save()
    }

    func remove(_ comic: Comic) {
        watchedComics.removeAll(where: { $0.id == comic.id })
        save()
    }

    private func save() {
        if let data = try? JSONEncoder().encode(watchedComics) {
            UserDefaults.standard.set(data, forKey: Self.key)
        }
    }

    private func load() {
        guard let data = UserDefaults.standard.data(forKey: Self.key),
              let comics = try? JSONDecoder().decode([Comic].self, from: data) else {
            return
        }
        watchedComics = comics
    }
}
