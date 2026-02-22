import React from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';
import { Link } from 'react-scroll';

const HeroEnhanced = () => {
  const services = [
    "Мужская стрижка",
    "Стрижка бороды",
    "Детская стрижка",
    "Коррекция формы"
  ];

  return (
    <section className="relative text-white overflow-hidden pt-24">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center z-0"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 border-t-4 border-l-4 border-bronx-orange z-0 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-b-4 border-r-4 border-bronx-orange z-0 hidden md:block"></div>
      
      <div className="relative z-10 container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Основной заголовок с анимацией печати */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow">
  <span className="text-bronx-orange">BRONX</span> — барбершоп в Шахтах
</h1>
          
          {/* Анимированная подстрока */}
          <div className="text-xl md:text-2xl text-bronx-light mb-10 h-12 text-shadow">
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
            <div className="glass-effect p-6 rounded-lg modern-card">
              <div className="text-bronx-orange text-2xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-white text-shadow">Выберите мастера по портфолио</h3>
              <p className="text-bronx-light text-shadow">Не попадёте к новичку без опыта</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg modern-card">
              <div className="text-bronx-orange text-2xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-white text-shadow">Запись в тот же день</h3>
              <p className="text-bronx-light text-shadow">Не ждите неделю свободного слота</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg modern-card">
              <div className="text-bronx-orange text-2xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-white text-shadow">Стерильный инструмент при вас</h3>
              <p className="text-bronx-light text-shadow">Полная дезинфекция на ваших глазах</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg modern-card">
              <div className="text-bronx-orange text-2xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-white text-shadow">Фиксированная цена без доплат</h3>
              <p className="text-bronx-light text-shadow">Никаких скрытых комиссий</p>
            </div>
          </div>
          
          {/* CTA кнопка с анимацией */}
          <div className="flex flex-col items-center">
            <Link 
              to="booking" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="gradient-button cursor-pointer text-center px-8 py-3"
            >
              <span className="relative z-10">Записаться бесплатно</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></span>
            </Link>
            {/* Декоративный элемент под кнопкой */}
            <div className="w-0 h-1 bg-bronx-orange transition-all duration-500 group-hover:w-48"></div>
          </div>
          
          {/* Контактная информация */}
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-bronx-light">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-bronx-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+7 (918) 855-77-99</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-bronx-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>ул. Ленина, 142 (или 142А)</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-bronx-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>09:00 - 21:00</span>
            </div>
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