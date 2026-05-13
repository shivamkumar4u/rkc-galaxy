import { motion } from 'motion/react';
import { ShieldCheck, Tag, Headphones, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    description: '100% original products with official brand warranty and support.',
  },
  {
    icon: Tag,
    title: 'Best Price',
    description: 'Competitive pricing that offers the best value for your investment.',
  },
  {
    icon: Headphones,
    title: 'Local Support',
    description: 'Dedicated local service and technical assistance whenever you need it.',
  },
  {
    icon: Award,
    title: 'Expert Advice',
    description: 'Our specialists help you choose the right technology for your needs.',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 text-orange-500">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
