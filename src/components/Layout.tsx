import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Foundation', href: '/foundation' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-navy bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-20 flex justify-between items-center glass border-b border-gray-200">
        <Link to="/">
          <Logo />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-[10px] font-bold uppercase tracking-[0.2em] relative group transition-colors ${
                location.pathname === link.href ? 'text-navy' : 'text-gray-400 hover:text-navy'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <Link to="/contact" className="bg-navy text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-md">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-2xl font-display font-light uppercase tracking-[0.2em] ${
                  location.pathname === link.href ? 'text-primary' : 'text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-4">
              Connect
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 md:py-0 md:h-16 flex items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest gap-6 md:gap-0">
          <span>© {new Date().getFullYear()} OGWA Studios</span>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
          <span className="hidden sm:block">Lagos / London / Remote</span>
        </div>
      </footer>
    </div>
  );
};
