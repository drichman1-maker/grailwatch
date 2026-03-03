import Link from 'next/link'
import { 
  PRODUCTS, 
  CATEGORIES, 
  getFeaturedProducts, 
  getProductsByCategory,
  getCategoryById,
  searchProducts,
  Product,
  CategoryInfo,
  ProductCategory
} from '@/lib/wellness-data'
import { Search, Filter, ArrowUpDown, ExternalLink, Star, Sparkles } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
// Products Page — Wellness Machines Marketplace
// ═══════════════════════════════════════════════════════════════

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { sort?: string; category?: string; q?: string }
}) {
  const { sort, category, q } = searchParams
  
  // Get products based on filters
  let products: Product[] = []
  
  if (q) {
    products = searchProducts(q)
  } else if (category && category !== 'all') {
    products = getProductsByCategory(category as ProductCategory)
  } else {
    products = PRODUCTS
  }
  
  // Sort
  if (sort === 'price-low') {
    products = [...products].sort((a, b) => a.priceRange.min - b.priceRange.min)
  } else if (sort === 'price-high') {
    products = [...products].sort((a, b) => b.priceRange.max - a.priceRange.max)
  } else if (sort === 'rating') {
    products = [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0))
  } else if (sort === 'name') {
    products = [...products].sort((a, b) => a.name.localeCompare(b.name))
  }
  
  const activeCategory = category || 'all'
  const activeSort = sort || 'featured'
  
  // Get featured products for hero section
  const featured = getFeaturedProducts().slice(0, 3)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Wellness Machines</h1>
          <p className="text-gw-text-secondary mt-1">
            Curated recovery and wellness technology for home use
          </p>
        </div>
        
        {/* Search */}
        <form className="relative w-full lg:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gw-text-tertiary" />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search products..."
            className="w-full bg-gw-card border border-gw-border rounded-xl py-3 pl-10 pr-4 text-white placeholder-gw-text-tertiary focus:outline-none focus:border-gw-accent transition-colors"
          />
        </form>
      </div>
      
      {/* Featured Products Hero */}
      {!q && activeCategory === 'all' && (
        <section className="animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gw-gold" />
            <h2 className="text-lg font-semibold">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(product => (
              <FeaturedCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
      
      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <Filter className="w-4 h-4 text-gw-text-tertiary" />
        <CategoryLink active={activeCategory === 'all'} href="/products">All</CategoryLink>
        {CATEGORIES.map(cat => (
          <CategoryLink 
            key={cat.id} 
            active={activeCategory === cat.id} 
            href={`/products?category=${cat.id}`}
          >
            <span className="mr-1">{cat.icon}</span>
            {cat.name}
          </CategoryLink>
        ))}
      </div>
      
      {/* Sort */}
      <div className="flex items-center gap-3 text-sm">
        <ArrowUpDown className="w-4 h-4 text-gw-text-tertiary" />
        <span className="text-gw-text-secondary">Sort by:</span>
        <SortLink active={activeSort === 'featured'} href="/products">Featured</SortLink>
        <SortLink active={activeSort === 'rating'} href="/products?sort=rating">Top Rated</SortLink>
        <SortLink active={activeSort === 'price-low'} href="/products?sort=price-low">Price: Low → High</SortLink>
        <SortLink active={activeSort === 'price-high'} href="/products?sort=price-high">Price: High → Low</SortLink>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gw-card rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gw-text-tertiary" />
          </div>
          <p className="text-gw-text-secondary">No products found</p>
        </div>
      )}
      
      {/* Summary Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gw-text-secondary">
        <div>
          Showing {products.length} of {PRODUCTS.length} products
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {getFeaturedProducts().length} featured
          </span>
        </div>
      </div>
    </div>
  )
}

function FeaturedCard({ product }: { product: Product }) {
  const category = getCategoryById(product.category)
  
  return (
    <Link href={`/products/${product.id}`} className="block group">
      <div className="glass-card-hover p-5 h-full relative overflow-hidden">
        {/* Featured Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-gw-gold/20 text-gw-gold text-xs font-bold rounded">
            FEATURED
          </span>
        </div>
        
        {/* Category Icon */}
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
          style={{ background: `linear-gradient(135deg, ${category?.color}40, ${category?.color}10)` }}
        >
          {category?.icon}
        </div>
        
        <div className="text-xs text-gw-accent uppercase tracking-wider mb-2">
          {product.brand}
        </div>
        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gw-accent transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gw-text-secondary line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="font-mono font-semibold text-gw-emerald">
            {product.priceDisplay}
          </div>
          {product.rating && (
            <div className="flex items-center gap-1 text-sm text-gw-text-secondary">
              <Star className="w-4 h-4 text-gw-gold fill-gw-gold" />
              {product.rating}
            </div>
          )}
        </div>
      </div>
    </Link>
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
            className="w-12 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
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
          <div className="flex items-center gap-3 text-sm text-gw-text-secondary">
            {product.rating && (
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-gw-gold fill-gw-gold" />
                {product.rating}
              </span>
            )}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </Link>
  )
}

function CategoryLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center ${
        active
          ? 'bg-gw-accent text-black'
          : 'bg-gw-card border border-gw-border text-gw-text-secondary hover:text-white hover:border-gw-accent'
      }`}
    >
      {children}
    </Link>
  )
}

function SortLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`transition-colors ${
        active ? 'text-gw-accent font-medium' : 'text-gw-text-tertiary hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}