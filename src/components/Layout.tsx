import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Impact', href: '/impact' },
  { name: 'OGWA Foundation', href: '/foundation' },
  { name: 'Stories', href: '/stories' },
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
    <div className="min-h-screen selection:bg-[#EBC325] selection:text-black bg-black text-[#94A3B8] flex flex-col justify-between cinematic-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-20 flex justify-between items-center bg-black/95 backdrop-blur-xl border-b border-white/10">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-[10px] font-bold uppercase tracking-[0.25em] relative py-2 group transition-colors ${
                location.pathname === link.href ? 'text-[#EBC325]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#EBC325] transition-all duration-300 ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="border border-[#EBC325] text-[#EBC325] px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#EBC325] hover:text-black hover:shadow-[0_0_15px_rgba(235,195,37,0.3)] transition-all duration-300 ml-2"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white hover:text-[#EBC325] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 lg:hidden px-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-xl font-display font-light uppercase tracking-[0.2em] transition-colors py-1 ${
                  location.pathname === link.href ? 'text-[#EBC325] font-semibold' : 'text-slate hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary mt-6 text-center w-full max-w-xs"
            >
              Connect Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with subtle ambient top separator spacer */}
      <main className="pt-20 flex-1">
        {children}
      </main>

      {/* Footer Element with high contrast subtle lines */}
      <footer className="bg-black/90 border-t border-white/10 py-8 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest gap-6 md:gap-0">
          <span>© {new Date().getFullYear()} OGWA Studios</span>
          <div className="flex space-x-8">
            <a href="https://instagram.com/ogwastudios" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBC325] transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/ogwastudios" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBC325] transition-colors">LinkedIn</a>
            <a href="https://x.com/ogwastudios?s=20" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBC325] transition-colors">Twitter</a>
          </div>
          <span>Lagos, Nigeria (Collaborating Globally)</span>
        </div>
      </footer>
    </div>
  );
};
