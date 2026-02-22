import React, { useState, useEffect } from 'react';

const TestimonialsEnhanced = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Александр К.",
      platform: "Яндекс.Карты",
      rating: 5,
      date: "15.02.2026",
      text: "Отличный барбершоп! Записывался к Алексею на сложный фейд. Сделал всё идеально, как я и хотел. Атмосфера мужская, без лишнего пафоса. Цены адекватные для качества. Буду приходить постоянно!",
      service: "Мужская стрижка (Fade)",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Михаил П.",
      platform: "2GIS",
      rating: 5,
      date: "10.02.2026",
      text: "Ходил с сыном на детскую стрижку. Игорь - молодец, нашел подход к ребенку, стрижка получилась отличная. Сын доволен, да и я тоже. Есть скидка для отцов с детьми - приятно. Рекомендую!",
      service: "Детская стрижка",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Дмитрий С.",
      platform: "VK",
      rating: 5,
      date: "05.02.2026",
      text: "Делал бороду у Дмитрия. Результат превзошел все ожидания! Мастер объяснил, как ухаживать за бородой, посоветовал средства. Никаких навязываний доп. услуг. Честный прайс. Теперь только сюда!",
      service: "Оформление бороды",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  // Автоматическая смена отзывов
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Рендер звездочек рейтинга
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Отзывы наших <span className="text-bronx-orange">клиентов</span>
          </h2>
          <div className="w-24 h-1 bg-bronx-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Реальные отзывы с Яндекс.Карт, 2GIS и социальных сетей
          </p>
        </div>
        
        {/* Индикаторы для отзывов */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  activeTestimonial === index ? 'bg-bronx-orange' : 'bg-gray-300'
                }`}
                aria-label={`Отзыв ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Активный отзыв */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-bronx-dark rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Аватар и информация о клиенте */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start mb-6 md:mb-0">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-bronx-orange">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-white">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  
                  <div className="flex items-center justify-center md:justify-start mt-1">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{testimonials[activeTestimonial].date}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{testimonials[activeTestimonial].platform}</span>
                  </div>
                  
                  <div className="mt-3 px-3 py-1 bg-bronx-orange bg-opacity-20 text-bronx-orange rounded-full text-sm">
                    {testimonials[activeTestimonial].service}
                  </div>
                </div>
              </div>
              
              {/* Текст отзыва */}
              <div className="md:w-2/3 md:pl-8">
                <div className="relative">
                  {/* Кавычки */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-bronx-orange opacity-20 absolute -top-6 -left-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-gray-300 relative z-10 pl-4">
                    {testimonials[activeTestimonial].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Мини-карточки всех отзывов */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`bg-bronx-dark rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 ${
                activeTestimonial === index ? 'ring-2 ring-bronx-orange' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm line-clamp-3">
                  {testimonial.text}
                </p>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-400">{testimonial.platform}</span>
                  <span className="text-xs text-bronx-orange">{testimonial.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Призыв к действию */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Хотите оставить свой отзыв? Запишитесь на услугу и поделитесь впечатлениями!
          </p>
          <a 
            href="https://yandex.ru/maps/org/bronks/215587972488/reviews/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-bronx-orange text-white py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Оставить отзыв на Яндекс.Картах
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsEnhanced;