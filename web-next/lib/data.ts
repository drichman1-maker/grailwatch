// ═══════════════════════════════════════════════════════════════
// GrailWatch — Data Layer (ported from Vite mockData.js)
// ═══════════════════════════════════════════════════════════════

export interface Comic {
  id: string
  title: string
  issueNumber: number
  year: number
  publisher: 'Marvel' | 'DC' | 'Image' | 'Mirage' | 'Atlas'
  thumbnailUrl?: string
  firstAppearance?: string
  keyIssue?: boolean
}

export interface Marketplace {
  id: string
  name: string
  color: string
  icon: string
}

export interface GradingCompany {
  id: string
  name: string
  fullName: string
  color: string
  cssClass: string
}

export interface Listing {
  id: string
  comicId: string
  grade: number
  gradingCompany: GradingCompany
  price: number
  marketplace: Marketplace
  listingUrl: string
  listingDate: Date
  thumbnailUrl: string
  dealLabel: string | null
}

export interface MarketSummary {
  comicId: string
  grade: number
  avgRecentSale: number
  lowestActive: number
  highestActive: number
  priceSpread: number
  trend30Day: 'up' | 'down' | 'stable'
  trendPercentage: number
  estimatedFairValue: number
  totalActiveListings: number
  recentSalesCount: number
}

export interface PricePoint {
  id: string
  date: Date
  price: number
  source: Marketplace
  grade: number
}

// ═══════════════════════════════════════════════════════════════
// Comics Database
// ═══════════════════════════════════════════════════════════════

export const COMICS: Comic[] = [
  { id: 'asm300', title: 'Amazing Spider-Man', issueNumber: 300, year: 1988, publisher: 'Marvel', firstAppearance: 'Venom', keyIssue: true },
  { id: 'batman423', title: 'Batman', issueNumber: 423, year: 1988, publisher: 'DC', firstAppearance: 'Batman', keyIssue: false },
  { id: 'hulk181', title: 'Incredible Hulk', issueNumber: 181, year: 1974, publisher: 'Marvel', firstAppearance: 'Wolverine', keyIssue: true },
  { id: 'xmen1', title: 'X-Men', issueNumber: 1, year: 1991, publisher: 'Marvel', keyIssue: false },
  { id: 'spawn1', title: 'Spawn', issueNumber: 1, year: 1992, publisher: 'Image', keyIssue: false },
  { id: 'nm98', title: 'New Mutants', issueNumber: 98, year: 1991, publisher: 'Marvel', firstAppearance: 'Deadpool', keyIssue: true },
  { id: 'uf4', title: 'Ultimate Fallout', issueNumber: 4, year: 2011, publisher: 'Marvel', firstAppearance: 'Miles Morales', keyIssue: true },
  { id: 'tasm129', title: 'Amazing Spider-Man', issueNumber: 129, year: 1974, publisher: 'Marvel', firstAppearance: 'Morbius', keyIssue: true },
  { id: 'gsxm1', title: 'Giant-Size X-Men', issueNumber: 1, year: 1975, publisher: 'Marvel', keyIssue: false },
  { id: 'af15', title: 'Amazing Fantasy', issueNumber: 15, year: 1962, publisher: 'Marvel', firstAppearance: 'Spider-Man', keyIssue: true },
  { id: 'tmnt1', title: 'Teenage Mutant Ninja Turtles', issueNumber: 1, year: 1984, publisher: 'Mirage', keyIssue: false },
  { id: 'ij1', title: 'Iron Jaw', issueNumber: 1, year: 1975, publisher: 'Atlas', keyIssue: false },
]

// ═══════════════════════════════════════════════════════════════
// Marketplaces
// ═══════════════════════════════════════════════════════════════

export const MARKETPLACES: Marketplace[] = [
  { id: 'ebay', name: 'eBay', color: '#E53238', icon: '🛒' },
  { id: 'heritage', name: 'Heritage Auctions', color: '#1B3A5C', icon: '🏛️' },
  { id: 'comiclink', name: 'ComicLink', color: '#D4A843', icon: '🔗' },
  { id: 'mycomicshop', name: 'MyComicShop', color: '#2E8B57', icon: '📚' },
  { id: 'hipcomic', name: 'HipComic', color: '#9B59B6', icon: '⭐' },
]

export const GRADES = [9.8, 9.6, 9.4, 9.2, 9.0, 8.5, 8.0]

export const GRADING_COMPANIES: GradingCompany[] = [
  { id: 'cgc', name: 'CGC', fullName: 'Certified Guaranty Company', color: '#DAA520', cssClass: 'grade-cgc' },
  { id: 'cbcs', name: 'CBCS', fullName: 'Comic Book Certification Service', color: '#4A90D9', cssClass: 'grade-cbcs' },
]

// ═══════════════════════════════════════════════════════════════
// Price Base
// ═══════════════════════════════════════════════════════════════

const BASE_PRICES: Record<string, number> = {
  asm300: 1850, batman423: 320, hulk181: 12500, xmen1: 85,
  spawn1: 280, nm98: 950, uf4: 650, tasm129: 3200,
  gsxm1: 6800, af15: 85000, ij1: 45, tmnt1: 9500,
}

const PUBLISHER_COLORS: Record<string, string> = {
  Marvel: '#E53238', DC: '#0476F2', Image: '#FF6B00',
  Mirage: '#00B894', Atlas: '#6C5CE7',
}

// ═══════════════════════════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════════════════════════

function rand(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

function daysAgo(n: number): Date {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d
}

export function getDisplayTitle(comic: Comic): string {
  return `${comic.title} #${comic.issueNumber}`
}

export function getSubtitle(comic: Comic): string {
  return `${comic.publisher} • ${comic.year}`
}

export function getPublisherColor(publisher: string): string {
  return PUBLISHER_COLORS[publisher] || '#6C5CE7'
}

export function formatPrice(price: number): string {
  return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

export function formatPriceFull(price: number): string {
  return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function formatListingAge(date: Date): string {
  const days = Math.floor((Date.now() - date.getTime()) / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} months ago`
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// ═══════════════════════════════════════════════════════════════
// Search
// ═══════════════════════════════════════════════════════════════

export function searchComics(query: string): Comic[] {
  const q = query.toLowerCase().trim()
  if (!q) return COMICS
  return COMICS.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.publisher.toLowerCase().includes(q) ||
    String(c.issueNumber).includes(q) ||
    String(c.year).includes(q)
  )
}

// ═══════════════════════════════════════════════════════════════
// Listings
// ═══════════════════════════════════════════════════════════════

export function getListings(comicId: string): Listing[] {
  const base = BASE_PRICES[comicId] || 500
  const listings: Listing[] = []

  for (let i = 0; i < 15; i++) {
    const grade = GRADES[i % GRADES.length]
    const company = GRADING_COMPANIES[i % GRADING_COMPANIES.length]
    const marketplace = MARKETPLACES[i % MARKETPLACES.length]
    const variation = rand(0.75, 1.30)
    const price = Math.round(base * (grade / 9.8) * variation)
    const age = Math.floor(rand(0, 30))

    listings.push({
      id: `${comicId}-listing-${i}`,
      comicId,
      grade,
      gradingCompany: company,
      price,
      marketplace,
      listingUrl: `https://example.com/listing/${comicId}-${i}`,
      listingDate: daysAgo(age),
      thumbnailUrl: comicId,
      dealLabel: null,
    })
  }

  // Apply deal detection
  const avg = listings.reduce((s, l) => s + l.price, 0) / listings.length
  listings.forEach(l => {
    const score = (avg - l.price) / avg
    if (score >= 0.25) l.dealLabel = 'Below Market'
    else if (score >= 0.15) l.dealLabel = 'Good Deal'
    else if (listings.filter(x => x.grade === l.grade).length <= 3) l.dealLabel = 'Rare Listing'
  })

  return listings.sort((a, b) => a.price - b.price)
}

// ═══════════════════════════════════════════════════════════════
// Market Summary
// ═══════════════════════════════════════════════════════════════

export function getMarketSummary(comicId: string, grade = 9.8): MarketSummary {
  const listings = getListings(comicId).filter(l => l.grade === grade)
  const prices = listings.map(l => l.price)
  const avg = prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : 0
  const low = prices.length ? Math.min(...prices) : 0
  const high = prices.length ? Math.max(...prices) : 0
  const trends: Array<'up' | 'down' | 'stable'> = ['up', 'down', 'stable']
  const trend = trends[Math.floor(rand(0, 3))]
  const trendPct = rand(-8, 12).toFixed(1)

  return {
    comicId, grade,
    avgRecentSale: Math.round(avg * 0.95),
    lowestActive: low,
    highestActive: high,
    priceSpread: high - low,
    trend30Day: trend,
    trendPercentage: parseFloat(trendPct),
    estimatedFairValue: Math.round(avg * 0.97),
    totalActiveListings: listings.length,
    recentSalesCount: Math.floor(rand(5, 25)),
  }
}

// ═══════════════════════════════════════════════════════════════
// Price History
// ═══════════════════════════════════════════════════════════════

export function getPriceHistory(comicId: string, grade = 9.8): PricePoint[] {
  const base = BASE_PRICES[comicId] || 500
  const points: PricePoint[] = []

  for (let i = 0; i < 20; i++) {
    const d = daysAgo((20 - i) * 5)
    const variation = rand(0.85, 1.15)
    const trendFactor = 1.0 + i * 0.005
    const price = Math.round(base * variation * trendFactor)

    points.push({
      id: `${comicId}-price-${i}`,
      date: d,
      price,
      source: MARKETPLACES[Math.floor(rand(0, MARKETPLACES.length))],
      grade,
    })
  }

  return points.sort((a, b) => a.date.getTime() - b.date.getTime())
}

// ═══════════════════════════════════════════════════════════════
// Trending
// ═══════════════════════════════════════════════════════════════

export function getTrendingComics(): Comic[] {
  return COMICS.slice(0, 6)
}

export function getHotDeals(): { listing: Listing; comic: Comic }[] {
  const deals: { listing: Listing; comic: Comic }[] = []
  COMICS.slice(0, 4).forEach(comic => {
    getListings(comic.id)
      .filter(l => l.dealLabel)
      .slice(0, 2)
      .forEach(l => deals.push({ listing: l, comic }))
  })
  return deals.slice(0, 6)
}

// ═══════════════════════════════════════════════════════════════
// Get Comic by ID
// ═══════════════════════════════════════════════════════════════

export function getComic(id: string): Comic | undefined {
  return COMICS.find(c => c.id === id)
}

export function getComics(): Comic[] {
  return COMICS
}
