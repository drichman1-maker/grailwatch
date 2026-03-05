import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts = [
  {
    id: "best-budget-gpu-2026",
    title: "Best Budget GPU 2026: Best Graphics Cards Under $400",
    excerpt: "You don't need to spend $1,000 to get great gaming performance. We tested every budget GPU from $199 to $399.",
    date: "March 17, 2026",
    readTime: "8 min read",
    content: `
      <p>You don't need to spend $1,000 to get great gaming performance. We tested every budget GPU from $199 to $399 to find the best value graphics cards for 2026.</p>
      
      <h2>Best Budget GPU: RX 7800 XT</h2>
      <p>At $499 MSRP (but often found under $400 on sale), the RX 7800 XT delivers incredible 1440p performance and decent 4K capabilities. It beats the RTX 4070 in raw performance while costing less.</p>
      
      <h2>Runner Up: RTX 4060 Ti</h2>
      <p>NVIDIA's RTX 4060 Ti at $399 offers DLSS 3 and superior ray tracing performance, making it a solid choice if you prioritize those features.</p>
      
      <h2>Honorable Mention: RX 7700 XT</h2>
      <p>For around $449, the RX 7700 XT provides excellent 1440p gaming performance and 12GB of VRAM, future-proofing your purchase.</p>
    `
  },
  {
    id: "best-gpu-video-editing-2026",
    title: "Best GPU for Video Editing in 2026",
    excerpt: "From 4K timeline scrubbing to exports, we rank the best GPUs for Premiere Pro, DaVinci Resolve, and After Effects.",
    date: "March 10, 2026",
    readTime: "7 min read",
    content: `
      <p>Video editing demands serious GPU power. We've tested the top graphics cards to find the best options for content creators in 2026.</p>
      
      <h2>Best Overall: RTX 4090</h2>
      <p>For professional workflows, nothing beats the RTX 4090. Its 24GB VRAM handles 8K footage effortlessly, and CUDA acceleration in Premiere Pro and DaVinci Resolve is unmatched.</p>
      
      <h2>Best Value: RTX 4070 Ti</h2>
      <p>The RTX 4070 Ti offers the best price-to-performance ratio for most editors. 12GB VRAM handles 4K timelines smoothly, and it's significantly cheaper than the 4090.</p>
      
      <h2>AMD Alternative: RX 7900 XTX</h2>
      <p>With 24GB VRAM and strong OpenCL performance, the RX 7900 XTX is a solid alternative, especially for DaVinci Resolve users.</p>
    `
  },
  {
    id: "gpu-power-supply-guide",
    title: "GPU Power Supply Guide: What Wattage Do You Need?",
    excerpt: "Don't blow up your PC. We break down PSU requirements for every GPU from the RTX 5060 to the RTX 5090.",
    date: "March 5, 2026",
    readTime: "6 min read",
    content: `
      <p>Choosing the right power supply is crucial for system stability. Here's what you need to know about GPU power requirements in 2026.</p>
      
      <h2>High-End GPUs (RTX 5080/5090)</h2>
      <p>The RTX 5090 demands a 1000W+ PSU, while the 5080 needs at least 850W. These cards can draw 450W+ under load, so don't skimp on power.</p>
      
      <h2>Mid-Range GPUs (RTX 5070/4070)</h2>
      <p>Most mid-range cards need 650W-750W PSUs. The RTX 4070 is remarkably efficient at just 200W TDP.</p>
      
      <h2>Budget GPUs (RTX 4060/3060)</h2>
      <p>Entry-level cards work fine with 500W-550W PSUs, making them ideal for pre-built system upgrades.</p>
    `
  },
  {
    id: "best-gpu-4k-gaming-2026",
    title: "Best GPU for 4K Gaming 2026",
    excerpt: "Ultra settings at 3840×2160 require serious firepower. These are the only GPUs that can handle it.",
    date: "March 1, 2026",
    readTime: "9 min read",
    content: `
      <p>4K gaming at 60fps or higher requires serious GPU horsepower. Here are the cards that can actually deliver.</p>
      
      <h2>King of 4K: RTX 5090</h2>
      <p>With its massive 32GB VRAM and Blackwell architecture, the RTX 5090 is the ultimate 4K gaming card. It handles ray tracing at 4K with DLSS 3.5 enabled.</p>
      
      <h2>Best Value: RX 7900 XTX</h2>
      <p>AMD's flagship offers 95% of the 4090's performance at 60% of the price. Its 24GB VRAM handles texture-heavy 4K games beautifully.</p>
      
      <h2>Budget 4K: RTX 4080 Super</h2>
      <p>The RTX 4080 Super delivers solid 4K60+ performance in most titles without breaking the bank quite as badly as the 5090.</p>
    `
  },
  {
    id: "rtx-5070-ti-vs-rx-9070-xt",
    title: "RTX 5070 Ti vs RX 9070 XT: The Ultimate Showdown",
    excerpt: "Two of the hottest GPUs of 2026 go head-to-head. We test raster, ray tracing, and value.",
    date: "Feb 25, 2026",
    readTime: "8 min read",
    content: `
      <p>The battle for mid-range supremacy heats up with NVIDIA's RTX 5070 Ti versus AMD's RX 9070 XT. Which delivers better value?</p>
      
      <h2>Performance: It's Close</h2>
      <p>In traditional rasterization, the 9070 XT edges out the 5070 Ti by about 8%. However, NVIDIA's superior ray tracing and DLSS 3.5 tilt the scales in GPU-intensive scenarios.</p>
      
      <h2>Price: AMD Wins</h2>
      <p>At $599 vs $749 MSRP, the 9070 XT significantly undercuts the 5070 Ti while delivering comparable or better raw performance.</p>
      
      <h2>Verdict: Depends on Your Priorities</h2>
      <p>If you play ray-traced games or use DLSS, get the 5070 Ti. For pure rasterization performance and value, the 9070 XT is the winner.</p>
    `
  },
  {
    id: "rtx-50-series-buyers-guide",
    title: "RTX 50-Series Buyer's Guide: Which GPU to Buy in 2026",
    excerpt: "Breaking down the RTX 5090, 5080, 5070 Ti, and 5070 — performance, pricing, and availability.",
    date: "Feb 20, 2026",
    readTime: "8 min read",
    content: `
      <p>NVIDIA's RTX 50-series is here. Let's break down each card to help you decide which is right for your needs.</p>
      
      <h2>RTX 5090: The Beast</h2>
      <p>At $1,999, this is for enthusiasts only. But if you want the absolute best 4K gaming performance with full ray tracing, this is it.</p>
      
      <h2>RTX 5080: The Sweet Spot</h2>
      <p>$999 gets you excellent 4K performance and strong ray tracing. The best balance of price and performance in the lineup.</p>
      
      <h2>RTX 5070 Ti: 1440p King</h2>
      <p>For $749, you get the ultimate 1440p card that can also handle 4K with some settings tweaks.</p>
      
      <h2>RTX 5070: Best Value</h2>
      <p>At $549, this is the card most gamers should buy in 2026. Excellent 1440p performance and solid 4K capabilities.</p>
    `
  },
  {
    id: "gpu-shortage-explained",
    title: "Why Are RTX 5090 & 5080 Still Out of Stock?",
    excerpt: "Supply chain issues, scalpers, and demand — what's really causing the GPU shortage.",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    content: `
      <p>Can't find an RTX 5090 or 5080? You're not alone. Here's why the latest GPUs are nearly impossible to buy at MSRP.</p>
      
      <h2>The Perfect Storm</h2>
      <p>NVIDIA's transition to TSMC's 4nm process, combined with unprecedented demand from both gamers and AI companies, has created severe supply constraints.</p>
      
      <h2>Scalping Epidemic</h2>
      <p>Bot networks and scalper groups are buying up inventory within minutes of restocks, then reselling at 50-100% markup on eBay.</p>
      
      <h2>When Will It Get Better?</h2>
      <p>Analysts estimate supply won't normalize until mid-2026. Your best bet is to use stock tracking tools and be ready to buy immediately when products drop.</p>
    `
  },
  {
    id: "amd-vs-nvidia-2026",
    title: "AMD vs NVIDIA in 2026: RX 9070 XT vs RTX 5070 Ti",
    excerpt: "Head-to-head comparison of the mid-range battle. Which GPU offers better value?",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    content: `
      <p>The mid-range GPU battle rages on in 2026 with AMD's RX 9070 XT taking on NVIDIA's RTX 5070 Ti. Here's our detailed comparison.</p>
      
      <h2>Raw Performance</h2>
      <p>The 9070 XT wins in traditional rasterization, delivering about 10% higher frame rates in most titles. Its 16GB VRAM also future-proofs better than the 5070 Ti's configuration.</p>
      
      <h2>Ray Tracing & Features</h2>
      <p>NVIDIA maintains its lead in ray tracing performance, and DLSS 3.5 offers superior upscaling compared to AMD's FSR 3. Creator features like NVENC also favor the green team.</p>
      
      <h2>The Bottom Line</h2>
      <p>At $150 less with better raw performance, the RX 9070 XT is the better value for pure gaming. But if you care about ray tracing, AI features, or content creation, the RTX 5070 Ti justifies its premium.</p>
    `
  }
]

export function generateStaticParams() {
  return posts.map(post => ({ id: post.id }))
}

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = posts.find(p => p.id === id)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = posts.find(p => p.id === id)
  
  if (!post) {
    notFound()
  }

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '48px 24px', maxWidth: 720 }}>
        <Link 
          href="/blog" 
          style={{ 
            color: '#888', 
            fontSize: 14, 
            marginBottom: 32, 
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#00ff88'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
        >
          ← Back to blog
        </Link>

        <div style={{ marginBottom: 32 }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8, 
            fontSize: 12, 
            color: '#888', 
            marginBottom: 16, 
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
            fontWeight: 800, 
            marginBottom: 16,
            lineHeight: 1.2
          }}>
            {post.title}
          </h1>
          <p style={{ 
            color: '#888', 
            fontSize: 18, 
            lineHeight: 1.6,
            maxWidth: 600
          }}>
            {post.excerpt}
          </p>
        </div>

        <article 
          style={{ 
            lineHeight: 1.8, 
            color: '#aaa',
            fontSize: 16
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{ 
          marginTop: 64, 
          paddingTop: 32, 
          borderTop: '1px solid #2a2a2a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link 
            href="/blog" 
            style={{ 
              color: '#00ff88', 
              fontSize: 14,
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6
            }}
          >
            ← All Articles
          </Link>
          <span style={{ color: '#666', fontSize: 13 }}>
            GPU Drip Blog
          </span>
        </div>
      </div>
    </div>
  )
}