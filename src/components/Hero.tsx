import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-28 px-8 lg:px-10 lg:py-32 space-y-12 sm:space-y-24">
      
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
          Full Stack Developer with hands-on experience designing and building complete web applications — from responsive React front ends to RESTful Node.js/Express APIs and MongoDB-backed data layers. Focused on writing clean, scalable code and delivering seamless user experiences.
          </p>
          
          {/* Scroll explore */}
          <div className="flex items-center gap-4 text-xs font-mono-labels uppercase tracking-wider text-[#181816]/70">
            <span className="w-12 h-[1px] bg-[#181816]/60" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default Hero;