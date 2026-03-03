import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Heart, Menu, X, Search, Bell } from 'lucide-react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Saunas', path: '/products/sauna' },
    { label: 'Hyperbaric', path: '/products/hyperbaric' },
    { label: 'Cryotherapy', path: '/products/cryotherapy' },
    { label: 'Red Light', path: '/products/red-light' },
    { label: 'Compression', path: '/products/compression' },
    { label: 'PEMF', path: '/products/pemf' },
    { label: 'Blog', path: '/blog' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#fafafa]">
              Health<span className="text-emerald-400">Index</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-[#a3a3a3] hover:text-[#fafafa] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#3b82f6] text-white text-sm font-medium rounded-lg hover:bg-[#2563eb] transition-colors">
              <Bell className="w-4 h-4" />
              Price Alerts
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#a3a3a3] hover:text-[#fafafa]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#262626] bg-[#0a0a0a]">
            <nav className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-3 text-[#a3a3a3] hover:text-[#fafafa] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#262626] mt-16 py-8 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#a3a3a3] text-sm mb-2">
            <Link to="/privacy" className="hover:text-emerald-400 mx-2">Privacy</Link>
            <span className="text-[#333]">|</span>
            <Link to="/terms" className="hover:text-emerald-400 mx-2">Terms</Link>
            <span className="text-[#333]">|</span>
            <Link to="/about" className="hover:text-emerald-400 mx-2">About</Link>
          </p>
          <p className="text-[#a3a3a3] text-sm">© 2026 HealthIndex</p>
        </div>
      </footer>
    </div>
  )
}

export default App