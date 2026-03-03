'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Eye, Search, User } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Command Center' },
  { href: '/products', label: 'Live Market' },
  { href: '/comics', label: 'Browse' },
  { href: '/blog', label: 'Guides' },
  { href: '/vault', label: 'Vault' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-gw-bg/80 backdrop-blur-xl border-b border-gw-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gw-accent rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-black" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight">
              GRAIL<span className="text-gw-accent">WATCH</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-gw-text-secondary hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gw-text-secondary hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-gw-accent rounded-full border-2 border-gw-border-strong" />
          </div>
        </div>
      </div>
    </header>
  )
}
