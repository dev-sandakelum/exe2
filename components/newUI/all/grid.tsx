'use client';
import React, { useState } from "react";

export default function Grid() {
    const [gridOpacity, setGridOpacity] = useState(0);
  return (
    <>
      <div
        onClick={() => setGridOpacity(gridOpacity == 0 ? 100 : gridOpacity - 20)}
        className="absolute w-10 h-10 z-[1000] border text-gray-900 border-gray-300 cursor-pointer right-2 bottom-40 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all flex items-center justify-center text-xs font-medium"
      >
        Grid {gridOpacity}
      </div>
      <div 
        className={`absolute ${gridOpacity ? "opacity-100" : "opacity-0"} w-full h-full bg-transparent z-[99] flex items-center justify-center pointer-events-none transition-opacity`}
        style={{ opacity: gridOpacity / 100 }}
      >
        {/* Center vertical line */}
        <div className="absolute w-0 h-full border-l-2 border-red-500"></div>
        
        {/* Center horizontal line */}
        <div className="absolute w-full h-0 border-t-2 border-red-500"></div>
        
        {/* Common breakpoints - vertical guides */}
        {/* Mobile: 320px, 375px, 425px */}
        <div className="absolute w-[320px] h-full border-l border-blue-400"></div>
        <div className="absolute w-[375px] h-full border-l border-blue-400"></div>
        <div className="absolute w-[425px] h-full border-l border-blue-400"></div>
        
        {/* Tablet: 640px (sm), 768px (md) */}
        <div className="absolute w-[640px] h-full border-l-2 border-green-500"></div>
        <div className="absolute w-[768px] h-full border-l-2 border-green-500"></div>
        
        {/* Desktop: 1024px (lg), 1280px (xl), 1536px (2xl) */}
        <div className="absolute w-[1024px] h-full border-l-2 border-purple-500"></div>
        <div className="absolute w-[1280px] h-full border-l-2 border-purple-500"></div>
        <div className="absolute w-[1536px] h-full border-l-2 border-purple-500"></div>
        
        {/* 12-column grid system (based on max-width container) */}
        <div className="absolute w-full max-w-7xl h-full grid grid-cols-12 gap-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-r border-orange-300 h-full"></div>
          ))}
        </div>
        
        {/* Common container widths */}
        <div className="absolute max-w-sm w-full h-full border-l border-r border-cyan-400"></div>
        <div className="absolute max-w-4xl w-full h-full border-l border-r border-pink-400"></div>
        <div className="absolute max-w-7xl w-full h-full border-l border-r-2 border-indigo-500"></div>
        
        {/* Horizontal guides for common heights */}
        <div className="absolute w-full h-[100vh] border-t border-yellow-400" style={{ top: 0 }}></div>
        <div className="absolute w-full h-0 border-t border-yellow-400" style={{ top: '50vh' }}></div>
        <div className="absolute w-full h-0 border-t-2 border-red-400" style={{ top: '80px' }}></div>
        <div className="absolute w-full h-0 border-t-2 border-red-400" style={{ bottom: '80px' }}></div>
      </div>
    </>
  );
}