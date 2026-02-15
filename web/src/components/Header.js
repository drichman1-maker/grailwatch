// ═══════════════════════════════════════════
// GrailWatch — Header Component
// ═══════════════════════════════════════════

import { navigate, getCurrentRoute } from '../router.js';

export function renderHeader() {
    const theme = localStorage.getItem('grailwatch_theme') || 'dark';
    const route = getCurrentRoute();

    const isActive = (path) => {
        if (path === '/' && (route === '/' || route === '')) return 'active';
        if (path !== '/' && route.startsWith(path)) return 'active';
        return '';
    };

    return `
    <header class="header">
      <div class="header-inner">
        <a class="header-logo" href="#/">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="var(--accent)"/>
            <path d="M8 24V8h6c3.3 0 6 2.7 6 6s-2.7 6-6 6h-2v4H8z" fill="white" opacity="0.9"/>
            <circle cx="22" cy="22" r="5" fill="var(--accent-light)"/>
            <path d="M20 22l2-2 2 2" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="header-logo-text">Grail<span>Watch</span></span>
        </a>
        <nav class="header-nav">
          <a href="#/" class="${isActive('/')}">🔥 <span>Home</span></a>
          <a href="#/search" class="${isActive('/search')}">🔍 <span>Search</span></a>
          <a href="#/watchlist" class="${isActive('/watchlist')}">👁️ <span>Watchlist</span></a>
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
            ${theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  `;
}

export function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('grailwatch_theme', next);
        btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
}

export function initTheme() {
    const saved = localStorage.getItem('grailwatch_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
}
