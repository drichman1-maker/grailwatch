// ═══════════════════════════════════════════════════════════════
// GrailWatch — Data Layer (Extended)
// ═══════════════════════════════════════════════════════════════

export interface Comic {
  id: string
  title: string
  issueNumber: number
  year: number
  publisher: 'Marvel' | 'DC' | 'Image' | 'Mirage' | 'Atlas' | 'Dark Horse' | 'IDW'
  thumbnailUrl?: string
  firstAppearance?: string
  keyIssue?: boolean
  cvScore?: number
  notes?: string
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
// Comics Database - Extended with more key issues
// ═══════════════════════════════════════════════════════════════

export const COMICS: Comic[] = [
  // Golden Age
  { id: 'af15', title: 'Amazing Fantasy', issueNumber: 15, year: 1962, publisher: 'Marvel', firstAppearance: 'Spider-Man', keyIssue: true, cvScore: 50000, notes: 'First appearance Spider-Man' },
  { id: 'detective1', title: 'Detective Comics', issueNumber: 27, year: 1939, publisher: 'DC', firstAppearance: 'Batman', keyIssue: true, cvScore: 150000, notes: 'First appearance Batman' },
  { id: 'action1', title: 'Action Comics', issueNumber: 1, year: 1938, publisher: 'DC', firstAppearance: 'Superman', keyIssue: true, cvScore: 300000, notes: 'First appearance Superman' },
  { id: 'marvel1', title: 'Marvel Comics', issueNumber: 1, year: 1939, publisher: 'Marvel', firstAppearance: 'Human Torch', keyIssue: true, cvScore: 35000, notes: 'First Timely Comics' },
  
  // Silver Age - Marvel
  { id: 'ff1', title: 'Fantastic Four', issueNumber: 1, year: 1961, publisher: 'Marvel', firstAppearance: 'Fantastic Four', keyIssue: true, cvScore: 25000, notes: 'First appearance FF, Start of Marvel Age' },
  { id: 'asm300', title: 'Amazing Spider-Man', issueNumber: 300, year: 1988, publisher: 'Marvel', firstAppearance: 'Venom', keyIssue: true, cvScore: 5000 },
  { id: 'hulk181', title: 'Incredible Hulk', issueNumber: 181, year: 1974, publisher: 'Marvel', firstAppearance: 'Wolverine', keyIssue: true, cvScore: 8000 },
  { id: 'tasm129', title: 'Amazing Spider-Man', issueNumber: 129, year: 1974, publisher: 'Marvel', firstAppearance: 'Morbius', keyIssue: true, cvScore: 3500 },
  { id: 'xmen1', title: 'X-Men', issueNumber: 1, year: 1991, publisher: 'Marvel', keyIssue: false, cvScore: 2500 },
  { id: 'nm98', title: 'New Mutants', issueNumber: 98, year: 1991, publisher: 'Marvel', firstAppearance: 'Deadpool', keyIssue: true, cvScore: 3000 },
  { id: 'uf4', title: 'Ultimate Fallout', issueNumber: 4, year: 2011, publisher: 'Marvel', firstAppearance: 'Miles Morales', keyIssue: true, cvScore: 2000 },
  { id: 'gsxm1', title: 'Giant-Size X-Men', issueNumber: 1, year: 1975, publisher: 'Marvel', keyIssue: false, cvScore: 4000 },
  
  // Silver Age - DC
  { id: 'flash123', title: 'The Flash', issueNumber: 123, year: 1959, publisher: 'DC', firstAppearance: 'Kid Flash', keyIssue: true, cvScore: 8000 },
  { id: 'greenlantern1', title: 'Showcase', issueNumber: 22, year: 1959, publisher: 'DC', firstAppearance: 'Hal Jordan', keyIssue: true, cvScore: 5000 },
  { id: 'batman423', title: 'Batman', issueNumber: 423, year: 1988, publisher: 'DC', keyIssue: false, cvScore: 800 },
  { id: 'batman1', title: 'Batman', issueNumber: 1, year: 1940, publisher: 'DC', keyIssue: true, cvScore: 45000 },
  { id: 'justice1', title: 'Justice League of America', issueNumber: 1, year: 1960, publisher: 'DC', keyIssue: true, cvScore: 6000 },
  
  // Image/Independent
  { id: 'spawn1', title: 'Spawn', issueNumber: 1, year: 1992, publisher: 'Image', keyIssue: false, cvScore: 1200 },
  { id: 'tmnt1', title: 'Teenage Mutant Ninja Turtles', issueNumber: 1, year: 1984, publisher: 'Mirage', keyIssue: false, cvScore: 3500 },
  { id: 'walk1', title: 'Walking Dead', issueNumber: 1, year: 2003, publisher: 'Image', keyIssue: true, cvScore: 1500 },
  { id: 'invincible1', title: 'Invincible', issueNumber: 1, year: 2002, publisher: 'Image', keyIssue: false, cvScore: 800 },
  
  // Modern Key Issues
  { id: 'allstar1', title: 'All-Star', issueNumber: 1, year: 2005, publisher: 'DC', keyIssue: false, cvScore: 600 },
  { id: 'captainamerica1', title: 'Captain America', issueNumber: 1, year: 1968, publisher: 'Marvel', keyIssue: true, cvScore: 4000 },
  { id: 'thanos1', title: 'Thanos Quest', issueNumber: 1, year: 1990, publisher: 'Marvel', keyIssue: false, cvScore: 500 },
  { id: 'death1', title: 'The Death of Superman', issueNumber: 1, year: 1992, publisher: 'DC', keyIssue: true, cvScore: 1200 },
  { id: 'wolverine1', title: 'Wolverine', issueNumber: 1, year: 1982, publisher: 'Marvel', keyIssue: true, cvScore: 3000 },
  { id: 'moonknight1', title: 'Moon Knight', issueNumber: 1, year: 1980, publisher: 'Marvel', keyIssue: false, cvScore: 1200 },
  
  // Dark Horse & IDW
  { id: 'hellboy1', title: 'Hellboy', issueNumber: 1, year: 1993, publisher: 'Dark Horse', firstAppearance: 'Hellboy', keyIssue: true, cvScore: 800 },
  { id: 'tmnt(idw)1', title: 'Teenage Mutant Ninja Turtles', issueNumber: 1, year: 2011, publisher: 'IDW', keyIssue: true, cvScore: 400 },
  { id: 'transformers1', title: 'Transformers', issueNumber: 1, year: 1984, publisher: 'IDW', keyIssue: false, cvScore: 600 },
  
  // Additional Marvel keys
  { id: 'ironman1', title: 'Tales of Suspense', issueNumber: 39, year: 1963, publisher: 'Marvel', firstAppearance: 'Iron Man', keyIssue: true, cvScore: 12000 },
  { id: 'captain1', title: 'Captain America Comics', issueNumber: 1, year: 1941, publisher: 'Marvel', firstAppearance: 'Captain America', keyIssue: true, cvScore: 35000 },
  { id: 'sub1', title: 'Sub-Mariner Comics', issueNumber: 1, year: 1939, publisher: 'Marvel', firstAppearance: 'Sub-Mariner', keyIssue: true, cvScore: 18000 },
  { id: 'daredevil1', title: 'Daredevil', issueNumber: 1, year: 1964, publisher: 'Marvel', keyIssue: true, cvScore: 3500 },
  { id: 'hulk1', title: 'Incredible Hulk', issueNumber: 1, year: 1962, publisher: 'Marvel', keyIssue: true, cvScore: 8000 },
  { id: 'drstrange1', title: 'Strange Tales', issueNumber: 110, year: 1963, publisher: 'Marvel', firstAppearance: 'Doctor Strange', keyIssue: true, cvScore: 3000 },
  { id: 'silver surfer', title: 'Fantastic Four', issueNumber: 48, year: 1966, publisher: 'Marvel', firstAppearance: 'Silver Surfer', keyIssue: true, cvScore: 4500 },
  { id: 'panther1', title: 'Fantastic Four', issueNumber: 52, year: 1966, publisher: 'Marvel', firstAppearance: 'Black Panther', keyIssue: true, cvScore: 4000 },
  { id: 'vision1', title: 'The Vision and Scarlet Witch', issueNumber: 1, year: 1985, publisher: 'Marvel', keyIssue: false, cvScore: 800 },
  { id: 'gomurr', title: 'Guardians of the Galaxy', issueNumber: 1, year: 1990, publisher: 'Marvel', keyIssue: false, cvScore: 400 },
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
  { id: 'auction', name: 'Heritage Auctions', color: '#1B3A5C', icon: '🔨' },
]

export const GRADES = [10, 9.9, 9.8, 9.6, 9.4, 9.2, 9.0, 8.5, 8.0, 7.5, 7.0]

export const GRADING_COMPANIES: GradingCompany[] = [
  { id: 'cgc', name: 'CGC', fullName: 'Certified Guaranty Company', color: '#DAA520', cssClass: 'grade-cgc' },
  { id: 'cbcs', name: 'CBCS', fullName: 'Comic Book Certification Service', color: '#4A90D9', cssClass: 'grade-cbcs' },
  { id: 'pgx', name: 'PGX', fullName: 'Professional Grading Experts', color: '#8B4513', cssClass: 'grade-pgx' },
]

// ═══════════════════════════════════════════════════════════════
// Price Base (more realistic pricing for each comic)
// ═══════════════════════════════════════════════════════════════

const BASE_PRICES: Record<string, number> = {
  // Golden Age
  af15: 150000, detective1: 200000, action1: 450000, marvel1: 40000,
  // Silver Age Marvel
  ff1: 35000, asm300: 3200, hulk181: 12500, tasm129: 3800, xmen1: 150, 
  nm98: 1100, uf4: 450, gsxm1: 7500,
  // Silver Age DC
  flash123: 9000, greenlantern1: 6500, batman423: 400, batman1: 65000, justice1: 7000,
  // Image/Independent
  spawn1: 350, tmnt1: 9500, walk1: 600, invincible1: 350,
  // Modern
  allstar1: 250, captainamerica1: 5000, thanos1: 150, death1: 500, wolverine1: 3500, 
  moonknight1: 600,
  // Dark Horse & IDW
  hellboy1: 400, 'tmnt(idw)1': 150, transformers1: 300,
  // Additional Marvel
  ironman1: 18000, captain1: 50000, sub1: 22000, daredevil1: 4500, hulk1: 12000, 
  drstrange1: 3500, 'silver surfer': 5500, panther1: 5000, vision1: 300, gomurr: 80,
}

const PUBLISHER_COLORS: Record<string, string> = {
  Marvel: '#E53238', DC: '#0476F2', Image: '#FF6B00',
  Mirage: '#00B894', Atlas: '#6C5CE7', 'Dark Horse': '#CC4400', IDW: '#0066CC',
}

// Watchlist (in-memory for demo)
let watchlist: string[] = []

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
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// ═══════════════════════════════════════════════════════════════
// Search & Filters
// ═══════════════════════════════════════════════════════════════

export function searchComics(query: string): Comic[] {
  const q = query.toLowerCase().trim()
  if (!q) return COMICS
  return COMICS.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.publisher.toLowerCase().includes(q) ||
    String(c.issueNumber).includes(q) ||
    String(c.year).includes(q) ||
    (c.firstAppearance && c.firstAppearance.toLowerCase().includes(q))
  )
}

export function filterComicsByPublisher(publisher: string): Comic[] {
  if (publisher === 'all') return COMICS
  return COMICS.filter(c => c.publisher === publisher)
}

export function filterComicsByKeyIssue(keyOnly: boolean): Comic[] {
  if (!keyOnly) return COMICS
  return COMICS.filter(c => c.keyIssue)
}

export function filterComicsByGrade(grade: number): Comic[] {
  return COMICS // Would filter based on available grades
}

export function sortComicsBy(sortBy: 'title' | 'year' | 'cvScore'): Comic[] {
  const sorted = [...COMICS]
  if (sortBy === 'title') {
    sorted.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy === 'year') {
    sorted.sort((a, b) => a.year - b.year)
  } else if (sortBy === 'cvScore') {
    sorted.sort((a, b) => (b.cvScore || 0) - (a.cvScore || 0))
  }
  return sorted
}

// ═══════════════════════════════════════════════════════════════
// Watchlist
// ═══════════════════════════════════════════════════════════════

export function getWatchlist(): Comic[] {
  return watchlist.map(id => getComic(id)).filter((c): c is Comic => c !== undefined)
}

export function addToWatchlist(comicId: string): void {
  if (!watchlist.includes(comicId)) {
    watchlist.push(comicId)
  }
}

export function removeFromWatchlist(comicId: string): void {
  watchlist = watchlist.filter(id => id !== comicId)
}

export function isInWatchlist(comicId: string): boolean {
  return watchlist.includes(comicId)
}

export function toggleWatchlist(comicId: string): boolean {
  if (watchlist.includes(comicId)) {
    watchlist = watchlist.filter(id => id !== comicId)
    return false
  } else {
    watchlist.push(comicId)
    return true
  }
}

// ═══════════════════════════════════════════════════════════════
// Listings
// ═══════════════════════════════════════════════════════════════

export function getListings(comicId: string): Listing[] {
  const base = BASE_PRICES[comicId] || 500
  const listings: Listing[] = []

  for (let i = 0; i < 20; i++) {
    const grade = GRADES[Math.floor(rand(0, GRADES.length))]
    const company = GRADING_COMPANIES[Math.floor(rand(0, GRADING_COMPANIES.length))]
    const marketplace = MARKETPLACES[Math.floor(rand(0, MARKETPLACES.length))]
    const variation = rand(0.70, 1.35)
    const price = Math.round(base * (grade / 10) * variation)
    const age = Math.floor(rand(0, 60))

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
    if (score >= 0.30) l.dealLabel = 'Below Market'
    else if (score >= 0.18) l.dealLabel = 'Good Deal'
    else if (listings.filter(x => x.grade === l.grade).length <= 2) l.dealLabel = 'Rare Listing'
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
  const trendPct = rand(-10, 15).toFixed(1)

  return {
    comicId, grade,
    avgRecentSale: Math.round(avg * 0.92),
    lowestActive: low,
    highestActive: high,
    priceSpread: high - low,
    trend30Day: trend,
    trendPercentage: parseFloat(trendPct),
    estimatedFairValue: Math.round(avg * 0.95),
    totalActiveListings: listings.length,
    recentSalesCount: Math.floor(rand(3, 30)),
  }
}

// ═══════════════════════════════════════════════════════════════
// Price History (more data points)
// ═══════════════════════════════════════════════════════════════

export function getPriceHistory(comicId: string, grade = 9.8): PricePoint[] {
  const base = BASE_PRICES[comicId] || 500
  const points: PricePoint[] = []

  // Generate 24 months of price history
  for (let i = 0; i < 24; i++) {
    const d = new Date()
    d.setMonth(d.getMonth() - (24 - i))
    const variation = rand(0.75, 1.25)
    // Add an upward trend over time
    const trendFactor = 1.0 + (i * 0.008) + (Math.random() * 0.02)
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

export function getPriceHistoryByGrade(comicId: string): Record<number, PricePoint[]> {
  const result: Record<number, PricePoint[]> = {}
  for (const grade of [9.8, 9.6, 9.4, 9.2]) {
    result[grade] = getPriceHistory(comicId, grade)
  }
  return result
}

// ═══════════════════════════════════════════════════════════════
// Trending & Deals
// ═══════════════════════════════════════════════════════════════

export function getTrendingComics(): Comic[] {
  // Return key issues sorted by CV score
  return COMICS.filter(c => c.keyIssue).sort((a, b) => (b.cvScore || 0) - (a.cvScore || 0)).slice(0, 8)
}

export function getHotDeals(): { listing: Listing; comic: Comic }[] {
  const deals: { listing: Listing; comic: Comic }[] = []
  COMICS.slice(0, 8).forEach(comic => {
    getListings(comic.id)
      .filter(l => l.dealLabel)
      .slice(0, 2)
      .forEach(l => deals.push({ listing: l, comic }))
  })
  return deals.slice(0, 8)
}

export function getMarketMovers(): { label: string; change: number; positive: boolean }[] {
  return [
    { label: 'Modern Era', change: rand(1, 8), positive: true },
    { label: 'Bronze Age', change: rand(0, 4), positive: true },
    { label: 'Silver Age', change: rand(-2, 3), positive: true },
    { label: 'Golden Age', change: rand(-1, 2), positive: true },
    { label: 'Key Issues', change: rand(2, 12), positive: true },
    { label: 'Raw Books', change: rand(-3, 1), positive: false },
  ]
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

export function getComicCount(): number {
  return COMICS.length
}

export function getKeyIssuesCount(): number {
  return COMICS.filter(c => c.keyIssue).length
}

export function getPublishers(): string[] {
  const publisherSet = new Set(COMICS.map(c => c.publisher))
  return Array.from(publisherSet)
}
