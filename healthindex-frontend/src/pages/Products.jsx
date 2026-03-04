import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Filter, Search, X } from 'lucide-react'
import { getProducts, getCategories } from '../api'

const Products = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState(category || 'All')
  const [searchQuery, setSearchQuery] = useState('')

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

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeFilter === 'All' || p.category === activeFilter
    const matchesSearch = searchQuery === '' || 
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
        <h1 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-6">
          {activeFilter === 'All' ? 'All Products' : categoryLabels[activeFilter] || activeFilter}
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a3a3a3] w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3 bg-[#141414] border border-[#262626] rounded-xl text-[#fafafa] placeholder-[#525252] focus:border-emerald-500 focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3] hover:text-[#fafafa]"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

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
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === cat.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#141414] text-[#a3a3a3] hover:text-[#fafafa] border border-[#262626]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-[#a3a3a3] mb-6">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {/* Product Grid */}
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
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#a3a3a3] text-lg">No products found</p>
            {searchQuery && (
              <button
                onClick={() => {setSearchQuery(''); setActiveFilter('All')}}
                className="mt-4 text-emerald-400 hover:text-emerald-300"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => {
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
                    {product.brand && (
                      <p className="text-[#a3a3a3] text-sm mb-3 capitalize">{product.brand}</p>
                    )}
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
      </div>
    </div>
  )
}

export default Products
