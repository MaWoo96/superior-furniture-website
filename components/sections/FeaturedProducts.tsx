import Link from 'next/link';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Cloud Comfort Memory Foam Mattress',
    category: 'Mattress',
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 124,
    image: '/placeholder-mattress.jpg',
    badge: 'Best Seller',
    features: ['100-Night Trial', 'Free Delivery', 'CertiPUR-US'],
  },
  {
    id: 2,
    name: 'Modern Fabric Sectional Sofa',
    category: 'Living Room',
    price: 1499,
    originalPrice: 1999,
    rating: 4.7,
    reviews: 89,
    image: '/placeholder-sofa.jpg',
    badge: '25% Off',
    features: ['Free Assembly', 'Stain Resistant', '5-Year Warranty'],
  },
  {
    id: 3,
    name: 'Luxury Hybrid Mattress - King',
    category: 'Mattress',
    price: 1299,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 156,
    image: '/placeholder-king-mattress.jpg',
    badge: 'Premium',
    features: ['Cooling Gel', 'Edge Support', '100-Night Trial'],
  },
  {
    id: 4,
    name: 'Farmhouse Dining Table Set',
    category: 'Dining',
    price: 799,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 67,
    image: '/placeholder-dining.jpg',
    badge: 'New Arrival',
    features: ['Seats 6', 'Solid Wood', 'Free Delivery'],
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that combine quality, comfort, and style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-xl border border-gray-200 hover:border-brand-burgundy transition-all duration-300 overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-square bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm text-center px-4">{product.name}</p>
                </div>
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-burgundy text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-burgundy transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-brand-burgundy">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>

                {/* Financing */}
                <p className="text-xs text-gray-600 mt-2">
                  or as low as <span className="font-semibold">${Math.round(product.price / 12)}/mo</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-brand-burgundy text-white font-semibold rounded-lg hover:bg-brand-burgundy-dark transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
