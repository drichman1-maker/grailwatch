import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BadgeCheck, AlertTriangle, DollarSign, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CGC vs CBCS vs PGX: Which Grading Company to Use in 2026 | GrailWatch',
  description: 'Complete beginner\'s guide to comic book grading. CGC vs CBCS vs PGX compared. Label colors explained, when to grade, and which company maximizes your resale value.',
  keywords: ['CGC grading', 'CBCS vs CGC', 'PGX grading', 'comic book grading comparison', 'grading label colors', 'when to grade comics'],
  openGraph: {
    title: 'CGC vs CBCS vs PGX: Complete Grading Guide',
    description: 'Which grading company should you use? Full comparison of the big three.',
    type: 'article',
    publishedTime: '2026-03-01',
  },
}

export default function GradingComparisonArticle() {
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
          <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-sm rounded-full">Beginner Guide</span>
          <span className="text-gw-text-tertiary text-sm">March 1, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          What is CGC Grading? A Beginner's Guide + CGC vs. CBCS vs. PGX
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          You just found an Amazing Fantasy #15 in a dusty long box. Your hands are trembling. 
          You know it could be worth serious money — but only if it's professionally graded. 
          Here's everything you need to know about the big three grading companies.
        </p>
      </header>

      {/* What is CGC */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BadgeCheck className="w-6 h-6 text-gw-gold" />
          What Is CGC Grading?
        </h2>
        
        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <p className="text-gw-text-secondary">
            <strong>CGC</strong> stands for Certified Guaranty Company, the gold standard in comic book grading 
            since its founding in 2000. When collectors talk about "getting a book slabbed," they're almost 
            always referring to the CGC process.
          </p>
          <p className="text-gw-text-secondary">
            CGC evaluates comics on a <strong>10-point numerical scale</strong>, ranging from 0.5 (Poor) all 
            the way up to the holy grail of 10.0 (Gem Mint). Every point on that scale tells a story about 
            a book's condition — its spine wear, page quality, staple rust, cover gloss, and dozens of other factors.
          </p>
        </div>

        {/* The CGC Process */}
        <div className="glass-card p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">How Does the CGC Grading Process Work?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gw-accent flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">1</div>
                <div>
                  <div className="font-semibold">Submission</div>
                  <p className="text-sm text-gw-text-secondary">Send via dealer, convention, or website</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gw-accent flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">2</div>
                <div>
                  <div className="font-semibold">Multi-Grader Review</div>
                  <p className="text-sm text-gw-text-secondary">Multiple independent graders assess your book</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gw-accent flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">3</div>
                <div>
                  <div className="font-semibold">Encapsulation</div>
                  <p className="text-sm text-gw-text-secondary">Sealed in tamper-evident hard case ("slab")</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gw-accent flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">4</div>
                <div>
                  <div className="font-semibold">Label Assignment</div>
                  <p className="text-sm text-gw-text-secondary">Colored label indicates book status</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Label Colors */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Understanding CGC Label Colors</h3>
          <p className="text-gw-text-secondary mb-4">
            Those colored labels aren't just decorative — they carry critical information that can 
            affect value by 80% or more.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-2xl">🔵</div>
              <div>
                <div className="font-semibold text-blue-400">Blue Label (Universal)</div>
                <p className="text-sm text-gw-text-secondary">Most desirable. No significant defects or restoration.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center text-2xl">🟢</div>
              <div>
                <div className="font-semibold text-green-400">Green Label (Qualified)</div>
                <p className="text-sm text-gw-text-secondary">Noted defect affects grade but doesn't disqualify from universal holder.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center text-2xl">🟣</div>
              <div>
                <div className="font-semibold text-purple-400">Purple Label (Restored)</div>
                <p className="text-sm text-gw-text-secondary">⚠️ Professional/amateur restoration detected. Value cut by 80%+.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Big Three Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Scale className="w-6 h-6 text-gw-accent" />
          CGC vs. CBCS vs. PGX: The Big Three Compared
        </h2>

        {/* CGC */}
        <div className="glass-card p-6 mb-6 border border-gw-gold/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">CGC</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gw-gold mb-1">The Industry Leader</h3>
              <p className="text-sm text-gw-text-secondary">Best for: High-value keys, serious collectors, maximum resale value</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="text-gw-emerald font-semibold mb-2">✓ Pros</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• Strictest grading standards</li>
                <li>• 20+ years of market trust</li>
                <li>• Highest resale premiums</li>
                <li>• Most liquid secondary market</li>
              </ul>
            </div>
            <div>
              <div className="text-red-400 font-semibold mb-2">✗ Cons</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• Most expensive ($30-$100+)</li>
                <li>• Longer turnaround times</li>
                <li>• Some subjective variance (~2-5%)</li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-gw-accent bg-gw-accent/10 px-4 py-2 rounded-lg">
            💰 Pricing: $30-$100+ per book | Market premium: 10-25% over competitors
          </div>
        </div>

        {/* CBCS */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">CBCS</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-indigo-400 mb-1">The Solid Runner-Up</h3>
              <p className="text-sm text-gw-text-secondary">Best for: Mid-tier books, budget-conscious collectors, faster turnaround</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="text-gw-emerald font-semibold mb-2">✓ Pros</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• More affordable ($20-$60)</li>
                <li>• Faster turnaround</li>
                <li>• Founded by ex-CGC graders</li>
                <li>• Growing acceptance</li>
              </ul>
            </div>
            <div>
              <div className="text-red-400 font-semibold mb-2">✗ Cons</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• Lower market premiums</li>
                <li>• Less trust for high-value books</li>
                <li>• Smaller secondary market</li>
                <li>• Grades run slightly generous</li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-lg">
            💰 Pricing: $20-$60 per book | Good middle ground for non-grail books
          </div>
        </div>

        {/* PGX */}
        <div className="glass-card p-6 opacity-75">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">PGX</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-400 mb-1">The Budget Entry Point</h3>
              <p className="text-sm text-gw-text-secondary">Best for: Entry-level, low-value books, personal collection only</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="text-gw-emerald font-semibold mb-2">✓ Pros</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• Lowest cost ($15-$50)</li>
                <li>• Accessible for beginners</li>
              </ul>
            </div>
            <div>
              <div className="text-red-400 font-semibold mb-2">✗ Cons</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• Least strict standards</li>
                <li>• Lowest resale values</li>
                <li>• Serious collectors avoid</li>
                <li>• Auction houses may reject</li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-slate-400 bg-slate-500/10 px-4 py-2 rounded-lg">
            ⚠️ Caution: High-value books in PGX slabs leave significant money on the table
          </div>
        </div>
      </section>

      {/* Decision Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-gw-accent" />
          Quick Decision Guide
        </h2>

        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gw-border text-left">
                <th className="p-4 text-gw-text-tertiary font-medium">Scenario</th>
                <th className="p-4 text-gw-text-tertiary font-medium">Recommended</th>
                <th className="p-4 text-gw-text-tertiary font-medium">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gw-border/50 bg-gw-gold/5">
                <td className="p-4">High-value key (Silver/Bronze Age)</td>
                <td className="p-4 font-semibold text-gw-gold">CGC</td>
                <td className="p-4 text-gw-text-secondary">Maximum resale value</td>
              </tr>
              <tr className="border-b border-gw-border/50">
                <td className="p-4">Modern key with upside potential</td>
                <td className="p-4 font-semibold text-gw-gold">CGC</td>
                <td className="p-4 text-gw-text-secondary">Industry standard for speculation</td>
              </tr>
              <tr className="border-b border-gw-border/50">
                <td className="p-4">Mid-tier book, budget-conscious</td>
                <td className="p-4 font-semibold text-indigo-400">CBCS</td>
                <td className="p-4 text-gw-text-secondary">Good balance of cost & credibility</td>
              </tr>
              <tr className="border-b border-gw-border/50">
                <td className="p-4">Want fastest turnaround</td>
                <td className="p-4 font-semibold text-indigo-400">CBCS</td>
                <td className="p-4 text-gw-text-secondary">Consistently faster than CGC</td>
              </tr>
              <tr>
                <td className="p-4">Personal collection, low value</td>
                <td className="p-4 font-semibold text-slate-400">PGX or Skip</td>
                <td className="p-4 text-gw-text-secondary">Organizational labeling only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* When to Grade */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <DollarSign className="w-6 h-6 text-gw-emerald" />
          When Should You Grade a Comic?
        </h2>

        <div className="glass-card p-6 border-l-4 border-gw-gold">
          <blockquote className="text-lg italic text-gw-text-secondary mb-4">
            "Only submit a book for grading if you're confident it will grade 9.0 or higher 
            AND the graded value will be at least 3x the cost of grading."
          </blockquote>
          <p className="text-gw-text-secondary">
            For example: If grading costs $50 and the raw book is worth $30, grading rarely makes sense 
            unless you're confident a high grade would push value into the hundreds. On the other hand, 
            a key issue you believe is near-mint absolutely deserves a trip to CGC.
          </p>
        </div>

        {/* Beginner Mistakes */}
        <div className="mt-6 glass-card p-6">
          <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Common Beginner Mistakes
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <p className="text-sm text-gw-text-secondary">Grading low-value books — $15 comic + $40 grading = money loser</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <p className="text-sm text-gw-text-secondary">Ignoring purple labels — restoration cuts value 80%+</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <p className="text-sm text-gw-text-secondary">Assuming all graders are equal — resale market disagrees</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <p className="text-sm text-gw-text-secondary">Skipping pressing — professional pressing can boost grades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">Start Smart, Grade Strategically</h2>
        <p className="text-gw-text-secondary mb-6">
          The short version: <strong className="text-gw-gold">CGC is the king</strong> for serious books and maximum resale value, 
          <strong className="text-indigo-400"> CBCS is the smart middle ground</strong>, and 
          <strong className="text-slate-400"> PGX is best left for casual, low-stakes situations</strong>.
        </p>
        <p className="text-gw-text-secondary mb-6">
          Before you submit your next book, ask yourself: Does this comic have the condition and value potential 
          to justify grading? If the answer is yes — and you're aiming for top dollar — trust the industry leader.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/blog/cgc-grading-costs-2026" className="px-6 py-3 bg-gw-accent text-black font-semibold rounded-xl hover:bg-white transition-colors">
            See CGC Pricing Breakdown →
          </Link>
          <Link href="/comics" className="px-6 py-3 border border-gw-border text-white rounded-xl hover:bg-white/5 transition-colors">
            Browse Graded Comics
          </Link>
        </div>
      </section>
    </article>
  )
}
