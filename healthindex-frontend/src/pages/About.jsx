import React from 'react'
import { Link } from 'react-router-dom'
import { Info, ArrowLeft, Heart, Activity, Shield, Globe } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-[800px] mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <Info className="w-6 h-6 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-[#fafafa]">About HealthIndex</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Our Mission</h2>
            <p className="text-[#a3a3a3] mb-4">
              HealthIndex was created to solve a simple problem: medical wellness equipment is expensive, 
              and prices vary dramatically between retailers. We aggregate prices from across the web 
              to help you make informed decisions about your health investments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">What We Track</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🔥</div>
                <h3 className="font-medium text-[#fafafa]">Saunas</h3>
                <p className="text-sm text-[#a3a3a3]">Infrared & Traditional</p>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🫧</div>
                <h3 className="font-medium text-[#fafafa]">Hyperbaric</h3>
                <p className="text-sm text-[#a3a3a3]">Oxygen Therapy</p>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">❄️</div>
                <h3 className="font-medium text-[#fafafa]">Cryotherapy</h3>
                <p className="text-sm text-[#a3a3a3]">Cold Therapy</p>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-medium text-[#fafafa]">Red Light</h3>
                <p className="text-sm text-[#a3a3a3]">Light Therapy</p>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🦵</div>
                <h3 className="font-medium text-[#fafafa]">Compression</h3>
                <p className="text-sm text-[#a3a3a3]">Recovery Boots</p>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-medium text-[#fafafa]">PEMF</h3>
                <p className="text-sm text-[#a3a3a3]">EMF Therapy</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#fafafa] mb-1">We Monitor Prices</h3>
                  <p className="text-[#a3a3a3] text-sm">Our system continuously tracks prices from authorized retailers and manufacturers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#fafafa] mb-1">Brave Search Integration</h3>
                  <p className="text-[#a3a3a3] text-sm">We use Brave Search API to find live prices across the web in real-time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#fafafa] mb-1">You Save Money</h3>
                  <p className="text-[#a3a3a3] text-sm">Compare prices instantly and set alerts for when prices drop.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4">
                <Activity className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="font-medium text-[#fafafa] mb-2">Transparency</h3>
                <p className="text-sm text-[#a3a3a3]">We show all prices, including our affiliate relationships.</p>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4">
                <Shield className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="font-medium text-[#fafafa] mb-2">Privacy First</h3>
                <p className="text-sm text-[#a3a3a3]">Minimal data collection. No tracking. No selling your info.</p>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4">
                <Globe className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="font-medium text-[#fafafa] mb-2">Independent</h3>
                <p className="text-sm text-[#a3a3a3]">We work with all major brands, not just our partners.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Disclosure</h2>
            <p className="text-[#a3a3a3] mb-4">
              HealthIndex participates in affiliate marketing programs. This means we may earn 
              commissions when you purchase through our links. This comes at no additional cost 
              to you and helps us maintain and improve our service.
            </p>
            <p className="text-[#a3a3a3]">
              Our recommendations are based on product quality and value, not affiliate rates. 
              We prioritize your health outcomes over commissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Contact</h2>
            <p className="text-[#a3a3a3]">
              Questions? Suggestions? Reach us at{' '}
              <a href="mailto:hello@healthindex.app" className="text-emerald-400 hover:text-emerald-300">
                hello@healthindex.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
