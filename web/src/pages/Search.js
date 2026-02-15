// ═══════════════════════════════════════════
// GrailWatch — Search Page
// ═══════════════════════════════════════════

import { renderHeader, initThemeToggle } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import {
    searchComics, getDisplayTitle, getSubtitle, getPublisherColor,
    formatPrice, getMarketSummary
} from '../data/mockData.js';
import { navigate } from '../router.js';

const POPULAR_SEARCHES = [
    'Amazing Spider-Man #300',
    'Incredible Hulk #181',
    'New Mutants #98',
    'Giant-Size X-Men #1',
    'Amazing Fantasy #15',
];

export function renderSearch(app) {
    app.innerHTML = `
    ${renderHeader()}
    <main class="container">
      <div class="search-page">
        <div class="search-bar" id="searchBarContainer">
          <span class="search-bar-icon">🔍</span>
          <input class="search-bar-input" id="searchInput"
            type="text" placeholder="Spider-Man #300, Batman, CGC 9.8..."
            autocomplete="off" />
          <button class="search-bar-clear" id="searchClear" style="display:none">✕</button>
        </div>

        <div id="searchResults"></div>
        <div id="searchSuggestions">
          ${renderSuggestions()}
        </div>
      </div>
    </main>
    ${renderFooter()}
  `;

    initThemeToggle();
    initSearch();
}

function renderSuggestions() {
    return `
    <div class="search-suggestions animate-fadeIn">
      <h3 class="search-suggestions-title">Popular Searches</h3>
      ${POPULAR_SEARCHES.map(s => `
        <div class="search-suggestion-item" data-suggestion="${s.split(' #')[0]}">
          <span>🔍</span>
          <span style="flex:1">${s}</span>
          <span style="opacity:0.3;font-size:0.8rem">↵</span>
        </div>
      `).join('')}
    </div>
    <div class="search-suggestions" style="margin-top: var(--space-xl)">
      <h3 class="search-suggestions-title">Search Tips</h3>
      <div style="display:flex;flex-direction:column;gap:8px;font-size:var(--text-sm);color:var(--text-secondary)">
        <div>📖 Search by title: "Amazing Spider-Man"</div>
        <div>#️⃣ Include issue number: "Spider-Man 300"</div>
        <div>📅 Filter by year: "1988"</div>
        <div>🏢 Search by publisher: "Marvel"</div>
      </div>
    </div>
  `;
}

function renderResults(comics) {
    if (!comics.length) {
        return `
      <div class="empty-state animate-fadeIn">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-title">No results found</div>
        <div class="empty-state-text">Try a different search term</div>
      </div>
    `;
    }

    return `
    <div class="search-results stagger">
      ${comics.map(comic => {
        const summary = getMarketSummary(comic.id);
        const color = getPublisherColor(comic.publisher);
        const trendClass = `trend-${summary.trend30Day}`;
        const trendIcon = summary.trend30Day === 'up' ? '↑' : summary.trend30Day === 'down' ? '↓' : '→';
        const sign = summary.trendPercentage >= 0 ? '+' : '';

        return `
          <div class="search-result-row" data-comic-id="${comic.id}">
            <div class="search-result-thumb" style="background: linear-gradient(135deg, ${color}22, ${color}08)">
              📖
            </div>
            <div class="search-result-info">
              <div class="search-result-title">${getDisplayTitle(comic)}</div>
              <div class="search-result-sub">${getSubtitle(comic)}</div>
              <div class="search-result-stats">
                <span class="price-small">${formatPrice(summary.estimatedFairValue)}</span>
                <span class="trend ${trendClass}">${trendIcon} ${sign}${summary.trendPercentage}%</span>
                <span style="font-size:var(--text-xs);color:var(--text-secondary)">${summary.totalActiveListings} listings</span>
              </div>
            </div>
          </div>
        `;
    }).join('')}
    </div>
  `;
}

function initSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    const resultsContainer = document.getElementById('searchResults');
    const suggestionsContainer = document.getElementById('searchSuggestions');

    if (!input) return;

    input.addEventListener('input', () => {
        const q = input.value.trim();
        clearBtn.style.display = q ? 'block' : 'none';

        if (!q) {
            resultsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'block';
            return;
        }

        suggestionsContainer.style.display = 'none';
        const results = searchComics(q);
        resultsContainer.innerHTML = renderResults(results);
        initResultClicks();
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        resultsContainer.innerHTML = '';
        suggestionsContainer.style.display = 'block';
        input.focus();
    });

    // Suggestions click
    document.querySelectorAll('[data-suggestion]').forEach(el => {
        el.addEventListener('click', () => {
            input.value = el.dataset.suggestion;
            input.dispatchEvent(new Event('input'));
        });
    });

    // Autofocus
    input.focus();
}

function initResultClicks() {
    document.querySelectorAll('[data-comic-id]').forEach(el => {
        el.addEventListener('click', () => {
            navigate(`/comic/${el.dataset.comicId}`);
        });
    });
}
