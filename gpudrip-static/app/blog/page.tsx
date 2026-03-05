import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Blog — GPU Buying Guides & Price Tracking Tips',
    description: 'GPU buying guides, price tracking tips, and market insights.',
}

export const dynamic = 'force-static'

const posts = [
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
]

export default function BlogPage() {
    return (
        <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
            <div className="container" style={{ padding: '48px 24px' }}>
                <Link href="/" style={{ color: '#888', fontSize: 14, marginBottom: 32, display: 'inline-block' }}>
                    ← Back to home
                </Link>

                <h1 style={{ 
                    fontSize: 'clamp(2rem, 5vw, 3rem)', 
                    fontWeight: 800, 
                    marginBottom: 12 
                }}>
                    Blog
                </h1>
                <p style={{ color: '#888', fontSize: 18, marginBottom: 48, maxWidth: 600 }}>
                    GPU buying guides, price tracking tips, and market insights.
                </p>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
                    gap: 24 
                }}>
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            style={{
                                display: 'block',
                                background: '#141414',
                                border: '1px solid #2a2a2a',
                                borderRadius: 12,
                                padding: 24,
                                transition: 'all 0.2s',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#00ff88'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#2a2a2a'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: 8, 
                                fontSize: 12, 
                                color: '#888',
                                marginBottom: 12,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 style={{ 
                                fontSize: 18, 
                                fontWeight: 700, 
                                marginBottom: 12,
                                lineHeight: 1.4
                            }}>
                                {post.title}
                            </h2>
                            <p style={{ color: '#888', fontSize: 14, lineHeight: 1.6 }}>
                                {post.excerpt}
                            </p>
                            <div style={{ 
                                marginTop: 16, 
                                color: '#00ff88', 
                                fontSize: 14,
                                fontWeight: 600
                            }}>
                                Read more →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}