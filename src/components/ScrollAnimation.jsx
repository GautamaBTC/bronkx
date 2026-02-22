import React, { useEffect, useRef } from 'react';

const ScrollAnimation = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // Элемент считается видимым, когда 10% его площади в зоне видимости
        rootMargin: '0px 0px -50px 0px' // Немного отступа снизу для более раннего срабатывания
      }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
};

export default ScrollAnimation;