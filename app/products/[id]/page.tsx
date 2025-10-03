import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, Truck, Clock, Shield, ChevronDown, Heart, Share2 } from 'lucide-react';

// Sample product data
const products: { [key: string]: any } = {
  '1': {
    id: 1,
    name: 'Cloud Comfort Memory Foam Mattress',
    category: 'Mattress',
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 124,
    description: 'Experience ultimate comfort with our Cloud Comfort Memory Foam Mattress. Designed with premium CertiPUR-US certified foam that conforms to your body, providing optimal support and pressure relief for a restful night\'s sleep.',
    features: [
      'CertiPUR-US Certified Foam',
      '3-Layer Premium Construction',
      'Cooling Gel Infusion',
      'Medium-Firm Support',
      'Hypoallergenic Cover',
      'Made in USA',
    ],
    specs: {
      'Thickness': '12 inches',
      'Firmness': 'Medium-Firm (6/10)',
      'Material': 'Memory Foam',
      'Weight Capacity': '500 lbs',
      'Warranty': '10 Years',
      'Trial Period': '100 Nights',
    },
    sizes: ['Twin', 'Full', 'Queen', 'King', 'California King'],
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id] || products['1'];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <span>Home</span> / <span>{product.category}</span> / <span className="text-gray-900">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Images */}
            <div>
              <div className="aspect-square bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                <p className="text-gray-500">Product Image Placeholder</p>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-2 hover:border-brand-burgundy">
                    <p className="text-xs text-gray-500">{i}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Product Info */}
            <div>
              <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-700 font-medium">{product.rating}</span>
                <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-bold text-brand-burgundy">
                    ${product.price}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${product.originalPrice - product.price}
                  </span>
                </div>
                <p className="text-gray-600">
                  or as low as <span className="font-semibold text-brand-burgundy">${Math.round(product.price / 12)}/month</span> with financing
                </p>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block font-semibold mb-3">Select Size:</label>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      className="py-3 px-4 border-2 border-gray-300 rounded-lg hover:border-brand-burgundy hover:bg-brand-burgundy/5 transition-colors font-medium"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-brand-burgundy text-white py-4 px-8 rounded-lg font-semibold hover:bg-brand-burgundy-dark transition-colors text-lg">
                  Add to Cart
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-brand-burgundy hover:bg-brand-burgundy/5 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-brand-burgundy hover:bg-brand-burgundy/5 transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200 mb-6">
                <div className="text-center">
                  <Truck className="w-8 h-8 text-brand-burgundy mx-auto mb-2" />
                  <p className="text-sm font-semibold">Free Delivery</p>
                  <p className="text-xs text-gray-600">Orders over $999</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-brand-burgundy mx-auto mb-2" />
                  <p className="text-sm font-semibold">100-Night Trial</p>
                  <p className="text-xs text-gray-600">Risk-free returns</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-brand-burgundy mx-auto mb-2" />
                  <p className="text-sm font-semibold">10-Year Warranty</p>
                  <p className="text-xs text-gray-600">Quality guaranteed</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            {/* Features */}
            <details className="border border-gray-200 rounded-lg" open>
              <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                Features & Benefits
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="px-6 pb-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-brand-burgundy rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* Specifications */}
            <details className="border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                Specifications
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="px-6 pb-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-100 pb-2">
                      <dt className="text-sm text-gray-600 mb-1">{key}</dt>
                      <dd className="font-semibold">{value as string}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </details>

            {/* Delivery */}
            <details className="border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                Delivery & Setup
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-700">
                  Free white-glove delivery on orders over $999. Our professional team will deliver and set up your mattress in the room of your choice.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-burgundy rounded-full mr-3 mt-2"></span>
                    <span>Estimated delivery: 5-7 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-burgundy rounded-full mr-3 mt-2"></span>
                    <span>Old mattress removal available for $50</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-burgundy rounded-full mr-3 mt-2"></span>
                    <span>In-room setup and packaging removal included</span>
                  </li>
                </ul>
              </div>
            </details>
          </div>

          {/* Reviews Section Placeholder */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <p className="text-gray-600">Reviews section coming soon</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
