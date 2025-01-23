import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [hoveredChars, setHoveredChars] = useState(new Set());

  const createSparkleText = (text, className = '') => {
    return (
      <div className={`sparkle-text-container ${className}`}>
        {text.split('').map((char, idx) => (
          <span
            key={idx}
            className={`sparkle-char ${hoveredChars.has(idx) ? 'sparkle' : ''}`}
            onMouseEnter={() => setHoveredChars(prev => new Set([...prev, idx]))}
            onMouseLeave={() => setHoveredChars(prev => {
              const newSet = new Set(prev);
              newSet.delete(idx);
              return newSet;
            })}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center  p-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex flex-col items-center space-y-12">
          {/* Logo Section */}
          <div className="flex items-center gap-6 w-full justify-center">
            <div className="w-20 h-20 animate-float">
              {/* Replace with your actual logo */}
              <img 
                src="/Group 100628.png" 
                alt="GDG Logo" 
                className="w-[200px] h-[85px] object-contain"
              />
            </div>
            
            {/* Title next to logo */}
            <div className="flex flex-col items-start">
              <div className="text-xl text-gray-200 font-light tracking-wider">
                {createSparkleText('Google Developer Group')}
              </div>
              <div className="text-lg text-gray-300 font-light tracking-wide">
                {createSparkleText('On Campus ABESEC Chapter')}
              </div>
            </div>
          </div>


          {/* Main Title */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl md:text-3xl text-white font-bold tracking-tight text-center">
              {createSparkleText('Welcome to Google DG at ABES Engineering College, Ghaziabad')}
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-2xl md:text-3xl text-gray-200 font-medium animate-pulse text-center">
            {createSparkleText('Happy Developing!')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;