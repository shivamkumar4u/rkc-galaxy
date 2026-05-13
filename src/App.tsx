import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, PRODUCTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import BrandSection from './components/BrandSection';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ProductCard from './components/ProductCard';
import { ChevronRight, Home as HomeIcon, Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedCategory]);

  const handleNavigate = (page: 'home' | 'products', category?: string) => {
    setCurrentPage(page);
    if (category) setSelectedCategory(category);
    else if (page === 'home') setSelectedCategory(null);
  };

  const filteredProducts = selectedCategory 
    ? PRODUCTS.filter(p => p.category === selectedCategory)
    : PRODUCTS;

  const currentCategoryName = selectedCategory 
    ? CATEGORIES.find(c => c.id === selectedCategory)?.name 
    : 'All Products';

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-600">
      <Navbar onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onExplore={() => {
              const el = document.getElementById('categories');
              el?.scrollIntoView({ behavior: 'smooth' });
            }} />
            
            <BrandSection />

            {/* Categories Section */}
            <section id="categories" className="py-24 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Browse Categories</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Discover our wide range of premium electronics, from high-performance laptops to advanced security systems.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CATEGORIES.map((category) => (
                    <CategoryCard 
                      key={category.id} 
                      category={category} 
                      onClick={(id) => handleNavigate('products', id)}
                    />
                  ))}
                </div>
              </div>
            </section>

            <Features />
            <Gallery />
            <Testimonials />
            <Contact />

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 border-t border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold">RKC</span>
                      </div>
                      <span className="text-2xl font-bold tracking-tighter">GALAXY</span>
                    </div>
                    <p className="text-gray-400 max-w-md leading-relaxed">
                      Your trusted local partner for premium electronics and IT solutions. We bring the world's best technology to your doorstep with expert local support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                      <li><button onClick={() => handleNavigate('home')} className="hover:text-orange-500 transition-colors">Home</button></li>
                      <li><button onClick={() => handleNavigate('products')} className="hover:text-orange-500 transition-colors">All Products</button></li>
                      <li><button className="hover:text-orange-500 transition-colors">About Us</button></li>
                      <li><button className="hover:text-orange-500 transition-colors">Contact</button></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 text-lg">Categories</h4>
                    <ul className="space-y-4 text-gray-400">
                      {CATEGORIES.slice(0, 4).map(c => (
                        <li key={c.id}>
                          <button 
                            onClick={() => handleNavigate('products', c.id)}
                            className="hover:text-orange-500 transition-colors"
                          >
                            {c.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                  <p>© {new Date().getFullYear()} RKC Galaxy. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="products"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-24 bg-gray-50 min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <button 
                  onClick={() => handleNavigate('home')}
                  className="flex items-center gap-1 hover:text-orange-500 transition-colors"
                >
                  <HomeIcon size={14} /> Home
                </button>
                <ChevronRight size={14} />
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`hover:text-orange-500 transition-colors ${!selectedCategory ? 'text-orange-500 font-bold' : ''}`}
                >
                  Products
                </button>
                {selectedCategory && (
                  <>
                    <ChevronRight size={14} />
                    <span className="text-orange-500 font-bold">{currentCategoryName}</span>
                  </>
                )}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    {currentCategoryName}
                  </h1>
                  <p className="text-gray-600 max-w-2xl text-lg">
                    Explore our collection of premium {currentCategoryName?.toLowerCase()} selected for quality and performance.
                  </p>
                </div>
                
                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      !selectedCategory 
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    All
                  </button>
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                        selectedCategory === c.id 
                          ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-gray-400 text-xl">No products found in this category.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
          onClick={() => window.open('https://wa.me/919334165209', '_blank')}
        >
          <MessageSquare size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-600 transition-colors"
          onClick={() => window.location.href = 'tel:+919334165209'}
        >
          <Phone size={24} />
        </motion.button>
      </div>
    </div>
  );
}
