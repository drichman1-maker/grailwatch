import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowLeft } from 'lucide-react'

const Privacy = () => {
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
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-[#fafafa]">Privacy Policy</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-[#a3a3a3] mb-6">
            Last updated: February 24, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Overview</h2>
            <p className="text-[#a3a3a3] mb-4">
              HealthIndex (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside text-[#a3a3a3] space-y-2">
              <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve our service.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site traffic.</li>
              <li><strong>Price Alerts:</strong> If you sign up for price alerts, we collect your email address solely for notification purposes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-[#a3a3a3] space-y-2">
              <li>To provide and maintain our price tracking service</li>
              <li>To notify you of price drops (if you opt in)</li>
              <li>To analyze usage patterns and improve our website</li>
              <li>To detect and prevent technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Third-Party Services</h2>
            <p className="text-[#a3a3a3] mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-[#a3a3a3] space-y-2">
              <li><strong>Brave Search API:</strong> For live price comparisons</li>
              <li><strong>Vercel:</strong> For website hosting</li>
              <li><strong>Fly.io:</strong> For backend services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Affiliate Disclosure</h2>
            <p className="text-[#a3a3a3] mb-4">
              HealthIndex participates in affiliate marketing programs. This means we may earn commissions on purchases made through our links to retailer sites. This does not affect the price you pay.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Your Rights</h2>
            <p className="text-[#a3a3a3] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#a3a3a3] space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of price alert notifications at any time</li>
              <li>Disable cookies through your browser settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Contact Us</h2>
            <p className="text-[#a3a3a3]">
              If you have any questions about this Privacy Policy, please contact us at privacy@healthindex.app
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
