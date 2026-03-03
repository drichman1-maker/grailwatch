import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, History, Award, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'History of Comic Book Grading: How CGC Transformed the Hobby | GrailWatch',
  description: 'From the Wild West era to $6M Superman #1. How CGC transformed comic collecting forever since January 1, 2000. Complete history of graded comics.',
  keywords: ['CGC history', 'comic book grading history', 'CGC founded 2000', 'first CGC graded comic', 'comic grading evolution'],
  openGraph: {
    title: 'History of Comic Book Grading: How CGC Transformed the Hobby',
    description: 'From raw speculation to $6M verified sales. The complete story since 2000.',
    type: 'article',
    publishedTime: '2026-03-02',
  },
}

export default function GradingHistoryArticle() {
  const timeline = [
    {
      year: 'Nov 1999',
      event: 'First Book Ever Graded',
      detail: 'Walt Disney\'s Comics & Stories #1 — Serial #0000001001',
      icon: '🥇',
    },
    {
      year: 'Jan 2000',
      event: 'CGC Official Launch',
      detail: 'Certified Guaranty Company launches January 1, 2000 in Sarasota, Florida',
      icon: '🚀',
    },
    {
      year: 'Feb 2000',
      event: 'First Perfect 10.0',
      detail: 'Venom: Lethal Protector #1 — First ever Gem Mint grade awarded',
      icon: '💎',
    },
    {
      year: 'Aug 2001',
      event: 'Label Standardization',
      detail: 'Red label phased out. Blue label becomes standard for all graded comics',
      icon: '🔵',
    },
    {
      year: '2002',
      event: 'Rapid Growth',
      detail: '122,224 books graded — processing ~1,500 comics per week',
      icon: '📈',
    },
    {
      year: '2004',
      event: 'Magazine Grading',
      detail: 'CGC expands to magazines: Warren Publishing, Marvel magazines',
      icon: '📰',
    },
    {
      year: '2006',
      event: 'CGC Registry Launch',
      detail: 'Collectors catalog collections publicly, compete for ranked sets',
      icon: '🏆',
    },
    {
      year: '2010',
      event: 'First $1M Comic',
      detail: 'Action Comics #1 sells for $1M — first comic to crack seven figures',
      icon: '💰',
    },
    {
      year: '2019',
      event: 'Pedigree Labels',
      detail: 'Formal designation for Mile High, Church, Bethlehem collections',
      icon: '👑',
    },
    {
      year: '2024',
      event: '$6M Record Sale',
      detail: 'Action Comics #1 CGC-graded sells for $6M — 6x increase in 14 years',
      icon: '📊',
    },
  ]

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <nav className="mb-8">
        <Link href="/blog" className="flex items-center gap-2 text-gw-text-secondary hover:text-gw-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-gw-purple/20 text-gw-purple text-sm rounded-full">History</span>
          <span className="text-gw-text-tertiary text-sm">March 2, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          History of Comic Book Grading
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          Imagine paying thousands based solely on a dealer's word. No verification. No standardization. 
          No protection. That was comic collecting before <strong>January 1, 2000</strong> — when everything changed forever.
        </p>
      </header>

      {/* The Wild West */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <History className="w-6 h-6 text-gw-accent" />
          The Wild West Era: Before CGC
        </h2>
        
        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-4">
            Before 2000, buying a high-grade comic was a leap of faith. The hobby operated on dealer-driven, 
            subjective assessments that varied wildly from shop to shop. One dealer's "Near Mint" was another's "Very Fine."
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <div className="text-red-400 font-semibold mb-2">❌ Raw Market Problems</div>
              <ul className="text-sm text-gw-text-secondary space-y-1">
                <li>• No standardization</li>
                <li>• Restoration fraud common</li>
                <li>• Extreme price volatility</li>
                <li>• High buyer risk</li>
              </ul>
            </div>
            <div className="p-4 bg-gw-emerald/10 rounded-xl border border-gw-emerald/20">
              <div className="text-gw-emerald font-semibold mb-2">✅ What Collectors Needed</div>
              <ul className="text-sm text-gw-text-secondary space-y-1">
                <li>• Independent verification</li>
                <li>• Consistent grading scale</li>
                <li>• Fraud protection</li>
                <li>• Investment confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Calendar className="w-6 h-6 text-gw-gold" />
          CGC Timeline: 1999 to Today
        </h2>
        
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="glass-card p-4 flex items-start gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-2 py-1 bg-gw-accent/20 text-gw-accent rounded text-sm font-mono">
                    {item.year}
                  </span>
                  <h3 className="font-bold">{item.event}</h3>
                </div>
                <p className="text-gw-text-secondary text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-gw-emerald" />
          Market Impact: From Thousands to Millions
        </h2>
        
        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-6">
            The verified grading system didn't just add credibility — it unlocked an entirely new class of 
            investor confidence in comic books as alternative assets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gw-bg-tertiary rounded-xl">
              <div className="text-3xl font-bold text-gw-accent mb-2">$1M</div>
              <div className="text-sm text-gw-text-tertiary">2010 Record</div>
              <div className="text-xs text-gw-text-secondary mt-1">Action Comics #1</div>
            </div>
            <div className="text-center p-4 bg-gw-bg-tertiary rounded-xl">
              <div className="text-3xl font-bold text-gw-gold mb-2">$6M</div>
              <div className="text-sm text-gw-text-tertiary">2024 Record</div>
              <div className="text-xs text-gw-text-secondary mt-1">Same Issue, CGC</div>
            </div>
            <div className="text-center p-4 bg-gw-bg-tertiary rounded-xl">
              <div className="text-3xl font-bold text-gw-emerald mb-2">6×</div>
              <div className="text-sm text-gw-text-tertiary">Value Increase</div>
              <div className="text-xs text-gw-text-secondary mt-1">In Just 14 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* How CGC Changed Everything */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Award className="w-6 h-6 text-gw-gold" />
          How CGC Changed Everything
        </h2>
        
        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-6">
            The history of comic book grading is ultimately the history of legitimacy. Before CGC, 
            the hobby was passionate but fragmented, held back by distrust. After CGC, it became a 
            structured, data-driven market capable of supporting multi-million-dollar transactions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Standardized grading (same meaning in Tokyo or Texas)',
              'Tamper-evident slabs preserving comics for generations',
              'Restoration detection protecting buyers from fraud',
              'Population reports giving real supply-side data',
              'A shared language unifying global collectors',
              'Mainstream credibility for institutional investors',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gw-bg-tertiary rounded-lg">
                <span className="text-gw-gold font-bold">✓</span>
                <span className="text-sm text-gw-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Be Part of the Story</h2>
        <p className="text-gw-text-secondary mb-6">
          Whether you're a lifelong collector or just discovering graded comics, understanding the 
          history gives you a powerful foundation for making smart acquisitions. The history of this 
          hobby is still being written — make sure you're part of it.
        </p>
        <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
          Explore More Guides
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </section>
    </article>
  )
}
