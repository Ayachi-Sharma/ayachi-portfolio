import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  link?: string;
}

const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications: Certification[] = [
    {
      title: 'Core JAVA',
      issuer: 'MSME Technology Centre',
      date: '2023',
      icon: '☕',
      link: '#' // Replace with actual certificate link
    },
    {
      title: 'Summer Internship Program',
      issuer: 'IBM',
      date: '2023',
      icon: '💻',
      link: '#' // Replace with actual certificate link
    },
    {
      title: '3 Month Internship',
      issuer: 'Amparo Secure Tech., Bhilwara',
      date: '2024',
      icon: '🔒',
      link: '#' // Replace with actual certificate link
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
      className="py-36 "
    >
      <motion.div 
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full">
            <Award className="h-8 w-8 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 ml-4">Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-gray-900 font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              {cert.link && (
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;