import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'The Process', href: '#process' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center px-4 sm:px-6 lg:px-8 ${isScrolled ? 'top-4' : 'top-6'}`}>
        <div className={`flex justify-between items-center w-full max-w-6xl transition-all duration-500 ${isScrolled ? 'glass dark:glass-dark px-4 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)]' : 'bg-transparent py-2 px-0 rounded-none'}`}>
          
          <div className="flex items-center gap-2 cursor-pointer z-50 shrink-0">
            <img src={logo} alt="Gran Maestro Drycleaners Logo" className={`w-auto transition-all duration-500 ${isScrolled ? 'h-10 rounded-full' : 'h-14 md:h-16 bg-white/80 dark:bg-white/90 p-1 rounded-xl'}`} />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 bg-white/50 dark:bg-navy-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative px-3 py-2 text-sm font-medium text-navy-900 dark:text-gray-200 hover:text-brandRed-500 dark:hover:text-brandRed-400 transition-colors group">
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brandRed-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-2.5 rounded-full hover:bg-gray-200 dark:hover:bg-navy-800 transition-colors text-navy-900 dark:text-gray-200 border border-transparent hover:border-gray-300 dark:hover:border-navy-600">
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
            <a href="https://wa.me/2348188884275" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">Schedule Pickup</Button>
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-3 z-50">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-navy-800 transition-colors text-navy-900 dark:text-gray-200 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-navy-900 dark:text-gray-200 focus:outline-none p-2 bg-white/50 dark:bg-black/20 rounded-full backdrop-blur-sm shadow-sm"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-[#060d1f]/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col items-center shadow-2xl"
          >
            <div className="flex flex-col items-center space-y-6 w-full">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-navy-900 dark:text-white hover:text-brandRed-500 dark:hover:text-brandRed-400 transition-colors w-full text-center py-2 border-b border-gray-100 dark:border-navy-800"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-6 w-full"
              >
                <a href="https://wa.me/2348188884275" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full block">
                  <Button size="lg" className="w-full rounded-2xl shadow-xl">Schedule Pickup</Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
