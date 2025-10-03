import Link from 'next/link';

const categories = [
  {
    name: 'Living Room',
    href: '/categories/living-room',
    description: 'Sofas, sectionals, and accent chairs',
    color: 'from-blue-500/80 to-blue-700/80',
  },
  {
    name: 'Bedroom',
    href: '/categories/bedroom',
    description: 'Beds, dressers, and nightstands',
    color: 'from-purple-500/80 to-purple-700/80',
  },
  {
    name: 'Mattresses',
    href: '/categories/mattresses',
    description: 'Memory foam, hybrid, and innerspring',
    color: 'from-brand-burgundy/80 to-brand-burgundy-dark/80',
  },
  {
    name: 'Dining',
    href: '/categories/dining',
    description: 'Tables, chairs, and storage',
    color: 'from-green-500/80 to-green-700/80',
  },
  {
    name: 'Office',
    href: '/categories/office',
    description: 'Desks, chairs, and organization',
    color: 'from-gray-600/80 to-gray-800/80',
  },
  {
    name: 'Outdoor',
    href: '/categories/outdoor',
    description: 'Patio sets and lounge furniture',
    color: 'from-teal-500/80 to-teal-700/80',
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Room
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect pieces for every space in your home
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-transparent hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Background Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="font-serif text-3xl font-bold mb-2 text-center">
                  {category.name}
                </h3>
                <p className="text-sm text-center opacity-90 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold group-hover:bg-white/30 transition-colors">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
