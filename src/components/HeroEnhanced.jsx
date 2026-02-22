import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';
import { Link } from 'react-scroll';

const HeroEnhanced = () => {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    "Мужская стрижка",
    "Стрижка бороды",
    "Детская стрижка",
    "Коррекция формы"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative bg-bronx-gray text-white overflow-hidden pt-24">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center z-0"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 border-t-4 border-l-4 border-bronx-orange z-0 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-b-4 border-r-4 border-bronx-orange z-0 hidden md:block"></div>
      
      <div className="relative z-10 container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Основной заголовок с анимацией печати */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            BRONX — <span className="text-bronx-orange">барбершоп в Шахтах</span>
          </h1>
          
          {/* Анимированная подстрока */}
          <div className="text-xl md:text-2xl text-bronx-light mb-10 h-12">
            <Typewriter
              options={{
                strings: [
                  "где стрижка держится неделю",
                  "профессиональный уход за вами",
                  "без очередей и ожидания",
                  "с гарантией качества"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          
          {/* Блок с цифрами (социальное доказательство) */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-bronx-orange">
                <CountUp end={1000} duration={3} />+
              </div>
              <div className="text-sm text-bronx-light">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bronx-orange">
                <CountUp end={8} duration={3} />
              </div>
              <div className="text-sm text-bronx-light">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bronx-orange">
                <CountUp end={3} duration={3} />
              </div>
              <div className="text-sm text-bronx-light">Профессиональных барбера</div>
            </div>
          </div>
          
          {/* Анимированная услуга */}
          <div className="mb-12">
            <div className="text-lg text-bronx-light mb-2">Специализация:</div>
            <div className="text-2xl font-bold text-bronx-orange h-8">
              <Typewriter
                options={{
                  strings: services,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
          
          {/* Блок с ключевыми преимуществами, работающими на страхи */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg transform transition duration-300 hover:scale-105">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Выберите мастера по портфолио</h3>
              <p className="text-bronx-light">Не попадёте к новичку без опыта</p>
            </div>
            
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg transform transition duration-300 hover:scale-105">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Запись в тот же день</h3>
              <p className="text-bronx-light">Не ждите неделю свободного слота</p>
            </div>
            
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg transform transition duration-300 hover:scale-105">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Стерильный инструмент при вас</h3>
              <p className="text-bronx-light">Полная дезинфекция на ваших глазах</p>
            </div>
            
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg transform transition duration-300 hover:scale-105">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Фиксированная цена без доплат</h3>
              <p className="text-bronx-light">Никаких скрытых комиссий</p>
            </div>
          </div>
          
          {/* CTA кнопка с анимацией */}
          <div className="relative inline-block">
            <Link 
              to="booking" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="btn-primary cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Записаться бесплатно</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
            </Link>
            {/* Декоративный элемент под кнопкой */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-bronx-orange transition-all duration-500 group-hover:w-full"></div>
          </div>
          
          {/* Дополнительное УТП под кнопкой */}
          <p className="mt-6 text-bronx-light italic">
            Если стрижка не понравится — исправим бесплатно в течение 3 дней
          </p>
        </div>
      </div>
      
      {/* Индикатор прокрутки */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link 
          to="services" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="text-bronx-orange cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroEnhanced;