import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ModernAnimatedBurgerMenu from './ModernAnimatedBurgerMenu';

const Header = () => {
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


  return (
    <>
      <header className={`fixed w-full bg-bronx-gray bg-opacity-95 backdrop-blur-sm z-50 transition-all duration-300 ${isScrolled ? 'py-1 shadow-lg' : 'py-3'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div className="flex items-center">
            <span className="text-3xl font-serif font-bold text-bronx-orange">BRONX</span>
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
      <ModernAnimatedBurgerMenu />
    </>
  );
};

export default Header;