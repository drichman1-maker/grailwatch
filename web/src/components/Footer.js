// ═══════════════════════════════════════════
// GrailWatch — Footer Component
// ═══════════════════════════════════════════

export function renderFooter() {
    return `
    <footer class="footer">
      <div class="footer-trust">
        <span class="footer-trust-icon">🔒</span>
        <div>
          <div class="footer-trust-text">Your collection interests stay on your device.</div>
          <div class="footer-trust-sub">No accounts • No tracking • No analytics</div>
        </div>
      </div>
      <div class="footer-copy">
        <p>GrailWatch v1.0 — Track the real market value of graded comic books across the entire internet.</p>
        <p style="margin-top: 4px;">Data aggregated from eBay, Heritage Auctions, ComicLink, MyComicShop & HipComic.</p>
      </div>
    </footer>
  `;
}
