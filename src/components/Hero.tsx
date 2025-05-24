import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Ayachi Sharma';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-10 relative">
      <div className="container mx-auto px-36 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="relative">
            <h2 className="text-3xl md:text-5xl text-blue-600 font-medium mb-4">
              {typedText}
              {!isTypingComplete && <span className="animate-blink">|</span>}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Passionate about creating seamless web experiences and turning innovative ideas into reality. Currently pursuing B.Tech in Information Technology, focusing on modern web technologies and best practices.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://drive.google.com/drive/folders/1zakINFZs0ojLegT4L-OWa89daQOpD3dr" 
                download
                className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:bg-blue-800 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-blue-700 text-gray-900 px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:bg-gray-200 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-gray-100 shadow-xl">
            <img 
              src="/src/assets/ayachi-pic.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;