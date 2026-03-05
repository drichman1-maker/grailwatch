import Link from 'next/link';
import { BlogCard } from '@/components/blog-card';

export const metadata = {
  title: "Blog — GPUDrip",
  description: "GPU buying guides, price tracking tips, and market insights.",
};

export const posts = [
  {
    id: "best-budget-gpu-2026",
    title: "Best Budget GPU 2026: Best Graphics Cards Under $400",
    excerpt: "You don't need to spend $1,000 to get great gaming performance. We tested every budget GPU from $199 to $399.",
    date: "March 17, 2026",
    readTime: "8 min read"
  },
  {
    id: "best-gpu-video-editing-2026",
    title: "Best GPU for Video Editing in 2026",
    excerpt: "From 4K timeline scrubbing to exports, we rank the best GPUs for Premiere Pro, DaVinci Resolve, and After Effects.",
    date: "March 10, 2026",
    readTime: "7 min read"
  },
  {
    id: "gpu-power-supply-guide",
    title: "GPU Power Supply Guide: What Wattage Do You Need?",
    excerpt: "Don't blow up your PC. We break down PSU requirements for every GPU from the RTX 5060 to the RTX 5090.",
    date: "March 5, 2026",
    readTime: "6 min read"
  },
  {
    id: "best-gpu-4k-gaming-2026",
    title: "Best GPU for 4K Gaming 2026",
    excerpt: "Ultra settings at 3840×2160 require serious firepower. These are the only GPUs that can handle it.",
    date: "March 1, 2026",
    readTime: "9 min read"
  },
  {
    id: "rtx-5070-ti-vs-rx-9070-xt",
    title: "RTX 5070 Ti vs RX 9070 XT: The Ultimate Showdown",
    excerpt: "Two of the hottest GPUs of 2026 go head-to-head. We test raster, ray tracing, and value.",
    date: "Feb 25, 2026",
    readTime: "8 min read"
  },
  {
    id: "rtx-50-series-buyers-guide",
    title: "RTX 50-Series Buyer's Guide: Which GPU to Buy in 2026",
    excerpt: "Breaking down the RTX 5090, 5080, 5070 Ti, and 5070 — performance, pricing, and availability.",
    date: "Feb 20, 2026",
    readTime: "8 min read"
  },
  {
    id: "gpu-shortage-explained",
    title: "Why Are RTX 5090 & 5080 Still Out of Stock?",
    excerpt: "Supply chain issues, scalpers, and demand — what's really causing the GPU shortage.",
    date: "Feb 15, 2026",
    readTime: "5 min read"
  },
  {
    id: "amd-vs-nvidia-2026",
    title: "AMD vs NVIDIA in 2026: RX 9070 XT vs RTX 5070 Ti",
    excerpt: "Head-to-head comparison of the mid-range battle. Which GPU offers better value?",
    date: "Feb 10, 2026",
    readTime: "6 min read"
  }
];

export default function Blog() {
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
              <Link href="/" className="text-sm text-[#888] hover:text-white transition-colors">GPUs</Link>
              <Link href="/blog" className="text-sm text-[#00ff88]">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-[#888] text-lg mb-12">GPU buying guides, price tracking tips, and market insights.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00ff88]/30 transition-all">
              <div className="flex items-center gap-3 text-sm text-[#888] mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 hover:text-[#00ff88] transition-colors">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-[#888]">{post.excerpt}</p>
            </article>
          ))}
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
