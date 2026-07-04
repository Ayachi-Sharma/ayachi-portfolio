import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies the center of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Track home (hero) as well
    const homeElement = document.getElementById('home');
    if (homeElement) observer.observe(homeElement);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? 'pt-3' : 'pt-5'
      }`}
    >
      {/* Navbar Container */}
      <div 
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-500 border border-white/5 ${
          scrolled 
            ? 'bg-gray-950/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/10 py-3 px-6' 
            : 'bg-transparent py-4 px-4'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="bg-gradient-to-tr from-cyan-400 to-blue-600 p-2 rounded-xl group-hover:rotate-6 transition-transform duration-300">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400 font-display">
              Ayachi Sharma
            </span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg hover:text-white ${
                    isActive ? 'text-cyan-400' : 'text-gray-400'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Contact CTA Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500 hover:to-blue-600 border border-cyan-500/30 hover:border-transparent text-cyan-400 hover:text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 mx-4 bg-gray-950/90 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl absolute left-0 right-0"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-all duration-300 font-semibold flex items-center justify-between ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/15 to-transparent text-cyan-400 border-l-2 border-cyan-400' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />}
                  </button>
                );
              })}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg mt-2"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;