import Link from 'next/link'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Comic, getMarketSummary, getDisplayTitle, getSubtitle, getPublisherColor, formatPrice } from '@/lib/data'

interface ComicCardProps {
  comic: Comic
}

export function ComicCard({ comic }: ComicCardProps) {
  const summary = getMarketSummary(comic.id)
  const trendClass = summary.trend30Day === 'up' ? 'trend-up' : summary.trend30Day === 'down' ? 'trend-down' : 'trend-neutral'
  const TrendIcon = summary.trend30Day === 'up' ? TrendingUp : summary.trend30Day === 'down' ? TrendingDown : Minus
  const sign = summary.trendPercentage >= 0 ? '+' : ''

  return (
    <Link href={`/comics/${comic.id}`} className="block group">
      <div className="glass-card-hover overflow-hidden cursor-pointer">
        {/* Cover Image */}
        <div 
          className="aspect-[2/3] relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${getPublisherColor(comic.publisher)}30, ${getPublisherColor(comic.publisher)}08)` 
          }}
        >
          {/* Placeholder for comic cover */}
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
            📖
          </div>
          
          {/* Grade Badge */}
          <div className="absolute top-3 right-3 grade-badge-cgc">
            CGC 9.8
          </div>

          {/* Key Issue Badge */}
          {comic.keyIssue && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-gw-gold/20 text-gw-gold text-xs font-bold rounded">
              KEY
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-white truncate group-hover:text-gw-accent transition-colors">
            {getDisplayTitle(comic)}
          </h3>
          <p className="text-gw-text-secondary text-sm truncate mt-1">
            {getSubtitle(comic)}
          </p>
          
          {/* First Appearance */}
          {comic.firstAppearance && (
            <p className="text-gw-text-tertiary text-xs mt-1">
              1st: {comic.firstAppearance}
            </p>
          )}

          {/* Footer */}
          <div className="flex justify-between items-center pt-3 mt-3 border-t border-gw-border">
            <span className="price-display text-sm">
              {formatPrice(summary.estimatedFairValue)}
            </span>
            <span className={trendClass}>
              <TrendIcon className="w-3 h-3" />
              {sign}{summary.trendPercentage}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
