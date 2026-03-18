import React from 'react';

export const Logo = ({ size = 24, className = "", showText = false }: { size?: number, className?: string, showText?: boolean }) => (
  <svg 
    width={showText ? size * 2.5 : size * 2} 
    height={showText ? size * 2.5 : size} 
    viewBox={showText ? "0 0 400 300" : "0 0 400 200"} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Cap Top */}
    <path d="M200 10 L350 60 L200 110 L50 60 Z" fill="#0f4c81" />
    
    {/* Cap Fold Line */}
    <line x1="200" y1="10" x2="200" y2="110" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
    
    {/* Cap Base */}
    <rect x="150" y="110" width="100" height="60" rx="6" fill="#1f6eb5" />
    
    {/* Tassel String */}
    <line x1="350" y1="60" x2="350" y2="150" stroke="#3b82f6" strokeWidth="6" />
    
    {/* Tassel Ball */}
    <circle cx="350" cy="150" r="15" fill="#3b82f6" />

    {showText && (
      <>
        <text x="200" y="230" fontFamily="Georgia, serif" fontSize="64" fontWeight="bold" fill="#0f4c81" textAnchor="middle">MeritUs</text>
        <text x="200" y="270" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="#a0aec0" textAnchor="middle" letterSpacing="4">EARN YOUR FUTURE</text>
      </>
    )}
  </svg>
);
