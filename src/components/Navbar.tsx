'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem {
  name: string;
  action: () => void;
}

interface NavbarProps {
  navItems: NavItem[];
  onNavigate: (page: string) => void;
  activePage?: string;
}

// ─── Hamburger Icon (animated) ────────────────────────────────────────────────
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className="w-6 h-5 flex flex-col justify-between cursor-pointer"
      aria-hidden="true"
    >
      <motion.span
        className="block h-0.5 bg-current rounded-full origin-center"
        animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        className="block h-0.5 bg-current rounded-full"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      />
      <motion.span
        className="block h-0.5 bg-current rounded-full origin-center"
        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  );
}

// ─── Navbar Component ─────────────────────────────────────────────────────────
export default function Navbar({ navItems, onNavigate, activePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  // Slide-in drawer variants (from right)
  const drawerVariants = {
    closed: {
      x: '100%',
      transition: { type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    },
    open: {
      x: 0,
      transition: { type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.25 } },
    open: { opacity: 1, transition: { duration: 0.25 } },
  };

  const itemVariants = {
    closed: { x: 24, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.15 + i * 0.06, duration: 0.3, ease: 'easeOut' },
    }),
  };

  return (
    <>
      {/* ── NAV BAR ───────────────────────────────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <button
              className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
              onClick={() => onNavigate('home')}
              aria-label="Go to home"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-xl">RKC</span>
              </div>
              <span
                className={`text-xl sm:text-2xl font-bold tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
              >
                GALAXY
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className={`font-medium transition-colors hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded ${activePage === item.name.toLowerCase()
                    ? 'text-orange-500'
                    : isScrolled ? 'text-gray-700' : 'text-white/90'
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                aria-label="Contact us"
              >
                <Phone size={16} aria-hidden="true" />
                <span>Enquire</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 min-w-[44px] min-h-[44px] flex items-center justify-center ${isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>

          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU PORTAL ────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Drawer (50% width from right) */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 h-full z-50 w-1/2 min-w-[260px] max-w-xs md:hidden flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
              }}
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow">
                    <span className="text-white font-bold text-xs">RKC</span>
                  </div>
                  <span className="text-gray-900 font-bold text-base tracking-tight">GALAXY</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-label="Close menu"
                >
                  <HamburgerIcon isOpen={true} />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex-1 flex flex-col px-4 pt-6 gap-1 overflow-y-auto" aria-label="Mobile navigation">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => {
                      item.action();
                      closeMobileMenu();
                    }}
                    className={`w-full text-left px-4 py-3.5 rounded-xl font-semibold text-base transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                      min-h-[48px] flex items-center
                      ${activePage === item.name.toLowerCase()
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    aria-current={activePage === item.name.toLowerCase() ? 'page' : undefined}
                  >
                    {activePage === item.name.toLowerCase() && (
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    )}
                    {item.name}
                  </motion.button>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                className="px-4 pb-8 pt-4"
                custom={navItems.length}
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-6 py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-orange-200 min-h-[52px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  onClick={closeMobileMenu}
                  aria-label="Call us now"
                >
                  <Phone size={18} aria-hidden="true" />
                  <span>Call Now</span>
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}