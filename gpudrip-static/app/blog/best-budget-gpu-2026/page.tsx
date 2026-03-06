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
            <span style={{ color: '#888' }}>March 17, 2026</span>
            <span style={{ color: '#333' }}>•</span>
            <span style={{ color: '#888' }}>8 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#f0f0f0', marginBottom: 24, lineHeight: 1.2 }}>Best Budget GPU 2026: Best Graphics Cards Under $400</h1>
          <p style={{ fontSize: 20, color: '#888', lineHeight: 1.6 }}>You don't need to spend $1,000 to get great gaming performance. We tested every budget GPU from $199 to $399.</p>
        </header>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 16 }}>Best Budget GPU: RX 7800 XT</h2>
          <p style={{ color: '#888', marginBottom: 16, lineHeight: 1.8 }}>At $499 MSRP (but often found under $400 on sale), the RX 7800 XT delivers incredible 1440p performance and decent 4K capabilities. It beats the RTX 4070 in raw performance while costing less.</p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 16 }}>Runner Up: RTX 4060 Ti</h2>
          <p style={{ color: '#888', marginBottom: 16, lineHeight: 1.8 }}>NVIDIA's RTX 4060 Ti at $399 offers DLSS 3 and superior ray tracing performance, making it a solid choice if you prioritize those features.</p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 16 }}>Honorable Mention: RX 7700 XT</h2>
          <p style={{ color: '#888', marginBottom: 24, lineHeight: 1.8 }}>For around $449, the RX 7700 XT provides excellent 1440p gaming performance and 12GB of VRAM, future-proofing your purchase.</p>
        </div>

        <section style={{ marginBottom: 48 }}>
          <div style={{ background: '#22c55e', borderRadius: 12, padding: 24, textAlign: 'center' }}>
            <h2 style={{ color: '#000', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Track Prices on GPUDrip</h2>
            <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: 16 }}>Get alerts when budget GPUs drop in price.</p>
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