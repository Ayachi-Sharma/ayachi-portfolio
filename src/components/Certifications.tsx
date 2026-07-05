import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
   description: string[];
  link?: string;
}

const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications: Certification[] = [
  {
    title: '3-Month MERN Stack Internship',
    issuer: 'Amparo Secure Technologies, Bhilwara',
    date: '2025',
    description: [
      'Developed modern React.js interfaces and reusable UI components for production web applications.',
      'Worked closely with the development team to integrate REST APIs, optimize user experience, and deliver responsive designs.'
    ],
    link: 'https://drive.google.com/file/d/1N93qt79iv9mQrzm-H1foeLYOjaGoZfOP/view?usp=sharing'
  },
  {
    title: 'Summer Internship Program',
    issuer: 'IBM',
    date: '2024',
    description: [
      "Built a Women's Empowerment web platform to spread awareness about rights, safety measures, and support services.",
      'Collaborated in a team environment to design responsive pages using HTML, CSS, and JavaScript.'
    ],
    link: 'https://drive.google.com/file/d/1Z9gus7YfrHCwjL8WBrFe3EzbimrWqUPg/view'
  },
  {
    title: 'Core Java Developer Certification',
    issuer: 'MSME Technology Centre',
    date: '2024',
    description: [
      'Learned object-oriented programming, exception handling, collections, file handling, and JDBC fundamentals.',
      'Strengthened problem-solving skills by developing console-based Java applications and core programming concepts.'
    ],
    link: 'https://drive.google.com/file/d/1Y2XIlC6A6E2duUInUIg9BZLN61NU3Bpx/view'
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
      id="certifications" 
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
          EXPERIENCE
        </motion.div>

        {/* RIGHT COLUMN: CERTIFICATION ENTRIES */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-9 divide-y divide-[#181816]/15 border-t border-b border-[#181816]/15 select-none"
        >
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 py-6 items-baseline gap-2 md:gap-6 hover:bg-[#181816]/[0.01] transition-colors group"
            >
              {/* Date (col 3) */}
              <div className="md:col-span-3 text-xs font-mono-labels text-[#181816]/60 font-bold tracking-wider">
                {cert.date}
              </div>
              
              {/* Info & Action Link (col 9) */}
              <div className="md:col-span-9 flex items-start justify-between gap-4">
                <div className="space-y-3">
  <h4 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#181816] group-hover:text-[#ff6b57] transition-colors leading-tight">
    {cert.title}
  </h4>

  <p className="text-sm text-[#181816]/75 font-sans font-medium">
    {cert.issuer}
  </p>

  <ul className="space-y-1">
    {cert.description.map((point, i) => (
      <li
        key={i}
        className="text-sm text-[#181816]/70 leading-relaxed flex items-start gap-2"
      >
        <span className="text-[#ff6b57] mt-[2px]">•</span>
        <span>{point}</span>
      </li>
    ))}
  </ul>
</div>
                
                {cert.link && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[#181816]/20 hover:border-black hover:bg-[#181816]/5 text-[#181816] transition-all"
                    aria-label="Verify credential document"
                  >
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;