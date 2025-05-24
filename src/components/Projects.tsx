import React, { useRef, useEffect, useState } from 'react';
import { FolderKanban, ExternalLink, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  details: string[];
  color: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: 'Admin Panel',
      description: 'Developed the frontend of an Admin Panel using React.js at AMPARO during internship.',
      tags: ['React.js', 'Chart.js', 'React Router'],
      details: [
        'Implemented data visualization using Chart.js',
        'Built Tables with functionalities like filtering, sorting, and checkbox selection',
        'Integrated React Router for seamless navigation across multiple pages',
        'Created responsive layout for all device sizes'
      ],
      color: 'bg-blue-500'
    },
    {
      title: 'To-do & Pomodoro Timer',
      description: 'A productivity tool combining task management with Pomodoro technique.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      details: [
        'Add, delete, and mark tasks as complete using vanilla JavaScript',
        'Pomodoro Timer with start, pause and reset using JavaScript timers',
        'Used basics of JavaScript, CSS and HTML',
        'Local storage integration for data persistence'
      ],
      color: 'bg-rose-500'
    },
    {
      title: 'Medical Form',
      description: 'A comprehensive form for medical information with validation.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      details: [
        'Sections for personal, contact, and office information using structured HTML',
        'Implemented input validation using JavaScript to ensure data accuracy',
        'Integration with CSS to improve visual layout and accessibility',
        'Responsive design for all device sizes'
      ],
      color: 'bg-teal-500'
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
      id="projects" 
      ref={sectionRef}
      className={`py-36 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full">
            <FolderKanban className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 ml-4">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 w-full ${project.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <span>View details</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`h-2 w-full ${selectedProject.color}`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                {selectedProject.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              
              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;