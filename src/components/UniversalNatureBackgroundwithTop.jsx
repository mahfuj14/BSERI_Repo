// components/UniversalNatureBackground.jsx
import React from "react";

const UniversalNatureBackgroundwithTop = ({ 
  topSectionHeight = "h-40", 
  showTopGradient = true,
  showFloatingElements = true,
  customClassName = "" 
}) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${customClassName}`}>
      {/* ✅ Top gradient section for navbar area - DEEP GREEN VERSION */}
      {showTopGradient && (
        <div className={`absolute top-0 left-0 w-full ${topSectionHeight} bg-gradient-to-b from-green-950 via-green-900 to-green-800`}>
          {/* SVG Forest Canopy for top section */}
          <svg 
            className="absolute bottom-0 left-0 w-full h-20" 
            viewBox="0 0 1200 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Forest canopy silhouette */}
            <path d="M0 120L0 80Q50 60 100 80T200 60T300 80T400 50T500 70T600 40T700 60T800 30T900 50T1000 20T1100 40T1200 0L1200 120Z" 
                  fill="url(#canopyGradient)" />
            
            {/* Tree tops */}
            <path d="M100 80L120 40L140 80Z" fill="#0a1f0a" />
            <path d="M120 40Q120 20 140 20Q160 20 160 40L140 80L120 80Z" fill="#0a1f0a" />
            
            <path d="M300 70L320 30L340 70Z" fill="#0a1f0a" />
            <path d="M320 30Q320 10 340 10Q360 10 360 30L340 70L320 70Z" fill="#0a1f0a" />
            
            <path d="M500 60L520 20L540 60Z" fill="#0a1f0a" />
            <path d="M520 20Q520 0 540 0Q560 0 560 20L540 60L520 60Z" fill="#0a1f0a" />
            
            <path d="M700 80L720 40L740 80Z" fill="#0a1f0a" />
            <path d="M720 40Q720 20 740 20Q760 20 760 40L740 80L720 80Z" fill="#0a1f0a" />
            
            <path d="M900 50L920 10L940 50Z" fill="#0a1f0a" />
            <path d="M920 10Q920 -10 940 -10Q960 -10 960 10L940 50L920 50Z" fill="#0a1f0a" />
            
            <path d="M1100 70L1120 30L1140 70Z" fill="#0a1f0a" />
            <path d="M1120 30Q1120 10 1140 10Q1160 10 1160 30L1140 70L1120 70Z" fill="#0a1f0a" />

            <defs>
              <linearGradient id="canopyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a1f0a" />
                <stop offset="50%" stopColor="#0f2f0f" />
                <stop offset="100%" stopColor="#0a1f0a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* ✅ Main soft background gradient */}
      <div className={`absolute ${showTopGradient ? "top-40" : "top-0"} inset-0 bg-gradient-to-br from-emerald-50 to-green-100`}>
        {/* Bottom landscape SVG */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-1/3" 
          viewBox="0 0 1200 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Hills */}
          <path d="M0 400L0 350Q300 250 600 350T1200 250L1200 400Z" fill="url(#hillGradient)" />
          <path d="M0 400L0 320Q400 280 800 320T1200 280L1200 400Z" fill="url(#hillGradient2)" opacity="0.7"/>
          
          {/* Trees */}
          <path d="M200 350L220 300L240 350Z" fill="#0f2f0f" />
          <path d="M220 300Q220 250 240 250Q260 250 260 300L240 350L220 350Z" fill="#0f2f0f" />
          
          <path d="M400 340L420 290L440 340Z" fill="#0f2f0f" />
          <path d="M420 290Q420 240 440 240Q460 240 460 290L440 340L420 340Z" fill="#0f2f0f" />
          
          <path d="M800 330L820 280L840 330Z" fill="#0f2f0f" />
          <path d="M820 280Q820 230 840 230Q860 230 860 280L840 330L820 330Z" fill="#0f2f0f" />
          
          <path d="M1000 360L1020 310L1040 360Z" fill="#0f2f0f" />
          <path d="M1020 310Q1020 260 1040 260Q1060 260 1060 310L1040 360L1020 360Z" fill="#0f2f0f" />
          
          {/* Leaves/Plants */}
          <circle cx="150" cy="370" r="15" fill="#1a3d1a" opacity="0.8" />
          <circle cx="300" cy="380" r="12" fill="#1a3d1a" opacity="0.8" />
          <circle cx="500" cy="370" r="18" fill="#1a3d1a" opacity="0.8" />
          <circle cx="700" cy="375" r="14" fill="#1a3d1a" opacity="0.8" />
          <circle cx="900" cy="365" r="16" fill="#1a3d1a" opacity="0.8" />
          <circle cx="1100" cy="375" r="13" fill="#1a3d1a" opacity="0.8" />

          {/* Additional forest elements */}
          <path d="M100 380L110 360L120 380Z" fill="#0f2f0f" opacity="0.8" />
          <path d="M1150 385L1160 365L1170 385Z" fill="#0f2f0f" opacity="0.8" />
          
          <defs>
            <linearGradient id="hillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a3d1a" />
              <stop offset="100%" stopColor="#0f2f0f" />
            </linearGradient>
            <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f2f0f" />
              <stop offset="100%" stopColor="#0a1f0a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

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
          <div className="absolute top-5 left-1/4 w-12 h-12 bg-green-800 rounded-full opacity-20"></div>
          <div className="absolute top-15 right-1/3 w-8 h-8 bg-green-700 rounded-full opacity-25"></div>
          <div className="absolute top-25 left-3/4 w-10 h-10 bg-green-900 rounded-full opacity-15"></div>
        </>
      )}
    </div>
  );
};

export default UniversalNatureBackgroundwithTop;