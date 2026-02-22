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
        <div className="flex justify-between items-center md:justify-start">
          {/* Логотип */}
          <div className="flex items-center md:mr-auto absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:relative md:left-0 md:transform-none">
            <span className="text-2xl font-serif font-bold text-bronx-orange">BRONX</span>
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
            <a href="tel:+79188557799" className="text-bronx-light hover:text-bronx-orange transition duration-300">
              +7 (918) 855-77-99
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
          
          {/* Старое мобильное меню удалено, используется новое анимированное меню */}
        </div>
        
        {/* Старое мобильное меню удалено, используется новое анимированное меню */}
      </div>
    </header>
  );
};

export default Header;