import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center text-xl font-bold text-gray-800">
          <Brain className="w-6 h-6 mr-2 text-indigo-600" />
          <span>Privat Bumamu</span>
        </div>
        
        <div className="space-x-4">
          <Link to="/" className="text-gray-800 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/learning" className="text-gray-800 hover:text-indigo-600 transition">
            Learning
          </Link>
          <Link to="/practice-config" className="text-gray-800 hover:text-indigo-600 transition">
            Practice
          </Link>
          <Link to="/tryout" className="text-gray-800 hover:text-indigo-600 transition">
            Try Out
          </Link>
        </div>
      </div>
    </nav>
  );
}
