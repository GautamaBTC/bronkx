import React from 'react';

const DiagonalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        preserveAspectRatio="none" 
        viewBox="0 0 1200 800" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Градиент для первого цвета */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          
          {/* Градиент для второго цвета */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e67e22" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f39c12" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Узор для текстуры */}
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.03)" />
          </pattern>
        </defs>
        
        {/* Первый треугольник (темный) */}
        <path d="M0,0 L0,800 L1200,0 Z" fill="url(#grad1)" />
        
        {/* Второй треугольник (оранжевый) */}
        <path d="M0,800 L1200,0 L1200,800 Z" fill="url(#grad2)" opacity="0.4" />
        
        {/* Текстурный слой */}
        <rect width="100%" height="100%" fill="url(#pattern)" />
        
        {/* Дополнительные декоративные элементы */}
        <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.01)" />
        <circle cx="1100" cy="700" r="120" fill="rgba(0,0,0,0.02)" />
        <circle cx="900" cy="200" r="60" fill="rgba(255,255,255,0.015)" />
        <circle cx="300" cy="600" r="100" fill="rgba(0,0,0,0.015)" />
      </svg>
    </div>
  );
};

export default DiagonalBackground;