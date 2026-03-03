import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, ExternalLink, Search } from 'lucide-react'
import { getProduct, searchPrices } from '../api'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState(null)
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    fetchProductData()
  }, [id])

  const fetchProductData = async () => {
    try {
      setLoading(true)
      const data = await getProduct(id)
      setProduct(data)
    } catch (err) {
      console.error('Failed to fetch product:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearchPrices = async () => {
    setSearching(true)
    try {
      const results = await searchPrices(id)
      setSearchResults(results)
    } catch (err) {
      console.error('Price search failed:', err)
    } finally {
      setSearching(false)
    }
  }

  const getPrices = (product) => {
    if (!product?.prices) return []
    return Object.entries(product.prices)
      .filter(([_, data]) => data.price)
      .map(([retailer, data]) => ({ retailer, ...data }))
      .sort((a, b) => (a.price || Infinity) - (b.price || Infinity))
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price || 0)
  }

  const categoryLabels = {
    'sauna': 'Sauna',
    'hyperbaric': 'Hyperbaric Chamber',
    'cryotherapy': 'Cryotherapy Device',
    'red-light': 'Red Light Therapy',
    'compression': 'Compression System',
    'pemf': 'PEMF Device'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-pulse text-emerald-400">Loading...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-[#a3a3a3]">Product not found</div>
      </div>
    )
  }

  const prices = getPrices(product)
  const bestPrice = prices[0]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#a3a3a3] mb-6">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-emerald-400">Products</Link>
          <span>/</span>
          <Link to={`/products/${product.category}`} className="hover:text-emerald-400">
            {categoryLabels[product.category] || product.category}
          </Link>
        </div>

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Product Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 mb-4">
            {categoryLabels[product.category] || product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-2">
            {product.name}
          </h1>
          <p className="text-[#a3a3a3]">{product.brand}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Specs */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[#fafafa] mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specs && Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-[#0a0a0a] border border-[#262626] rounded-lg p-4">
                    <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mb-1">{key}</p>
                    <p className="text-[#fafafa] font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Comparison */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[#fafafa] mb-4">Price Comparison</h2>
              <div className="space-y-3">
                {prices.map((price, index) => (
                  <div
                    key={price.retailer}
                    className={`flex items-center justify-between p-4 rounded-xl border ${
                      index === 0
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : 'bg-[#0a0a0a] border-[#262626]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#fafafa] font-medium capitalize">
                        {price.retailer}
                      </span>
                      {index === 0 && (
                        <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full">
                          Best Price
                        </span>
                      )}
                      {price.inStock ? (
                        <span className="text-xs text-emerald-400">In Stock</span>
                      ) : (
                        <span className="text-xs text-[#a3a3a3]">Out of Stock</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-[#fafafa]">
                        {formatPrice(price.price)}
                      </span>
                      {price.url && (
                        <a
                          href={price.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-[#3b82f6] text-white text-sm rounded-lg hover:bg-[#2563eb] transition-colors"
                        >
                          View <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brave Search Results */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#fafafa]">Live Price Search</h2>
                <button
                  onClick={handleSearchPrices}
                  disabled={searching}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
                >
                  <Search className="w-4 h-4" />
                  {searching ? 'Searching...' : 'Search Prices'}
                </button>
              </div>
              
              {searchResults?.results && (
                <div className="space-y-3">
                  {searchResults.results.slice(0, 5).map((result, i) => (
                    <a
                      key={i}
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-[#0a0a0a] border border-[#262626] rounded-lg hover:border-emerald-500/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-[#fafafa] font-medium line-clamp-1">{result.title}</h4>
                          <p className="text-sm text-[#a3a3a3] line-clamp-2 mt-1">{result.description}</p>
                        </div>
                        {result.price && (
                          <span className="text-emerald-400 font-bold whitespace-nowrap ml-4">
                            {formatPrice(result.price)}
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              )}
              
              {!searchResults && !searching && (
                <p className="text-[#a3a3a3] text-sm">
                  Click "Search Prices" to find current prices across the web using Brave Search.
                </p>
              )}
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="space-y-4">
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mb-2">Best Price</p>
                <p className="text-4xl font-bold text-[#fafafa]">
                  {formatPrice(bestPrice?.price)}
                </p>
                <p className="text-sm text-emerald-400 mt-1 capitalize">
                  at {bestPrice?.retailer}
                </p>
              </div>
              
              {bestPrice?.url && (
                <a
                  href={bestPrice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-emerald-500 text-white text-center font-medium rounded-xl hover:bg-emerald-600 transition-colors mb-3"
                >
                  View Deal
                </a>
              )}
              
              <button className="flex items-center justify-center gap-2 w-full py-4 bg-[#141414] border border-[#262626] text-[#fafafa] font-medium rounded-xl hover:bg-[#1a1a1a] transition-colors">
                <Heart className="w-5 h-5" />
                Set Price Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail