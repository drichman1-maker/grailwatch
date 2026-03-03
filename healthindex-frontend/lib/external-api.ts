// ═══════════════════════════════════════════════════════════════
// GrailWatch — External API Integrations (eBay + Heritage)
// ═══════════════════════════════════════════════════════════════

import { Comic, Listing, Marketplace, GRADING_COMPANIES, GRADES } from './data'

// ═══════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════

export interface EbayListing {
  itemId: string
  title: string
  price: number
  currency: string
  condition: string
  listingUrl: string
  imageUrl?: string
  sellerName: string
  sellerRating: number
  endDate?: string
  bidCount?: number
  buyItNow: boolean
  auction: boolean
  location: string
  grade?: number
  gradingCompany?: string
}

export interface HeritageLot {
  lotNumber: string
  title: string
  estimateLow: number
  estimateHigh: number
  realizedPrice?: number
  imageUrl?: string
  lotUrl: string
  auctionDate: string
  auctionName: string
  grade: number
  gradingCompany: string
  condition?: string
}

export interface AggregatedListing extends Listing {
  source: 'ebay' | 'heritage'
  externalId: string
  rawTitle: string
  sellerRating?: number
  endDate?: Date
  bidCount?: number
  isAuction: boolean
  location?: string
  auctionName?: string
  estimateRange?: { low: number; high: number }
}

// ═══════════════════════════════════════════════════════════════
// eBay API Integration
// ═══════════════════════════════════════════════════════════════

const EBAY_API_ENDPOINT = 'https://api.ebay.com/buy/browse/v1/item_summary/search'

function buildEbayQuery(comic: Comic): string {
  const gradeTerms = ['CGC', 'CBCS', 'PGX', 'graded', '9.8', '9.6', '9.4', '9.0']
  const baseQuery = `${comic.title} #${comic.issueNumber} comic`
  return `${baseQuery} (${gradeTerms.join(' OR ')})`
}

export async function fetchEbayListings(comic: Comic, limit = 20): Promise<EbayListing[]> {
  // Note: In production, this would use actual eBay API credentials
  // For demo, generating realistic mock data based on comic
  
  const basePrice = getBasePriceForComic(comic)
  const listings: EbayListing[] = []
  
  for (let i = 0; i < limit; i++) {
    const grade = getRandomGrade()
    const company = getRandomGradingCompany()
    const priceVariance = 0.6 + Math.random() * 0.8
    const price = Math.round(basePrice * (grade / 9.8) * priceVariance)
    
    listings.push({
      itemId: `ebay-${comic.id}-${i}`,
      title: `${comic.title} #${comic.issueNumber} ${comic.year} ${company} ${grade}`,
      price,
      currency: 'USD',
      condition: grade >= 9.0 ? 'Graded' : 'Raw',
      listingUrl: `https://www.ebay.com/itm/${100000000000 + Math.floor(Math.random() * 900000000000)}`,
      imageUrl: undefined,
      sellerName: getRandomSeller(),
      sellerRating: 95 + Math.floor(Math.random() * 5),
      endDate: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      bidCount: Math.random() > 0.5 ? Math.floor(Math.random() * 20) : undefined,
      buyItNow: Math.random() > 0.3,
      auction: Math.random() > 0.4,
      location: getRandomLocation(),
      grade,
      gradingCompany: company,
    })
  }
  
  return listings.sort((a, b) => a.price - b.price)
}

// ═══════════════════════════════════════════════════════════════
// Heritage Auctions Integration
// ═══════════════════════════════════════════════════════════════

const HERITAGE_API_BASE = 'https://api.ha.com/v1'

export async function fetchHeritageLots(comic: Comic, limit = 10): Promise<HeritageLot[]> {
  // Note: Heritage doesn't have a public API, would use scraping or partnership
  // For demo, generating realistic mock data
  
  const basePrice = getBasePriceForComic(comic) * 1.2 // Heritage tends to be higher end
  const lots: HeritageLot[] = []
  
  for (let i = 0; i < limit; i++) {
    const grade = getRandomGrade()
    const company = getRandomGradingCompany()
    const estimateLow = Math.round(basePrice * (grade / 9.8) * 0.8)
    const estimateHigh = Math.round(basePrice * (grade / 9.8) * 1.2)
    const realized = Math.random() > 0.3 
      ? Math.round((estimateLow + estimateHigh) / 2 * (0.9 + Math.random() * 0.3))
      : undefined
    
    lots.push({
      lotNumber: `${40000 + Math.floor(Math.random() * 10000)}`,
      title: `${comic.title} #${comic.issueNumber} (${comic.year}) ${company} ${grade}`,
      estimateLow,
      estimateHigh,
      realizedPrice: realized,
      imageUrl: undefined,
      lotUrl: `https://comics.ha.com/itm/${comic.title.toLowerCase().replace(/\s+/g, '-')}-${comic.issueNumber}/${40000 + Math.floor(Math.random() * 10000)}`,
      auctionDate: new Date(Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000).toISOString(),
      auctionName: getRandomAuctionName(),
      grade,
      gradingCompany: company,
      condition: getRandomCondition(),
    })
  }
  
  return lots.sort((a, b) => (b.realizedPrice || b.estimateHigh) - (a.realizedPrice || a.estimateHigh))
}

// ═══════════════════════════════════════════════════════════════
// Aggregated Data Fetcher
// ═══════════════════════════════════════════════════════════════

export async function fetchAllListings(comic: Comic): Promise<AggregatedListing[]> {
  const [ebayListings, heritageLots] = await Promise.all([
    fetchEbayListings(comic, 15),
    fetchHeritageLots(comic, 10),
  ])
  
  const aggregated: AggregatedListing[] = [
    ...ebayListings.map(ebay => convertEbayToListing(ebay, comic)),
    ...heritageLots.map(heritage => convertHeritageToListing(heritage, comic)),
  ]
  
  // Calculate market average for deal detection
  const avgPrice = aggregated.reduce((sum, l) => sum + l.price, 0) / aggregated.length
  
  return aggregated
    .map(listing => ({
      ...listing,
      dealLabel: calculateDealLabel(listing.price, avgPrice, listing.grade),
    }))
    .sort((a, b) => a.price - b.price)
}

export async function fetchMarketSummary(comic: Comic): Promise<{
  avgPrice: number
  lowestPrice: number
  highestPrice: number
  totalListings: number
  ebayCount: number
  heritageCount: number
  priceSpread: number
  medianPrice: number
}> {
  const listings = await fetchAllListings(comic)
  const prices = listings.map(l => l.price).sort((a, b) => a - b)
  
  return {
    avgPrice: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
    lowestPrice: prices[0] || 0,
    highestPrice: prices[prices.length - 1] || 0,
    totalListings: listings.length,
    ebayCount: listings.filter(l => l.source === 'ebay').length,
    heritageCount: listings.filter(l => l.source === 'heritage').length,
    priceSpread: (prices[prices.length - 1] || 0) - (prices[0] || 0),
    medianPrice: prices[Math.floor(prices.length / 2)] || 0,
  }
}

// ═══════════════════════════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════════════════════════

function getBasePriceForComic(comic: Comic): number {
  const basePrices: Record<string, number> = {
    af15: 150000, detective1: 200000, action1: 450000, marvel1: 40000,
    ff1: 35000, asm300: 3200, hulk181: 12500, tasm129: 3800, xmen1: 150,
    nm98: 1100, uf4: 450, gsxm1: 7500, flash123: 9000, greenlantern1: 6500,
    batman423: 400, batman1: 65000, justice1: 7000, spawn1: 350, tmnt1: 9500,
    walk1: 600, invincible1: 350, allstar1: 250, captainamerica1: 5000,
    thanos1: 150, death1: 500, wolverine1: 3500, moonknight1: 600,
    hellboy1: 400, 'tmnt(idw)1': 150, transformers1: 300, ironman1: 18000,
    captain1: 50000, sub1: 22000, daredevil1: 4500, hulk1: 12000,
    drstrange1: 3500, 'silver surfer': 5500, panther1: 5000, vision1: 300,
    gomurr: 80,
  }
  return basePrices[comic.id] || 500
}

function getRandomGrade(): number {
  const grades = [9.9, 9.8, 9.6, 9.4, 9.2, 9.0, 8.5, 8.0, 7.5, 7.0, 6.0, 5.0]
  return grades[Math.floor(Math.random() * grades.length)]
}

function getRandomGradingCompany(): string {
  const companies = ['CGC', 'CBCS', 'PGX']
  return companies[Math.floor(Math.random() * companies.length)]
}

function getRandomSeller(): string {
  const sellers = ['ComicVault', 'GoldenAgeGrails', 'CollectorHub', 'NostalgiaComics', 
    'KeyIssueFinds', 'GradedGems', 'RetroRarities', 'HeroHaven', 'InfiniteComics',
    'FourColorDreams', 'PanelToPanel', 'SplashPageComics']
  return sellers[Math.floor(Math.random() * sellers.length)]
}

function getRandomLocation(): string {
  const locations = ['USA', 'USA', 'USA', 'Canada', 'UK', 'USA', 'Australia', 'USA']
  return locations[Math.floor(Math.random() * locations.length)]
}

function getRandomAuctionName(): string {
  const names = ['2025 January Comics', '2024 November Signature', '2025 Spring Comics',
    '2024 December Comics', '2025 Comics & Comic Art', '2024 Fall Comics']
  return names[Math.floor(Math.random() * names.length)]
}

function getRandomCondition(): string {
  const conditions = ['Off-White to White Pages', 'White Pages', 'Cream to Off-White Pages',
    'Off-White Pages', 'White/Cream Pages']
  return conditions[Math.floor(Math.random() * conditions.length)]
}

function convertEbayToListing(ebay: EbayListing, comic: Comic): AggregatedListing {
  const company = GRADING_COMPANIES.find(c => 
    ebay.gradingCompany?.toLowerCase().includes(c.id)
  ) || GRADING_COMPANIES[0]
  
  return {
    id: ebay.itemId,
    comicId: comic.id,
    grade: ebay.grade || 9.8,
    gradingCompany: company,
    price: ebay.price,
    marketplace: {
      id: 'ebay',
      name: 'eBay',
      color: '#E53238',
      icon: '🛒',
    },
    listingUrl: ebay.listingUrl,
    listingDate: new Date(),
    thumbnailUrl: comic.id,
    dealLabel: null,
    source: 'ebay',
    externalId: ebay.itemId,
    rawTitle: ebay.title,
    sellerRating: ebay.sellerRating,
    endDate: ebay.endDate ? new Date(ebay.endDate) : undefined,
    bidCount: ebay.bidCount,
    isAuction: ebay.auction,
    location: ebay.location,
  }
}

function convertHeritageToListing(heritage: HeritageLot, comic: Comic): AggregatedListing {
  const company = GRADING_COMPANIES.find(c => 
    heritage.gradingCompany.toLowerCase().includes(c.id)
  ) || GRADING_COMPANIES[0]
  
  return {
    id: `heritage-${heritage.lotNumber}`,
    comicId: comic.id,
    grade: heritage.grade,
    gradingCompany: company,
    price: heritage.realizedPrice || heritage.estimateLow,
    marketplace: {
      id: 'heritage',
      name: 'Heritage Auctions',
      color: '#1B3A5C',
      icon: '🏛️',
    },
    listingUrl: heritage.lotUrl,
    listingDate: new Date(heritage.auctionDate),
    thumbnailUrl: comic.id,
    dealLabel: null,
    source: 'heritage',
    externalId: heritage.lotNumber,
    rawTitle: heritage.title,
    isAuction: true,
    auctionName: heritage.auctionName,
    estimateRange: { low: heritage.estimateLow, high: heritage.estimateHigh },
  }
}

function calculateDealLabel(price: number, avgPrice: number, grade: number): string | null {
  const diff = (avgPrice - price) / avgPrice
  if (diff >= 0.25) return 'Steal'
  if (diff >= 0.15) return 'Good Deal'
  if (diff >= 0.08) return 'Fair Price'
  if (price > avgPrice * 1.3) return 'Above Market'
  return null
}

// ═══════════════════════════════════════════════════════════════
// Batch Operations
// ═══════════════════════════════════════════════════════════════

export async function fetchMultipleComicsListings(comics: Comic[]): Promise<
  Map<string, AggregatedListing[]>
> {
  const results = new Map<string, AggregatedListing[]>()
  
  // Fetch in parallel with rate limiting
  const batchSize = 5
  for (let i = 0; i < comics.length; i += batchSize) {
    const batch = comics.slice(i, i + batchSize)
    const batchResults = await Promise.all(
      batch.map(async comic => {
        const listings = await fetchAllListings(comic)
        return { comicId: comic.id, listings }
      })
    )
    
    batchResults.forEach(({ comicId, listings }) => {
      results.set(comicId, listings)
    })
  }
  
  return results
}

// ═══════════════════════════════════════════════════════════════
// Search APIs
// ═══════════════════════════════════════════════════════════════

export async function searchEbay(query: string, limit = 20): Promise<EbayListing[]> {
  // Would integrate with eBay Finding API
  // For demo, return empty or mock
  return []
}

export async function searchHeritage(query: string, limit = 10): Promise<HeritageLot[]> {
  // Would scrape or use internal API
  // For demo, return empty or mock
  return []
}
