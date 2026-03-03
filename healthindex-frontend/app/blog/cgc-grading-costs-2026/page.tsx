import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, DollarSign, Calculator, BadgeCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CGC Grading Costs 2026: Full Tier Breakdown & Turnaround Times | GrailWatch',
  description: 'Complete guide to CGC comic book grading costs in 2026. Modern ($30), Vintage ($45), High Value ($105) tiers explained. Membership discounts, turnaround times, and money-saving tips.',
  keywords: ['CGC grading cost', 'CGC turnaround time', 'comic book grading', 'CGC tier pricing', 'CGC 2026', 'CGC vs CBCS', 'grading costs'],
  openGraph: {
    title: 'CGC Grading Costs 2026: Full Tier Breakdown',
    description: 'How much does CGC grading cost? Complete pricing guide for every tier.',
    type: 'article',
    publishedTime: '2026-03-01',
  },
}

export default function CGCGradingCostsArticle() {
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
          <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-sm rounded-full">Grading Guide</span>
          <span className="text-gw-text-tertiary text-sm">March 1, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          How Much Does It Cost to Get a Comic Book Graded in 2026 & How Long Does CGC Grading Take?
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          Complete CGC tier breakdown with updated 2026 pricing. From $27 Modern Bulk to 4% FMV Unlimited Value — 
          know exactly what you're paying before you ship to Sarasota.
        </p>
      </header>

      {/* Intro */}
      <div className="prose prose-invert prose-lg max-w-none mb-12">
        <p className="lead text-gw-text-secondary">
          You've got a stack of comics you think might be worth something — or maybe you already know they're valuable 
          and want the slab to prove it. Either way, you're staring down the same question every collector eventually faces: 
          <em>How much is CGC grading going to cost me, and how long will I be waiting?</em>
        </p>
        <p>
          With CGC rolling out updated pricing effective January 6, 2026, there's never been a more important time to 
          understand exactly what you're paying for before you ship that box off to Sarasota.
        </p>
      </div>

      {/* CGC Tier Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <DollarSign className="w-6 h-6 text-gw-accent" />
          CGC Grading Costs in 2026: The Full Tier Breakdown
        </h2>
        
        <div className="glass-card overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gw-border text-left">
                  <th className="p-4 text-gw-text-tertiary font-medium">Tier</th>
                  <th className="p-4 text-gw-text-tertiary font-medium">Price</th>
                  <th className="p-4 text-gw-text-tertiary font-medium">Requirements</th>
                  <th className="p-4 text-gw-text-tertiary font-medium">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gw-border/50">
                  <td className="p-4 font-semibold">Modern Bulk</td>
                  <td className="p-4 text-gw-emerald font-mono">$27</td>
                  <td className="p-4 text-gw-text-secondary">25 books minimum</td>
                  <td className="p-4 text-gw-text-secondary">3-9+ months</td>
                </tr>
                <tr className="border-b border-gw-border/50">
                  <td className="p-4 font-semibold">Modern</td>
                  <td className="p-4 text-gw-emerald font-mono">$30</td>
                  <td className="p-4 text-gw-text-secondary">No minimum</td>
                  <td className="p-4 text-gw-text-secondary">3-9+ months</td>
                </tr>
                <tr className="border-b border-gw-border/50 bg-gw-accent/5">
                  <td className="p-4 font-semibold">Vintage Bulk <span className="text-xs text-gw-accent ml-2">NEW</span></td>
                  <td className="p-4 text-gw-emerald font-mono">$42</td>
                  <td className="p-4 text-gw-text-secondary">25 min | FMV ≤$400</td>
                  <td className="p-4 text-gw-text-secondary">3-9+ months</td>
                </tr>
                <tr className="border-b border-gw-border/50">
                  <td className="p-4 font-semibold">Vintage</td>
                  <td className="p-4 text-gw-emerald font-mono">$45</td>
                  <td className="p-4 text-gw-text-secondary">No minimum</td>
                  <td className="p-4 text-gw-text-secondary">3-9+ months</td>
                </tr>
                <tr className="border-b border-gw-border/50">
                  <td className="p-4 font-semibold">High Value</td>
                  <td className="p-4 text-gw-gold font-mono">$105</td>
                  <td className="p-4 text-gw-text-secondary">FMV ≤$1,000</td>
                  <td className="p-4 text-gw-emerald">~15 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Unlimited Value</td>
                  <td className="p-4 text-gw-gold font-mono">4% FMV ($135 min)</td>
                  <td className="p-4 text-gw-text-secondary">No cap</td>
                  <td className="p-4 text-gw-emerald">~7 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm text-gw-text-tertiary">
          *Pricing effective January 6, 2026. Announcement made December 9, 2025.
        </p>
      </section>

      {/* Tier Details */}
      <section className="space-y-8 mb-12">
        <div className="glass-card p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gw-emerald/20 flex items-center justify-center flex-shrink-0">
              <span className="text-gw-emerald font-bold">$27</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Modern Bulk</h3>
              <p className="text-gw-text-secondary mb-3">
                Your most affordable entry point. Designed for collectors with larger volumes of contemporary comics. 
                No stated FMV cap makes it ideal for modern keys where values are typically lower.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="text-gw-text-tertiary">Min: 25 books</span>
                <span className="text-gw-text-tertiary">Best for: Modern runs, recent keys</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 border border-gw-accent/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gw-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-gw-accent font-bold text-sm">NEW</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Vintage Bulk — $42</h3>
              <p className="text-gw-text-secondary mb-3">
                <strong>Brand new for 2026.</strong> Fills the gap between modern and full vintage pricing. 
                Perfect for Silver Age readers, Bronze Age runs, or lower-value Golden Age books under $400 FMV.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="text-gw-text-tertiary">Min: 25 books</span>
                <span className="text-gw-text-tertiary">Max FMV: $400</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gw-gold/20 flex items-center justify-center flex-shrink-0">
              <span className="text-gw-gold font-bold text-xs">FAST</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">High Value — $105</h3>
              <p className="text-gw-text-secondary mb-3">
                When your book is worth real money, this tier reflects that. Built for significant keys where 
                condition dramatically impacts value. The ~15 working day turnaround matters when market timing is everything.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="text-gw-emerald">~15 working days</span>
                <span className="text-gw-text-tertiary">Max FMV: $1,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround Times */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Clock className="w-6 h-6 text-gw-accent" />
          How Long Does CGC Grading Take in 2026?
        </h2>
        
        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-4">
            Turnaround time is the question every collector dreads asking, because the honest answer has historically been 
            <em> a long time.</em>
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gw-card rounded-xl">
              <div className="text-gw-emerald font-semibold mb-1">Fast Tiers</div>
              <ul className="space-y-2 text-sm text-gw-text-secondary">
                <li>• High Value: ~15 working days</li>
                <li>• Unlimited Value: ~7 working days</li>
              </ul>
            </div>
            <div className="p-4 bg-gw-card rounded-xl">
              <div className="text-gw-text-tertiary font-semibold mb-1">Standard Tiers</div>
              <ul className="space-y-2 text-sm text-gw-text-secondary">
                <li>• Modern/Vintage: 3-9+ months</li>
                <li>• Varies by submission volume</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Money Saving Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BadgeCheck className="w-6 h-6 text-gw-accent" />
          How to Save Money on CGC Grading
        </h2>

        <div className="space-y-4">
          <div className="glass-card p-6">
            <h3 className="font-semibold text-lg mb-2">Join CGC as a Member</h3>
            <p className="text-gw-text-secondary mb-3">
              CGC membership isn't just for the forums — it directly reduces your grading costs.
            </p>
            <ul className="space-y-2 text-gw-text-secondary">
              <li>• <strong>Associate members:</strong> 10% discount</li>
              <li>• <strong>Premium/Elite members:</strong> 20% discount</li>
            </ul>
            <p className="text-sm text-gw-accent mt-3">
              A 20% discount on 25-book Modern Bulk saves $135 instantly.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold text-lg mb-2">Know Your FMV Before You Choose</h3>
            <p className="text-gw-text-secondary">
              Submitting a $600 book under High Value when it qualifies for Vintage? You're overpaying. 
              Research sold listings on eBay and price databases before finalizing your submission.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold text-lg mb-2">Consider CBCS or PGX for Lower-Value Books</h3>
            <p className="text-gw-text-secondary mb-3">
              CGC is the industry standard, but it's not your only option:
            </p>
            <ul className="space-y-2 text-gw-text-secondary">
              <li>• <strong>CBCS:</strong> $20–$60 per book</li>
              <li>• <strong>PGX:</strong> $15–$50 per book</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <Calculator className="w-12 h-12 text-gw-accent mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-3">Ready to Grade Smarter?</h2>
        <p className="text-gw-text-secondary mb-6 max-w-xl mx-auto">
          Track your collection's value, compare grades, and find the best deals on already-graded comics 
          with GrailWatch's price intelligence tools.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/comics" className="px-6 py-3 bg-gw-accent text-black font-semibold rounded-xl hover:bg-white transition-colors">
            Browse Graded Comics
          </Link>
          <Link href="/watchlist" className="px-6 py-3 border border-gw-border text-white rounded-xl hover:bg-white/5 transition-colors">
            Create Watchlist
          </Link>
        </div>
      </section>
    </article>
  )
}
