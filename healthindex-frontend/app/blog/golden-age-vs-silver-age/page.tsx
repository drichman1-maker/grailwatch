import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Star, BookOpen, TrendingUp, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Golden Age vs Silver Age Comics: Which Era Grades Better? | GrailWatch',
  description: 'Complete guide to Golden Age vs Silver Age comic grading. Why Action Comics #1 and Amazing Fantasy #15 grade differently.',
  keywords: ['Golden Age comics', 'Silver Age comics', 'comic book grading by era'],
}

export default function GoldenAgeVsSilverAgeArticle() {
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
          <span className="px-3 py-1 bg-gw-gold/20 text-gw-gold text-sm rounded-full">Era Guide</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Golden Age vs. Silver Age Comics: Which Era Grades Better?
        </h1>
        <p className="text-xl text-gw-text-secondary">
          Imagine holding Action Comics #1 and Amazing Fantasy #15. Both iconic. Both valuable. But send them to CGC, you'd receive very different results — not just because of condition, but because of era.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">A Tale of Two Eras</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border border-gw-gold/30">
            <h3 className="text-xl font-bold text-gw-gold mb-4">Golden Age (1938–1956)</h3>
            <p className="text-gw-text-secondary mb-4">Superman 1938, Batman 1939 — superhero genre invented.</p>
            <ul className="text-sm text-gw-text-secondary space-y-2">
              <li>• Newsprint paper, cheap inks</li>
              <li>• Designed to be read once</li>
              <li>• Wartime paper drives destroyed millions</li>
              <li>• Acidic paper → degradation</li>
            </ul>
          </div>
          <div className="glass-card p-6 border border-gw-accent/30">
            <h3 className="text-xl font-bold text-gw-accent mb-4">Silver Age (1957–1969)</h3>
            <p className="text-gw-text-secondary mb-4">Spider-Man, X-Men, Fantastic Four — renaissance.</p>
            <ul className="text-sm text-gw-text-secondary space-y-2">
              <li>• Better paper quality</li>
              <li>• Early collector culture emerged</li>
              <li>• More copies survived</li>
              <li>• Measurably better preserved</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Average Grades by Era</h2>
        <div className="glass-card p-6">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-gw-gold">2.0</div>
              <div className="text-sm text-gw-text-secondary">Golden Age Average</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gw-text-secondary">3.0</div>
              <div className="text-sm text-gw-text-secondary">Early Silver Age</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gw-accent">4.0</div>
              <div className="text-sm text-gw-text-secondary">Late Silver Age</div>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-4">The Verdict</h2>
        <p className="text-gw-text-secondary mb-4">
          Silver Age comics grade higher on average — better paper, better survival rates.
        </p>
        <p className="text-gw-text-secondary">
          But a Golden Age book in 5.0 may be a once-in-a-decade find. High-grade Golden Age comics are among the most valuable in pop culture collecting — because of their rarity.
        </p>
      </section>
    </article>
  )
}
