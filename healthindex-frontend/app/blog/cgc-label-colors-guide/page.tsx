import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Palette, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CGC Label Colors Explained: Complete Guide | GrailWatch',
  description: 'Understanding CGC label colors - Blue, Purple, Green, Yellow. What each color means for value, restoration status, and authentication.',
  keywords: ['CGC label colors', 'CGC blue label', 'CGC purple label', 'CGC restored', 'CGC qualified', 'CGC signature series'],
  openGraph: {
    title: 'CGC Label Colors Explained',
    description: 'Blue, Purple, Green, Yellow - what every CGC label color means for your collection.',
    type: 'article',
    publishedTime: '2026-03-02',
  },
}

export default function CGCLabelColorsArticle() {
  const labels = [
    {
      color: 'Blue',
      name: 'CGC Universal',
      icon: '🔵',
      description: 'Unrestored, no unwitnessed signatures. The gold standard.',
      value: 'Highest premiums - blue label books command top market prices',
      features: ['No restoration', 'No conservation', 'No signatures', 'Pure collectible form'],
      warning: null,
    },
    {
      color: 'Purple',
      name: 'CGC Restored',
      icon: '🟣',
      description: 'Color touch-ups, re-glued spine, trimming, added staples.',
      value: '70-90% less than blue label equivalent - collectors call it "PLOD" (Purple Label of Death)',
      features: ['Restoration scale A-1 to C-5', 'A = Slight', 'C = Extensive', 'Quality rating included'],
      warning: 'Always check label color before buying key issues',
    },
    {
      color: 'Green',
      name: 'CGC Qualified',
      icon: '🟢',
      description: 'Significant defect noted OR unwitnessed signature present.',
      value: 'Discount vs blue label - varies widely based on specific qualification',
      features: ['Missing coupon noted', 'Unwitnessed signature', 'Subscription crease', 'Tape presence'],
      warning: 'Grade reflects condition "as if" defect didn\'t exist',
    },
    {
      color: 'Yellow',
      name: 'CGC Signature Series',
      icon: '🟡',
      description: 'Witnessed and verified signature by CGC representative.',
      value: 'Can command significant premiums - especially Stan Lee, McFarlane, Jim Lee',
      features: ['Authenticated signature', 'CGC witnessed', 'Guaranteed authentic', 'Creator verified'],
      warning: null,
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
          <span className="px-3 py-1 bg-gw-accent/20 text-gw-accent text-sm rounded-full">Education</span>
          <span className="text-gw-text-tertiary text-sm">March 2, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          CGC Label Colors Explained
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          Understanding CGC label colors is one of the most important skills any comic collector can develop. 
          Blue, Purple, Green, Yellow — knowing what each color means can be the difference between 
          paying $500 for a book worth $500 and paying $500 for a book worth $50.
        </p>
      </header>

      {/* Label Color Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Palette className="w-6 h-6 text-gw-accent" />
          Complete CGC Label Guide
        </h2>
        
        <div className="space-y-6">
          {labels.map((label) => (
            <div key={label.color} className="glass-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{label.icon}</span>
                <div>
                  <h3 className="text-xl font-bold">{label.name}</h3>
                  <p className="text-gw-text-secondary">{label.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-gw-bg-tertiary rounded-xl">
                  <div className="font-semibold text-gw-gold mb-2">Market Value</div>
                  <p className="text-sm text-gw-text-secondary">{label.value}</p>
                </div>
                
                <div className="p-4 bg-gw-bg-tertiary rounded-xl">
                  <div className="font-semibold text-gw-accent mb-2">Key Features</div>
                  <ul className="text-sm text-gw-text-secondary space-y-1">
                    {label.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-gw-emerald" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {label.warning && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-gw-text-secondary">{label.warning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Special Labels */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Special & Combo Labels</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⬛🟡</span>
              <div>
                <h3 className="font-bold">CGC x JSA</h3>
                <p className="text-sm text-gw-text-tertiary">Yellow + Black</p>
              </div>
            </div>
            <p className="text-sm text-gw-text-secondary">
              Co-certification with James Spence Authentication. Signatures authenticated by 
              both CGC and JSA — the gold standard for signed books.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔵⚪</span>
              <div>
                <h3 className="font-bold">CGC Conserved</h3>
                <p className="text-sm text-gw-text-tertiary">Blue + Grey</p>
              </div>
            </div>
            <p className="text-sm text-gw-text-secondary">
              Minor stabilizing repairs for preservation (not enhancement). Removing damaging tape, 
              professional cleaning. Valued closer to blue than purple.
            </p>
          </div>
        </div>
      </section>

      {/* Grade Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Numeric Grade Quick Reference</h2>
        
        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gw-bg-tertiary border-b border-gw-border">
                <th className="text-left p-4 font-semibold">Grade</th>
                <th className="text-left p-4 font-semibold">Description</th>
                <th className="text-left p-4 font-semibold">Market Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gw-border/50">
                <td className="p-4 font-mono font-bold text-gw-gold">10.0</td>
                <td className="p-4">Gem Mint — Virtually perfect</td>
                <td className="p-4 text-gw-emerald">Ultra-rare</td>
              </tr>
              <tr className="border-b border-gw-border/50">
                <td className="p-4 font-mono font-bold text-gw-accent">9.8</td>
                <td className="p-4">Near Mint/Mint — Most sought-after</td>
                <td className="p-4 text-gw-emerald">Premium prices</td>
              </tr>
              <tr className="border-b border-gw-border/50">
                <td className="p-4 font-mono">9.6</td>
                <td className="p-4">Near Mint+ — Exceptional copy</td>
                <td className="p-4 text-gw-text-secondary">Strong demand</td>
              </tr>
              <tr className="border-b border-gw-border/50">
                <td className="p-4 font-mono">8.0–9.4</td>
                <td className="p-4">Very Fine range</td>
                <td className="p-4 text-gw-text-secondary">Highly collectible</td>
              </tr>
              <tr className="border-b border-gw-border/50">
                <td className="p-4 font-mono">6.0–7.5</td>
                <td className="p-4">Fine range — Solid mid-grade</td>
                <td className="p-4 text-gw-text-secondary">Good value</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">0.5</td>
                <td className="p-4">Poor — But authenticated</td>
                <td className="p-4 text-gw-text-tertiary">Key issues only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
        <p className="text-gw-text-secondary mb-6">
          Label color + numeric grade = the full picture of a book's value. Blue label 9.8s command the highest premiums. 
          Purple labels trade at steep discounts. Green labels offer opportunities at the right price. 
          Yellow labels add authentication value for signed books.
        </p>
        <div className="flex items-center gap-3 p-4 bg-gw-gold/10 rounded-xl">
          <CheckCircle className="w-5 h-5 text-gw-gold" />
          <p className="text-sm">
            <strong>Pro Tip:</strong> Always verify label color before buying graded comics. 
            The color tells you as much about value as the number.
          </p>
        </div>
      </section>
    </article>
  )
}
