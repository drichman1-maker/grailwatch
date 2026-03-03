// Blog posts data for search indexing
// Extracted from app/blog/page.tsx

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
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

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}
