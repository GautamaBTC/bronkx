import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const AnimatedBurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Анимированное бургер-меню */}
      <button
        className={`md:hidden fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-bronx-orange flex flex-col justify-center items-center transition-all duration-300 ${isScrolled ? 'top-4' : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
        <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
      </button>

      {/* Затемнение фона при открытом меню */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>

      {/* Выпадающее меню */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-bronx-dark z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Логотип BRONX в меню */}
          <div className="mb-12 mt-8">
            <h2 className="text-4xl font-serif font-bold text-white">BRONX</h2>
            <div className="w-16 h-1 bg-bronx-orange mt-2"></div>
          </div>

          {/* Навигация */}
          <nav className="flex flex-col space-y-6 flex-grow">
            <Link 
              to="services" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-xl text-white hover:text-bronx-orange transition duration-300 cursor-pointer flex items-center"
              onClick={closeMenu}
            >
              <span className="w-2 h-2 bg-bronx-orange rounded-full mr-3"></span>
              Услуги
            </Link>
            <Link 
              to="team" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-xl text-white hover:text-bronx-orange transition duration-300 cursor-pointer flex items-center"
              onClick={closeMenu}
            >
              <span className="w-2 h-2 bg-bronx-orange rounded-full mr-3"></span>
              Мастера
            </Link>
            <Link 
              to="testimonials" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-xl text-white hover:text-bronx-orange transition duration-300 cursor-pointer flex items-center"
              onClick={closeMenu}
            >
              <span className="w-2 h-2 bg-bronx-orange rounded-full mr-3"></span>
              Отзывы
            </Link>
            <Link 
              to="booking" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-xl text-white hover:text-bronx-orange transition duration-300 cursor-pointer flex items-center"
              onClick={closeMenu}
            >
              <span className="w-2 h-2 bg-bronx-orange rounded-full mr-3"></span>
              Запись
            </Link>
          </nav>

          {/* Контакты и кнопка записи */}
          <div className="mt-auto space-y-6">
            <div className="pt-6 border-t border-bronx-gray">
              <a href="tel:+79188557799" className="text-xl text-white hover:text-bronx-orange transition duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (918) 855-77-99
              </a>
            </div>
            <Link 
              to="booking" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="block w-full py-3 px-6 bg-bronx-orange text-white text-center rounded-md hover:bg-opacity-90 transition duration-300 cursor-pointer"
              onClick={closeMenu}
            >
              Записаться
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedBurgerMenu;