import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Milford, DE',
    rating: 5,
    text: 'Best mattress purchase we\'ve ever made! The 100-night trial gave us confidence, and we\'ve been sleeping better than ever. The delivery team was professional and courteous.',
    product: 'Cloud Comfort Memory Foam Mattress',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Dover, DE',
    rating: 5,
    text: 'The quality of furniture at Superior is unmatched in Delaware. We furnished our entire living room and the financing options made it affordable. Highly recommend!',
    product: 'Modern Fabric Sectional',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Rehoboth Beach, DE',
    rating: 5,
    text: 'Exceptional customer service from start to finish. They helped us find the perfect dining set for our family. The showroom visit was worth the drive!',
    product: 'Farmhouse Dining Set',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied Delaware families sleeping better and living better
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-brand-burgundy transition-all relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-burgundy/20" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-brand-burgundy mt-2 font-medium">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-brand-burgundy mb-2">500+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-burgundy mb-2">4.8/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-burgundy mb-2">100%</p>
            <p className="text-gray-600">Satisfaction Guarantee</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-burgundy mb-2">1-Year</p>
            <p className="text-gray-600">Warranty Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
