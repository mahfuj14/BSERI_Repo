// components/UniversalNatureBackground.jsx
import React from "react";

const UniversalNatureBackground = ({ 
  topSectionHeight = "h-40", 
  showTopGradient = true,
  showFloatingElements = true,
  customClassName = "" 
}) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${customClassName}`}>
      {/* ✅ Top gradient section for navbar area */}
      {showTopGradient && (
        <div
          className={`absolute top-0 left-0 w-full ${topSectionHeight} bg-gradient-to-b from-green-900 via-green-800 to-green-700`}
        ></div>
      )}

      {/* ✅ Main soft background gradient */}
      <div
        className={`absolute ${showTopGradient ? "top-40" : "top-0"} inset-0 bg-gradient-to-br from-emerald-50 to-green-100`}
      ></div>

      {/* ✅ Floating decorative elements */}
      {showFloatingElements && (
        <>
          {/* Gentle floating orbs/leaves */}
          <div className="absolute top-20 left-10 w-8 h-8 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-emerald-300 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute top-60 left-1/4 w-10 h-10 bg-green-400 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute top-80 right-1/3 w-7 h-7 bg-emerald-400 rounded-full opacity-35 animate-bounce"></div>
          <div className="absolute top-40 left-3/4 w-5 h-5 bg-green-300 rounded-full opacity-30 animate-pulse"></div>

          {/* Top gradient decorations */}
          <div className="absolute top-5 left-1/4 w-12 h-12 bg-green-600 rounded-full opacity-20"></div>
          <div className="absolute top-15 right-1/3 w-8 h-8 bg-emerald-500 rounded-full opacity-25"></div>
          <div className="absolute top-25 left-3/4 w-10 h-10 bg-green-700 rounded-full opacity-15"></div>
        </>
      )}
    </div>
  );
};

export default UniversalNatureBackground;
