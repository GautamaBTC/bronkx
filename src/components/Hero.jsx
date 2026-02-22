import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="relative bg-bronx-gray text-white overflow-hidden pt-24">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center z-0"></div>
      
      <div className="relative z-10 container-custom py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Основной заголовок с УТП */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            BRONX — <span className="text-bronx-orange">барбершоп в Шахтах</span>, где стрижка держится неделю
          </h1>
          
          {/* Подзаголовок с социальным доказательством */}
          <p className="text-xl md:text-2xl text-bronx-light mb-10">
            1000+ довольных клиентов в Шахтах. Стрижка, которая не требует коррекции через 3 дня
          </p>
          
          {/* Блок с ключевыми преимуществами, работающими на страхи */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Выберите мастера по портфолио</h3>
              <p className="text-bronx-light">Не попадёте к новичку без опыта</p>
            </div>
            
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Запись в тот же день</h3>
              <p className="text-bronx-light">Не ждите неделю свободного слота</p>
            </div>
            
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Стерильный инструмент при вас</h3>
              <p className="text-bronx-light">Полная дезинфекция на ваших глазах</p>
            </div>
            
            <div className="bg-bronx-gray bg-opacity-70 p-6 rounded-lg">
              <div className="text-bronx-orange text-2xl mb-3">✓</div>
              <h3 className="font-serif text-xl mb-2">Фиксированная цена без доплат</h3>
              <p className="text-bronx-light">Никаких скрытых комиссий</p>
            </div>
          </div>
          
          {/* CTA кнопка */}
          <Link 
            to="booking" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="btn-primary inline-block cursor-pointer"
          >
            Записаться бесплатно
          </Link>
          
          {/* Дополнительное УТП под кнопкой */}
          <p className="mt-6 text-bronx-light italic">
            Если стрижка не понравится — исправим бесплатно в течение 3 дней
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;