import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  getProductById, 
  getProductsByCategory,
  getCategoryById,
  Product,
  CategoryInfo 
} from '@/lib/wellness-data'
import { 
  Star, 
  ExternalLink, 
  Check, 
  ArrowLeft, 
  Package,
  Zap,
  Award,
  Sparkles
} from 'lucide-react'
import type { Metadata } from 'next'

// ═══════════════════════════════════════════════════════════════
// Product Detail Page — Individual Product View
// ═══════════════════════════════════════════════════════════════

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id)
  if (!product) {
    return { title: 'Product Not Found' }
  }
  
  return {
    title: `${product.name} | Health Index`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
    }
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id)
  
  if (!product) {
    notFound()
  }
  
  const category = getCategoryById(product.category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gw-text-secondary">
        <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          All Products
        </Link>
        <span>/</span>
        <Link 
          href={`/products?category=${product.category}`}
          className="hover:text-white transition-colors"
        >
          {category?.name}
        </Link>
        <span>/</span>
        <span className="text-white truncate">{product.name}</span>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image Placeholder */}
        <div className="glass-card p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              background: `radial-gradient(circle at center, ${category?.color}40, transparent 70%)` 
            }}
          />
          <div className="text-center relative z-10">
            <div 
              className="w-32 h-32 rounded-2xl flex items-center justify-center text-6xl mx-auto mb-4"
              style={{ 
                background: `linear-gradient(135deg, ${category?.color}50, ${category?.color}10)`,
                boxShadow: `0 20px 40px ${category?.color}30`
              }}
            >
              {category?.icon}
            </div>
            <p className="text-gw-text-tertiary text-sm">Product image placeholder</p>
          </div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isFeatured && (
              <span className="px-3 py-1.5 bg-gw-gold/20 text-gw-gold text-xs font-bold rounded-full flex items-center gap-1">
                <Award className="w-3 h-3" />
                FEATURED
              </span>
            )}
            {product.isNew && (
              <span className="px-3 py-1.5 bg-gw-accent/20 text-gw-accent text-xs font-bold rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                NEW
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span 
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: `${category?.color}20`,
                  color: category?.color
                }}
              >
                {category?.icon} {category?.name}
              </span>
              {product.affiliateNetwork?.includes('Approved') && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                  ✅ Verified Partner
                </span>
              )}
            </div>
            
            <p className="text-gw-accent text-sm font-medium mb-2">{product.brand}</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating!) 
                          ? 'text-gw-gold fill-gw-gold' 
                          : 'text-gw-text-tertiary'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-white">{product.rating}</span>
                <span className="text-gw-text-secondary">
                  ({product.reviewCount?.toLocaleString()} reviews)
                </span>
              </div>
            </div>
          )}

          {/* Price */}
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-4xl font-bold text-white">
                {product.priceDisplay}
              </span>
              {product.priceRange.min !== product.priceRange.max && (
                <span className="text-gw-text-secondary">starting at</span>
              )}
            </div>
            
            {/* CTA Button */}
            <a 
              href={product.affiliateLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gw-accent text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              View on {product.brand} Website
              <ExternalLink className="w-5 h-5" />
            </a>
            
            {product.affiliateNetwork && (
              <p className="text-xs text-gw-text-tertiary text-center">
                Affiliate partner: {product.affiliateNetwork}
              </p>
            )}
          </div>

          {/* Short Description */}
          <p className="text-gw-text-secondary text-lg leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Key Features */}
        <div className="lg:col-span-2 glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-gw-accent" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gw-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gw-accent" />
                </div>
                <span className="text-gw-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Package className="w-5 h-5 text-gw-accent" />
            Specifications
          </h2>
          <div className="space-y-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start gap-4 py-3 border-b border-gw-border last:border-0">
                <span className="text-gw-text-secondary capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span className="text-white font-medium text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>Related in {category?.name}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map(related => (
              <RelatedCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}

      {/* SEO/Schema Info */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            brand: { '@type': 'Brand', name: product.brand },
            description: product.description,
            offers: {
              '@type': 'Offer',
              price: product.priceRange.min,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock'
            },
            aggregateRating: product.rating ? {
              '@type': 'AggregateRating',
              ratingValue: product.rating,
              reviewCount: product.reviewCount
            } : undefined
          })
        }}
      />
    </div>
  )
}

function RelatedCard({ product }: { product: Product }) {
  const category = getCategoryById(product.category)
  
  return (
    <Link href={`/products/${product.id}`} className="block group">
      <div className="glass-card-hover p-4">
        <div className="flex items-start gap-4">
          <div 
            className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${category?.color}30, ${category?.color}05)` }}
          >
            {category?.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gw-accent text-xs font-medium mb-1">{product.brand}</p>
            <h3 className="font-semibold text-white text-sm group-hover:text-gw-accent transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="font-mono text-gw-emerald text-sm mt-1">
              {product.priceDisplay}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}