import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <motion.div 
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail className="h-8 w-8 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 ml-4">Contact Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send className="h-5 w-5 mr-2" />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-6">Connect With Me</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-gray-900" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-700 font-medium">Email</h4>
                  <a href="mailto:sharmaaychi@gmail.com" className="text-gray-900 hover:text-gray-700">
                    sharmaaychi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-gray-900" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-700 font-medium">Phone</h4>
                  <a href="tel:+918955236526" className="text-gray-900 hover:text-gray-700">
                    +91-8955236526
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Github className="h-5 w-5 text-gray-900" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-700 font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/Ayachi-Sharma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-700"
                  >
                    github.com/Ayachi-Sharma
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-gray-900" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-700 font-medium">LinkedIn</h4>
                  <a 
                    href="#" // Add your LinkedIn profile URL here
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-700"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;