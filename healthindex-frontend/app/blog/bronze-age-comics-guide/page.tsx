import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Gem, TrendingUp, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Undervalued Bronze Age Comics Worth Grading 2024 | GrailWatch',
  description: 'Bronze Age comics (1970-1985) primed for grading boom. From $90 Hulk #180 to $40,000 CGC. Best undervalued keys: Blade, Ghost Rider, Moon Knight, Wolverine.',
  keywords: ['Bronze Age comics', 'undervalued comics 2024', 'comic book investment', 'Bronze Age keys', 'CGC grading profit'],
  openGraph: {
    title: 'Undervalued Bronze Age Comics Worth Grading Right Now',
    description: 'Turn $90 raw copies into $40,000 slabs. The Bronze Age boom is here.',
    type: 'article',
    publishedTime: '2026-03-02',
  },
}

export default function BronzeAgeComicsArticle() {
  const comics = [
    {
      rank: 1,
      issue: 'Tomb of Dracula #10',
      year: 1973,
      character: 'Blade',
      rawPrice: 400,
      cgcPrice: 48000,
      grade: 'CGC 9.8',
      strategy: 'Target VF (8.0) raw copies',
      catalyst: 'Blade MCU reboot with Mahershala Ali',
    },
    {
      rank: 2,
      issue: 'Marvel Spotlight #5',
      year: 1972,
      character: 'Ghost Rider',
      rawPrice: 240,
      cgcPrice: 264000,
      grade: 'CGC 9.8',
      strategy: 'Any 8.0+ should be graded immediately',
      catalyst: 'Franchise staying power, 2 films',
    },
    {
      rank: 3,
      issue: 'Ghost Rider #1',
      year: 1973,
      character: 'Ghost Rider',
      rawPrice: 240,
      cgcPrice: 26400,
      grade: 'CGC 9.8',
      strategy: 'Lower entry than Spotlight #5',
      catalyst: 'First solo ongoing series',
    },
    {
      rank: 4,
      issue: 'Werewolf by Night #32',
      year: 1975,
      character: 'Moon Knight',
      rawPrice: '~150-300',
      cgcPrice: 'Rising',
      grade: 'High Grade',
      strategy: 'Disney+ series transformed demand',
      catalyst: 'Moon Knight Disney+ series',
    },
    {
      rank: 5,
      issue: 'Incredible Hulk #180',
      year: 1974,
      character: 'Wolverine',
      rawPrice: 90,
      cgcPrice: 40800,
      grade: 'CGC 9.4',
      strategy: 'Called "poor man\'s Hulk #181"',
      catalyst: 'Wolverine MCU cornerstone',
    },
    {
      rank: 6,
      issue: 'Amazing Spider-Man #101',
      year: 1971,
      character: 'Morbius',
      rawPrice: 180,
      cgcPrice: 22200,
      grade: 'CGC 9.6',
      strategy: 'ASM keys always in demand',
      catalyst: 'Sony Morbius film recognition',
    },
    {
      rank: 7,
      issue: 'Hero for Hire #1',
      year: 1972,
      character: 'Luke Cage',
      rawPrice: '~200-400',
      cgcPrice: 'Strong',
      grade: 'High Grade',
      strategy: 'Netflix series established base',
      catalyst: 'First Black Marvel headliner',
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
          <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-sm rounded-full">Investment Guide</span>
          <span className="text-gw-text-tertiary text-sm">March 2, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Undervalued Bronze Age Comics Worth Grading 2024
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          The Bronze Age (1970–1985) is quietly becoming one of the hottest segments in graded comics. 
          Turn a <strong>$90 raw copy</strong> into a <strong>$40,000 certified slab</strong>. 
          Here's your definitive guide.
        </p>
      </header>

      {/* Why Bronze Age */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Gem className="w-6 h-6 text-gw-gold" />
          Why Bronze Age Comics Are Primed
        </h2>
        
        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-4">
            Bronze Age books are old enough to be genuinely scarce in high grade — newsstand distribution 
            was inconsistent, and most kids actually <em>read</em> their comics. Yet they're young enough 
            that collectors still find ungraded copies in attics and storage units.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gw-emerald/10 rounded-xl border border-gw-emerald/20">
              <div className="text-gw-emerald font-semibold mb-2">The Sweet Spot</div>
              <ul className="text-sm text-gw-text-secondary space-y-1">
                <li>• Old enough to be rare in high grade</li>
                <li>• Young enough to still find raw copies</li>
                <li>• MCU/D streaming boosting demand</li>
                <li>• Raw-to-CGC spread remains enormous</li>
              </ul>
            </div>
            <div className="p-4 bg-gw-accent/10 rounded-xl border border-gw-accent/20">
              <div className="text-gw-accent font-semibold mb-2">The Opportunity</div>
              <ul className="text-sm text-gw-text-secondary space-y-1">
                <li>• Cultural significance growing</li>
                <li>• Prices haven't fully caught up</li>
                <li>• First appearances still undervalued</li>
                <li>• Best risk-reward in comics today</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Comics Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-gw-emerald" />
          Top Undervalued Bronze Age Keys
        </h2>
        
        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gw-bg-tertiary border-b border-gw-border">
                <th className="text-left p-3 font-semibold">#</th>
                <th className="text-left p-3 font-semibold">Comic</th>
                <th className="text-left p-3 font-semibold">Character</th>
                <th className="text-right p-3 font-semibold">Raw</th>
                <th className="text-right p-3 font-semibold">CGC</th>
                <th className="text-left p-3 font-semibold">Catalyst</th>
              </tr>
            </thead>
            <tbody>
              {comics.map((comic) => (
                <tr key={comic.rank} className="border-b border-gw-border/50 hover:bg-gw-bg-tertiary/50">
                  <td className="p-3">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold ${
                      comic.rank <= 3 ? 'bg-gw-gold text-gw-bg-primary' : 'bg-gw-bg-tertiary text-gw-text-primary'
                    }`}>
                      {comic.rank}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="font-medium text-sm">{comic.issue}</div>
                    <div className="text-xs text-gw-text-tertiary">{comic.year}</div>
                  </td>
                  <td className="p-3 text-sm">{comic.character}</td>
                  <td className="p-3 text-right font-mono text-sm">
                    ${typeof comic.rawPrice === 'number' ? comic.rawPrice : comic.rawPrice}
                  </td>
                  <td className="p-3 text-right font-mono font-semibold text-gw-emerald text-sm">
                    {typeof comic.cgcPrice === 'number' ? `$${comic.cgcPrice.toLocaleString()}` : comic.cgcPrice}
                  </td>
                  <td className="p-3 text-xs text-gw-text-secondary">{comic.catalyst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mid-Grade Strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Target className="w-6 h-6 text-gw-accent" />
          The Mid-Grade Strategy That Works
        </h2>
        
        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-4">
            For most collectors, the sweet spot is <strong>CGC 6.0–8.0</strong> range. Here's why:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {[
                'Lower acquisition cost = more books in portfolio',
                'High-grade copies genuinely scarce (newsstand distribution)',
                'Certified mid-grade appeals to broader buyer pool',
                'Certification premium is real and consistent',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gw-text-secondary">
                  <div className="w-5 h-5 rounded-full bg-gw-emerald/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gw-emerald text-xs">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="p-4 bg-gw-bg-tertiary rounded-xl">
              <div className="font-semibold mb-3 text-gw-gold">Inspect For:</div>
              <ul className="text-sm text-gw-text-secondary space-y-2">
                <li>• Spine stress</li>
                <li>• Tape repairs</li>
                <li>• Writing/marking</li>
                <li>• Missing pages</li>
                <li>• Subscription creases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">The Bronze Age Boom Is Here</h2>
        <p className="text-gw-text-secondary mb-6">
          Marvel's ongoing film and streaming slate will continue shining spotlights on these characters. 
          Each new announcement drives another wave of collector interest. Whether you're a seasoned investor 
          or just starting, Bronze Age keys represent the best risk-reward opportunity in comics right now.
        </p>
        <div className="flex items-center gap-3 p-4 bg-gw-gold/10 rounded-xl">
          <TrendingUp className="w-5 h-5 text-gw-gold" />
          <p className="text-sm">
            <strong>Bottom line:</strong> The window for acquiring undervalued Bronze Age keys is still open — 
            but it won't stay open forever.
          </p>
        </div>
      </section>
    </article>
  )
}
