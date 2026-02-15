// ═══════════════════════════════════════════
// GrailWatch — Watchlist Store (localStorage)
// ═══════════════════════════════════════════

const STORAGE_KEY = 'grailwatch_watchlist';

let watchlist = [];
let listeners = [];

function load() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        watchlist = data ? JSON.parse(data) : [];
    } catch {
        watchlist = [];
    }
}

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
    listeners.forEach(fn => fn(watchlist));
}

// Public API
export function getWatchlist() {
    return [...watchlist];
}

export function isWatched(comicId) {
    return watchlist.some(c => c.id === comicId);
}

export function toggleWatch(comic) {
    if (isWatched(comic.id)) {
        removeWatch(comic.id);
    } else {
        addWatch(comic);
    }
}

export function addWatch(comic) {
    if (isWatched(comic.id)) return;
    watchlist.unshift(comic);
    save();
}

export function removeWatch(comicId) {
    watchlist = watchlist.filter(c => c.id !== comicId);
    save();
}

export function onWatchlistChange(fn) {
    listeners.push(fn);
    return () => { listeners = listeners.filter(l => l !== fn); };
}

// Init
load();
