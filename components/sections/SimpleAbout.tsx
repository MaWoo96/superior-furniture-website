import { Sofa, Bed, Truck, Shield } from 'lucide-react';

export default function SimpleAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quality You Can Trust
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We specialize in providing Delaware families with premium furniture and mattresses
            that combine comfort, durability, and style. Visit us at our Milford location.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-burgundy/10 rounded-full mb-4">
              <Sofa className="w-8 h-8 text-brand-burgundy" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Furniture</h3>
            <p className="text-gray-600">
              Stylish pieces for every room in your home
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-burgundy/10 rounded-full mb-4">
              <Bed className="w-8 h-8 text-brand-burgundy" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Premium Mattresses</h3>
            <p className="text-gray-600">
              Sleep solutions designed for your comfort
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-burgundy/10 rounded-full mb-4">
              <Truck className="w-8 h-8 text-brand-burgundy" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Delivery Available</h3>
            <p className="text-gray-600">
              Convenient delivery options throughout Delaware
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-burgundy/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-brand-burgundy" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">
              Built to last with warranty protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
