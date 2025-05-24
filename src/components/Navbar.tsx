import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed py-3 top-0 left-0 m-1 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2 border-2 border-blue-400 rounded-xl' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-xl font-bold text-gray-800">Ayachi Sharma</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'education', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-700 capitalize font-medium transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-3">
              {['about', 'skills', 'projects', 'education', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-700 capitalize font-medium py-2 transition duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;