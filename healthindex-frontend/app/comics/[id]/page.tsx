import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getComic, getComics, getListings, getMarketSummary, getPriceHistory, getDisplayTitle, getSubtitle, getPublisherColor, formatPrice, formatDate, Listing, PricePoint } from '@/lib/data'
import { TrendingUp, TrendingDown, Minus, ExternalLink, Heart, Share2 } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const comics = getComics()
  return comics.map((comic) => ({
    id: comic.id,
  }))
}

// ═══════════════════════════════════════════════════════════════
// Comic Detail Page
// ═══════════════════════════════════════════════════════════════

export default async function ComicDetailPage({ params }: PageProps) {
  const { id } = await params
  const comic = getComic(id)
  
  if (!comic) {
    notFound()
  }

  const listings = getListings(id)
  const summary = getMarketSummary(id)
  const priceHistory = getPriceHistory(id)

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gw-text-secondary">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/comics" className="hover:text-white transition-colors">Comics</Link>
        <span>/</span>
        <span className="text-white">{getDisplayTitle(comic)}</span>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Cover */}
        <div 
          className="aspect-[2/3] rounded-2xl overflow-hidden glass-card flex items-center justify-center text-8xl"
          style={{ background: `linear-gradient(135deg, ${getPublisherColor(comic.publisher)}30, ${getPublisherColor(comic.publisher)}08)` }}
        >
          📖
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-gw-card rounded-full text-xs text-gw-text-secondary">
                {comic.publisher}
              </span>
              {comic.keyIssue && (
                <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-xs font-bold rounded">
                  KEY ISSUE
                </span>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              {comic.title} #{comic.issueNumber}
            </h1>
            <p className="text-gw-text-secondary mt-2">{comic.year}</p>
            {comic.firstAppearance && (
              <p className="text-gw-text-tertiary mt-1">1st Appearance: {comic.firstAppearance}</p>
            )}
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Est. Fair Value" value={formatPrice(summary.estimatedFairValue)} />
            <StatCard label="30-Day Trend" value={`${summary.trendPercentage >= 0 ? '+' : ''}${summary.trendPercentage}%`} 
              positive={summary.trend30Day === 'up'} />
            <StatCard label="Active Listings" value={String(summary.totalActiveListings)} />
            <StatCard label="Recent Sales" value={String(summary.recentSalesCount)} />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gw-accent text-black font-semibold py-3 px-6 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Add to Watchlist
            </button>
            <button className="px-6 py-3 border border-gw-border text-white rounded-xl hover:bg-white/5 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Graded Variants */}
      <section>
        <h2 className="section-title mb-6">Graded Versions</h2>
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gw-border text-sm text-gw-text-secondary">
                  <th className="text-left p-4 font-medium">Grade</th>
                  <th className="text-left p-4 font-medium">Company</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="text-left p-4 font-medium">Deal</th>
                  <th className="text-left p-4 font-medium">Marketplace</th>
                  <th className="text-left p-4 font-medium">Listed</th>
                  <th className="text-right p-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {listings.slice(0, 10).map((listing) => (
                  <ListingRow key={listing.id} listing={listing} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Price History Chart */}
      <section>
        <h2 className="section-title mb-6">Price History</h2>
        <div className="glass-card p-6">
          <div className="h-[200px] flex items-end gap-1">
            {priceHistory.map((point, i) => (
              <div
                key={point.id}
                className="flex-1 bg-gw-accent/20 hover:bg-gw-accent/40 transition-colors rounded-t"
                style={{ height: `${(point.price / Math.max(...priceHistory.map(p => p.price))) * 100}%` }}
                title={`${formatDate(point.date)}: ${formatPrice(point.price)}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gw-text-tertiary">
            <span>{formatDate(priceHistory[0]?.date || new Date())}</span>
            <span>{formatDate(priceHistory[priceHistory.length - 1]?.date || new Date())}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatCard({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="glass-card p-4">
      <p className="text-gw-text-tertiary text-xs uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-xl font-mono font-semibold ${positive === undefined ? 'text-white' : positive ? 'text-gw-emerald' : 'text-red-400'}`}>
        {value}
      </p>
    </div>
  )
}

function ListingRow({ listing }: { listing: Listing }) {
  const TrendIcon = listing.price > listing.price * 0.9 ? TrendingUp : listing.price < listing.price * 0.8 ? TrendingDown : Minus
  
  return (
    <tr className="border-b border-gw-border last:border-0 hover:bg-white/5 transition-colors">
      <td className="p-4">
        <span className={`font-bold ${listing.gradingCompany.id === 'cgc' ? 'text-gw-gold' : 'text-cbcs'}`}>
          {listing.grade}
        </span>
      </td>
      <td className="p-4">
        <span className="px-2 py-1 bg-gw-card rounded text-xs">
          {listing.gradingCompany.name}
        </span>
      </td>
      <td className="p-4 font-mono font-semibold text-white">
        {formatPrice(listing.price)}
      </td>
      <td className="p-4">
        {listing.dealLabel && (
          <span className={`text-xs px-2 py-1 rounded font-bold ${
            listing.dealLabel === 'Below Market' ? 'bg-gw-emerald/20 text-gw-emerald' :
            listing.dealLabel === 'Good Deal' ? 'bg-gw-accent/20 text-gw-accent' :
            'bg-gw-gold/20 text-gw-gold'
          }`}>
            {listing.dealLabel}
          </span>
        )}
      </td>
      <td className="p-4 text-gw-text-secondary text-sm">
        {listing.marketplace.name}
      </td>
      <td className="p-4 text-gw-text-tertiary text-sm">
        {formatDate(listing.listingDate)}
      </td>
      <td className="p-4 text-right">
        <a 
          href={listing.listingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gw-accent hover:text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </td>
    </tr>
  )
}
