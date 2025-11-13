import React from 'react';
import { AcademicCapIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const AboutMissionVision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 relative px-6 py-12">
      {/* Floating Navbar */}

      <h1 className="text-4xl font-bold text-green-700 mb-20 text-center">BSERI Overview</h1>

      <div className="relative flex flex-col items-center justify-center">
        {/* SVG Connectors */}
        {/* I've added a fixed width/height for the SVG to contain the lines correctly in this structure */}
        <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
          <line x1="400" y1="200" x2="250" y2="400" stroke="#4ade80" strokeWidth="2" strokeDasharray="6" />
          <line x1="400" y1="200" x2="550" y2="400" stroke="#4ade80" strokeWidth="2" strokeDasharray="6" />
        </svg>

        {/* About Section - ANIMATED BORDER HERE */}
        <div id="about" className="mb-24 relative">
          <div className="
            w-72 h-72 bg-green-200 rounded-full flex flex-col items-center justify-center text-center p-6 shadow-xl 
            border-4 border-green-400 
            relative overflow-visible
          ">
            {/* The actual content */}
            <AcademicCapIcon className="h-8 w-8 text-green-800 mb-2" />
            <h2 className="text-xl font-semibold text-green-900 mb-2">About BSERI</h2>
            <p className="text-sm text-green-800">
              Founded in 2025, BSERI is a registered, non-governmental and non-profit society focused on ecological and environmental research. Our members include ecologists, researchers, academicians, students, and environmental activists from across the country.
            </p>

            {/* Animated Border Element */}
            <div className="
              absolute inset-0 
              rounded-full 
              border-4 border-dashed border-green-600 
              animate-spin-slow 
              hover:border-solid
              transition duration-500
              opacity-75
            "/>

          </div>
        </div>

        {/* Mission & Vision Section - Using a subtle color transition for a 'softer' animation */}
        <div className="flex flex-wrap justify-center gap-32">
          {/* Mission */}
          <div id="mission" className="
            w-72 h-72 bg-white rounded-full flex flex-col items-center justify-center text-center p-6 shadow-lg 
            border-4 border-green-300 
            hover:border-green-600 hover:shadow-2xl transition-all duration-500
          ">
            <GlobeAltIcon className="h-8 w-8 text-green-800 mb-2" />
            <h2 className="text-xl font-semibold text-green-900 mb-2">Our Mission</h2>
            <p className="text-sm text-green-800">
              To promote and support ecological research, environmental education, and policy innovation for biodiversity conservation and sustainable development.
            </p>
          </div>

          {/* Vision */}
          <div id="vision" className="
            w-72 h-72 bg-green-300 rounded-full flex flex-col items-center justify-center text-center p-6 shadow-lg 
            border-4 border-green-500 
            hover:border-green-800 hover:shadow-2xl transition-all duration-500
          ">
            <LightBulbIcon className="h-8 w-8 text-green-800 mb-2" />
            <h2 className="text-xl font-semibold text-green-900 mb-2">Our Vision</h2>
            <p className="text-sm text-green-800">
              To ensure a sustainable and ecologically resilient Bangladesh through science, education, and community engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMissionVision;