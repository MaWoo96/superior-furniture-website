import Link from 'next/link';
import { ArrowRight, Truck, Clock, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-brand-cream min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Sleep Better,
              <span className="text-brand-burgundy"> Live Better</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Premium furniture and mattresses designed for your comfort. Experience Delaware&apos;s finest selection of quality home furnishings.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-start space-x-3">
                <Truck className="w-6 h-6 text-brand-burgundy flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Free Delivery</p>
                  <p className="text-xs text-gray-600">Orders over $999</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-brand-burgundy flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm">100-Night Trial</p>
                  <p className="text-xs text-gray-600">Risk-free returns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-brand-burgundy flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm">1-Year Warranty</p>
                  <p className="text-xs text-gray-600">Quality guaranteed</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/categories/mattresses"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-burgundy text-white font-semibold rounded-lg hover:bg-brand-burgundy-dark transition-colors"
              >
                Shop Mattresses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/categories/living-room"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-burgundy font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-brand-burgundy"
              >
                Shop Furniture
              </Link>
            </div>

            {/* Financing */}
            <p className="text-sm text-gray-600 pt-2">
              <span className="font-semibold">Flexible Financing Available</span> - As low as $50/month
            </p>
          </div>

          {/* Right Image - Placeholder */}
          <div className="hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-burgundy/10 to-transparent z-10" />
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
