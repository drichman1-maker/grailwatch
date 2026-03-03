# Dashboard Recreation

## Issue Fixed
- Removed duplicate "Mint Condition" entry from Quick Links (was showing both mintcondition.app and mintcondition.vercel.app)

## Files

### dashboard.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Doug's Sites | Dashboard</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      min-height: 100vh;
    }
    
    .container {
      display: flex;
      min-height: 100vh;
    }
    
    /* Sidebar */
    .sidebar {
      width: 260px;
      background: #141414;
      border-right: 1px solid #262626;
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
    }
    
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0 12px 24px;
      border-bottom: 1px solid #262626;
      margin-bottom: 24px;
    }
    
    .brand-avatar {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #10b981, #06b6d4);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
    }
    
    .brand-text {
      font-weight: 600;
      font-size: 16px;
    }
    
    .nav-section {
      margin-bottom: 24px;
    }
    
    .nav-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #737373;
      padding: 0 12px;
      margin-bottom: 8px;
    }
    
    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
      color: #a3a3a3;
      text-decoration: none;
    }
    
    .nav-item:hover {
      background: #1f1f1f;
      color: #fafafa;
    }
    
    .nav-item.active {
      background: #1f1f1f;
      color: #fafafa;
    }
    
    .nav-item svg {
      width: 18px;
      height: 18px;
    }
    
    /* Main Content */
    .main {
      flex: 1;
      padding: 32px 40px;
      overflow-y: auto;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }
    
    h1 {
      font-size: 28px;
      font-weight: 700;
    }
    
    .header-actions {
      display: flex;
      gap: 12px;
    }
    
    .btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid #262626;
      background: #141414;
      color: #fafafa;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn:hover {
      background: #1f1f1f;
      border-color: #404040;
    }
    
    .btn-primary {
      background: #10b981;
      border-color: #10b981;
      color: white;
    }
    
    .btn-primary:hover {
      background: #059669;
      border-color: #059669;
    }
    
    /* Cards */
    .section {
      margin-bottom: 40px;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #fafafa;
    }
    
    .builds-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 16px;
    }
    
    .build-card {
      background: #141414;
      border: 1px solid #262626;
      border-radius: 12px;
      padding: 20px;
      transition: border-color 0.2s, transform 0.2s;
    }
    
    .build-card:hover {
      border-color: #404040;
      transform: translateY(-2px);
    }
    
    .build-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    
    .build-name {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 15px;
    }
    
    .build-emoji {
      font-size: 18px;
    }
    
    .status-badge {
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .status-ready {
      background: rgba(16, 185, 129, 0.15);
      color: #10b981;
    }
    
    .status-dev {
      background: rgba(245, 158, 11, 0.15);
      color: #f59e0b;
    }
    
    .build-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #737373;
      font-size: 13px;
      margin-bottom: 8px;
    }
    
    .build-meta .dot {
      width: 4px;
      height: 4px;
      background: #525252;
      border-radius: 50%;
    }
    
    .build-message {
      color: #a3a3a3;
      font-size: 13px;
    }
    
    .build-time {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 12px;
      color: #737373;
      font-size: 12px;
    }
    
    /* Quick Links */
    .quick-links {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .quick-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      background: #141414;
      border: 1px solid #262626;
      border-radius: 10px;
      color: #fafafa;
      text-decoration: none;
      transition: all 0.2s;
    }
    
    .quick-link:hover {
      background: #1f1f1f;
      border-color: #404040;
    }
    
    .quick-link-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .quick-link-emoji {
      font-size: 20px;
    }
    
    .quick-link-text {
      display: flex;
      flex-direction: column;
    }
    
    .quick-link-name {
      font-weight: 500;
      font-size: 14px;
    }
    
    .quick-link-url {
      font-size: 12px;
      color: #737373;
    }
    
    .quick-link-arrow {
      color: #525252;
      font-size: 18px;
    }
    
    .warning-badge {
      background: rgba(245, 158, 11, 0.15);
      color: #f59e0b;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      margin-left: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-avatar">D</div>
        <div class="brand-text">Doug's Sites</div>
      </div>
      
      <div class="nav-section">
        <div class="nav-label">Overview</div>
        <a href="#" class="nav-item active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
          </svg>
          Dashboard
        </a>
        <a href="#" class="nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          Builds
        </a>
      </div>
      
      <div class="nav-section">
        <div class="nav-label">Tools</div>
        <a href="#" class="nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 20V10"/>
            <path d="M12 20V4"/>
            <path d="M6 20v-6"/>
          </svg>
          Analytics
        </a>
        <a href="#" class="nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
          </svg>
          Settings
        </a>
      </div>
    </aside>
    
    <!-- Main Content -->
    <main class="main">
      <div class="header">
        <h1>Dashboard</h1>
        <div class="header-actions">
          <button class="btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 4v6h-6"/>
              <path d="M1 20v-6h6"/>
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
            </svg>
            Refresh
          </button>
          <button class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            New Build
          </button>
        </div>
      </div>
      
      <!-- Latest Builds -->
      <div class="section">
        <h2 class="section-title">Latest Builds</h2>
        <div class="builds-grid">
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">🏋️</span>
                Health Index
              </div>
              <span class="status-badge status-ready">Ready</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Backend API stable</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Just now
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">🎲</span>
                RumbleDeals
              </div>
              <span class="status-badge status-ready">Ready</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Latest deployment</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              1h ago
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">👶</span>
                Baby Gear
              </div>
              <span class="status-badge status-ready">Ready</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Title metadata fix</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              2h ago
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">🍎</span>
                Mactrackr
              </div>
              <span class="status-badge status-ready">Ready</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>4 new blog posts added</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              30m ago
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">⚾</span>
                Slugger
              </div>
              <span class="status-badge status-ready">Ready</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Graded card tracker live</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              2d ago
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">🃏</span>
                Mint Condition
              </div>
              <span class="status-badge status-ready">Ready</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Domain redirect fix needed</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              1d ago
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">🪙</span>
                Coin Curator
              </div>
              <span class="status-badge status-ready">Ready</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Graded coin tracker deployed</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              3d ago
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">🤖</span>
                Robot Atlas
              </div>
              <span class="status-badge status-dev">In Dev</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Hardware tracking - WIP</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              In progress
            </div>
          </div>
          
          <div class="build-card">
            <div class="build-header">
              <div class="build-name">
                <span class="build-emoji">📚</span>
                Grail Watch
              </div>
              <span class="status-badge status-dev">In Dev</span>
            </div>
            <div class="build-meta">
              <span>main</span>
              <span class="dot"></span>
              <span>Comic book tracker - 12 blog posts</span>
            </div>
            <div class="build-time">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Just now
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="section">
        <h2 class="section-title">Quick Links</h2>
        <div class="quick-links">
          <a href="https://mintcondition.app" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">🃏</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Mint Condition</span>
                <span class="quick-link-url">mintcondition.app</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://coincurator.vercel.app" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">🪙</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Coin Curator <span class="warning-badge">⚠️ domain broken</span></span>
                <span class="quick-link-url">coincurator.app → vercel</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://gpudrip.com" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">🎮</span>
              <div class="quick-link-text">
                <span class="quick-link-name">GPU Drip</span>
                <span class="quick-link-url">gpudrip.com</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://healthindex.app" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">❤️</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Health Index</span>
                <span class="quick-link-url">healthindex.app</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://mactrackr.com" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">🍎</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Mactrackr</span>
                <span class="quick-link-url">mactrackr.com</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://rumbledeals.com" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">🎲</span>
              <div class="quick-link-text">
                <span class="quick-link-name">RumbleDeals</span>
                <span class="quick-link-url">rumbledeals.com</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://babygearhere.com" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">👶</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Baby Gear</span>
                <span class="quick-link-url">babygearhere.com</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://sluggerdata.com" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">⚾</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Slugger</span>
                <span class="quick-link-url">sluggerdata.com</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="https://coincurator.app" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">🪙</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Coin Curator</span>
                <span class="quick-link-url">coincurator.app</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
          
          <a href="#" class="quick-link">
            <div class="quick-link-left">
              <span class="quick-link-emoji">📚</span>
              <div class="quick-link-text">
                <span class="quick-link-name">Grail Watch</span>
                <span class="quick-link-url">Coming soon</span>
              </div>
            </div>
            <span class="quick-link-arrow">→</span>
          </a>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

## Deployment Instructions

1. Save the HTML above as `index.html`
2. Deploy to Vercel or any static host
3. Update DNS/dashboard-orpin-nu-98.vercel.app to point to new deployment

## Changes Made
- **Fixed:** Removed duplicate Mint Condition entry (was showing both mintcondition.app and mintcondition.vercel.app)
- **Improved:** Clean, dark-themed UI matching the original
- **Kept:** All existing projects and their statuses