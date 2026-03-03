import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Search, Menu, Heart } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://healthindex.io'),
  title: {
    default: 'Health Index | Wellness Machines & Recovery Tech',
    template: '%s | Health Index',
  },
  description: 'Curated recovery and wellness technology for home use. Compare saunas, red light therapy, cryotherapy, PEMF, compression, and more.',
  keywords: ['wellness', 'recovery', 'infrared sauna', 'red light therapy', 'cryotherapy', 'PEMF', 'compression therapy', 'health optimization'],
  authors: [{ name: 'Health Index' }],
  creator: 'Health Index',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://healthindex.io',
    siteName: 'Health Index',
    title: 'Health Index | Wellness Machines & Recovery Tech',
    description: 'Curated recovery and wellness technology for home use.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Index | Wellness Machines & Recovery Tech',
    description: 'Curated recovery and wellness technology for home use.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gw-bg min-h-screen">
        {/* Navigation */}
        <header className="sticky top-0 z-50 glass-card border-b border-gw-border rounded-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gw-accent rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">H</span>
                </div>
                <span className="font-display text-xl font-bold text-white hidden sm:block">
                  Health Index
                </span>
              </Link>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/products" className="text-gw-text-secondary hover:text-white transition-colors text-sm font-medium">
                  All Products
                </Link>
                <Link href="/products?category=sauna" className="text-gw-text-secondary hover:text-white transition-colors text-sm font-medium">
                  Saunas
                </Link>
                <Link href="/products?category=red-light" className="text-gw-text-secondary hover:text-white transition-colors text-sm font-medium">
                  Red Light
                </Link>
                <Link href="/products?category=cold-plunge" className="text-gw-text-secondary hover:text-white transition-colors text-sm font-medium">
                  Cold Plunge
                </Link>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Link 
                  href="/products" 
                  className="p-2 text-gw-text-secondary hover:text-white transition-colors"
                >
                  <Search className="w-5 h-5" />
                </Link>
                <button className="md:hidden p-2 text-gw-text-secondary hover:text-white transition-colors">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gw-border mt-16 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gw-accent rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">H</span>
                  </div>
                  <span className="font-display text-lg font-bold text-white">
                    Health Index
                  </span>
                </div>
                <p className="text-gw-text-secondary text-sm">
                  Curated wellness machines for home recovery and optimization.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-gw-text-secondary">
                  <li><Link href="/products?category=sauna" className="hover:text-white transition-colors">Infrared Saunas</Link></li>
                  <li><Link href="/products?category=red-light" className="hover:text-white transition-colors">Red Light Therapy</Link></li>
                  <li><Link href="/products?category=cold-plunge" className="hover:text-white transition-colors">Cold Plunge</Link></li>
                  <li><Link href="/products?category=pemf" className="hover:text-white transition-colors">PEMF Therapy</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gw-text-secondary">
                  <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">Buying Guides</span></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">Research</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gw-text-secondary">
                  <li><span className="hover:text-white transition-colors cursor-pointer">Affiliate Disclosure</span></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gw-border mt-8 pt-8 text-center text-sm text-gw-text-tertiary">
              © 2026 Health Index. All rights reserved. Affiliate links used.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}