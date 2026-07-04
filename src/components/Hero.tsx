import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const stats = [
    { label: 'CGPA • IT', value: '8.7' },
    { label: 'INTERNSHIPS', value: '2' },
    { label: 'PROJECTS SHIPPED', value: '4' },
    { label: 'GRADUATING', value: '2026' }
  ];

  return (
    <div className="max-w-7xl mx-auto pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 px-8 sm:px-8 py-16 sm:py-24 lg:py-28 space-y-12 sm:space-y-24">
      
      {/* 1. MERN STACK TAGLINE */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-xs sm:text-sm font-mono-labels uppercase tracking-widest text-[#181816]/70 select-none"
      >
        <span className="text-[#ff6b57] text-sm">◆</span>
        <span>MERN STACK DEVELOPER</span>
      </motion.div>

      {/* 2. SPLIT INTRO DISPLAY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        
        {/* LEFT COLUMN: LARGE SERIF NAME (Spans 7 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7 select-none"
        >
          <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7.5rem] font-bold tracking-tight leading-[0.85] text-[#181816] font-serif-display">
            Ayachi<br />
            <span className="text-[#ff6b57] italic font-semibold">Sharma</span>
            {/* <span className="text-[#181816]">.</span> */}
          </h1>
        </motion.div>

        {/* RIGHT COLUMN: RECRUITING PARAGRAPH (Spans 5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 space-y-8 lg:pl-6"
        >
          <p className="text-lg sm:text-xl text-[#181816]/90 leading-relaxed font-sans font-medium">
            A motivated, detail-oriented MERN stack engineer. I build responsive, user-friendly web applications end-to-end — from React interfaces to Node/Express APIs and MongoDB databases. Currently open to entry-level full stack roles.
          </p>
          
          {/* Scroll explore */}
          <div className="flex items-center gap-4 text-xs font-mono-labels uppercase tracking-wider text-[#181816]/70">
            <span className="w-12 h-[1px] bg-[#181816]/60" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </motion.div>

      </div>

      {/* 3. INTEGRATED METRICS ROW */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-[#181816]/30 select-none"
      >
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <div className="text-3xl sm:text-4xl font-serif-display font-bold text-[#181816]">
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs font-mono-labels uppercase tracking-wider text-[#181816]/70 font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default Hero;