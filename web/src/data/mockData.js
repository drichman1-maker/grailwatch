// ═══════════════════════════════════════════
// GrailWatch — Mock Data
// ═══════════════════════════════════════════

export const COMICS = [
    { id: 'asm300', title: 'Amazing Spider-Man', issueNumber: 300, year: 1988, publisher: 'Marvel', thumbnailUrl: 'asm300' },
    { id: 'batman423', title: 'Batman', issueNumber: 423, year: 1988, publisher: 'DC', thumbnailUrl: 'batman423' },
    { id: 'hulk181', title: 'Incredible Hulk', issueNumber: 181, year: 1974, publisher: 'Marvel', thumbnailUrl: 'hulk181' },
    { id: 'xmen1', title: 'X-Men', issueNumber: 1, year: 1991, publisher: 'Marvel', thumbnailUrl: 'xmen1' },
    { id: 'spawn1', title: 'Spawn', issueNumber: 1, year: 1992, publisher: 'Image', thumbnailUrl: 'spawn1' },
    { id: 'nm98', title: 'New Mutants', issueNumber: 98, year: 1991, publisher: 'Marvel', thumbnailUrl: 'nm98' },
    { id: 'uf4', title: 'Ultimate Fallout', issueNumber: 4, year: 2011, publisher: 'Marvel', thumbnailUrl: 'uf4' },
    { id: 'tasm129', title: 'Amazing Spider-Man', issueNumber: 129, year: 1974, publisher: 'Marvel', thumbnailUrl: 'tasm129' },
    { id: 'gsxm1', title: 'Giant-Size X-Men', issueNumber: 1, year: 1975, publisher: 'Marvel', thumbnailUrl: 'gsxm1' },
    { id: 'af15', title: 'Amazing Fantasy', issueNumber: 15, year: 1962, publisher: 'Marvel', thumbnailUrl: 'af15' },
    { id: 'tmnt1', title: 'Teenage Mutant Ninja Turtles', issueNumber: 1, year: 1984, publisher: 'Mirage', thumbnailUrl: 'tmnt1' },
    { id: 'ij1', title: 'Iron Jaw', issueNumber: 1, year: 1975, publisher: 'Atlas', thumbnailUrl: 'ij1' },
];

export const MARKETPLACES = [
    { id: 'ebay', name: 'eBay', color: '#E53238', icon: '🛒' },
    { id: 'heritage', name: 'Heritage Auctions', color: '#1B3A5C', icon: '🏛️' },
    { id: 'comiclink', name: 'ComicLink', color: '#D4A843', icon: '🔗' },
    { id: 'mycomicshop', name: 'MyComicShop', color: '#2E8B57', icon: '📚' },
    { id: 'hipcomic', name: 'HipComic', color: '#9B59B6', icon: '⭐' },
];

export const GRADES = [9.8, 9.6, 9.4, 9.2, 9.0, 8.5, 8.0];

export const GRADING_COMPANIES = [
    { id: 'cgc', name: 'CGC', fullName: 'Certified Guaranty Company', color: '#DAA520', cssClass: 'grade-cgc' },
    { id: 'cbcs', name: 'CBCS', fullName: 'Comic Book Certification Service', color: '#4A90D9', cssClass: 'grade-cbcs' },
];

const BASE_PRICES = {
    asm300: 1850, batman423: 320, hulk181: 12500, xmen1: 85,
    spawn1: 280, nm98: 950, uf4: 650, tasm129: 3200,
    gsxm1: 6800, af15: 85000, ij1: 45, tmnt1: 9500,
};

const PUBLISHER_COLORS = {
    Marvel: '#E53238', DC: '#0476F2', Image: '#FF6B00',
    Mirage: '#00B894', Atlas: '#6C5CE7',
};

// Helper
function rand(min, max) { return Math.random() * (max - min) + min; }
function daysAgo(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d;
}

export function getDisplayTitle(comic) {
    return `${comic.title} #${comic.issueNumber}`;
}

export function getSubtitle(comic) {
    return `${comic.publisher} • ${comic.year}`;
}

export function getPublisherColor(publisher) {
    return PUBLISHER_COLORS[publisher] || '#6C5CE7';
}

export function formatPrice(price) {
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function formatPriceFull(price) {
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatListingAge(date) {
    const days = Math.floor((Date.now() - date.getTime()) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
}

export function formatDate(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ── Search ──
export function searchComics(query) {
    const q = query.toLowerCase().trim();
    if (!q) return COMICS;
    return COMICS.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.publisher.toLowerCase().includes(q) ||
        String(c.issueNumber).includes(q) ||
        String(c.year).includes(q)
    );
}

// ── Listings ──
export function getListings(comicId) {
    const base = BASE_PRICES[comicId] || 500;
    const listings = [];

    for (let i = 0; i < 15; i++) {
        const grade = GRADES[i % GRADES.length];
        const company = GRADING_COMPANIES[i % GRADING_COMPANIES.length];
        const marketplace = MARKETPLACES[i % MARKETPLACES.length];
        const variation = rand(0.75, 1.30);
        const price = Math.round(base * (grade / 9.8) * variation);
        const age = Math.floor(rand(0, 30));

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
        });
    }

    // Apply deal detection
    const avg = listings.reduce((s, l) => s + l.price, 0) / listings.length;
    listings.forEach(l => {
        const score = (avg - l.price) / avg;
        if (score >= 0.25) l.dealLabel = 'Below Market';
        else if (score >= 0.15) l.dealLabel = 'Good Deal';
        else if (listings.filter(x => x.grade === l.grade).length <= 3) l.dealLabel = 'Rare Listing';
    });

    return listings.sort((a, b) => a.price - b.price);
}

// ── Market Summary ──
export function getMarketSummary(comicId, grade = 9.8) {
    const listings = getListings(comicId).filter(l => l.grade === grade);
    const prices = listings.map(l => l.price);
    const avg = prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : 0;
    const low = prices.length ? Math.min(...prices) : 0;
    const high = prices.length ? Math.max(...prices) : 0;
    const trends = ['up', 'down', 'stable'];
    const trend = trends[Math.floor(rand(0, 3))];
    const trendPct = rand(-8, 12).toFixed(1);

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
    };
}

// ── Price History ──
export function getPriceHistory(comicId, grade = 9.8) {
    const base = BASE_PRICES[comicId] || 500;
    const points = [];

    for (let i = 0; i < 20; i++) {
        const d = daysAgo((20 - i) * 5);
        const variation = rand(0.85, 1.15);
        const trendFactor = 1.0 + i * 0.005;
        const price = Math.round(base * variation * trendFactor);

        points.push({
            id: `${comicId}-price-${i}`,
            date: d,
            price,
            source: MARKETPLACES[Math.floor(rand(0, MARKETPLACES.length))],
            grade,
        });
    }

    return points.sort((a, b) => a.date - b.date);
}

// ── Trending ──
export function getTrendingComics() {
    return COMICS.slice(0, 6);
}

export function getHotDeals() {
    const deals = [];
    COMICS.slice(0, 4).forEach(comic => {
        getListings(comic.id)
            .filter(l => l.dealLabel)
            .slice(0, 2)
            .forEach(l => deals.push({ listing: l, comic }));
    });
    return deals.slice(0, 6);
}
