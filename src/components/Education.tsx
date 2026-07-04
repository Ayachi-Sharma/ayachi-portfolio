import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  percentage?: string;
}

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const educationList: EducationItem[] = [
    {
      school: 'Manikyalal Verma Textile & Engineering College, Bhilwara',
      degree: 'B.Tech in Information Technology',
      period: '2022 - 2026',
      percentage: '8.7 CGPA'
    },
    {
      school: 'Noble International School',
      degree: 'Senior Secondary (12th Grade) - English Medium',
      period: '2021 - 2022',
      percentage: '89%'
    },
    {
      school: 'Noble International School',
      degree: 'Secondary (10th Grade) - English Medium',
      period: '2019 - 2020',
      percentage: '81%'
    }
  ];

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
      id="education" 
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
          EDUCATION
        </motion.div>

        {/* RIGHT COLUMN: TIMELINE ROWS */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-9 divide-y divide-[#181816]/15 border-t border-b border-[#181816]/15 select-none"
        >
          {educationList.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 py-6 items-baseline gap-2 md:gap-6 hover:bg-[#181816]/[0.01] transition-colors"
            >
              {/* Period (col 3) */}
              <div className="md:col-span-3 text-xs font-mono-labels text-[#181816]/60 font-bold tracking-wider">
                {item.period}
              </div>
              
              {/* Institution and Degree (col 9) */}
              <div className="md:col-span-9 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#181816]">
                    {item.school}
                  </h4>
                  {item.percentage && (
                    <span className="shrink-0 px-2.5 py-0.5 border border-[#181816]/30 text-xs font-mono-labels font-bold tracking-wider text-[#181816]/70 uppercase w-fit">
                      {item.percentage}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-[#181816]/80 font-sans font-medium">
                  {item.degree}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Education;