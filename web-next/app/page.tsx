import Link from 'next/link'
import { getTrendingComics, getHotDeals, getMarketSummary, getPublisherColor, formatPrice } from '@/lib/data'
import { ComicCard } from '@/components/ComicCard'
import { TrendingUp, Zap, DollarSign, Clock } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
// Home Page — Command Center
// ═══════════════════════════════════════════════════════════════

export default function HomePage() {
  const trending = getTrendingComics()
  const deals = getHotDeals()
  
  // Mock market index
  const marketIndex = 1482.40
  const marketChange = 2.4

  return (
    <div className="space-y-12">
      {/* Hero / Market Overview */}
      <section className="animate-fade-in">
        <div className="glass-card p-8 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-gw-accent/15 blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 relative z-10">
            <div>
              <p className="text-gw-text-secondary mb-2">Welcome back, Collector</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Grail Market Index
              </h1>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-gw-text-tertiary text-xs uppercase tracking-widest mb-1">Market Status</p>
              <p className="market-index">
                {marketIndex.toLocaleString('en-US', { minimumFractionDigits: 2 })} 
                <span className="text-sm ml-2">(+{marketChange}%)</span>
              </p>
            </div>
          </div>

          {/* Mock Chart */}
          <div className="h-[200px] border border-dashed border-gw-border rounded-xl flex items-end justify-between px-4 py-4 relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00FF94" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00FF94" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,150 L50,140 L100,160 L150,130 L200,110 L250,120 L300,90 L350,100 L400,70 L450,85 L500,50 L550,65 L600,40 L650,55 L700,30 L750,45 L800,20" 
                fill="none" 
                stroke="#00FF94" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
              <path 
                d="M0,150 L50,140 L100,160 L150,130 L200,110 L250,120 L300,90 L350,100 L400,70 L450,85 L500,50 L550,65 L600,40 L650,55 L700,30 L750,45 L800,20 L800,200 L0,200 Z" 
                fill="url(#chartGrad)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title flex items-center gap-3">
            <span>🔥</span>
            Trending Grails
          </h2>
          <a href="/comics" className="text-gw-accent text-sm font-medium hover:underline">
            View High Velocity →
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trending.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title flex items-center gap-3">
            <span>🏷️</span>
            Hot Deals
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.slice(0, 6).map(({ listing, comic }) => (
            <Link key={listing.id} href={`/comics/${comic.id}`} className="block">
              <div className="glass-card-hover p-4">
                <div className="flex gap-4">
                  <div 
                    className="w-20 h-28 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${getPublisherColor(comic.publisher)}20, ${getPublisherColor(comic.publisher)}05)` }}
                  >
                    📖
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-white truncate">{comic.title} #{comic.issueNumber}</h3>
                      {listing.dealLabel && (
                        <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                          listing.dealLabel === 'Below Market' ? 'bg-gw-emerald/20 text-gw-emerald' :
                          listing.dealLabel === 'Good Deal' ? 'bg-gw-accent/20 text-gw-accent' :
                          'bg-gw-gold/20 text-gw-gold'
                        }`}>
                          {listing.dealLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-gw-text-secondary text-sm mt-1">
                      {listing.gradingCompany.name} {listing.grade}
                    </p>
                    <p className="price-display text-gw-emerald mt-2">
                      {formatPrice(listing.price)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Activity Sidebar (below main content) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Activity */}
        <div className="lg:col-span-2">
          <div className="glass-card p-6">
            <h3 className="font-display text-lg font-semibold mb-5 flex items-center gap-3">
              <Zap className="text-gw-gold w-5 h-5" />
              Live Activity
            </h3>
            
            <div className="space-y-4">
              <ActivityItem 
                type="New Listing"
                title="ASM #129 (CGC 9.2)"
                price="$2,800"
                platform="eBay"
                time="2m ago"
                color="text-gw-accent"
              />
              <ActivityItem 
                type="Sold"
                title="X-Men #101 (CGC 9.8)"
                price="$1,450"
                platform="Heritage"
                time="14m ago"
                color="text-gw-emerald"
              />
              <ActivityItem 
                type="Price Drop"
                title="Batman #227 (VG/FN)"
                price="$825"
                originalPrice="$950"
                platform="MyComicShop"
                time="45m ago"
                color="text-gw-text-secondary"
              />
            </div>
          </div>
        </div>

        {/* Top Movers */}
        <div>
          <div className="glass-card p-6 bg-gradient-to-br from-gw-bg-secondary to-gw-accent/5">
            <h3 className="font-display text-lg font-semibold text-gw-accent mb-4">
              Top Movers
            </h3>
            <p className="text-gw-text-secondary text-sm mb-4">Last 24 Hours</p>
            
            <div className="space-y-3">
              <MoverRow label="Modern Era" change="+5.2%" positive />
              <MoverRow label="Bronze Age" change="+1.8%" positive />
              <MoverRow label="Silver Age" change="-0.4%" positive={false} />
              <MoverRow label="Golden Age" change="+0.9%" positive />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function ActivityItem({ 
  type, title, price, originalPrice, platform, time, color 
}: { 
  type: string
  title: string
  price: string
  originalPrice?: string
  platform: string
  time: string
  color: string
}) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-gw-border last:border-0">
      <div className="w-10 h-14 bg-gw-card rounded flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-gw-text-secondary text-xs uppercase">{type}</p>
        <p className="font-semibold text-white truncate">{title}</p>
        <p className="text-gw-text-tertiary text-xs mt-1">
          {originalPrice && (
            <span className="line-through opacity-50 mr-2">{originalPrice}</span>
          )}
          <span className={color}>{price}</span>
          {' · '}{platform} · {time}
        </p>
      </div>
    </div>
  )
}

function MoverRow({ label, change, positive }: { label: string; change: string; positive: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gw-text-secondary text-sm">{label}</span>
      <span className={`font-mono text-sm font-semibold ${positive ? 'text-gw-emerald' : 'text-red-400'}`}>
        {change}
      </span>
    </div>
  )
}
