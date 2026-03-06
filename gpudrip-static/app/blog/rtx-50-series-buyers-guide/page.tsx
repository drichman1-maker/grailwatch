import Link from 'next/link'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: '#080808', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <header style={{ borderBottom: '1px solid #222', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, #22c55e, #166534)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#000" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#f0f0f0' }}>GPUDrip</span>
            </Link>
            <nav style={{ display: 'flex', gap: 16 }}>
              <Link href="/" style={{ fontSize: 14, color: '#888', textDecoration: 'none' }}>GPUs</Link>
              <Link href="/blog" style={{ fontSize: 14, color: '#22c55e', textDecoration: 'none' }}>Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      <article style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
        <header style={{ marginBottom: 48, borderBottom: '1px solid #222', paddingBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#22c55e', marginBottom: 16 }}>
            <span>Guide</span>
            <span style={{ color: '#333' }}>•</span>
            <span style={{ color: '#888' }}>Feb 20, 2026</span>
            <span style={{ color: '#333' }}>•</span>
            <span style={{ color: '#888' }}>8 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#f0f0f0', marginBottom: 24, lineHeight: 1.2 }}>RTX 50-Series Buyer's Guide: Which GPU to Buy in 2026</h1>
          <p style={{ fontSize: 20, color: '#888', lineHeight: 1.6 }}>Breaking down the RTX 5090, 5080, 5070 Ti, and 5070 — performance, pricing, and availability.</p>
        </header>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 16 }}>RTX 5090: The Beast</h2>
          <p style={{ color: '#888', marginBottom: 16, lineHeight: 1.8 }}>At $1,999, this is for enthusiasts only. But if you want the absolute best 4K gaming performance with full ray tracing, this is it.</p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 16 }}>RTX 5080: The Sweet Spot</h2>
          <p style={{ color: '#888', marginBottom: 16, lineHeight: 1.8 }}>$999 gets you excellent 4K performance and strong ray tracing. The best balance of price and performance in the lineup.</p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 16 }}>RTX 5070 Ti: 1440p King</h2>
          <p style={{ color: '#888', marginBottom: 16, lineHeight: 1.8 }}>For $749, you get the ultimate 1440p card that can also handle 4K with some settings tweaks.</p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 16 }}>RTX 5070: Best Value</h2>
          <p style={{ color: '#888', marginBottom: 24, lineHeight: 1.8 }}>At $549, this is the card most gamers should buy in 2026. Excellent 1440p performance and solid 4K capabilities.</p>
        </div>

        <section style={{ marginBottom: 48 }}>
          <div style={{ background: '#22c55e', borderRadius: 12, padding: 24, textAlign: 'center' }}>
            <h2 style={{ color: '#000', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Track Prices on GPUDrip</h2>
            <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: 16 }}>Get alerts when RTX 50-series GPUs drop in price.</p>
            <Link href="/" style={{ display: 'inline-block', background: '#000', color: '#22c55e', padding: '12px 24px', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>Track Now</Link>
          </div>
        </section>
      </article>

      <footer style={{ borderTop: '1px solid #222', marginTop: 64, padding: '32px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#888' }}>
            <Link href="/privacy" style={{ color: '#888', textDecoration: 'none', marginRight: 8 }}>Privacy</Link>
            <span style={{ color: '#333', marginRight: 8 }}>|</span>
            <Link href="/blog" style={{ color: '#888', textDecoration: 'none', marginLeft: 8 }}>Blog</Link>
          </p>
          <p style={{ fontSize: 14, color: '#888', marginTop: 8 }}>© 2026 GPUDrip</p>
        </div>
      </footer>
    </div>
  )
}