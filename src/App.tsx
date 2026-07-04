import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTime(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#181816] font-sans antialiased">
      
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-2.5 border-b border-[#181816] text-[10px] sm:text-xs font-mono-labels uppercase tracking-widest text-[#181816]/80 gap-2 select-none">
        <div>
          AYACHI SHARMA / PORTFOLIO '26
        </div>
        <div className="flex items-center gap-1.5">
          BHILWARA, IN — {time || '05:44:59 PM'}
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#b2d835]" />
          AVAILABLE FOR WORK
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION */}
      <header className="sticky top-0 bg-[#f5f2eb] border-b border-[#181816] z-50 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo brand */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center focus:outline-none"
          >
            <span className="font-serif-display font-extrabold text-2xl sm:text-3xl tracking-tighter">
              A<span className="text-[#ff6b57]">/</span>S
            </span>
          </button>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#181816]/90 font-mono-labels uppercase">
            {[
              { label: 'Project', id: 'Project' },
              { label: 'Experience', id: 'Experience' },
              { label: 'Skills', id: 'skills' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-[#ff6b57] transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff6b57] transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>
          
          {/* CTA Action button */}
          <div>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#181816] hover:bg-[#ff6b57] text-[#f5f2eb] px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group border border-[#181816] hover:border-[#ff6b57]"
            >
              <span>LET'S TALK</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
        </div>
      </header>

      {/* 3. MAIN SECTIONS FLOW */}
      <main className="w-full">
        
        {/* HERO SECTION */}
        <section id="hero" className="border-b border-[#181816]">
          <Hero />
        </section>

        {/* PROJECTS SECTION */}
        <section id="Project" className="border-b border-[#181816]">
          <Projects />
        </section>

        {/* CERTIFICATIONS */}
        <section id="Experience" className="border-b border-[#181816]">
          <Certifications />
        </section>

        {/* TOOLKIT SECTION (SKILLS) */}
        <section id="skills" className="border-b border-[#181816] bg-[#181816] text-[#f5f2eb]">
          <Skills />
        </section>

        {/* EDUCATION & TIMELINE */}
        <section id="education" className="border-b border-[#181816]">
          <Education />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="border-b border-[#181816]">
          <Contact />
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );
}

export default App;