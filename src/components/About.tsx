import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  const stats = [
    { label: 'CGPA • IT', value: '8.7' },
    { label: 'INTERNSHIPS', value: '2' },
    { label: 'PROJECTS SHIPPED', value: '4' },
    { label: 'GRADUATING', value: '2026' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: SECTION LABEL */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 text-xs sm:text-sm font-mono-labels uppercase tracking-widest text-[#181816]/70 select-none"
        >
          (01) — ABOUT
        </motion.div>

        {/* RIGHT COLUMN: MAIN EDITORIAL DESCRIPTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-9 space-y-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#181816] tracking-tight leading-[1.25] font-serif-display select-none">
            A motivated, detail-oriented developer with a strong foundation in{' '}
            <span className="text-[#ff6b57] italic font-semibold">front-end</span> and{' '}
            <span className="text-[#ff6b57] italic font-semibold">back-end</span> engineering — passionate about scalable, human interfaces and quick to learn whatever the stack demands.
          </h2>
          
          {/* STATS MATRIX */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-3">
                {/* Thin top border */}
                <div className="h-[1px] w-full bg-[#181816]/30" />
                
                {/* Value */}
                <div className="text-3xl sm:text-4xl font-serif-display font-bold text-[#181816]">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-[10px] sm:text-xs font-mono-labels uppercase tracking-wider text-[#181816]/70 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;