import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Scale, Shield, TrendingUp, AlertCircle, Package, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Raw vs Graded Comics: Which Should You Buy as an Investment? | GrailWatch',
  description: 'Complete guide to raw vs graded comics for investment. When to buy CGC slabs, when to buy raw, and which makes more money. Real scenarios and hard data.',
  keywords: ['raw vs graded comics', 'buy graded comics', 'raw comic investment', 'CGC investment', 'slabbed comics', 'comic book arbitrage'],
  openGraph: {
    title: 'Raw vs Graded Comics: Investment Guide',
    description: 'Which makes more money? Complete breakdown with real scenarios.',
    type: 'article',
    publishedTime: '2026-03-01',
  },
}

export default function RawVsGradedArticle() {
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
          <span className="px-3 py-1 bg-gw-accent/20 text-gw-accent text-sm rounded-full">Investment Strategy</span>
          <span className="text-gw-text-tertiary text-sm">March 1, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Raw vs. Graded Comics: Which Should You Buy as an Investment?
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          A first appearance looks clean, maybe a 9.0, and the dealer wants $200 raw. The same issue 
          in CGC 9.8 is $1,800. Which do you buy — and which will make you more money?
        </p>
      </header>

      {/* The Scenario */}
      <section className="mb-12">
        <div className="glass-card p-6 border-l-4 border-gw-gold">
          <div className="flex items-start gap-4">
            <Scale className="w-6 h-6 text-gw-gold flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gw-gold mb-2">The Dilemma</h2>
              <p className="text-gw-text-secondary">
                The raw vs. graded comics debate is one of the most hotly contested topics in comic 
                book investment. Your choice can mean the difference between a smart acquisition 
                and an expensive lesson.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What's the Difference?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-gw-text-secondary" />
              <h3 className="text-xl font-bold">Raw Comics</h3>
            </div>
            <p className="text-gw-text-secondary mb-4">
              Simply ungraded — no third-party evaluation, no protective slab. You buy as-is, 
              assess condition yourself, and take the seller's word on grade.
            </p>
            <ul className="space-y-2 text-sm text-gw-text-secondary">
              <li>• Lower entry cost</li>
              <li>• Full control over pressing/submitting</li>
              <li>• Can be read and enjoyed</li>
              <li>• Requires grading expertise</li>
            </ul>
          </div>

          <div className="glass-card p-6 border border-gw-accent/30">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-gw-accent" />
              <h3 className="text-xl font-bold text-gw-accent">Graded Comics</h3>
            </div>
            <p className="text-gw-text-secondary mb-4">
              Submitted to CGC/CBCS. Trained experts evaluate condition (0.5–10.0), seal in 
              tamper-evident slab, assign label color based on history.
            </p>
            <ul className="space-y-2 text-sm text-gw-text-secondary">
              <li>• Verified condition</li>
              <li>• Archival protection</li>
              <li>• Higher resale value</li>
              <li>• Instant market confidence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case for Graded */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-gw-emerald" />
          The Case for Graded Comics
        </h2>

        <div className="glass-card p-6 mb-6">
          <p className="text-gw-text-secondary mb-4">
            If your primary goal is <strong>long-term value appreciation</strong>, graded comics — 
            particularly CGC 9.8 key issues — have a compelling track record.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gw-emerald/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-gw-emerald" />
              </div>
              <div>
                <div className="font-semibold">Superior Resale Value</div>
                <p className="text-sm text-gw-text-secondary">
                  "CGC 9.8" removes ambiguity. A raw AF #15 in what <em>looks</em> like 7.0 might fetch $10K. 
                  CGC 7.0 commands significantly more — no negotiation over condition.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gw-emerald/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-gw-emerald" />
              </div>
              <div>
                <div className="font-semibold">Counterfeit & Restoration Protection</div>
                <p className="text-sm text-gw-text-secondary">
                  Pre-1970 books are rife with cleaned, pressed, restored copies. A CGC blue label 
                  guarantees examination for undisclosed restoration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gw-emerald/20 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-gw-emerald" />
              </div>
              <div>
                <div className="font-semibold">Physical Preservation</div>
                <p className="text-sm text-gw-text-secondary">
                  Archival-quality protection against UV, humidity, and handling. Critical for 
                  10-year investments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-1970 Premium */}
        <div className="glass-card p-6 border border-gw-gold/30">
          <h3 className="text-lg font-bold text-gw-gold mb-3">Pre-1970 Keys: The Premium Tier</h3>
          <p className="text-gw-text-secondary mb-4">
            High-grade pre-1970 comics are genuinely rare. A CGC 9.6 Silver Age key isn't just scarce — 
            it's <em>verifiably</em> scarce. Census data shows exactly how many copies exist at each grade.
          </p>
          <div className="p-4 bg-gw-gold/10 rounded-xl">
            <p className="text-sm text-gw-text-secondary">
              <strong>This drives premium pricing</strong> and long-term appreciation in ways raw copies 
              simply cannot match.
            </p>
          </div>
        </div>
      </section>

      {/* Drawbacks of Graded */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-red-400" />
          The Drawbacks of Graded Comics
        </h2>

        <div className="glass-card p-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 font-bold">$</span>
              </div>
              <div>
                <div className="font-semibold text-red-400">Rising Costs</div>
                <p className="text-sm text-gw-text-secondary">
                  CGC fees have increased substantially. Add shipping, insurance, and the economics 
                  break down fast for books under $300–$400.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <div className="font-semibold text-red-400">Long Turnaround</div>
                <p className="text-sm text-gw-text-secondary">
                  Submit today, wait 6+ months. Hot market windows can close, leaving you slabbing 
                  at peak hype and selling at the trough.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <div className="font-semibold text-red-400">Can't Read Without Cracking</div>
                <p className="text-sm text-gw-text-secondary">
                  Opening the slab destroys certified value. For collectors who want both investment 
                  and enjoyment, that's a meaningful sacrifice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case for Raw */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Package className="w-6 h-6 text-gw-text-secondary" />
          The Case for Raw Comics
        </h2>

        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-6">
            Raw comics serve <strong>specific investment strategies</strong> very well.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gw-accent/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-gw-accent" />
              </div>
              <div>
                <div className="font-semibold">Deal-Hunting & Arbitrage</div>
                <p className="text-sm text-gw-text-secondary">
                  Buy a raw book dealer-graded at 8.5, recognize it as 9.4, flip immediately or 
                  submit for profit. <strong>Raw vs. graded arbitrage is real.</strong>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gw-accent/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-gw-accent" />
              </div>
              <div>
                <div className="font-semibold">Full Control & Flexibility</div>
                <p className="text-sm text-gw-text-secondary">
                  Inspect thoroughly, have it pressed to improve grade, then decide: submit or sell. 
                  Pressing is unavailable once slabbed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gw-accent/20 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-gw-accent" />
              </div>
              <div>
                <div className="font-semibold">Low-Value Runs</div>
                <p className="text-sm text-gw-text-secondary">
                  For non-keys, fill-in runs, and modern books under $50, raw is the only format 
                  that makes financial sense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Scale className="w-6 h-6 text-gw-gold" />
          When to Buy Each
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border-l-4 border-gw-emerald">
            <h3 className="text-lg font-bold text-gw-emerald mb-4">✓ Buy Graded When:</h3>
            <ul className="space-y-3 text-gw-text-secondary">
              <li className="flex gap-2">
                <span className="text-gw-emerald">•</span>
                <span>Confirmed key issue with strong demand</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-emerald">•</span>
                <span>Pre-1970 material (restoration risk)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-emerald">•</span>
                <span>CGC 9.6+ where premium is substantial</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-emerald">•</span>
                <span>You want liquidity (faster sales)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-emerald">•</span>
                <span>Undervalued 9.8s under $500</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 border-l-4 border-gw-accent">
            <h3 className="text-lg font-bold text-gw-accent mb-4">✓ Buy Raw When:</h3>
            <ul className="space-y-3 text-gw-text-secondary">
              <li className="flex gap-2">
                <span className="text-gw-accent">•</span>
                <span>You have strong grading expertise</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-accent">•</span>
                <span>Realistic ceiling doesn't justify fees</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-accent">•</span>
                <span>Want to press for grade improvement</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-accent">•</span>
                <span>Building reading collection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gw-accent">•</span>
                <span>Rising costs make raw better value</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Liquidity Factor */}
      <section className="mb-12">
        <div className="glass-card p-6 bg-gw-card/50">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gw-accent" />
            The Liquidity Factor
          </h3>
          <p className="text-gw-text-secondary">
            A CGC 9.8 key on eBay with known census population <strong>sells quickly and predictably.</strong> 
            A raw copy requires the buyer to trust your description, photos, and grading eye — friction points 
            that slow sales and depress prices. For investors needing reliable exit options, 
            <strong> the liquidity premium of graded books is significant.</strong>
          </p>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-gw-text-secondary mb-4">
          For serious investment, <strong>graded comics — especially CGC 9.8 key issues</strong> — offer the strongest 
          combination of market confidence, counterfeit protection, preservation, and resale liquidity.
        </p>
        <p className="text-gw-text-secondary mb-4">
          But raw comics aren't irrelevant. They're essential for <strong>deal-hunting, arbitrage, low-value collections, 
          and press-and-submit strategies.</strong>
        </p>
        <div className="p-4 bg-gw-gold/10 rounded-xl border border-gw-gold/20 mb-6">
          <p className="text-gw-text-secondary">
            <strong className="text-gw-gold">The smartest investors use both.</strong> Graded for long-term holds. 
            Raw for arbitrage opportunities and pure enjoyment.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/comics" className="px-6 py-3 bg-gw-accent text-black font-semibold rounded-xl hover:bg-white transition-colors">
            Browse Comics →
          </Link>
          <Link href="/blog/best-comics-to-grade-2026" className="px-6 py-3 border border-gw-border text-white rounded-xl hover:bg-white/5 transition-colors">
            See Best Comics to Grade
          </Link>
        </div>
      </section>
    </article>
  )
}
