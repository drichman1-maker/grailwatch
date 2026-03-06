import Link from 'next/link'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: '#080808', fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
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
        {/* Title */}
        <header style={{ marginBottom: 48, borderBottom: '1px solid #222', paddingBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#22c55e', marginBottom: 16 }}>
            <span>Comparison</span>
            <span style={{ color: '#333' }}>•</span>
            <span style={{ color: '#888' }}>March 3, 2026</span>
            <span style={{ color: '#333' }}>•</span>
            <span style={{ color: '#888' }}>10 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#f0f0f0', marginBottom: 24, lineHeight: 1.2 }}>RTX 5070 Ti vs RX 9070 XT: Which $749 GPU Wins in 2026?</h1>
          <p style={{ fontSize: 20, color: '#888', lineHeight: 1.6 }}>The mid-range GPU battle everyone's been waiting for. NVIDIA's RTX 5070 Ti faces off against AMD's RX 9070 XT at the same $749 price point — but which one actually delivers better value for your build?</p>
        </header>

        {/* Quick Verdict */}
        <div style={{ background: 'linear-gradient(90deg, rgba(34,197,94,0.1), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 12, padding: 24, marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 12 }}>Quick Verdict</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontWeight: 600, color: '#f0f0f0', marginBottom: 8 }}>Choose RTX 5070 Ti if:</h3>
              <ul style={{ color: '#888', fontSize: 14, lineHeight: 1.8 }}>
                <li>• Ray tracing matters to you</li>
                <li>• You use DLSS 4 Multi Frame Gen</li>
                <li>• Content creation / NVENC encoding</li>
                <li>• You want RTX Remix for older games</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontWeight: 600, color: '#f0f0f0', marginBottom: 8 }}>Choose RX 9070 XT if:</h3>
              <ul style={{ color: '#888', fontSize: 14, lineHeight: 1.8 }}>
                <li>• Raw rasterization performance</li>
                <li>• More VRAM (20GB vs 16GB)</li>
                <li>• Better price-to-performance</li>
                <li>• Linux / open-source driver priority</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 24 }}>Specs at a Glance</h2>
          <div style={{ overflowX: 'auto', border: '1px solid #222', borderRadius: 12 }}>
            <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#0f0f0f' }}>
                  <th style={{ textAlign: 'left', padding: 16, color: '#f0f0f0', fontWeight: 600, borderBottom: '1px solid #222' }}>Spec</th>
                  <th style={{ textAlign: 'left', padding: 16, color: '#22c55e', fontWeight: 600, borderBottom: '1px solid #222' }}>RTX 5070 Ti</th>
                  <th style={{ textAlign: 'left', padding: 16, color: '#ef4444', fontWeight: 600, borderBottom: '1px solid #222' }}>RX 9070 XT</th>
                </tr>
              </thead>
              <tbody style={{ color: '#888' }}>
                <tr style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: 16 }}>Architecture</td>
                  <td style={{ padding: 16 }}>Blackwell 2.0</td>
                  <td style={{ padding: 16 }}>RDNA 4</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: 16 }}>VRAM</td>
                  <td style={{ padding: 16 }}>16GB GDDR7</td>
                  <td style={{ padding: 16, color: '#22c55e' }}>20GB GDDR6</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: 16 }}>TDP</td>
                  <td style={{ padding: 16 }}>285W</td>
                  <td style={{ padding: 16, color: '#22c55e' }}>260W</td>
                </tr>
                <tr>
                  <td style={{ padding: 16 }}>MSRP</td>
                  <td style={{ padding: 16, fontWeight: 700, color: '#f0f0f0' }}>$749</td>
                  <td style={{ padding: 16, fontWeight: 700, color: '#f0f0f0' }}>$749</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Gaming Performance */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 24 }}>Gaming Performance: 1440p Ultra</h2>
          <p style={{ color: '#888', marginBottom: 24 }}>These cards target 1440p high-refresh gaming. In pure rasterization, the RX 9070 XT wins by 5-10%. But enable ray tracing and NVIDIA's superior RT cores and DLSS 4 flip the script completely — often by 25-35%.</p>
        </section>

        {/* Ray Tracing */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 24 }}>Ray Tracing: NVIDIA's Moat</h2>
          <p style={{ color: '#888', marginBottom: 24 }}>Ray tracing is where NVIDIA maintains its decisive advantage. The 5070 Ti's 4th-gen RT cores handle path tracing in games like Alan Wake 2 and Cyberpunk with RT Overdrive far better than AMD's 2nd-gen implementation.</p>
        </section>

        {/* VRAM */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 24 }}>VRAM: The Quiet Advantage</h2>
          <p style={{ color: '#888', marginBottom: 24 }}>20GB vs 16GB isn't just numbers on a spec sheet — it's increasingly important for texture-heavy games and future-proofing.</p>
        </section>

        {/* Price */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 24 }}>Price & Availability</h2>
          <p style={{ color: '#888', marginBottom: 24 }}>Both cards launched at $749 MSRP. Street prices: RTX 5070 Ti is $829–$899 (limited stock), RX 9070 XT is $749–$779 (available).</p>
          <div style={{ background: 'linear-gradient(90deg, rgba(34,197,94,0.1), transparent)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#f0f0f0', fontWeight: 600 }}>Value winner: RX 9070 XT at MSRP. You get more VRAM, better rasterization, and easier availability.</p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ background: '#22c55e', borderRadius: 12, padding: 24, textAlign: 'center' }}>
            <h2 style={{ color: '#000', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Track Both GPUs on GPUDrip</h2>
            <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: 16 }}>Get instant alerts when prices drop below MSRP.</p>
            <Link href="/" style={{ display: 'inline-block', background: '#000', color: '#22c55e', padding: '12px 24px', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>Set Price Alert</Link>
          </div>
        </section>
      </article>

      {/* Footer */}
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