import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

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
      period: '2022-2026',
    },
    {
      school: 'Noble International School',
      degree: 'Senior Secondary English Medium',
      period: '2021-2022',
      percentage: '81%'
    },
    {
      school: 'Noble International School',
      degree: 'Secondary English Medium',
      period: '2019-2020',
      percentage: '89%'
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
      className={`py-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full">
            <GraduationCap className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 ml-4">Education</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {educationList.map((item, index) => (
              <div 
                key={index}
                className={`relative pl-12 transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.school}</h3>
                    {item.percentage && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {item.percentage}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-blue-700 font-medium mb-2">{item.degree}</p>
                  <p className="text-gray-500">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;