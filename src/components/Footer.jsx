import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-bronx-orange rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                B
              </div>
              <span className="text-xl font-serif font-bold">BRONX</span>
            </div>
            <p className="text-bronx-light">
              Барбершоп в Шахтах, где стрижка держится неделю
            </p>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span className="text-bronx-light">г. Шахты, ул. Ленина, 142 (или 142А)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+79188557799" className="text-bronx-light hover:text-bronx-orange transition duration-300">
                  +7 (918) 855-77-99
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕘</span>
                <span className="text-bronx-light">Ежедневно с 09:00 до 21:00</span>
              </li>
            </ul>
          </div>
          
          {/* Социальные сети */}
          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-bronx-dark rounded-full flex items-center justify-center hover:bg-bronx-orange transition duration-300">
                <span className="text-white">VK</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-bronx-dark rounded-full flex items-center justify-center hover:bg-bronx-orange transition duration-300">
                <span className="text-white">IG</span>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-bronx-dark rounded-full flex items-center justify-center hover:bg-bronx-orange transition duration-300">
                <span className="text-white">TG</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Копирайт и гарантия */}
        <div className="border-t border-bronx-gray mt-8 pt-8 text-center">
          <p className="text-bronx-light">
            © 2026 BRONX барбершоп. Все права защищены.
          </p>
          <p className="text-bronx-light mt-2">
            Если стрижка не понравится — исправим бесплатно в течение 3 дней
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;