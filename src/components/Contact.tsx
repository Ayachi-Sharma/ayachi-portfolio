import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const copyPhoneNumber = async () => {
  await navigator.clipboard.writeText('+91 8955236526');
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  const contactMethods = [
    { label: 'Email', value: 'sharmaayachi@gmail.com', href: 'mailto:sharmaayachi@gmail.com' },
    { label: 'Phone', value: '+91-8955236526', href: 'tel:+918955236526' },
    { label: 'GitHub', value: 'github.com/Ayachi-Sharma', href: 'https://github.com/Ayachi-Sharma' },
    { label: 'LinkedIn', value: 'Ayachi-Sharma', href: 'https://www.linkedin.com/in/ayachi-sharma-b0002225b/' }
  ];

  return (
    <section 
      id="contact" 
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
          CONTACT
        </motion.div>

        {/* RIGHT COLUMN: CONTACT DETAILS & MESSAGE BOX */}
<div className="lg:col-span-9">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.2 }}
  >

    <div className="divide-y divide-[#181816]/10 border-t border-b border-[#181816]/10">

      {/* Email */}
      <a
        href="mailto:sharmaayachi@gmail.com"
        className="flex justify-between items-center py-4 group"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-[#181816]/50">
            Email
          </p>

          <p className="text-lg font-semibold group-hover:text-[#ff6b57] transition-colors">
            sharmaayachi@gmail.com
          </p>
        </div>

        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </a>

      {/* Phone */}
      <button
        onClick={copyPhoneNumber}
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-[#181816]/50">
            Phone
          </p>

          <p className="text-lg font-semibold group-hover:text-[#ff6b57] transition-colors">
            +91 8955236526
          </p>
        </div>

        {copied ? (
          <Check className="text-[#b2d835]" />
        ) : (
          <Copy className="group-hover:text-[#ff6b57] transition-colors" />
        )}
      </button>

      {/* GitHub */}
      <a
        href="https://github.com/Ayachi-Sharma"
        target="_blank"
        className="flex justify-between items-center py-6 group"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-[#181816]/50">
            GitHub
          </p>

          <p className="text-lg font-semibold group-hover:text-[#ff6b57] transition-colors">
            github.com/Ayachi-Sharma
          </p>
        </div>

        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ayachi-sharma-b0002225b/"
        target="_blank"
        className="flex justify-between items-center py-6 group"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-[#181816]/50">
            LinkedIn
          </p>

          <p className="text-lg font-semibold group-hover:text-[#ff6b57] transition-colors">
            Ayachi Sharma
          </p>
        </div>

        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </a>

    </div>

    {copied && (
      <p className="mt-4 text-sm text-[#b2d835] font-semibold">
        ✓ Phone number copied to clipboard
      </p>
    )}
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default Contact;