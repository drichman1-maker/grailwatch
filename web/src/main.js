// ═══════════════════════════════════════════
// GrailWatch — Main Entry Point
// ═══════════════════════════════════════════

import { initTheme } from './components/Header.js';
import { registerRoute, initRouter } from './router.js';
import { renderHome } from './pages/Home.js';
import { renderSearch } from './pages/Search.js';
import { renderComicDetail } from './pages/ComicDetail.js';
import { renderWatchlist } from './pages/Watchlist.js';

// Initialize theme before render
initTheme();

// Register routes
registerRoute('/', renderHome);
registerRoute('/search', renderSearch);
registerRoute('/comic/:id', renderComicDetail);
registerRoute('/watchlist', renderWatchlist);

// Start router
initRouter();
