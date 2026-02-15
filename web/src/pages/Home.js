// ═══════════════════════════════════════════
// GrailWatch — Home Page
// ═══════════════════════════════════════════

import { renderHeader, initThemeToggle } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import {
    getTrendingComics, getHotDeals, getDisplayTitle, getSubtitle,
    getPublisherColor, formatPrice, getMarketSummary
} from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderHome(app) {
    const trending = getTrendingComics();
    const deals = getHotDeals();

    app.innerHTML = `
    ${renderHeader()}
    <main class="container">
      <section class="home-hero animate-fadeIn">
        <h1 class="home-hero-title">Track the real value of<br/><span>graded comics</span></h1>
        <p class="home-hero-sub">Aggregating listings across eBay, Heritage Auctions, ComicLink, MyComicShop & HipComic — all in one place.</p>
      </section>

      <section class="home-section">
        <div class="home-section-header">
          <span class="home-section-icon">🔥</span>
          <h2 class="home-section-title">Trending Now</h2>
        </div>
        <div class="trending-grid stagger">
          ${trending.map(comic => renderTrendingCard(comic)).join('')}
        </div>
      </section>

      <section class="home-section">
        <div class="home-section-header">
          <span class="home-section-icon">🏷️</span>
          <h2 class="home-section-title">Hot Deals</h2>
        </div>
        <div class="deals-scroll stagger">
          ${deals.map(d => renderDealCard(d)).join('')}
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;

    initThemeToggle();
    initClickHandlers();
}

function renderTrendingCard(comic) {
    const summary = getMarketSummary(comic.id);
    const color = getPublisherColor(comic.publisher);
    const trendClass = `trend-${summary.trend30Day}`;
    const trendIcon = summary.trend30Day === 'up' ? '↑' : summary.trend30Day === 'down' ? '↓' : '→';
    const sign = summary.trendPercentage >= 0 ? '+' : '';

    return `
    <div class="trending-card card-clickable" data-comic-id="${comic.id}">
      <div class="trending-cover" style="background: linear-gradient(135deg, ${color}30, ${color}08)">
        📖
      </div>
      <div class="trending-title">${getDisplayTitle(comic)}</div>
      <div class="trending-subtitle">${getSubtitle(comic)}</div>
      <div class="trending-footer">
        <span class="price-small">${formatPrice(summary.estimatedFairValue)}</span>
        <span class="trend ${trendClass}">${trendIcon} ${sign}${summary.trendPercentage}%</span>
      </div>
    </div>
  `;
}

function renderDealCard({ listing, comic }) {
    const dealClass = listing.dealLabel === 'Good Deal' ? 'deal-good' :
        listing.dealLabel === 'Below Market' ? 'deal-below' : 'deal-rare';

    return `
    <div class="deal-card card card-clickable" data-comic-id="${comic.id}">
      <div class="trending-cover" style="background: linear-gradient(135deg, var(--accent)20, var(--accent)05)">
        📖
      </div>
      ${listing.dealLabel ? `<span class="deal-badge ${dealClass}">${listing.dealLabel}</span>` : ''}
      <div class="trending-title" style="margin-top: 6px">${getDisplayTitle(comic)}</div>
      <div class="trending-subtitle">${listing.gradingCompany.name} ${listing.grade}</div>
      <div style="margin-top: 6px">
        <span class="price-small" style="color: var(--deal-good)">${formatPrice(listing.price)}</span>
      </div>
    </div>
  `;
}

function initClickHandlers() {
    document.querySelectorAll('[data-comic-id]').forEach(el => {
        el.addEventListener('click', () => {
            navigate(`/comic/${el.dataset.comicId}`);
        });
    });
}
