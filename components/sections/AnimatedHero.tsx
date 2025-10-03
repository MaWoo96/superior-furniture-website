'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AnimatedHero() {
  // Centered layout - updated
  return (
    <section className="relative bg-gradient-to-br from-white via-brand-cream/30 to-white py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-burgundy/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-brand-burgundy/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-burgundy/10 rounded-full text-brand-burgundy text-base md:text-sm font-semibold"
          >
            <Sparkles className="w-5 h-5 md:w-4 md:h-4" />
            <span className="text-center">Authorized Ashley Furniture Dealer | 8+ Years in Delaware</span>
          </motion.div>

          {/* Animated heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Ashley Furniture & Premium Mattresses
            <br />
            <motion.span
              className="text-brand-burgundy inline-block font-bold"
              animate={{
                textShadow: [
                  '0 0 20px rgba(139, 58, 58, 0.3)',
                  '0 0 30px rgba(165, 75, 75, 0.5)',
                  '0 0 20px rgba(139, 58, 58, 0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              60-75% Off Retail Prices
            </motion.span>
          </motion.h1>

          {/* Animated description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-3xl mx-auto"
          >
            Brand new, name-brand furniture and mattresses at prices comparable to used furniture stores.
            <br />
            <span className="text-brand-burgundy font-semibold">
              Our partnership with God&apos;s Way Thrift Store eliminates traditional retail overhead.
            </span>
          </motion.p>

          {/* Animated CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
          >
            <motion.a
              href="tel:+1234567890"
              className="group inline-flex items-center justify-center px-8 py-4 bg-brand-burgundy text-white font-semibold rounded-lg transition-all text-lg relative overflow-hidden mx-auto"
              style={{ backgroundColor: '#8B3A3A', color: '#FFFFFF' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2" style={{ color: '#FFFFFF' }}>
                <span style={{ color: '#FFFFFF' }}>Call Us Today</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ color: '#FFFFFF' }}
                >
                  <ArrowRight className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=1+Maple+Ave+Milford+DE+19663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-burgundy font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-brand-burgundy text-lg group mx-auto"
              whileHover={{ scale: 1.05, borderColor: '#6B2B2B' }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Our Showroom
              <motion.span
                className="ml-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                📍
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Animated trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8 text-sm text-gray-700 font-medium max-w-2xl mx-auto"
          >
            {['Authorized Ashley Dealer', 'Free Delivery & Setup', 'Free Mattress Removal'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <span className="w-2 h-2 bg-brand-burgundy rounded-full" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-brand-burgundy rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-brand-burgundy rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
