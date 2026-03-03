import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Box, Thermometer, Sun, Truck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Store & Display CGC Comics | GrailWatch',
  description: 'Complete guide to storing and displaying CGC graded comics. BCW boxes, UV protection, climate control, and transport cases for maximum protection.',
  keywords: ['CGC comic storage', 'graded comic display', 'BCW storage boxes', 'UV protection comics', 'CGC slab storage'],
  openGraph: {
    title: 'How to Store & Display CGC Graded Comics',
    description: 'Protect your investment with proper storage, display, and transport solutions.',
    type: 'article',
    publishedTime: '2026-03-02',
  },
}

export default function CGCStorageArticle() {
  const storageChecklist = [
    { item: 'BCW Graded Comic Book Boxes', purpose: 'Holds 35-40 slabs', price: '$10-15', priority: 'Essential' },
    { item: 'BCW Plastic Storage Bins', purpose: 'Non-porous, pest-resistant', price: '$15-25', priority: 'Essential' },
    { item: 'BCW 9x14" Polypropylene Bags', purpose: 'Dust/debris protection', price: '$5-10', priority: 'Recommended' },
    { item: 'UV-Blocking Acrylic Cases', purpose: 'Display without UV damage', price: '$15-30', priority: 'For display' },
    { item: 'CASEMATIX Travel Case', purpose: 'Holds 8 slabs, waterproof', price: '$40-60', priority: 'For transport' },
    { item: 'Microfiber Gloves', purpose: 'Handle without oils', price: '$5-10', priority: 'Recommended' },
  ]

  const climateGuide = [
    { factor: 'Temperature', ideal: '65-70°F', danger: 'Below 60°F or above 75°F', risk: 'Warping, condensation' },
    { factor: 'Humidity', ideal: 'Below 50%', danger: 'Above 60%', risk: 'Label softening, mold' },
    { factor: 'Light', ideal: 'Dark storage / UV-filtered', danger: 'Direct sunlight', risk: 'Label fading, yellowing' },
    { factor: 'Location', ideal: '6+ inches off floor', danger: 'Basements, attics, garages', risk: 'Flooding, temp swings' },
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
          <span className="px-3 py-1 bg-gw-emerald/20 text-gw-emerald text-sm rounded-full">Care Guide</span>
          <span className="text-gw-text-tertiary text-sm">March 2, 2026</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          How to Store & Display CGC Graded Comics
        </h1>
        <p className="text-xl text-gw-text-secondary leading-relaxed">
          You just received your first CGC 9.8 — now what? Humidity warps slabs, UV light fades labels, 
          and cardboard boxes leach moisture. Here's everything you need to protect your investment.
        </p>
      </header>

      {/* Why Storage Matters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Box className="w-6 h-6 text-gw-accent" />
          Why Proper Storage Matters
        </h2>
        
        <div className="glass-card p-6">
          <p className="text-gw-text-secondary mb-4">
            A CGC 9.8 <em>New Mutants</em> #98 (first Deadpool) can fetch $4,000+. The same book at 9.6 
            might sell for $1,500 less. That gap isn't just about the comic — it's about how it was preserved.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <div className="text-red-400 font-semibold mb-2">❌ CGC Slab Risks</div>
              <ul className="text-sm text-gw-text-secondary space-y-1">
                <li>• Temperature swings cause warping</li>
                <li>• Humidity softens labels</li>
                <li>• UV exposure fades labels</li>
                <li>• Poor handling clouds acrylic</li>
              </ul>
            </div>
            <div className="p-4 bg-gw-emerald/10 rounded-xl border border-gw-emerald/20">
              <div className="text-gw-emerald font-semibold mb-2">✅ Proper Storage Benefits</div>
              <ul className="text-sm text-gw-text-secondary space-y-1">
                <li>• Preserves grade long-term</li>
                <li>• Maintains resale value</li>
                <li>• Protects against accidents</li>
                <li>• Enables confident display</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Storage Solutions & Gear</h2>
        
        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gw-bg-tertiary border-b border-gw-border">
                <th className="text-left p-4 font-semibold">Item</th>
                <th className="text-left p-4 font-semibold">Purpose</th>
                <th className="text-left p-4 font-semibold">Price</th>
                <th className="text-left p-4 font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody>
              {storageChecklist.map((item, index) => (
                <tr key={index} className="border-b border-gw-border/50 hover:bg-gw-bg-tertiary/50">
                  <td className="p-4 font-medium">{item.item}</td>
                  <td className="p-4 text-gw-text-secondary text-sm">{item.purpose}</td>
                  <td className="p-4 font-mono text-gw-emerald">{item.price}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.priority === 'Essential' ? 'bg-gw-emerald/20 text-gw-emerald' :
                      item.priority === 'Recommended' ? 'bg-gw-accent/20 text-gw-accent' :
                      'bg-gw-bg-tertiary text-gw-text-secondary'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Climate Control */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Thermometer className="w-6 h-6 text-gw-gold" />
          Climate Control Guide
        </h2>
        
        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gw-bg-tertiary border-b border-gw-border">
                <th className="text-left p-4 font-semibold">Factor</th>
                <th className="text-left p-4 font-semibold">Ideal Range</th>
                <th className="text-left p-4 font-semibold">Danger Zone</th>
                <th className="text-left p-4 font-semibold">Risk</th>
              </tr>
            </thead>
            <tbody>
              {climateGuide.map((row, index) => (
                <tr key={index} className="border-b border-gw-border/50">
                  <td className="p-4 font-medium">{row.factor}</td>
                  <td className="p-4 text-gw-emerald">{row.ideal}</td>
                  <td className="p-4 text-red-400">{row.danger}</td>
                  <td className="p-4 text-gw-text-secondary text-sm">{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Display Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Sun className="w-6 h-6 text-gw-accent" />
          Displaying Your Collection
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3 text-gw-gold">UV-Blocking Display Cases</h3>
            <p className="text-gw-text-secondary text-sm mb-4">
              Standard glass allows UV light to pass through freely, fading CGC labels and yellowing comics inside. 
              UV-blocking acrylic filters 98-99% of UV radiation.
            </p>
            <ul className="text-sm text-gw-text-secondary space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gw-emerald mt-0.5" />
                Position away from direct sunlight
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gw-emerald mt-0.5" />
                Avoid direct HVAC vents
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gw-emerald mt-0.5" />
                $15-30 per wall-mount frame
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-bold mb-3 text-gw-accent">Handling Best Practices</h3>
            <ul className="text-sm text-gw-text-secondary space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gw-emerald mt-0.5" />
                Use clean microfiber gloves
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gw-emerald mt-0.5" />
                Dust with magnetic duster (Swiffer 360°)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gw-emerald mt-0.5" />
                Never use paper towels or rough cloths
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gw-emerald mt-0.5" />
                Use dedicated acrylic cleaner for deep cleaning
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Truck className="w-6 h-6 text-gw-purple" />
          Travel & Transport
        </h2>
        
        <div className="glass-card p-6">
          <h3 className="font-bold mb-3">CASEMATIX Waterproof Hard Case</h3>
          <p className="text-gw-text-secondary mb-4">
            Taking books to a convention or grading submission? The CASEMATIX case holds up to 8 slabs 
            with customizable foam inserts that cradle each slab individually.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-gw-bg-tertiary rounded-lg text-center">
              <div className="text-2xl font-bold text-gw-accent">8</div>
              <div className="text-xs text-gw-text-tertiary">Slabs Capacity</div>
            </div>
            <div className="p-3 bg-gw-bg-tertiary rounded-lg text-center">
              <div className="text-2xl font-bold text-gw-emerald">$40-60</div>
              <div className="text-xs text-gw-text-tertiary">Price Range</div>
            </div>
            <div className="p-3 bg-gw-bg-tertiary rounded-lg text-center">
              <div className="text-2xl font-bold text-gw-gold">Watertight</div>
              <div className="text-xs text-gw-text-tertiary">Seal Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-6">Your CGC Storage Checklist</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-gw-accent">For Storage</h3>
            <ul className="space-y-3">
              {[
                'BCW Graded Comic Boxes (35-40 slabs each)',
                'BCW plastic bins over cardboard',
                'Polypropylene bags for added protection',
                'Climate control: 65-70°F, below 50% humidity',
                'Store 6+ inches off floor',
                'Avoid basements, attics, garages',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gw-text-secondary">
                  <div className="w-5 h-5 rounded border border-gw-emerald flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-gw-emerald" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gw-gold">For Display</h3>
            <ul className="space-y-3">
              {[
                'UV-blocking acrylic display cases',
                'Away from direct sunlight',
                'Away from HVAC vents',
                'Microfiber gloves for handling',
                'Magnetic duster for maintenance',
                'CASEMATIX case for travel',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gw-text-secondary">
                  <div className="w-5 h-5 rounded border border-gw-gold flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-gw-gold" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
