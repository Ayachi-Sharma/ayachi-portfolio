import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} Ayachi Sharma. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Ayachi-Sharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-700 transition duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-700 transition duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:sharmaaychi@gmail.com" 
              className="text-gray-600 hover:text-blue-700 transition duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;