import { motion } from 'motion/react';
import { BRANDS } from '../constants';

export default function BrandSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by World-Class Brands</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="h-12 md:h-16 flex items-center justify-center"
              >
                {brand.logo.endsWith('.svg') || brand.logo.startsWith('http') ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-auto max-w-[120px] object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-2xl font-bold text-gray-400">{brand.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
