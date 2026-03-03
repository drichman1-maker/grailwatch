import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, ArrowLeft } from 'lucide-react'

const Terms = () => {
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
            <FileText className="w-6 h-6 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-[#fafafa]">Terms of Service</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-[#a3a3a3] mb-6">
            Last updated: February 24, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Agreement to Terms</h2>
            <p className="text-[#a3a3a3] mb-4">
              By accessing or using HealthIndex, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Use of Service</h2>
            <p className="text-[#a3a3a3] mb-4">
              HealthIndex provides price comparison and tracking for medical wellness devices. Our service is provided &quot;as is&quot; for informational purposes only.
            </p>
            <p className="text-[#a3a3a3] mb-4">
              You agree to use our service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Price Accuracy</h2>
            <p className="text-[#a3a3a3] mb-4">
              While we strive to provide accurate and up-to-date pricing information, we cannot guarantee the accuracy of all prices displayed. Prices are subject to change without notice. Always verify the final price on the retailer&apos;s website before making a purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Affiliate Links</h2>
            <p className="text-[#a3a3a3] mb-4">
              HealthIndex contains affiliate links. When you click on these links and make a purchase, we may receive a commission. This comes at no additional cost to you and helps support our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Intellectual Property</h2>
            <p className="text-[#a3a3a3] mb-4">
              All content on HealthIndex, including text, graphics, logos, and software, is the property of HealthIndex or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Disclaimer</h2>
            <p className="text-[#a3a3a3] mb-4">
              HealthIndex is not a medical advice service. The products listed are wellness devices and should not replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Limitation of Liability</h2>
            <p className="text-[#a3a3a3] mb-4">
              In no event shall HealthIndex be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Changes to Terms</h2>
            <p className="text-[#a3a3a3] mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Contact</h2>
            <p className="text-[#a3a3a3]">
              For questions about these Terms, please contact us at legal@healthindex.app
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms
