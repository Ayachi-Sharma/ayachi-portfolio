import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'lucide-react';
import { Code2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'HTML', level: 85, color: 'bg-orange-500' },
    { name: 'CSS', level: 80, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 75, color: 'bg-yellow-500' },
    { name: 'React', level: 70, color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', level: 80, color: 'bg-teal-500' },
  ];

  const softSkills = [
    'Teamwork',
    'Adaptability',
    'Communication',
    'Problem Solving',
    'Time Management',
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
      id="skills" 
      ref={sectionRef}
      className={`py-10 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full">
            <Code2 className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 ml-4">Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Highlights</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span
                    className="inline-flex items-center gap-2"
                  >
                    Peak Performance Workshop at MILT 
                    <a href="https://drive.google.com/file/d/1cbNtAcncc1aamNCP4FBAcWqLVE-Kuwwf/view"
                    target='_blank'>
                    <Link className="w-5 h-5 text-black" />
                    </a>
                    </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Volunteered at MILT</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Teamwork & Adaptability</span>
                </li>
              </ul>
            </div>
            
            <h3 className="text-xl my-8 font-semibold text-gray-800 ">Soft Skills</h3>
            
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`bg-gray-100 border-2 border-gray-400 rounded-lg px-6 py-4 text-center transform transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;