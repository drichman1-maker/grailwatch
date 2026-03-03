import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Star, Shield, TrendingUp, Sparkles, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'First Appearance Comics: Why They Command Premium Grades | GrailWatch',
  description: 'The psychology and value of first appearance comics. Why Amazing Fantasy #15, Detective Comics #27, and key debuts command exponential premiums in high grades.',
  keywords: ['first appearance comics', 'key issue comics', 'Amazing Fantasy 15', 'Detective Comics 27', 'first appearance value', 'comic book investing'],
  openGraph: {
    title: 'First Appearance Comics: Why They Command Premium Grades',
    description: 'The blue chips of comic collecting. Why first appearances command exponential premiums.',
    type: 'article',
    publishedTime: '2026-03-01',
  },
}

export default function FirstAppearancePremiumArticle() {
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
          <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-sm rounded-full">Key Issues</span>
          <span className="text-gw-text-tertiary text-sm">March 1, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          First Appearance Comics: Why They Command Premium Grades
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          Imagine holding Amazing Fantasy #15 — the moment Spider-Man swung into existence. Or 
          Detective Comics #27, where Batman first spread his cape across Gotham. These aren't just 
          comic books. <strong>They're cultural artifacts.</strong>
        </p>
      </header>

      {/* Blue Chips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Star className="w-6 h-6 text-gw-gold" />
          The Blue Chips of Comic Book Collecting
        </h2>
        
        <div className="glass-card p-6 mb-6">
          <p className="text-gw-text-secondary mb-4">
            In the investment world, blue-chip stocks represent the most reliable, high-value assets. 
            In comic collecting, <strong>first appearance comics occupy exactly that role.</strong>
          </p>
          
          <p className="text-gw-text-secondary mb-6">
            The first issue in which a beloved character debuts carries an intrinsic cultural weight 
            that no subsequent issue can replicate. There is only one first appearance of Batman. 
            Only one first appearance of Spider-Man. Only one first appearance of Wolverine.
          </p>

          <div className="p-4 bg-gw-gold/10 rounded-xl border border-gw-gold/20">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-gw-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gw-gold mb-1">The Media Effect</div>
                <p className="text-sm text-gw-text-secondary">
                  When Marvel Studios announces a new film, corresponding first appearances immediately spike. 
                  Collectors race to secure key issues, knowing the window for reasonable prices is closing fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Shield className="w-6 h-6 text-gw-accent" />
          A Brief History of the First Appearance Premium
        </h2>

        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-4">
            The market for key issue comics transformed in <strong>2000</strong>, when CGC launched its 
            independent, third-party grading service.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gw-card rounded-xl">
              <div className="text-red-400 font-semibold mb-2">Before CGC</div>
              <ul className="space-y-2 text-sm text-gw-text-secondary">
                <li>• Subjective condition assessments</li>
                <li>• Disputes over grading</li>
                <li>• Lack of confidence in high-dollar sales</li>
                <li>• "Fine" condition = who knows?</li>
              </ul>
            </div>
            <div className="p-4 bg-gw-emerald/10 rounded-xl border border-gw-emerald/20">
              <div className="text-gw-emerald font-semibold mb-2">After CGC</div>
              <ul className="space-y-2 text-sm text-gw-text-secondary">
                <li>• Universal 0.5–10.0 scale</li>
                <li>• Tamper-evident encapsulation</li>
                <li>• Trust across borders</li>
                <li>• Serious money entered the market</li>
              </ul>
            </div>
          </div>

          <p className="text-gw-text-secondary">
            Suddenly, a collector in Tokyo could confidently purchase a key issue from a seller in Toronto 
            without ever physically inspecting the book. <strong>Trust entered the marketplace, and with it came serious money.</strong>
          </p>
        </div>
      </section>

      {/* The Numbers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-gw-emerald" />
          The Numbers Don't Lie
        </h2>

        {/* Amazing Fantasy #15 */}
        <div className="glass-card p-6 mb-6 border border-gw-accent/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-red-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-3xl">
              🕷️
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gw-accent mb-1">Amazing Fantasy #15 (1962)</h3>
              <p className="text-sm text-gw-text-secondary">Spider-Man's debut — The definitive example</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-gw-card rounded-xl">
              <div className="text-sm text-gw-text-tertiary mb-1">Ungraded, decent condition</div>
              <div className="text-2xl font-bold text-gw-text-secondary">$10K–$50K</div>
            </div>
            <div className="p-4 bg-gw-gold/10 rounded-xl border border-gw-gold/20">
              <div className="text-sm text-gw-gold mb-1">CGC 9.6 (2021)</div>
              <div className="text-2xl font-bold text-gw-gold">$3.6 million</div>
            </div>
          </div>

          <p className="text-sm text-gw-text-secondary">
            That single sale redefined what collectors thought possible. <strong>Grade is not just a detail — 
            it's the difference between a valuable book and a generational asset.</strong>
          </p>
        </div>

        {/* Grade Multiplier */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">The Exponential Grade Effect</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono text-gw-text-tertiary">Raw</div>
              <div className="flex-1 h-2 bg-gw-card rounded-full overflow-hidden">
                <div className="h-full bg-gw-text-tertiary w-[5%]" />
              </div>
              <div className="w-24 font-mono">$500</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono text-gw-text-secondary">4.0</div>
              <div className="flex-1 h-2 bg-gw-card rounded-full overflow-hidden">
                <div className="h-full bg-gw-text-secondary w-[10%]" />
              </div>
              <div className="w-24 font-mono">$550</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono text-gw-accent">9.0</div>
              <div className="flex-1 h-2 bg-gw-card rounded-full overflow-hidden">
                <div className="h-full bg-gw-accent w-[50%]" />
              </div>
              <div className="w-24 font-mono text-gw-accent">$5K</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono text-gw-gold">9.4+</div>
              <div className="flex-1 h-2 bg-gw-card rounded-full overflow-hidden">
                <div className="h-full bg-gw-gold w-[100%]" />
              </div>
              <div className="w-24 font-mono text-gw-gold">$50K+</div>
            </div>
          </div>

          <p className="text-sm text-gw-text-secondary">
            <strong>The most dramatic value increases occur at 9.0 and above.</strong> A 4.0 might see only 
            a modest $30–$50 bump. But at 9.0, 9.4, 9.6, and especially 9.8, values can increase by multiples — 
            sometimes by orders of magnitude.
          </p>
        </div>
      </section>

      {/* Psychology */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-purple-400" />
          The Psychology Behind Collecting First Appearances
        </h2>

        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-4">
            Why do collectors feel such a powerful pull toward first appearances specifically? The answer lies 
            in <strong>the human love of origin stories.</strong>
          </p>

          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 mb-6">
            <p className="text-gw-text-secondary italic">
              "A first appearance is a moment of pure creative genesis. When you own Action Comics #1, 
              you own the moment Superman was born. When you own Showcase #4, you hold the dawn of the Silver Age."
            </p>
          </div>

          <p className="text-gw-text-secondary mb-4">
            These aren't just comics — they're <strong>primary sources of cultural history.</strong> Owning them 
            connects a collector to something larger than themselves.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gw-card rounded-xl text-center">
              <div className="text-2xl mb-2">🎭</div>
              <div className="font-semibold text-sm mb-1">Cultural Significance</div>
              <p className="text-xs text-gw-text-secondary">Moments when imagination crystallized</p>
            </div>
            <div className="p-4 bg-gw-card rounded-xl text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="font-semibold text-sm mb-1">Financial Behavior</div>
              <p className="text-xs text-gw-text-secondary">Sacrifice condition on secondary issues for keys</p>
            </div>
            <div className="p-4 bg-gw-card rounded-xl text-center">
              <div className="text-2xl mb-2">💎</div>
              <div className="font-semibold text-sm mb-1">Durability</div>
              <p className="text-xs text-gw-text-secondary">Meaning is extraordinarily durable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Grading Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Lock className="w-6 h-6 text-gw-accent" />
          How Professional Grading Amplifies Value
        </h2>

        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-6">
            Professional grading doesn't just document condition — <strong>it removes uncertainty.</strong> 
            And in high-stakes collecting, uncertainty is the enemy of value.
          </p>

          <div className="space-y-4">
            {[
              { 
                icon: Shield,
                title: "Condition Is Verified and Locked In",
                desc: "Trained professionals assign the grade. The book is sealed. No debate, no subjectivity."
              },
              { 
                icon: Lock,
                title: "Long-Term Preservation Is Guaranteed",
                desc: "Archival-quality holder protects from humidity, UV, and physical damage. Decades of protection."
              },
              { 
                icon: TrendingUp,
                title: "Buyer Confidence Drives Premium Prices",
                desc: "Graded comics attract investors and non-expert buyers. Expanded pool = higher prices."
              },
              { 
                icon: Sparkles,
                title: "Liquidity Increases",
                desc: "Easier to sell, auction, and value for insurance. Liquidity is a feature buyers pay for."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gw-accent/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gw-accent" />
                </div>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-sm text-gw-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Should You Grade? */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Star className="w-6 h-6 text-gw-gold" />
          Should You Grade Your First Appearances?
        </h2>

        <div className="glass-card p-6 border-l-4 border-gw-gold">
          <p className="text-gw-text-secondary mb-4">
            If you own a first appearance — especially a high-profile character — the calculus is almost always 
            straightforward:
          </p>

          <div className="p-4 bg-gw-gold/10 rounded-xl mb-4">
            <div className="font-semibold text-gw-gold mb-2">The Rule</div>
            <p className="text-gw-text-secondary">
              If the book is in <strong>fine condition or better</strong>, professional grading is worth serious consideration. 
              The cost of submission ($30–$100+) is negligible compared to the value increase a 9.0+ grade can unlock.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gw-card rounded-xl">
              <div className="text-gw-emerald font-semibold mb-2">✓ Grade If:</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• High-profile character</li>
                <li>• Fine condition or better</li>
                <li>• No restoration</li>
                <li>• Tight staples, bright colors</li>
              </ul>
            </div>
            <div className="p-4 bg-gw-card rounded-xl">
              <div className="text-gw-text-tertiary font-semibold mb-2">⚠️ Consider If:</div>
              <ul className="space-y-1 text-sm text-gw-text-secondary">
                <li>• Known defects</li>
                <li>• Suspected restoration</li>
                <li>• Qualified label acceptable</li>
                <li>• Transparency for future sale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">Grade Defines Destiny</h2>
        <p className="text-gw-text-secondary mb-6">
          First appearance comics occupy a unique intersection of <strong>cultural significance and financial value.</strong> 
          They are moments when imagination crystallized into something lasting — and collectors worldwide recognize that.
        </p>
        <p className="text-gw-text-secondary mb-6">
          But in today's sophisticated marketplace, owning a first appearance is only part of the story. 
          <strong> How that book is graded defines its destiny.</strong>
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/comics" className="px-6 py-3 bg-gw-accent text-black font-semibold rounded-xl hover:bg-white transition-colors">
            Browse First Appearances →
          </Link>
          <Link href="/blog/cgc-grading-costs-2026" className="px-6 py-3 border border-gw-border text-white rounded-xl hover:bg-white/5 transition-colors">
            See Grading Costs
          </Link>
        </div>
      </section>
    </article>
  )
}
