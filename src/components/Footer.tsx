import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-[#181816] bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 select-none">
        
        {/* Left branding */}
        <div className="text-center sm:text-left">
          <p className="text-xs sm:text-sm font-mono-labels text-[#181816]/75 font-semibold tracking-wide uppercase">
            © {currentYear} AYACHI SHARMA. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-gray-500 font-medium tracking-wide mt-1 uppercase">
            Designed, Developed & Deployed by Ayachi Sharma.          
            </p>
        </div>        
      </div>
    </footer>
  );
};

export default Footer;