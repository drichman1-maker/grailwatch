import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, DollarSign, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top 10 Most Valuable CGC 9.8 Comics Ever Sold | GrailWatch',
  description: 'Record-breaking CGC 9.8 comic book sales from $1.38M Spider-Man to $3.6M Amazing Fantasy #15. Complete price guide with sale dates and investment insights.',
  keywords: ['CGC 9.8 comics', 'most valuable comics', 'record comic sales', 'CGC graded comics investment', 'comic book auction records'],
  openGraph: {
    title: 'Top 10 Most Valuable CGC 9.8 Comics Ever Sold',
    description: 'From $1.38M Spider-Man to theoretical $5M+ Amazing Fantasy #15. The complete record-breaking list.',
    type: 'article',
    publishedTime: '2026-03-02',
  },
}

export default function Top10CGCComicsArticle() {
  const topComics = [
    { rank: 1, issue: 'Amazing Spider-Man #1', grade: 'CGC 9.8', price: 1380000, date: 'Jan 2024', year: 1963, character: 'Spider-Man' },
    { rank: 2, issue: 'Showcase #4', grade: 'CGC 9.6', price: 900000, date: '2022', year: 1956, character: 'Flash' },
    { rank: 3, issue: 'Tales of Suspense #39', grade: 'CGC 9.8', price: 840000, date: 'Apr 2024', year: 1963, character: 'Iron Man' },
    { rank: 4, issue: 'Captain America Comics #1', grade: 'CGC 9.8', price: 750000, date: '—', year: 1941, character: 'Captain America' },
    { rank: 5, issue: 'Daredevil #1', grade: 'CGC 9.8', price: 360000, date: 'Apr 2024', year: 1964, character: 'Daredevil' },
    { rank: 6, issue: 'Fantastic Four #1', grade: 'CGC 9.8', price: 500000, date: 'Est.', year: 1961, character: 'Fantastic Four' },
    { rank: 7, issue: 'X-Men #1', grade: 'CGC 9.8', price: 492000, date: '—', year: 1963, character: 'X-Men' },
    { rank: 8, issue: 'Journey Into Mystery #83', grade: 'CGC 9.8', price: 450000, date: '—', year: 1962, character: 'Thor' },
    { rank: 9, issue: 'Brave and the Bold #28', grade: 'CGC 9.8', price: 400000, date: '—', year: 1960, character: 'Justice League' },
    { rank: 10, issue: 'Amazing Fantasy #15', grade: 'CGC 9.6*', price: 3600000, date: '—', year: 1962, character: 'Spider-Man' },
  ]

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/blog" className="flex items-center gap-2 text-gw-text-secondary hover:text-gw-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-sm rounded-full">Investment Guide</span>
          <span className="text-gw-text-tertiary text-sm">March 2, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Top 10 Most Valuable CGC 9.8 Comics Ever Sold
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          What if a single comic book tucked away in a forgotten box could be worth more than a luxury home? 
          From <strong>$1.38 million Spider-Man</strong> to a theoretical <strong>$5M+ Amazing Fantasy #15</strong> — 
          these record-breaking sales will stun you.
        </p>
      </header>

      {/* Why CGC 9.8 Matters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Award className="w-6 h-6 text-gw-gold" />
          Why CGC 9.8 Matters: The Gold Standard
        </h2>
        
        <div className="glass-card p-6 mb-6">
          <p className="text-gw-text-secondary mb-4">
            CGC grades comics on a scale from 0.5 to 10.0. A <strong>9.8 Near Mint/Mint</strong> is the pinnacle 
            for most collectible books — indicating nearly flawless condition with tight staples, white pages, 
            minimal wear, and no printing defects.
          </p>
          
          <div className="p-4 bg-gw-gold/10 rounded-xl border border-gw-gold/20">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-gw-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gw-gold mb-1">Record Context</div>
                <p className="text-sm text-gw-text-secondary">
                  Amazing Fantasy #15 CGC 9.6 — the first appearance of Spider-Man — sold for a staggering 
                  <strong> $3.6 million</strong>. A verified 9.8 copy could be worth $5M+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-gw-emerald" />
          The Top 10 Most Valuable CGC Comics
        </h2>
        
        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gw-bg-tertiary border-b border-gw-border">
                <th className="text-left p-4 font-semibold">Rank</th>
                <th className="text-left p-4 font-semibold">Comic</th>
                <th className="text-left p-4 font-semibold">Grade</th>
                <th className="text-right p-4 font-semibold">Sale Price</th>
                <th className="text-left p-4 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {topComics.map((comic, index) => (
                <tr key={comic.rank} className="border-b border-gw-border/50 hover:bg-gw-bg-tertiary/50">
                  <td className="p-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                      index < 3 ? 'bg-gw-gold text-gw-bg-primary' : 'bg-gw-bg-tertiary text-gw-text-primary'
                    }`}>
                      {comic.rank}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="font-medium">{comic.issue}</div>
                    <div className="text-sm text-gw-text-tertiary">{comic.character} ({comic.year})</div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-gw-accent/20 text-gw-accent rounded text-sm">
                      {comic.grade}
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono font-semibold text-gw-emerald">
                    ${(comic.price / 1000000).toFixed(2)}M
                  </td>
                  <td className="p-4 text-gw-text-tertiary text-sm">{comic.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-gw-text-tertiary mt-4">
          * Amazing Fantasy #15 record was CGC 9.6. A 9.8 copy would likely command $5M+
        </p>
      </section>

      {/* Key Insights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Market Insights</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3 text-gw-gold">Silver Age Dominance</h3>
            <p className="text-gw-text-secondary text-sm">
              Books from 1956-1969 survived in pristine condition at incredibly low rates. 
              Newsprint distribution and children reading them repeatedly made 9.8 grades 
              extraordinarily rare.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3 text-gw-emerald">First Appearances Rule</h3>
            <p className="text-gw-text-secondary text-sm">
              Every book on this list features a major character's first appearance. 
              Origin stories command the highest premiums in the graded comic market.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3 text-gw-accent">Grade Sensitivity</h3>
            <p className="text-gw-text-secondary text-sm">
              Even a single grade point difference can mean hundreds of thousands of dollars. 
              CGC 9.8 vs 9.6 can be a 2-3x multiplier on key issues.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3 text-gw-purple">2024 Record Year</h3>
            <p className="text-gw-text-secondary text-sm">
              April 2024 saw multiple records shattered: Iron Man, Daredevil, and Spider-Man 
              all hit new all-time highs as MCU momentum continues.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your High-Grade Collection</h2>
        <p className="text-gw-text-secondary mb-6">
          The most valuable CGC 9.8 comics share three traits: iconic first appearances, 
          Silver Age provenance, and near-perfect preservation. The next record-breaking 
          sale might be sitting in your longbox right now.
        </p>
        <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
          Explore More Guides
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </section>
    </article>
  )
}
