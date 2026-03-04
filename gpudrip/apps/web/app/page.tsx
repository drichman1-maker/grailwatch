import Link from 'next/link';

export const metadata = {
  title: "GPUDrip — Track GPU Prices & Find the Best Deals",
  description: "Real-time GPU price tracking from Amazon, Best Buy, Newegg, and more. Get alerts when prices drop.",
};

const gpus = [
  { name: "NVIDIA RTX 5090", price: "$1,999", change: "-5%", good: true },
  { name: "NVIDIA RTX 5080", price: "$999", change: "-3%", good: true },
  { name: "NVIDIA RTX 5070 Ti", price: "$749", change: "0%", good: true },
  { name: "NVIDIA RTX 5070", price: "$549", change: "+2%", good: false },
  { name: "AMD RX 9070 XT", price: "$699", change: "-8%", good: true },
  { name: "AMD RX 9070", price: "$549", change: "-4%", good: true },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-[#2a2a2a] bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00ff88] to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">GPUDrip</span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/" className="text-sm text-[#00ff88]">GPUs</Link>
              <Link href="/blog" className="text-sm text-[#888] hover:text-white transition-colors">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Track GPU Prices in <span className="text-[#00ff88]">Real-Time</span>
          </h1>
          <p className="text-[#888] text-xl max-w-2xl mx-auto">
            Compare prices across Amazon, Best Buy, Newegg, and B&H. Never overpay for a graphics card again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gpus.map((gpu) => (
            <div key={gpu.name} className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00ff88]/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{gpu.name}</h3>
                {gpu.good && (
                  <span className="text-xs bg-[#00ff88]/10 text-[#00ff88] px-2 py-1 rounded">In Stock</span>
                )}
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-white">{gpu.price}</span>
                <span className={`text-sm ${gpu.change.startsWith('-') ? 'text-[#00ff88]' : gpu.change.startsWith('+') ? 'text-red-400' : 'text-[#888]'}`}>
                  {gpu.change}
                </span>
              </div>
              <button className="mt-4 w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-medium py-2 rounded-lg transition-colors">
                View Prices
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want price drop alerts?</h2>
          <p className="text-[#888] mb-6">Get notified when your target GPU goes on sale.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white placeholder-[#666] focus:outline-none focus:border-[#00ff88]"
            />
            <button className="bg-[#00ff88] hover:bg-[#00dd77] text-black font-medium px-6 py-2 rounded-lg transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#2a2a2a] mt-16 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#888] text-sm">
            <Link href="/privacy" className="hover:text-[#00ff88] mx-2">Privacy</Link>
            <span className="text-[#333]">|</span>
            <Link href="/blog" className="hover:text-[#00ff88] mx-2">Blog</Link>
          </p>
          <p className="text-[#888] text-sm mt-2">© 2026 GPUDrip</p>
        </div>
      </footer>
    </div>
  );
}
