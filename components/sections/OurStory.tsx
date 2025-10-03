'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-brand-cream/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <span className="px-4 py-2 bg-brand-burgundy/10 text-brand-burgundy rounded-full text-sm font-semibold">
              Our Partnership Advantage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-6"
          >
            How We Keep Prices So Low
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-700 text-center mb-12"
          >
            It&apos;s not a sale. It&apos;s not a gimmick. It&apos;s our partnership with God&apos;s Way Thrift Store.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Stores */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 h-full flex flex-col"
            >
              <h3 className="font-bold text-2xl mb-4 text-brand-burgundy">
                Traditional Furniture Stores
              </h3>
              <ul className="space-y-3 text-gray-700 flex-grow">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>High rent in commercial shopping centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Large sales staff and commissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Massive marketing budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>200-300% markups to cover overhead</span>
                </li>
              </ul>
              <div className="mt-auto p-4 bg-red-50 rounded-lg">
                <p className="font-bold text-red-700">
                  Result: $2,000 for a queen mattress
                </p>
              </div>
            </motion.div>

            {/* Superior Furniture */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#8B3A3A] text-white rounded-xl p-8 shadow-lg h-full flex flex-col"
              style={{ backgroundColor: '#8B3A3A' }}
            >
              <h3 className="font-bold text-2xl mb-4 text-white">
                Superior Furniture & Mattress
              </h3>
              <ul className="space-y-3 text-base flex-grow">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white">Partnership with God&apos;s Way Thrift Store = minimal overhead</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white">Direct manufacturer relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white">Owner-operated, low sales costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white">Fair pricing + every purchase supports charity</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="font-bold text-brand-burgundy text-center" style={{ color: '#8B3A3A' }}>
                  Result: $500-600 for the same quality mattress
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-700 italic">
              &quot;We believe everyone deserves a home they love—without the markup.&quot;
            </p>
            <p className="text-gray-700 mt-2">— Roger Wood, Owner</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
