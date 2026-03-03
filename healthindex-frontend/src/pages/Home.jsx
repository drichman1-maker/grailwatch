import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Heart, ArrowRight, Activity } from 'lucide-react'
import { getProducts } from '../api'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      const { products } = await getProducts()
      // Get one from each category
      const categories = ['sauna', 'hyperbaric', 'cryotherapy', 'red-light', 'compression', 'pemf']
      const featured = categories
        .map(cat => products.find(p => p.category === cat))
        .filter(Boolean)
        .slice(0, 6)
      setFeaturedProducts(featured)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  const getBestPrice = (product) => {
    if (!product?.prices) return null
    const prices = Object.entries(product.prices)
      .filter(([_, data]) => data.inStock && data.price)
      .map(([retailer, data]) => ({ retailer, ...data }))
    if (prices.length === 0) return null
    return prices.reduce((min, p) => p.price < min.price ? p : min, prices[0])
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price || 0)
  }

  const categories = [
    { name: 'Saunas', path: '/products/sauna', icon: '🔥', count: 'Infrared & Traditional' },
    { name: 'Hyperbaric', path: '/products/hyperbaric', icon: '🫧', count: 'Oxygen Therapy' },
    { name: 'Cryotherapy', path: '/products/cryotherapy', icon: '❄️', count: 'Cold Therapy' },
    { name: 'Red Light', path: '/products/red-light', icon: '💡', count: 'Light Therapy' },
    { name: 'Compression', path: '/products/compression', icon: '🦵', count: 'Recovery Boots' },
    { name: 'PEMF', path: '/products/pemf', icon: '⚡', count: 'EMF Therapy' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="max-w-[900px] mx-auto px-6 py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-sm text-[#a3a3a3] mb-8">
          <Activity className="w-4 h-4 text-emerald-400" />
          Medical-grade wellness equipment
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fafafa] mb-4">
          Wellness <span className="text-emerald-400">Intelligence</span>
        </h1>

        <p className="text-xl text-emerald-400/80 mb-4">Medical Device Tracking</p>

        <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Compare prices on saunas, hyperbaric chambers, cryotherapy, and biohacking equipment across certified retailers.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Equipment
          </Link>
          <Link
            to="/alerts"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#141414] border border-[#262626] text-[#fafafa] rounded-xl font-medium hover:bg-[#1a1a1a] transition-colors"
          >
            <Heart className="w-5 h-5" />
            Set Price Alert
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#fafafa]">11+</div>
            <div className="text-sm text-[#a3a3a3]">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#fafafa]">6</div>
            <div className="text-sm text-[#a3a3a3]">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#fafafa]">24/7</div>
            <div className="text-sm text-[#a3a3a3]">Monitoring</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-[#fafafa] mb-8">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all text-center"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-medium text-[#fafafa] group-hover:text-emerald-400 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-[#a3a3a3] mt-1">{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-[#fafafa]">Featured Equipment</h2>
          <Link to="/products" className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#141414] border border-[#262626] rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-[#262626] rounded w-16 mb-3"></div>
                <div className="h-6 bg-[#262626] rounded w-full mb-2"></div>
                <div className="h-8 bg-[#262626] rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => {
              const bestPrice = getBestPrice(product)
              return (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all"
                >
                  {/* Product Image */}
                  <div className="h-48 overflow-hidden bg-[#0a0a0a]">
                    <img
                      src={product.image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium uppercase tracking-wider bg-emerald-500/20 text-emerald-400">
                        {product.category}
                      </span>
                      <span className="text-sm text-[#a3a3a3] capitalize">{bestPrice?.retailer}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#fafafa] mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    {product.specs && (
                      <p className="text-[#a3a3a3] text-sm mb-3">
                        {Object.values(product.specs).slice(0, 2).join(' • ')}
                      </p>
                    )}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mb-1">Best Price</p>
                        <p className="text-2xl font-bold text-[#fafafa]">
                          {formatPrice(bestPrice?.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home