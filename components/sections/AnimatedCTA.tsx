'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function AnimatedCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-brand-burgundy via-brand-burgundy-dark to-brand-burgundy text-white overflow-hidden" style={{ backgroundColor: '#8B3A3A' }}>
      {/* Animated background patterns */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{ color: '#FFFFFF' }}
          >
            Ready to Transform
            <span className="block mt-2" style={{ color: '#FFFFFF' }}>Your Home?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white leading-relaxed"
            style={{ color: '#FFFFFF' }}
          >
            Visit our Milford showroom to see Ashley Furniture and premium mattresses
            at 60-75% off retail. Try before you buy—and leave with same-day delivery available.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="tel:+1234567890"
              className="group inline-flex items-center justify-center px-8 py-5 bg-white text-brand-burgundy font-semibold rounded-xl hover:bg-brand-cream transition-all text-lg shadow-2xl relative"
              style={{ backgroundColor: '#FFFFFF', color: '#8B3A3A' }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3" style={{ color: '#8B3A3A' }}>
                <Phone className="w-5 h-5" style={{ color: '#8B3A3A' }} />
                <span style={{ color: '#8B3A3A' }}>(123) 456-7890</span>
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  style={{ color: '#8B3A3A' }}
                >
                  <ArrowRight className="w-5 h-5" style={{ color: '#8B3A3A' }} />
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=1+Maple+Ave+Milford+DE+19663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-5 bg-transparent text-white font-semibold rounded-xl hover:bg-white/10 transition-all border-2 border-white text-lg backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "#F5F5F0"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </motion.a>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-6 pt-12"
          >
            {[
              {
                icon: MapPin,
                title: 'Location',
                info: '1 Maple Ave, Milford, DE 19663',
                subtext: 'Partnered with God\'s Way Thrift Store'
              },
              {
                icon: Clock,
                title: 'Hours',
                info: 'Mon-Sat: 10am - 6pm',
                subtext: 'Sunday: Closed'
              },
              {
                icon: Phone,
                title: 'Contact',
                info: '(123) 456-7890',
                subtext: 'info@superiorfurniturede.com'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/20 transition-all"
                >
                  <Icon className="w-8 h-8 mb-3 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white font-medium">{item.info}</p>
                  <p className="text-white/80 text-sm mt-1">{item.subtext}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
}
