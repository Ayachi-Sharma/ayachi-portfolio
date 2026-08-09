import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
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

  const toolkit = [
  {
    category: "LANGUAGES",
    items: ["Java", "JavaScript"],
  },
  {
    category: "FRONTEND",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "DATABASE",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "TOOLS",
    items: ["AWS", "Git", "GitHub", "VS Code", "Postman", "Render", "Vercel"],
  },
];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="bg-[#181816] text-[#f5f2eb] w-full"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: TITLE BLOCKS */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6 select-none"
          >
            <div className="text-xs sm:text-sm font-mono-labels uppercase tracking-widest text-[#f5f2eb]/60">
              SKILLS
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight font-serif-display leading-none">
              What I<br />
              <span className="text-[#b2d835] italic font-semibold">wield.</span>
            </h2>
          </motion.div>
          
          {/* RIGHT COLUMN: TABULAR CAPABILITY MATRIX */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 divide-y divide-[#f5f2eb]/15 border-t border-b border-[#f5f2eb]/15 select-none"
          >
            {toolkit.map((row, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 py-5 items-baseline gap-2 md:gap-6 hover:bg-white/[0.02] transition-colors"
              >
                {/* Category mono label (col 3) */}
                <div className="md:col-span-3 text-[10px] sm:text-xs font-mono-labels text-[#f5f2eb]/50 font-bold uppercase tracking-widest">
                  {row.category}
                </div>
                
                {/* Items serif list (col 9) */}
                {/* Items serif list (col 9) */}
<div className="md:col-span-9 text-xl sm:text-2xl font-serif-display font-semibold text-[#f5f2eb]/90 leading-tight flex flex-wrap items-center">
  {row.items.map((item, index) => (
    <React.Fragment key={item}>
      <span>{item}</span>

      {index !== row.items.length - 1 && (
        <span
          className="mx-3 text-[#b2d835] text-lg"
        >
          •
        </span>
      )}
    </React.Fragment>
  ))}
</div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;