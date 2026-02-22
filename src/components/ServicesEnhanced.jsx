import React from 'react';
import { Link } from 'react-scroll';

const ServicesEnhanced = () => {
  // Функция для отображения SVG-иконок
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'scissors':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
          </svg>
        );
      case 'beard':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'child':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const services = [
    {
      title: "Мужская стрижка",
      price: "от 800₽",
      description: "Индивидуальный подход к каждому клиенту",
      features: [
        "Консультация по форме",
        "Мытье головы",
        "Стрижка по технологии",
        "Укладка феном",
        "Рекомендации по уходу"
      ],
      duration: "45-60 мин",
      icon: "scissors"
    },
    {
      title: "Стрижка и оформление бороды",
      price: "от 1200₽",
      description: "Комплексное оформление образа",
      features: [
        "Моделирование бороды",
        "Коррекция формы",
        "Окантовка",
        "Укладка бороды",
        "Советы по уходу"
      ],
      duration: "60-90 мин",
      icon: "beard"
    },
    {
      title: "Детская стрижка",
      price: "от 600₽",
      description: "Специальный подход для детей",
      features: [
        "Игровая атмосфера",
        "Быстрая стрижка",
        "Фото до/после",
        "Наклейка в подарок",
        "Скидка для отцов"
      ],
      duration: "30-45 мин",
      icon: "child"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Наши <span className="text-bronx-orange">услуги</span>
          </h2>
          <div className="w-24 h-1 bg-bronx-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональные услуги для мужчин и детей с гарантией качества
          </p>
        </div>
        
        {/* Карточки услуг */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-bronx-gray rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Верхняя часть карточки с иконкой и заголовком */}
              <div className="bg-bronx-dark p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-bronx-orange">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="text-2xl font-bold text-bronx-orange">{service.price}</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-white">{service.title}</h3>
                <p className="text-bronx-light text-sm mt-2">{service.description}</p>
                <div className="mt-3 text-xs text-bronx-light flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>
              </div>
              
              {/* Список особенностей */}
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bronx-orange mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-900 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Кнопка записи */}
                <Link 
                  to="booking" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500} 
                  className="mt-6 block w-full text-center bg-bronx-orange text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 cursor-pointer"
                >
                  Записаться
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Сравнение с обычной парикмахерской */}
        <div className="bg-bronx-gray bg-opacity-50 rounded-xl p-8">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">
            Почему <span className="text-bronx-orange">BRONX</span>, а не обычная парикмахерская?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4 text-red-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Обычная парикмахерская
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-900 font-medium">Универсальные мастера без специализации</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-900 font-medium">Очереди и ожидание</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-900 font-medium">Стрижка "на глазок" без консультации</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-900 font-medium">Скрытые доплаты за услуги</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-900 font-medium">Нет гарантии на результат</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4 text-green-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Барбершоп BRONX
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900 font-medium">Мастера специализируются на мужских стрижках</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900 font-medium">Онлайн-запись без ожидания</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900 font-medium">Детальная консультация перед стрижкой</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900 font-medium">Фиксированные цены без скрытых доплат</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900 font-medium">Гарантия на стрижку - исправим бесплатно</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesEnhanced;