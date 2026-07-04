import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#f5f2eb] flex flex-col items-center justify-center z-50 overflow-hidden select-none">
      <div className="relative flex flex-col items-center text-center">
        
        {/* Animated letter logo A/S */}
        <motion.div 
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="font-serif-display font-extrabold text-5xl sm:text-6xl tracking-tight text-[#181816] mb-6"
        >
          A<span className="text-[#ff6b57]">/</span>S
        </motion.div>
        
        <h2 className="text-sm font-mono-labels uppercase tracking-widest text-[#181816] font-bold">
          AYACHI SHARMA
        </h2>
        
        <p className="text-[10px] font-mono-labels text-[#181816]/60 tracking-wider uppercase mt-1">
          EST. 2022 • PORTFOLIO
        </p>
        
        {/* Simple thin charcoal progress bar */}
        <div className="mt-8 w-32 h-[1px] bg-[#181816]/10 overflow-hidden relative">
          <div className="h-full bg-[#181816] w-full animate-loadingBar" />
        </div>
      </div>
    </div>
  );
};

export default Loader;