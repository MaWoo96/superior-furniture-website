import Link from 'next/link';
import { CreditCard, DollarSign, CheckCircle } from 'lucide-react';

export default function Financing() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-burgundy to-brand-burgundy-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Flexible Financing
              <br />
              <span className="text-brand-cream">for Your Dream Home</span>
            </h2>
            <p className="text-xl text-brand-cream/90 mb-8">
              Don&apos;t let budget hold you back. We offer multiple financing options to make quality furniture and mattresses affordable for every family.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">0% APR Available</p>
                  <p className="text-brand-cream/80">Qualified purchases over $999</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Instant Approval</p>
                  <p className="text-brand-cream/80">Get approved in minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Flexible Terms</p>
                  <p className="text-brand-cream/80">6, 12, or 24-month payment plans</p>
                </div>
              </div>
            </div>

            <Link
              href="/financing"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-burgundy font-semibold rounded-lg hover:bg-brand-cream transition-colors"
            >
              Learn More About Financing
            </Link>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CreditCard className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Pay Monthly</h3>
              <p className="text-brand-cream/90 mb-4">
                Break up your purchase into manageable monthly payments with our financing partners.
              </p>
              <p className="text-3xl font-bold">
                As low as <span className="text-4xl">$50</span>/month
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <DollarSign className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">No Hidden Fees</h3>
              <p className="text-brand-cream/90 mb-4">
                Transparent pricing with no surprise charges. What you see is what you pay.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">No prepayment penalties</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">No application fees</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">No impact on credit score</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
