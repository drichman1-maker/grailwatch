import Link from 'next/link'
import { 
  getFeaturedProducts, 
  getProductsByCategory,
  getCategoryById,
  Product,
  CATEGORIES 
} from '@/lib/wellness-data'
import { Search, ArrowRight, Sparkles, TrendingUp, Heart } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
// Home Page — Health Index Command Center
// ═══════════════════════════════════════════════════════════════

export default function HomePage() {
  const featured = getFeaturedProducts()
  const saunas = getProductsByCategory('sauna').slice(0, 3)
  const redLight = getProductsByCategory('red-light').slice(0, 3)

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="animate-fade-in">
        <div className="glass-card p-8 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-gw-accent/15 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10">
            <p className="text-gw-text-secondary mb-2">Welcome to Health Index</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Wellness Machines<br />
              <span className="text-gw-accent">Curated for Recovery</span>
            </h1>
            <p className="text-gw-text-secondary text-lg max-w-xl mb-6">
              Research-backed recovery technology for home use. Saunas, red light therapy, 
              cryotherapy, and more — all in one place.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products"
                className="px-6 py-3 bg-gw-accent text-black font-bold rounded-xl hover:bg-white transition-colors"
              >
                Browse All Products
              </Link>
              <Link 
                href="/products?category=sauna"
                className="px-6 py-3 bg-gw-card border border-gw-border text-white font-medium rounded-xl hover:border-gw-accent transition-colors"
              >
                Explore Saunas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="section-title mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.slice(0, 8).map(cat => (
            <Link 
              key={cat.id} 
              href={`/products?category=${cat.id}`}
              className="glass-card-hover p-4 text-center group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform"
                style={{ background: `linear-gradient(135deg, ${cat.color}30, ${cat.color}10)` }}
              >
                {cat.icon}
              </div>
              <h3 className="font-medium text-white text-sm">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-gw-gold" />
            Featured Products
          </h2>
          <Link href="/products?sort=featured" className="text-gw-accent text-sm font-medium hover:underline">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Saunas Section */}
      <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Infrared Saunas</h2>
          <Link href="/products?category=sauna" className="text-gw-accent text-sm font-medium hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {saunas.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Red Light Section */}
      <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Red Light Therapy</h2>
          <Link href="/products?category=red-light" className="text-gw-accent text-sm font-medium hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {redLight.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="glass-card p-8 text-center relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ background: 'linear-gradient(135deg, #00FF94, #00D4FF)' }}
          />
          <div className="relative z-10">
            <TrendingUp className="w-12 h-12 text-gw-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Stay Updated on Wellness Tech
            </h2>
            <p className="text-gw-text-secondary mb-6 max-w-md mx-auto">
              New products, price drops, and research on recovery technology. 
              No spam, just value.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gw-bg-secondary border border-gw-border rounded-xl text-white placeholder-gw-text-tertiary focus:outline-none focus:border-gw-accent"
              />
              <button className="px-6 py-3 bg-gw-accent text-black font-bold rounded-xl hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const category = getCategoryById(product.category)
  
  return (
    <Link href={`/products/${product.id}`} className="block group">
      <div className="glass-card-hover p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${category?.color}30, ${category?.color}05)` }}
          >
            {category?.icon}
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {product.isNew && (
              <span className="px-2 py-0.5 bg-gw-accent/20 text-gw-accent text-xs font-bold rounded">
                NEW
              </span>
            )}
            {product.isFeatured && (
              <span className="px-2 py-0.5 bg-gw-gold/20 text-gw-gold text-xs font-bold rounded">
                ★
              </span>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="text-xs text-gw-accent uppercase tracking-wider mb-1">
          {product.brand}
        </div>
        <h3 className="font-semibold text-white mb-2 group-hover:text-gw-accent transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gw-text-secondary line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>
        
        {/* Key Features Preview */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.keyFeatures.slice(0, 2).map((feature, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gw-card rounded text-gw-text-tertiary truncate max-w-full">
              {feature.split(' ').slice(0, 3).join(' ')}...
            </span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gw-border">
          <div className="font-mono font-semibold text-white">
            {product.priceDisplay}
          </div>
          {product.rating && (
            <div className="flex items-center gap-1 text-sm text-gw-text-secondary">
              <span className="text-gw-gold">★</span>
              {product.rating}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}