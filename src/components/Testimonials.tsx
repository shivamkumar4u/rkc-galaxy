import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-8 text-orange-500/20" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-orange-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
