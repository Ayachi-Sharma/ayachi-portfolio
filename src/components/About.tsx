import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <motion.div 
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-8">
          <div className="bg-blue-800 p-3 rounded-full">
            <User className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-blue-700 ml-4">About Me</h2>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a final year B.Tech student at Manikyalal Verma Textile and Engineering College, I'm passionate about creating innovative web solutions that make a difference. My journey in technology is driven by curiosity and a desire to build meaningful applications.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I specialize in front-end web development, with a strong foundation in modern web technologies. Currently focused on React.js and building responsive interfaces, I aim to grow into a full-stack developer as I expand my skills.
      </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I am always eager to learn and share knowledge with fellow developers.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-red-100 text-gray-900 rounded-full border-2 border-red-500 font-medium hover:bg-gray-200 transition-colors">Web Development</span>
            <span className="px-4 py-2 bg-blue-100 text-gray-900 rounded-full border-2 border-blue-500 font-medium hover:bg-gray-200 transition-colors">Problem Solving</span>
            <span className="px-4 py-2 bg-green-100 text-gray-900 rounded-full border-2 border-green-500 font-medium hover:bg-gray-200 transition-colors">UI/UX</span>
            <span className="px-4 py-2 bg-yellow-100 text-gray-900 rounded-full border-2 border-yellow-500 font-medium hover:bg-gray-200 transition-colors">Teamwork</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;