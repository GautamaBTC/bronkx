import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('social-proof');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверка при загрузке страницы

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    {
      number: 1000,
      suffix: '+',
      label: 'Довольных клиентов',
      description: 'Клиентов, которые доверяют нам свои стрижки'
    },
    {
      number: 8,
      suffix: '',
      label: 'Лет опыта',
      description: 'Работаем для вас с 2018 года'
    },
    {
      number: 3,
      suffix: '',
      label: 'Профессиональных барбера',
      description: 'Специалистов высокой квалификации'
    },
    {
      number: 99,
      suffix: '%',
      label: 'Возврата клиентов',
      description: 'Клиентов, которые возвращаются к нам снова'
    },
    {
      number: 5,
      suffix: '',
      label: 'Звезд на Яндекс.Картах',
      description: 'Рейтинг на основе отзывов клиентов'
    },
    {
      number: 3,
      suffix: '',
      label: 'Дня гарантии',
      description: 'Бесплатная коррекция стрижки'
    }
  ];

  return (
    <section id="social-proof" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            BRONX в <span className="text-bronx-orange">цифрах</span>
          </h2>
          <div className="w-24 h-1 bg-bronx-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наша статистика говорит сама за себя
          </p>
        </div>
        
        {/* Сетка с цифрами */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-bronx-dark rounded-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-5xl font-bold text-bronx-orange mb-4">
                {isVisible && (
                  <CountUp 
                    end={stat.number} 
                    duration={3} 
                    suffix={stat.suffix}
                    enableScrollSpy
                  />
                )}
                {!isVisible && (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Дополнительные социальные доказательства */}
        <div className="bg-bronx-dark rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-white text-center mb-8">
            Почему клиенты выбирают BRONX?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-bronx-orange mb-4">Наши преимущества:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bronx-orange mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Специализация только на мужских стрижках</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bronx-orange mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Онлайн-запись без ожидания</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bronx-orange mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Фиксированные цены без скрытых доплат</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bronx-orange mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Гарантия на стрижку — исправим бесплатно</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-bronx-orange mb-4">Что говорят клиенты:</h4>
              <div className="space-y-4">
                <div className="bg-bronx-dark bg-opacity-70 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm italic">"Лучший барбершоп в Шахтах! Стрижка держится неделю."</p>
                    <p className="text-gray-400 text-xs mt-1">— Александр К., Яндекс.Карты</p>
                  </div>
                </div>
                
                <div className="bg-bronx-dark bg-opacity-70 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm italic">"Мастера настоящие профессионалы. Бороду сделали идеально."</p>
                    <p className="text-gray-400 text-xs mt-1">— Дмитрий С., 2GIS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Призыв к действию */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Присоединяйтесь к более чем 1000 довольных клиентов BRONX
          </p>
          <a 
            href="#booking"
            className="inline-block bg-bronx-orange text-white py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Записаться сейчас
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;