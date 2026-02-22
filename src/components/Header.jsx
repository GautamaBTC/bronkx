import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-bronx-gray bg-opacity-95 backdrop-blur-sm z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-bronx-orange rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
              B
            </div>
            <span className="text-2xl font-serif font-bold">BRONX</span>
          </div>
          
          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="services" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
            >
              Услуги
            </Link>
            <Link 
              to="team" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
            >
              Мастера
            </Link>
            <Link 
              to="testimonials" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
            >
              Отзывы
            </Link>
            <Link 
              to="booking" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
            >
              Запись
            </Link>
          </nav>
          
          {/* Контакты и кнопка записи */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+79001234567" className="text-bronx-light hover:text-bronx-orange transition duration-300">
              +7 (900) 123-45-67
            </a>
            <Link 
              to="booking" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="btn-primary cursor-pointer"
            >
              Записаться
            </Link>
          </div>
          
          {/* Мобильное меню */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Мобильное меню (скрыто по умолчанию) */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-bronx-dark mt-4 rounded-lg`}>
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="services" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
                onClick={closeMenu}
              >
                Услуги
              </Link>
              <Link 
                to="team" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
                onClick={closeMenu}
              >
                Мастера
              </Link>
              <Link 
                to="testimonials" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
                onClick={closeMenu}
              >
                Отзывы
              </Link>
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="text-bronx-light hover:text-bronx-orange transition duration-300 cursor-pointer"
                onClick={closeMenu}
              >
                Запись
              </Link>
              <a href="tel:+79001234567" className="text-bronx-light hover:text-bronx-orange transition duration-300">
                +7 (900) 123-45-67
              </a>
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="btn-primary text-center cursor-pointer"
                onClick={closeMenu}
              >
                Записаться
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;