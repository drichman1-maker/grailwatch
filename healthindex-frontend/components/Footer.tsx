import Link from 'next/link'
import { BookOpen, Scale, DollarSign, TrendingUp, Shield, Clock } from 'lucide-react'

export function Footer() {
  const blogLinks = [
    { href: '/blog/cgc-grading-costs-2026', label: 'CGC Grading Costs', icon: DollarSign },
    { href: '/blog/cgc-vs-cbcs-pgx', label: 'CGC vs CBCS vs PGX', icon: Scale },
    { href: '/blog/best-comics-to-grade-2026', label: 'Best Comics to Grade', icon: TrendingUp },
    { href: '/blog/first-appearance-premium', label: 'First Appearance Guide', icon: BookOpen },
    { href: '/blog/raw-vs-graded', label: 'Raw vs Graded', icon: Shield },
    { href: '/blog/golden-age-vs-silver-age', label: 'Golden vs Silver Age', icon: Clock },
  ]

  return (
    <footer className="border-t border-gw-border bg-gw-bg">
      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-xl">GRAIL<span className="text-gw-accent">WATCH</span></span>
            </Link>
            <p className="text-sm text-gw-text-secondary mb-4">
              Track comic book prices, discover investment opportunities, and build your grail collection.
            </p>
            <p className="text-xs text-gw-text-tertiary">© 2026 GrailWatch. All rights reserved.</p>
          </div>

          {/* Guides & Education */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gw-accent" />
              Collector Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {blogLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-gw-text-secondary hover:text-gw-accent transition-colors group"
                >
                  <link.icon className="w-4 h-4 text-gw-text-tertiary group-hover:text-gw-accent" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/products" className="block text-sm text-gw-text-secondary hover:text-white transition-colors">
                Live Market
              </Link>
              <Link href="/comics" className="block text-sm text-gw-text-secondary hover:text-white transition-colors">
                Browse Comics
              </Link>
              <Link href="/watchlist" className="block text-sm text-gw-text-secondary hover:text-white transition-colors">
                Watchlist
              </Link>
              <Link href="/vault" className="block text-sm text-gw-text-secondary hover:text-white transition-colors">
                My Vault
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gw-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-gw-text-tertiary">
            <Link href="/blog" className="hover:text-white transition-colors">All Guides</Link>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">API</a>
          </div>
          <div className="flex items-center gap-2 text-xs text-gw-text-tertiary">
            <span className="w-2 h-2 bg-gw-emerald rounded-full animate-pulse" />
            Live data from eBay + Heritage
          </div>
        </div>
      </div>
    </footer>
  )
}
