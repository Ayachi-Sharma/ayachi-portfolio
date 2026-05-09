import React from 'react';
import { Code } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="animate-bounce mb-4">
        <Code className="h-16 w-16 text-blue-700" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Ayachi Sharma</h2>
      <p className="text-gray-600">Loading portfolio...</p>
      <div className="mt-6 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 animate-loadingBar"></div>
      </div>
    </div>
  );
};

export default Loader;