import { getComic, formatPrice } from '@/lib/data'
import { Shield, DollarSign, TrendingUp } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
// Vault / Collection Page
// ═══════════════════════════════════════════════════════════════

export default function VaultPage() {
  // Mock vault data - in real app this would come from user database
  const vaultItems = [
    { id: 'asm300', comic: getComic('asm300')!, purchasePrice: 3200, currentValue: 5240, purchaseDate: '2024-01-15' },
    { id: 'hulk181', comic: getComic('hulk181')!, purchasePrice: 6500, currentValue: 8900, purchaseDate: '2023-08-22' },
    { id: 'gsxm1', comic: getComic('gsxm1')!, purchasePrice: 3800, currentValue: 4150, purchaseDate: '2023-11-10' },
  ]

  const totalValue = vaultItems.reduce((sum, item) => sum + item.currentValue, 0)
  const totalCost = vaultItems.reduce((sum, item) => sum + item.purchasePrice, 0)
  const totalROI = ((totalValue - totalCost) / totalCost) * 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold flex items-center gap-3">
            <Shield className="text-gw-gold w-8 h-8" />
            The Grand Vault
          </h1>
          <p className="text-gw-text-secondary mt-1">Your personal collection</p>
        </div>

        {/* Stats */}
        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-gw-text-tertiary text-xs uppercase tracking-wider">Net Value</p>
            <p className="text-2xl font-mono font-bold text-white">{formatPrice(totalValue)}</p>
          </div>
          <div className="text-center">
            <p className="text-gw-text-tertiary text-xs uppercase tracking-wider">Total Cost</p>
            <p className="text-2xl font-mono font-bold text-gw-text-secondary">{formatPrice(totalCost)}</p>
          </div>
          <div className="text-center">
            <p className="text-gw-text-tertiary text-xs uppercase tracking-wider">ROI</p>
            <p className="text-2xl font-mono font-bold text-gw-emerald flex items-center gap-1">
              <TrendingUp className="w-5 h-5" />
              +{totalROI.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* Collection Grid */}
      {vaultItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaultItems.map(({ id, comic, purchasePrice, currentValue, purchaseDate }) => {
            const roi = ((currentValue - purchasePrice) / purchasePrice) * 100
            
            return (
              <div key={id} className="glass-card-hover p-6 group">
                {/* Comic Display */}
                <div 
                  className="aspect-[2/3] rounded-xl overflow-hidden mb-4 relative"
                  style={{ background: `linear-gradient(135deg, ${getPublisherColor(comic.publisher)}30, ${getPublisherColor(comic.publisher)}08)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    📖
                  </div>
                  
                  {/* Rarity Seal */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gw-gold clip-star flex items-center justify-center text-black font-bold text-xs shadow-lg">
                    9.8
                  </div>
                  
                  {/* 3D Tilt on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-bold text-lg text-white">{comic.title} #{comic.issueNumber}</h3>
                  <p className="text-gw-text-tertiary text-sm">Acquired {purchaseDate}</p>
                  
                  <div className="flex justify-between items-end mt-4 pt-4 border-t border-gw-border">
                    <div>
                      <p className="text-gw-text-tertiary text-xs">Purchase</p>
                      <p className="font-mono text-sm">{formatPrice(purchasePrice)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gw-text-tertiary text-xs">Current</p>
                      <p className="font-mono font-bold text-white">{formatPrice(currentValue)}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-right">
                    <span className="text-gw-emerald text-sm font-semibold">
                      +{roi.toFixed(0)}% ROI
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gw-card rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-gw-text-tertiary" />
          </div>
          <p className="text-gw-text-secondary mb-4">Your vault is empty</p>
          <a href="/comics" className="text-gw-accent hover:underline">
            Browse comics to add →
          </a>
        </div>
      )}
    </div>
  )
}

function getPublisherColor(publisher: string): string {
  const colors: Record<string, string> = {
    Marvel: '#E53238', DC: '#0476F2', Image: '#FF6B00',
    Mirage: '#00B894', Atlas: '#6C5CE7',
  }
  return colors[publisher] || '#6C5CE7'
}
