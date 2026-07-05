import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  details: string[];
  year: string;
  isDarkTheme?: boolean;
  liveLink?: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
  {
    id: "01",
    title: "AI Powered Learning Assistant",
    description:
      "An end-to-end AI-powered learning platform that transforms study material into interactive learning experiences. Users can upload PDFs or text documents, generate AI summaries, create flashcards, take quizzes, chat with an AI tutor, and receive detailed concept explanations. Built with a scalable MERN architecture and deployed on Render.",

    tags: [
      "REACT",
      "NODE.JS",
      "EXPRESS",
      "MONGODB",
      "JWT",
      "GROQ AI",
      "OPENAI",
      "REST API",
      "TAILWIND CSS",
      "MULTER"
    ],

    details: [
      "Designed and developed the complete MERN architecture from scratch using React, Node.js, Express, and MongoDB.",

      "Implemented secure JWT Authentication with protected routes, user sessions, and encrypted password storage.",

      "Built an AI Chat Assistant that answers questions directly from uploaded study material using Large Language Models.",

      "Integrated AI-powered PDF and text document processing, allowing users to upload notes and instantly extract useful study content.",

      "Developed automatic AI Summary Generation that converts lengthy notes into concise revision material.",

      "Created intelligent Flashcard Generation where AI automatically creates question-answer pairs for quick learning.",

      "Implemented AI Quiz Generation with multiple-choice questions to help users test their understanding.",

      "Added Concept Explanation functionality that simplifies difficult technical topics using AI-generated explanations.",

      "Built complete CRUD functionality for notes, flashcards, quizzes, and user study history.",

      "Integrated REST APIs between frontend and backend with efficient asynchronous data fetching.",

      "Deployed both frontend and backend on Render with environment variable configuration and cloud database integration."
    ],

    year: "2026",

    liveLink: "https://ai-learning-assistant-427a.onrender.com"
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
      className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24"
    >
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end pb-8 gap-4">
        <div className="space-y-4">
          <div className="text-xs sm:text-sm font-mono-labels uppercase tracking-widest text-[#181816]/70 select-none">
            Projects
          </div>
        </div>
        </div>

      {/* PROJECT ROWS LIST */}
      <div className="divide-y divide-[#181816] ">
        {projects.map((project) => {
          const textPrimary = project.isDarkTheme ? 'text-[#f5f2eb]' : 'text-[#181816]';
          const textSecondary = project.isDarkTheme ? 'text-[#f5f2eb]/75' : 'text-[#181816]/75';
          const borderPrimary = project.isDarkTheme ? 'border-[#f5f2eb]/30' : 'border-[#181816]/30';

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              onClick={() => setSelectedProject(project)}
              className={`p-6 sm:p-10 cursor-pointer transition-colors duration-500 group relative ${
                project.isDarkTheme 
                  ? 'bg-[#181816] hover:bg-black' 
                  : 'hover:bg-[#181816]/5'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* 2. Title (col 5) */}
                <div className="lg:col-span-5 select-none">
                  <h3 className={`text-2xl sm:text-3xl lg:text-[2rem] font-bold ${textPrimary} font-serif-display group-hover:text-[#ff6b57] transition-colors leading-tight`}>
                    {project.title}
                  </h3>
                </div>

                {/* 3. Description & tags (col 5) */}
                <div className="lg:col-span-5 space-y-6">
                  <p className={`text-sm sm:text-base ${textSecondary} leading-relaxed font-sans`}>
                    {project.description}
                  </p>
                  
                  {/* Tags cloud */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`text-[9px] sm:text-[10px] font-mono-labels font-bold tracking-wider px-2 py-0.5 border ${borderPrimary} ${textSecondary} rounded-none uppercase select-none`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Year & link arrow (col 1) */}
                <div className={`lg:col-span-1 flex items-center justify-end lg:justify-start gap-1 text-xs sm:text-sm font-mono-labels font-bold ${textSecondary} select-none`}>
                  <span>{project.year}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Specifications Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#181816]/75 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#f5f2eb] border border-[#181816] rounded-none shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto relative z-10"
            >
              {/* Highlight line */}
              <div className="h-1 bg-[#ff6b57]" />
              
              <div className="p-8 space-y-6">
                
                {/* Header */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-[10px] font-mono-labels uppercase tracking-wider text-[#ff6b57] font-bold mb-1">
                      Specifications
                    </div>
                    <h3 className="text-2xl font-bold text-[#181816] font-serif-display leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-[#181816] hover:text-[#ff6b57] p-1 border border-[#181816]/20 hover:border-[#ff6b57] transition-all"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-[#181816]/80 leading-relaxed font-sans border-l border-[#ff6b57] pl-3 italic">
                  {selectedProject.description}
                </p>
                
                {/* Deliverables Checklist */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono-labels uppercase tracking-wider text-[#181816]/65 font-bold">Key Specs</h4>
                  <ul className="space-y-3">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#181816]">
                        <CheckCircle2 className="h-4.5 w-4.5 text-[#ff6b57] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Footer buttons */}
                <div className="pt-4 flex items-center justify-between border-t border-[#181816]/10">
                  {selectedProject.liveLink ? (
                    <a 
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#181816] hover:bg-[#ff6b57] text-[#f5f2eb] px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                    >
                      <span>LAUNCH APP</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono-labels text-[#181816]/60 font-semibold italic">
                      Private Config / Internship Module
                    </span>
                  )}
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="border border-[#181816] text-[#181816] hover:bg-[#181816] hover:text-[#f5f2eb] px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    CLOSE SPECS
                  </button>
                </div>
                
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;