import React from 'react';
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-bronx-gray text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-bronx-light max-w-2xl mx-auto">
            Специализируемся только на мужских стрижках и бороде — без "универсальных" мастеров
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Услуга 1: Мужская стрижка */}
          <div className="bg-bronx-dark rounded-xl overflow-hidden card-hover" data-aos="fade-up">
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1585747860715-1ba628b52160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold">Мужская стрижка</h3>
                <span className="text-2xl font-bold text-bronx-orange">900₽</span>
              </div>
              
              <p className="text-bronx-light mb-6">
                Классические, fade, undercut — стрижка, которая не требует коррекции через неделю
              </p>
              
              <ul className="mb-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Консультация по форме и стилю</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Мытьё головы с профессиональными средствами</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Стрижка с учётом роста ваших волос</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Укладка и рекомендации по уходу</span>
                </li>
              </ul>
              
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="w-full bg-bronx-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 block text-center cursor-pointer"
              >
                Записаться на стрижку
              </Link>
            </div>
          </div>
          
          {/* Услуга 2: Стрижка и оформление бороды */}
          <div className="bg-bronx-dark rounded-xl overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1621605815971-48c5c9b6bd2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold">Стрижка + борода</h3>
                <span className="text-2xl font-bold text-bronx-orange">1600₽</span>
              </div>
              
              <p className="text-bronx-light mb-6">
                Моделирование, машинка, окантовка — борода, которая выглядит ухоженно
              </p>
              
              <ul className="mb-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Комплексный подход к образу</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Коррекция формы бороды</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Окантовка и моделирование</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Рекомендации по уходу за бородой</span>
                </li>
              </ul>
              
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="w-full bg-bronx-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 block text-center cursor-pointer"
              >
                Записаться на комплекс
              </Link>
            </div>
          </div>
          
          {/* Услуга 3: Детская стрижка */}
          <div className="bg-bronx-dark rounded-xl overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="200">
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold">Детская стрижка</h3>
                <span className="text-2xl font-bold text-bronx-orange">600₽</span>
              </div>
              
              <p className="text-bronx-light mb-6">
                Специальный подход для маленьких клиентов — быстро, аккуратно, без слёз
              </p>
              
              <ul className="mb-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Индивидуальный подход к каждому ребёнку</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Специальные инструменты для детей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Возможность присутствия родителей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Игровая зона в ожидании</span>
                </li>
              </ul>
              
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="w-full bg-bronx-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 block text-center cursor-pointer"
              >
                Записать ребёнка
              </Link>
            </div>
          </div>
        </div>
        
        {/* Блок с сравнением с обычной парикмахерской */}
        <div className="mt-20 bg-bronx-dark rounded-xl p-8" data-aos="fade-up">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">Почему к нам, а не в обычную парикмахерскую?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-bronx-orange">Обычная парикмахерская в Шахтах</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>"Универсальные" мастера без специализации</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Стрижка "на глазок" без учёта особенностей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Требует коррекции через 3-4 дня</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Скрытые доплаты за "сложную" стрижку</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-bronx-orange">Барбершоп BRONX</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Мастера со специализацией на мужских стрижках</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Индивидуальный подход с учётом структуры волос</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Стрижка держится идеально 1-2 недели</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-2">✓</span>
                  <span>Фиксированная цена без скрытых доплат</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;