// ═══════════════════════════════════════════
// GrailWatch — Comic Detail Page
// ═══════════════════════════════════════════

import { renderHeader, initThemeToggle } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderPriceChart, drawPriceChart } from '../components/PriceChart.js';
import {
    COMICS, GRADES, getDisplayTitle, getSubtitle, getPublisherColor,
    formatPrice, formatPriceFull, formatListingAge,
    getListings, getMarketSummary, getPriceHistory
} from '../data/mockData.js';
import { isWatched, toggleWatch } from '../data/watchlistStore.js';

let currentGrade = 9.8;
let currentSort = 'lowestPrice';
let currentComic = null;

export function renderComicDetail(app, { id }) {
    currentComic = COMICS.find(c => c.id === id);
    if (!currentComic) {
        app.innerHTML = `<div class="container" style="padding:60px 0;text-align:center"><h2>Comic not found</h2></div>`;
        return;
    }

    currentGrade = 9.8;
    currentSort = 'lowestPrice';
    render(app);
}

function render(app) {
    const comic = currentComic;
    const summary = getMarketSummary(comic.id, currentGrade);
    const listings = getFilteredListings(comic.id);
    const priceHistory = getPriceHistory(comic.id, currentGrade);
    const color = getPublisherColor(comic.publisher);
    const watched = isWatched(comic.id);

    const trendClass = `trend-${summary.trend30Day}`;
    const trendIcon = summary.trend30Day === 'up' ? '↑' : summary.trend30Day === 'down' ? '↓' : '→';
    const sign = summary.trendPercentage >= 0 ? '+' : '';

    app.innerHTML = `
    ${renderHeader()}
    <main class="container">
      <div class="detail-page animate-fadeIn">
        <!-- Header -->
        <div class="detail-header">
          <div class="detail-cover" style="background: linear-gradient(135deg, ${color}30, ${color}08); border-radius: var(--radius-lg);">
            📖
          </div>
          <div class="detail-info">
            <h1 class="detail-title">${getDisplayTitle(comic)}</h1>
            <div class="detail-subtitle">${getSubtitle(comic)}</div>
            <div class="detail-grading-badges">
              <span class="grade-badge grade-cgc">CGC</span>
              <span class="grade-badge grade-cbcs">CBCS</span>
            </div>
            <button class="detail-watch-btn ${watched ? 'active' : ''}" id="watchBtn">
              ${watched ? '👁️ Watching' : '👁️ Watch'}
            </button>
          </div>
        </div>

        <div class="detail-sections">
          <!-- Market Summary Card -->
          <div class="market-card">
            <div class="market-card-header">
              <div>
                <div class="market-card-label">Estimated Fair Value</div>
                <div class="market-card-value">${formatPrice(summary.estimatedFairValue)}</div>
              </div>
              <div style="text-align:right">
                <div class="market-card-label">30-Day Trend</div>
                <span class="trend ${trendClass}" style="font-size: var(--text-lg);">${trendIcon} ${sign}${summary.trendPercentage}%</span>
              </div>
            </div>
            <div class="market-card-stats">
              <div class="market-stat">
                <div class="market-stat-value">${formatPrice(summary.avgRecentSale)}</div>
                <div class="market-stat-label">Avg Sale</div>
              </div>
              <div class="market-stat">
                <div class="market-stat-value">${formatPrice(summary.lowestActive)}</div>
                <div class="market-stat-label">Lowest</div>
              </div>
              <div class="market-stat">
                <div class="market-stat-value">${formatPrice(summary.priceSpread)}</div>
                <div class="market-stat-label">Spread</div>
              </div>
              <div class="market-stat">
                <div class="market-stat-value">${summary.totalActiveListings}</div>
                <div class="market-stat-label">Listings</div>
              </div>
            </div>
          </div>

          <!-- Grade Selector -->
          <div>
            <div style="font-size:var(--text-xs);font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:var(--space-sm)">Grade</div>
            <div class="grade-selector" id="gradeSelector">
              ${GRADES.map(g => `
                <button class="grade-selector-btn ${g === currentGrade ? 'active' : ''}" data-grade="${g}">
                  ${g.toFixed(1)}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Price Chart -->
          ${renderPriceChart(priceHistory)}

          <!-- Sort Bar + Listings -->
          <div>
            <div class="sort-bar">
              <span class="sort-bar-title">Active Listings</span>
              <select class="sort-select" id="sortSelect">
                <option value="lowestPrice" ${currentSort === 'lowestPrice' ? 'selected' : ''}>Lowest Price</option>
                <option value="newest" ${currentSort === 'newest' ? 'selected' : ''}>Newest</option>
                <option value="bestDeal" ${currentSort === 'bestDeal' ? 'selected' : ''}>Best Deal</option>
              </select>
            </div>
            <div class="listings-feed stagger">
              ${listings.map(renderListingRow).join('')}
            </div>
          </div>
        </div>
      </div>
    </main>
    ${renderFooter()}
  `;

    initThemeToggle();
    initDetailInteractions(app);

    // Draw chart after DOM is ready
    requestAnimationFrame(() => {
        drawPriceChart(priceHistory);
    });
}

function renderListingRow(listing) {
    const dealClass = listing.dealLabel === 'Good Deal' ? 'deal-good' :
        listing.dealLabel === 'Below Market' ? 'deal-below' :
            listing.dealLabel === 'Rare Listing' ? 'deal-rare' : '';
    const priceColor = listing.dealLabel ? 'var(--deal-good)' : 'var(--text-primary)';

    return `
    <div class="listing-row">
      <div class="listing-thumb">📖</div>
      <div class="listing-details">
        <div class="listing-badges">
          <span class="grade-badge ${listing.gradingCompany.cssClass}">${listing.gradingCompany.name} ${listing.grade.toFixed(1)}</span>
          ${listing.dealLabel ? `<span class="deal-badge ${dealClass}">${listing.dealLabel}</span>` : ''}
        </div>
        <div class="listing-meta">
          <span class="mp-dot" style="background:${listing.marketplace.color}"></span>
          <span>${listing.marketplace.name}</span>
          <span>•</span>
          <span>${formatListingAge(listing.listingDate)}</span>
        </div>
      </div>
      <div class="listing-price-col">
        <div class="price-small" style="color:${priceColor}">${formatPriceFull(listing.price)}</div>
        <a href="${listing.listingUrl}" target="_blank" rel="noopener" class="listing-link">
          View ↗
        </a>
      </div>
    </div>
  `;
}

function getFilteredListings(comicId) {
    let listings = getListings(comicId).filter(l => l.grade === currentGrade);

    switch (currentSort) {
        case 'lowestPrice': return listings.sort((a, b) => a.price - b.price);
        case 'newest': return listings.sort((a, b) => b.listingDate - a.listingDate);
        case 'bestDeal': return listings.sort((a, b) => (b.dealLabel ? 1 : 0) - (a.dealLabel ? 1 : 0));
        default: return listings;
    }
}

function initDetailInteractions(app) {
    // Watch button
    const watchBtn = document.getElementById('watchBtn');
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            toggleWatch(currentComic);
            const watched = isWatched(currentComic.id);
            watchBtn.className = `detail-watch-btn ${watched ? 'active' : ''}`;
            watchBtn.innerHTML = watched ? '👁️ Watching' : '👁️ Watch';
        });
    }

    // Grade selector
    document.querySelectorAll('[data-grade]').forEach(btn => {
        btn.addEventListener('click', () => {
            currentGrade = parseFloat(btn.dataset.grade);
            render(app);
        });
    });

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            render(app);
        });
    }
}
