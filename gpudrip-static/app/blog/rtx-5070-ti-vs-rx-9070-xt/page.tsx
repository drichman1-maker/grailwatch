import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RTX 5070 Ti vs RX 9070 XT: Which $749 GPU Wins in 2026? | GPU Drip',
  description: 'Head-to-head comparison of NVIDIA and AMD\'s mid-range flagship battle.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-[#2a2a2a] bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-2" href="/">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00ff88] to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">GPUDrip</span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link className="text-sm text-[#888] hover:text-white transition-colors" href="/">GPUs</Link>
              <Link className="text-sm text-[#00ff88]" href="/blog">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 border-b border-[#2a2a2a] pb-8">
          <div className="flex items-center gap-3 text-sm text-[#00ff88] mb-4">
            <span>Comparison</span>
            <span className="text-[#444]">•</span>
            <span className="text-[#888]">March 3, 2026</span>
            <span className="text-[#444]">•</span>
            <span className="text-[#888]">10 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">RTX 5070 Ti vs RX 9070 XT: Which $749 GPU Wins in 2026?</h1>
          <p className="text-xl text-[#888] leading-relaxed">The mid-range GPU battle everyone's been waiting for. NVIDIA's RTX 5070 Ti faces off against AMD's RX 9070 XT at the same $749 price point — but which one actually delivers better value for your build?</p>
        </header>

        <div className="bg-gradient-to-r from-[#00ff88]/10 to-green-900/10 border border-[#00ff88]/30 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-[#00ff88] mb-3">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Choose RTX 5070 Ti if:</h3>
              <ul className="text-[#888] space-y-1 text-sm">
                <li>• Ray tracing matters to you</li>
                <li>• You use DLSS 4 Multi Frame Gen</li>
                <li>• Content creation / NVENC encoding</li>
                <li>• You want RTX Remix for older games</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Choose RX 9070 XT if:</h3>
              <ul className="text-[#888] space-y-1 text-sm">
                <li>• Raw rasterization performance</li>
                <li>• More VRAM (20GB vs 16GB)</li>
                <li>• Better price-to-performance</li>
                <li>• Linux / open-source driver priority</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Specs at a Glance</h2>
          <div className="overflow-x-auto border border-[#2a2a2a] rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#141414]">
                  <th className="text-left p-4 text-white font-semibold border-b border-[#2a2a2a]">Spec</th>
                  <th className="text-left p-4 text-[#00ff88] font-semibold border-b border-[#2a2a2a]">RTX 5070 Ti</th>
                  <th className="text-left p-4 text-[#ff6b6b] font-semibold border-b border-[#2a2a2a]">RX 9070 XT</th>
                </tr>
              </thead>
              <tbody className="text-[#888]">
                <tr className="border-b border-[#2a2a2a] hover:bg-[#141414]">
                  <td className="p-4">Architecture</td>
                  <td className="p-4">Blackwell 2.0</td>
                  <td className="p-4">RDNA 4</td>
                </tr>
                <tr className="border-b border-[#2a2a2a] hover:bg-[#141414]">
                  <td className="p-4">VRAM</td>
                  <td className="p-4">16GB GDDR7</td>
                  <td className="p-4 text-[#00ff88]">20GB GDDR6</td>
                </tr>
                <tr className="border-b border-[#2a2a2a] hover:bg-[#141414]">
                  <td className="p-4">TDP</td>
                  <td className="p-4">285W</td>
                  <td className="p-4 text-[#00ff88]">260W</td>
                </tr>
                <tr className="hover:bg-[#141414]">
                  <td className="p-4">MSRP</td>
                  <td className="p-4 font-bold text-white">$749</td>
                  <td className="p-4 font-bold text-white">$749</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Gaming Performance: 1440p Ultra</h2>
          <p className="text-[#888] mb-6">These cards target 1440p high-refresh gaming. Here's how they stack up in popular titles without upscaling:</p>
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
            <p className="text-[#888]"><strong className="text-white">The takeaway:</strong> In pure rasterization, the RX 9070 XT wins by 5-10%. But enable ray tracing and NVIDIA's superior RT cores and DLSS 4 flip the script completely — often by 25-35%.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Ray Tracing: NVIDIA's Moat</h2>
          <p className="text-[#888] mb-6">Ray tracing is where NVIDIA maintains its decisive advantage. The 5070 Ti's 4th-gen RT cores handle path tracing in games like Alan Wake 2 and Cyberpunk with RT Overdrive far better than AMD's 2nd-gen implementation.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">VRAM: The Quiet Advantage</h2>
          <p className="text-[#888] mb-6">20GB vs 16GB isn't just numbers on a spec sheet — it's increasingly important for texture-heavy games and future-proofing.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Price & Availability Reality Check</h2>
          <p className="text-[#888] mb-6">Both cards launched at $749 MSRP. But in early 2026, street prices tell a different story:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-[#00ff88] font-semibold mb-4">RTX 5070 Ti</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#888]">Street Price</span>
                  <span className="text-[#ff6b6b]">$829–$899</span>
                </div>
              </div>
            </div>
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-[#ff6b6b] font-semibold mb-4">RX 9070 XT</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#888]">Street Price</span>
                  <span className="text-[#00ff88]">$749–$779</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-xl p-6">
            <p className="text-white"><strong>Value winner:</strong> RX 9070 XT at MSRP. You get more VRAM, better rasterization, and easier availability.</p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-[#00ff88] rounded-xl p-6 text-center">
            <h2 className="text-black font-bold text-xl mb-2">Track Both GPUs on GPUDrip</h2>
            <p className="text-black/80 mb-4">Get instant alerts when RTX 5070 Ti or RX 9070 XT drops below MSRP at major retailers.</p>
            <Link className="inline-block bg-black text-[#00ff88] px-6 py-3 rounded-lg font-semibold hover:bg-black/80 transition-colors" href="/">Set Price Alert</Link>
          </div>
        </section>

        <section className="border-t border-[#2a2a2a] pt-8">
          <h3 className="text-white font-semibold mb-4">Related Articles</h3>
          <div className="space-y-3">
            <Link className="block text-[#888] hover:text-[#00ff88] transition-colors" href="/blog/rtx-50-series-buyers-guide">RTX 50-Series Buyer's Guide: Which GPU to Buy in 2026 →</Link>
            <Link className="block text-[#888] hover:text-[#00ff88] transition-colors" href="/blog/amd-vs-nvidia-2026">AMD vs NVIDIA in 2026: The Complete Comparison →</Link>
          </div>
        </section>
      </article>

      <footer className="border-t border-[#2a2a2a] mt-16 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#888] text-sm">
            <Link className="hover:text-[#00ff88] mx-2" href="/privacy">Privacy</Link>
            <span className="text-[#333]">|</span>
            <Link className="hover:text-[#00ff88] mx-2" href="/blog">Blog</Link>
          </p>
          <p className="text-[#888] text-sm mt-2">© 2026 GPUDrip</p>
        </div>
      </footer>
    </div>
  )
}
