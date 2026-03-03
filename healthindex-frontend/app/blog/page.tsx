'use client'

import Link from 'next/link'
import { getComics, formatPrice } from '@/lib/data'
import { Clock, ArrowRight, TrendingUp, BookOpen, Search } from 'lucide-react'
import { SearchModal, useSearchModal } from '@/components/SearchModal'

const blogPosts = [
  {
    id: 'top-10-valuable-cgc-comics',
    title: 'Top 10 Most Valuable CGC 9.8 Comics Ever Sold',
    excerpt: 'From $1.38M Spider-Man to theoretical $5M+ Amazing Fantasy #15. Record-breaking sales with complete price analysis.',
    category: 'Investment',
    date: 'March 2, 2026',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 'cgc-label-colors-guide',
    title: 'CGC Label Colors Explained: The Complete Guide',
    excerpt: 'Blue, Purple, Green, Yellow — what every CGC label color means for value, restoration status, and authentication.',
    category: 'Education',
    date: 'March 2, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'cgc-storage-display-guide',
    title: 'How to Store & Display CGC Graded Comics Safely',
    excerpt: 'BCW boxes, UV protection, climate control, and transport cases. Protect your investment with proper storage.',
    category: 'Care Guide',
    date: 'March 2, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'mcu-movie-comic-prices',
    title: 'MCU & DCU Announcements: How Movies Drive Comic Prices',
    excerpt: 'From 206% Star-Lord gains to Moon Knight doubling overnight. Complete strategy for movie-driven speculation.',
    category: 'Investment',
    date: 'March 2, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'bronze-age-comics-guide',
    title: 'Undervalued Bronze Age Comics Worth Grading 2024',
    excerpt: 'Turn $90 raw copies into $40,000 slabs. Blade, Ghost Rider, Moon Knight, Wolverine first appearances.',
    category: 'Investment',
    date: 'March 2, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'history-comic-grading',
    title: 'History of Comic Book Grading: How CGC Transformed the Hobby',
    excerpt: 'From the Wild West era to $6M Superman #1. Complete history since January 1, 2000.',
    category: 'History',
    date: 'March 2, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'cgc-grading-costs-2026',
    title: 'How Much Does It Cost to Get a Comic Book Graded in 2026',
    excerpt: 'Complete CGC tier breakdown with updated 2026 pricing. From $27 Modern Bulk to 4% FMV Unlimited Value.',
    category: 'Grading',
    date: 'March 1, 2026',
    readTime: '8 min read',
    featured: false,
  },
  // Existing articles
  {
    id: 'best-comics-to-grade-2026',
    title: 'Best Comic Books to Grade and Sell for Profit in 2026',
    excerpt: 'From $9M Superman #1 to Modern Age sleepers. ROI analysis and grading strategy for maximum profit.',
    category: 'Investment',
    date: 'March 1, 2026',
    readTime: '15 min read',
    featured: false,
  },
  {
    id: 'cgc-vs-cbcs-pgx',
    title: 'CGC vs CBCS vs PGX: Which Grading Company Should You Choose?',
    excerpt: 'Side-by-side comparison of major grading companies. Turnaround, pricing, resale value, and more.',
    category: 'Grading',
    date: 'March 1, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'first-appearance-premium',
    title: 'Understanding First Appearance Premiums in Comic Collecting',
    excerpt: 'Why first appearances command higher prices and how to identify undervalued keys.',
    category: 'Education',
    date: 'March 1, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'golden-age-vs-silver-age',
    title: 'Golden Age vs Silver Age Comics: Investment Comparison',
    excerpt: 'Which era offers better ROI? Historical analysis and future outlook for both markets.',
    category: 'Investment',
    date: 'March 1, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'raw-vs-graded',
    title: 'Raw vs Graded Comics: When to Submit to CGC',
    excerpt: 'Cost-benefit analysis of grading. Which books are worth slabbing and which to keep raw.',
    category: 'Grading',
    date: 'March 1, 2026',
    readTime: '10 min read',
    featured: false,
  },
]

export default function BlogPage() {
  const { isOpen, open, close } = useSearchModal()
  const featured = blogPosts.find(p => p.featured)
  const posts = blogPosts.filter(p => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <SearchModal isOpen={isOpen} onClose={close} />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gw-accent/20 mb-6">
          <BookOpen className="w-4 h-4 text-gw-accent" />
          <span className="text-sm text-gw-accent">Collector Resources</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">GrailWatch Guides</h1>
        <p className="text-xl text-gw-text-secondary max-w-2xl mx-auto mb-8">
          Expert insights on grading, investing, and navigating the comic book market.
        </p>
        
        {/* Search Bar */}
        <button
          onClick={open}
          className="flex items-center gap-3 mx-auto px-4 py-3 bg-gw-card border border-gw-border rounded-xl text-gw-text-secondary hover:border-gw-accent/50 transition-colors max-w-lg w-full"
        >
          <Search className="w-5 h-5" />
          <span className="flex-1 text-left">Search guides...</span>
          <kbd className="px-2 py-1 text-xs bg-gw-bg-secondary rounded border border-gw-border">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Featured Post */}
      {featured && (
        <div className="mb-12">
          <Link href={`/blog/${featured.id}`} className="block group">
            <div className="glass-card overflow-hidden hover:border-gw-accent/50 transition-colors">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-gw-accent/20 to-gw-gold/20 flex items-center justify-center">
                  <div className="text-8xl">📚</div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-sm rounded-full">{featured.category}</span>
                    <span className="text-gw-text-tertiary text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gw-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gw-text-secondary mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-gw-accent">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Post Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={post.date === 'Coming Soon' ? '#' : `/blog/${post.id}`} className="block group">
            <div className={`glass-card p-6 h-full hover:border-gw-accent/30 transition-colors ${post.date === 'Coming Soon' ? 'opacity-60' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-1 bg-gw-card text-gw-text-secondary text-xs rounded">
                  {post.category}
                </span>
                {post.date === 'Coming Soon' && (
                  <span className="text-xs text-gw-text-tertiary">Soon</span>
                )}
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-gw-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gw-text-secondary text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gw-text-tertiary">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 glass-card p-8 text-center">
        <TrendingUp className="w-10 h-10 text-gw-accent mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-3">Stay Ahead of the Market</h2>
        <p className="text-gw-text-secondary mb-6 max-w-md mx-auto">
          Get weekly market analysis, grading tips, and deal alerts delivered to your inbox.
        </p>
        <div className="flex max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder=" Enter your email"
            className="flex-1 bg-gw-card border border-gw-border rounded-xl px-4 py-3 text-white placeholder-gw-text-tertiary focus:outline-none focus:border-gw-accent"
          />
          <button className="px-6 py-3 bg-gw-accent text-black font-semibold rounded-xl hover:bg-white transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
