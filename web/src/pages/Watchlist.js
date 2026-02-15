// ═══════════════════════════════════════════
// GrailWatch — Watchlist Page
// ═══════════════════════════════════════════

import { renderHeader, initThemeToggle } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import {
    getDisplayTitle, getSubtitle, getPublisherColor,
    formatPrice, getMarketSummary
} from '../data/mockData.js';
import { getWatchlist, removeWatch } from '../data/watchlistStore.js';
import { navigate } from '../router.js';

export function renderWatchlist(app) {
    const watchlist = getWatchlist();

    app.innerHTML = `
    ${renderHeader()}
    <main class="container">
      <div class="watchlist-page">
        <h1 class="watchlist-page-title">Watchlist</h1>
        ${watchlist.length === 0 ? renderEmpty() : renderItems(watchlist)}
      </div>
    </main>
    ${renderFooter()}
  `;

    initThemeToggle();
    initWatchlistInteractions(app);
}

function renderEmpty() {
    return `
    <div class="empty-state animate-fadeIn">
      <div class="empty-state-icon">👁️</div>
      <div class="empty-state-title">No comics watched</div>
      <div class="empty-state-text">Tap the eye icon on any comic to start tracking its market value</div>
      <a href="#/search" class="btn-primary">🔍 Search Comics</a>
    </div>
  `;
}

function renderItems(comics) {
    return `
    <div class="watchlist-items stagger">
      ${comics.map(comic => {
        const summary = getMarketSummary(comic.id);
        const color = getPublisherColor(comic.publisher);
        const trendClass = `trend-${summary.trend30Day}`;
        const trendIcon = summary.trend30Day === 'up' ? '↑' : summary.trend30Day === 'down' ? '↓' : '→';
        const sign = summary.trendPercentage >= 0 ? '+' : '';

        return `
          <div class="watchlist-row" data-comic-id="${comic.id}">
            <div class="listing-thumb" style="background: linear-gradient(135deg, ${color}22, ${color}08)">
              📖
            </div>
            <div class="watchlist-row-info">
              <div class="watchlist-row-title">${getDisplayTitle(comic)}</div>
              <div class="watchlist-row-sub">${getSubtitle(comic)}</div>
              <div class="watchlist-row-stats">
                <span class="price-small">${formatPrice(summary.estimatedFairValue)}</span>
                <span class="trend ${trendClass}">${trendIcon} ${sign}${summary.trendPercentage}%</span>
                <span style="font-size:var(--text-xs);color:var(--text-secondary)">${summary.totalActiveListings} listings</span>
              </div>
            </div>
            <button class="watchlist-row-remove" data-remove-id="${comic.id}" title="Remove from watchlist">
              ✕
            </button>
          </div>
        `;
    }).join('')}
    </div>
  `;
}

function initWatchlistInteractions(app) {
    // Navigate to comic detail
    document.querySelectorAll('[data-comic-id]').forEach(el => {
        el.addEventListener('click', (e) => {
            // Don't navigate if clicking remove button
            if (e.target.closest('[data-remove-id]')) return;
            navigate(`/comic/${el.dataset.comicId}`);
        });
    });

    // Remove buttons
    document.querySelectorAll('[data-remove-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeWatch(btn.dataset.removeId);
            renderWatchlist(app); // Re-render
        });
    });
}
