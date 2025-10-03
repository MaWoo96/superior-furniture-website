'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tag, Shield, Truck, Heart } from 'lucide-react';

const features = [
  {
    icon: Tag,
    title: '60-75% Off Retail',
    description: 'Same quality, fraction of the price',
    color: 'from-brand-burgundy to-brand-burgundy-dark'
  },
  {
    icon: Shield,
    title: 'Authorized Ashley Dealer',
    description: 'Genuine name-brand furniture',
    color: 'from-brand-burgundy-light to-brand-burgundy'
  },
  {
    icon: Truck,
    title: 'Free Complete Service',
    description: 'Delivery, setup, and old mattress removal',
    color: 'from-brand-burgundy-dark to-[#5A1F1F]'
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: "Supporting God's Way Thrift Store mission",
    color: 'from-brand-burgundy to-brand-burgundy-light'
  }
];

export default function AnimatedAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,58,58,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,58,58,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-brand-burgundy/10 text-brand-burgundy rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            The Superior Difference
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Since 2015, we&apos;ve been proving that quality furniture doesn&apos;t require a finance plan.
            Our partnership with God&apos;s Way Thrift Store eliminates overhead costs that force
            traditional retailers to mark up products 200-300%.
            <span className="font-semibold text-brand-burgundy"> We pass those savings directly to you—
            while supporting our community.</span>
          </motion.p>
        </motion.div>

        {/* Features Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border-2 border-gray-100 hover:border-brand-burgundy transition-all duration-300 hover:shadow-xl text-center md:text-left flex flex-col items-center md:items-start">
                  {/* Animated icon container */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${feature.color} rounded-xl mb-6 relative`}
                    style={{ backgroundColor: '#8B3A3A' }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-14 h-14 text-white" style={{ color: '#FFFFFF', strokeWidth: 2 }} />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: [0, 0.2, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>

                  <h3 className="font-semibold text-xl mb-3 text-gray-900 group-hover:text-brand-burgundy transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-burgundy to-brand-burgundy-light rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real Pricing Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gray-50 rounded-2xl p-12 border-2 border-brand-burgundy/10"
        >
          <h3 className="font-serif text-3xl font-bold text-center mb-8">
            Real Value, Real Brands
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-burgundy mb-2">$599</div>
              <div className="text-gray-700 font-medium">Beautyrest-Quality Queen</div>
              <div className="text-sm text-gray-600 mt-1">Retail: $2,000</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-burgundy mb-2">$549</div>
              <div className="text-gray-700 font-medium">Ashley Sofa</div>
              <div className="text-sm text-gray-600 mt-1">Brand New, In Stock</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-burgundy mb-2">$379</div>
              <div className="text-gray-700 font-medium">Rocker Recliner</div>
              <div className="text-sm text-gray-600 mt-1">Multiple Styles Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
