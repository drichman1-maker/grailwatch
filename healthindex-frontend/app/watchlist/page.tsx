'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getWatchlist, isInWatchlist, toggleWatchlist, getDisplayTitle, getSubtitle, getPublisherColor, formatPrice, Comic } from '@/lib/data'
import { Heart, Trash2, TrendingUp, Eye, Search, Filter } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
// Watchlist Page
// ═══════════════════════════════════════════════════════════════

// Mock watchlist for client-side (would be from database in production)
const initialWatchlist = ['asm300', 'hulk181', 'tasm129', 'gsxm1', 'action1']

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<string[]>(initialWatchlist)
  const [search, setSearch] = useState('')
  
  // In a real app, this would be server-side
  // For demo, we'll load from mock data
  const comics = getWatchlist()
  
  const filteredComics = search 
    ? comics.filter(c => 
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.publisher.toLowerCase().includes(search.toLowerCase())
      )
    : comics

  const removeFromWatchlist = (id: string) => {
    setWatchlist(prev => prev.filter(w => w !== id))
  }

  // Calculate mock values
  const totalValue = filteredComics.reduce((sum, c) => sum + (c.cvScore || 500), 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold flex items-center gap-3">
            <Eye className="text-gw-accent w-8 h-8" />
            Watchlist
          </h1>
          <p className="text-gw-text-secondary mt-1">
            {filteredComics.length} comics tracked • Est. {formatPrice(totalValue)} CV
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gw-text-tertiary" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter watchlist..."
            className="w-full bg-gw-card border border-gw-border rounded-xl py-3 pl-10 pr-4 text-white placeholder-gw-text-tertiary focus:outline-none focus:border-gw-accent transition-colors"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <p className="text-gw-text-tertiary text-xs uppercase tracking-wider mb-1">Watching</p>
          <p className="text-2xl font-mono font-bold text-white">{watchlist.length}</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-gw-text-tertiary text-xs uppercase tracking-wider mb-1">Key Issues</p>
          <p className="text-2xl font-mono font-bold text-gw-gold">
            {filteredComics.filter(c => c.keyIssue).length}
          </p>
        </div>
        <div className="glass-card p-4">
          <p className="text-gw-text-tertiary text-xs uppercase tracking-wider mb-1">Est. Value</p>
          <p className="text-2xl font-mono font-bold text-gw-accent">{formatPrice(totalValue)}</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-gw-text-tertiary text-xs uppercase tracking-wider mb-1">Trend</p>
          <p className="text-2xl font-mono font-bold text-gw-emerald flex items-center gap-1">
            <TrendingUp className="w-5 h-5" />
            +4.2%
          </p>
        </div>
      </div>

      {/* Watchlist Grid */}
      {filteredComics.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredComics.map((comic) => (
            <WatchlistCard 
              key={comic.id} 
              comic={comic} 
              onRemove={() => removeFromWatchlist(comic.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gw-card rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-gw-text-tertiary" />
          </div>
          <p className="text-gw-text-secondary mb-4">Your watchlist is empty</p>
          <Link href="/comics" className="text-gw-accent hover:underline">
            Browse comics to add →
          </Link>
        </div>
      )}

      {/* Empty State / Call to Action */}
      {filteredComics.length > 0 && filteredComics.length < 3 && (
        <div className="glass-card p-8 text-center bg-gradient-to-r from-gw-accent/5 to-transparent">
          <h3 className="text-xl font-bold mb-2">Build Your Watchlist</h3>
          <p className="text-gw-text-secondary mb-4">
            Track more grails to monitor price movements and market trends
          </p>
          <Link 
            href="/comics" 
            className="inline-block bg-gw-accent text-black font-semibold py-3 px-6 rounded-xl hover:bg-white transition-colors"
          >
            Browse Comics
          </Link>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// Watchlist Card Component
// ═══════════════════════════════════════════════════════════════

function WatchlistCard({ comic, onRemove }: { comic: Comic; onRemove: () => void }) {
  const [showRemove, setShowRemove] = useState(false)
  
  const cvScore = comic.cvScore || 500
  const mockChange = Math.random() * 15 - 3 // -3% to +12%
  const isPositive = mockChange >= 0

  return (
    <div 
      className="glass-card-hover p-4 group relative"
      onMouseEnter={() => setShowRemove(true)}
      onMouseLeave={() => setShowRemove(false)}
    >
      {/* Remove Button */}
      <button
        onClick={onRemove}
        className={`absolute top-2 right-2 p-2 rounded-lg bg-red-500/20 text-red-400 opacity-0 group-hover:opacity-100 transition-all z-10 hover:bg-red-500 hover:text-white ${
          showRemove ? 'opacity-100' : ''
        }`}
        title="Remove from watchlist"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      {/* Comic Cover Area */}
      <Link href={`/comics/${comic.id}`}>
        <div 
          className="aspect-[2/3] rounded-xl overflow-hidden mb-4 relative"
          style={{ background: `linear-gradient(135deg, ${getPublisherColor(comic.publisher)}30, ${getPublisherColor(comic.publisher)}08)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-5xl">
            📖
          </div>
          
          {/* Key Issue Badge */}
          {comic.keyIssue && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-gw-gold/20 text-gw-gold text-xs font-bold rounded">
              KEY
            </div>
          )}
          
          {/* CV Score */}
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs font-mono rounded">
            {formatPrice(cvScore)}
          </div>
        </div>
      </Link>

      {/* Info */}
      <Link href={`/comics/${comic.id}`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gw-text-tertiary">{comic.publisher}</span>
            <span className="text-gw-text-tertiary">•</span>
            <span className="text-xs text-gw-text-tertiary">{comic.year}</span>
          </div>
          <h3 className="font-bold text-white truncate">{comic.title} #{comic.issueNumber}</h3>
          
          {comic.firstAppearance && (
            <p className="text-gw-text-tertiary text-sm truncate">
              1st: {comic.firstAppearance}
            </p>
          )}
          
          {/* Price Movement */}
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-gw-border">
            <span className="text-xs text-gw-text-tertiary">30-day</span>
            <span className={`text-sm font-mono font-semibold ${isPositive ? 'text-gw-emerald' : 'text-red-400'}`}>
              {isPositive ? '+' : ''}{mockChange.toFixed(1)}%
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}