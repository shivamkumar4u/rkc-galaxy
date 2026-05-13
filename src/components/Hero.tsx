import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
          alt="Showroom Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
            Welcome to RKC Galaxy
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Premium <span className="text-orange-500">Computers</span> & <br className="hidden md:block" /> Electronics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology with our curated selection of high-end electronics and expert local support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button
              onClick={onExplore}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Explore Categories <ArrowRight size={20} />
            </button>
            <div className="flex gap-4">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                <Phone size={20} />
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                <MessageSquare size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
