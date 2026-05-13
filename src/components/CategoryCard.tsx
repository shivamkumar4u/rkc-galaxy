import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  key?: string | number;
  category: Category;
  onClick: (id: string) => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  // Dynamic icon component
  const IconComponent = (Icons as any)[category.icon];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
      onClick={() => onClick(category.id)}
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="mb-4 w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-12">
          {IconComponent && <IconComponent className="text-white" size={32} />}
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {category.description}
        </p>
        <div className="mt-6 flex items-center text-orange-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
          View Products <Icons.ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
}
