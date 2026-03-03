import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Filter } from 'lucide-react'
import { getProducts, getCategories } from '../api'

const Products = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState(category || 'All')

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  useEffect(() => {
    if (category) {
      setActiveFilter(category)
    }
  }, [category])

  const fetchCategories = async () => {
    const cats = await getCategories()
    setCategories(cats)
  }

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const { products: data } = await getProducts()
      setProducts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
    setLoading(false)
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

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter)

  const categoryLabels = {
    'sauna': 'Saunas',
    'hyperbaric': 'Hyperbaric Chambers',
    'cryotherapy': 'Cryotherapy',
    'red-light': 'Red Light Therapy',
    'compression': 'Compression Systems',
    'pemf': 'PEMF Devices'
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#a3a3a3] mb-6">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-emerald-400">Products</Link>
          {activeFilter !== 'All' && (
            <>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#fafafa]">{categoryLabels[activeFilter] || activeFilter}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-8">
          {activeFilter === 'All' ? 'All Products' : categoryLabels[activeFilter] || activeFilter}
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Filter className="w-4 h-4 text-[#a3a3a3] mr-2" />
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === 'All'
                ? 'bg-emerald-500 text-white'
                : 'bg-[#141414] text-[#a3a3a3] hover:text-[#fafafa] border border-[#262626]'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#141414] text-[#a3a3a3] hover:text-[#fafafa] border border-[#262626]'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
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
            {filteredProducts.map((product) => {
              const bestPrice = getBestPrice(product)
              const allPrices = product.prices ? Object.values(product.prices) : []
              const anyInStock = allPrices.some(p => p.inStock && p.price)
              const inStockCount = allPrices.filter(p => p.inStock && p.price).length
              const stockStatus = !anyInStock ? 'out' : inStockCount === 1 ? 'limited' : 'in-stock'
              return (
                <div
                  key={product.id}
                  className="group bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all flex flex-col"
                >
                  {/* Product Image */}
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="h-48 overflow-hidden bg-[#0a0a0a] relative">
                      <img
                        src={product.image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Stock badge overlay */}
                      <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold ${
                        stockStatus === 'out' ? 'bg-red-500/90 text-white' :
                        stockStatus === 'limited' ? 'bg-orange-500/90 text-white' :
                        'bg-emerald-500/90 text-white'
                      }`}>
                        {stockStatus === 'out' ? 'OUT OF STOCK' : stockStatus === 'limited' ? 'LIMITED' : 'IN STOCK'}
                      </div>
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium uppercase tracking-wider bg-emerald-500/20 text-emerald-400">
                        {product.category}
                      </span>
                      <span className="text-xs text-[#a3a3a3] capitalize">{product.brand}</span>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-semibold text-[#fafafa] mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    {product.specs && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                          <span key={key} className="text-xs px-2 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-[#a3a3a3]">
                            {value}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mb-1">Best Price</p>
                          <p className="text-2xl font-bold text-[#fafafa]">
                            {formatPrice(bestPrice?.price)}
                          </p>
                        </div>
                        {bestPrice?.price && (
                          <span className="text-sm text-emerald-400">
                            from {bestPrice.retailer}
                          </span>
                        )}
                      </div>
                      {bestPrice?.url ? (
                        <a
                          href={bestPrice.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 bg-emerald-500 text-white text-center text-sm font-medium rounded-xl hover:bg-emerald-600 transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          View Deal →
                        </a>
                      ) : (
                        <Link
                          to={`/product/${product.id}`}
                          className="block w-full py-3 bg-[#262626] text-[#a3a3a3] text-center text-sm font-medium rounded-xl hover:bg-[#333] transition-colors"
                        >
                          View Details
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#a3a3a3]">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products