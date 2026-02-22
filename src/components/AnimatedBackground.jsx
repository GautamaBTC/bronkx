import React, { useState, useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const backgroundRef = useRef(null);

  // Отслеживание позиции прокрутки
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Начальная установка значений
    handleScroll();
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Вычисление смещения элементов в зависимости от прокрутки
  const calculateOffset = (speed = 1) => {
    return scrollY * speed;
  };

  // Вычисление прозрачности в зависимости от прокрутки
  const calculateOpacity = (startOpacity = 0.3, endOpacity = 0.7, scrollRange = 500) => {
    const progress = Math.min(scrollY / scrollRange, 1);
    return startOpacity + (endOpacity - startOpacity) * progress;
  };

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}
    >
      {/* Основной SVG с анимированными элементами */}
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        preserveAspectRatio="none" 
        viewBox={`0 0 ${windowSize.width} ${windowSize.height}`} 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translateY(${calculateOffset(0.3)}px)`
        }}
      >
        <defs>
          {/* Градиент для основного фона */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
          
          {/* Градиент для акцентных элементов */}
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e67e22" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f39c12" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Градиент для вторичных акцентов */}
          <linearGradient id="secondaryAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d35400" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e67e22" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Узор для текстуры */}
          <pattern id="texturePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.03)" />
          </pattern>
          
          {/* Фильтр для размытия */}
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>
        
        {/* Основной фон */}
        <rect width="100%" height="100%" fill="url(#bgGradient)" />
        
        {/* Текстурный слой */}
        <rect width="100%" height="100%" fill="url(#texturePattern)" />
        
        {/* Анимированные геометрические фигуры */}
        
        {/* Большая круглая форма с эффектом параллакса */}
        <circle 
          cx={windowSize.width * 0.2} 
          cy={windowSize.height * 0.3 + calculateOffset(0.5)} 
          r={Math.min(windowSize.width, windowSize.height) * 0.15} 
          fill="url(#accentGradient)" 
          opacity={calculateOpacity(0.2, 0.4)}
          filter="url(#blur)"
        />
        
        {/* Вторая круглая форма */}
        <circle 
          cx={windowSize.width * 0.8} 
          cy={windowSize.height * 0.7 + calculateOffset(0.7)} 
          r={Math.min(windowSize.width, windowSize.height) * 0.1} 
          fill="url(#secondaryAccent)" 
          opacity={calculateOpacity(0.15, 0.3, 800)}
          filter="url(#blur)"
        />
        
        {/* Третья круглая форма */}
        <circle 
          cx={windowSize.width * 0.5} 
          cy={windowSize.height * 0.1 + calculateOffset(0.3)} 
          r={Math.min(windowSize.width, windowSize.height) * 0.08} 
          fill="url(#accentGradient)" 
          opacity={calculateOpacity(0.1, 0.25, 300)}
        />
        
        {/* Диагональные элементы с анимацией */}
        <path 
          d={`M0,${windowSize.height * 0.4 + calculateOffset(0.2)} L${windowSize.width * 0.3},0 L${windowSize.width * 0.4},0 L0,${windowSize.height * 0.5 + calculateOffset(0.2)} Z`} 
          fill="url(#accentGradient)" 
          opacity={calculateOpacity(0.1, 0.2)}
        />
        
        <path 
          d={`M${windowSize.width * 0.6},${windowSize.height} L${windowSize.width},${windowSize.height * 0.6 + calculateOffset(0.4)} L${windowSize.width},${windowSize.height * 0.7 + calculateOffset(0.4)} L${windowSize.width * 0.7},${windowSize.height} Z`} 
          fill="url(#secondaryAccent)" 
          opacity={calculateOpacity(0.1, 0.25, 700)}
        />
        
        {/* Волновые элементы */}
        <path 
          d={`M0,${windowSize.height * 0.6} Q${windowSize.width * 0.25},${windowSize.height * 0.5 + calculateOffset(0.1)} ${windowSize.width * 0.5},${windowSize.height * 0.6} T${windowSize.width},${windowSize.height * 0.6} L${windowSize.width},${windowSize.height} L0,${windowSize.height} Z`} 
          fill="url(#accentGradient)" 
          opacity={calculateOpacity(0.05, 0.15, 400)}
        />
        
        {/* Дополнительные декоративные элементы */}
        <rect 
          x={windowSize.width * 0.1} 
          y={windowSize.height * 0.8 + calculateOffset(0.6)} 
          width={windowSize.width * 0.05} 
          height={windowSize.width * 0.05} 
          fill="url(#secondaryAccent)" 
          opacity={calculateOpacity(0.1, 0.2, 600)}
          transform="rotate(45)"
        />
        
        <rect 
          x={windowSize.width * 0.85} 
          y={windowSize.height * 0.2 + calculateOffset(0.4)} 
          width={windowSize.width * 0.03} 
          height={windowSize.width * 0.03} 
          fill="url(#accentGradient)" 
          opacity={calculateOpacity(0.15, 0.25, 500)}
          transform="rotate(30)"
        />
      </svg>
      
      {/* Дополнительный слой для создания глубины */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
          opacity: calculateOpacity(0.2, 0.5, 1000)
        }}
      />
    </div>
  );
};

export default AnimatedBackground;