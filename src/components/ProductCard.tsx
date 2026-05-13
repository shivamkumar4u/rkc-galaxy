import { motion } from 'motion/react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsApp = () => {
    const message = `Hi RKC Galaxy, I'm interested in the ${product.name} (${product.brand}). Can you provide more details?`;
    window.open(`https://wa.me/919334165209?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border border-gray-100">
            {product.brand}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{product.name}</h3>
        
        <ul className="space-y-2 mb-8 flex-grow">
          {product.specs.map((spec, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <MessageSquare size={18} />
          Enquire on WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
