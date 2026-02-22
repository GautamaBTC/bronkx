import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-bronx-gray text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-bronx-light max-w-2xl mx-auto">
            Реальные отзывы из Яндекс.Карт и 2GIS от жителей Шахт
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Отзыв 1 */}
          <div className="bg-bronx-dark rounded-xl p-8" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-bronx-orange flex items-center justify-center text-white font-bold text-xl mr-4">
                И
              </div>
              <div>
                <h3 className="text-xl font-bold">Иван</h3>
                <div className="flex text-bronx-orange">
                  ★★★★★
                </div>
              </div>
            </div>
            
            <p className="text-bronx-light mb-6 italic">
              "Ходил в разные места в Шахтах, но здесь впервые сделали так, как я хотел. Стрижка держится уже 2 недели, не требует коррекции. Цена оправдана."
            </p>
            
            <div className="text-gray-500 text-sm">
              <p>Яндекс.Карты • 2 недели назад</p>
            </div>
          </div>
          
          {/* Отзыв 2 */}
          <div className="bg-bronx-dark rounded-xl p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-bronx-orange flex items-center justify-center text-white font-bold text-xl mr-4">
                А
              </div>
              <div>
                <h3 className="text-xl font-bold">Андрей</h3>
                <div className="flex text-bronx-orange">
                  ★★★★★
                </div>
              </div>
            </div>
            
            <p className="text-bronx-light mb-6 italic">
              "Записался онлайн, пришёл в назначенное время - не ждал ни минуты. Мастер Дмитрий подробно объяснил, как ухаживать за бородой. Результат - жена в восторге!"
            </p>
            
            <div className="text-gray-500 text-sm">
              <p>2GIS • 1 месяц назад</p>
            </div>
          </div>
          
          {/* Отзыв 3 */}
          <div className="bg-bronx-dark rounded-xl p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-bronx-orange flex items-center justify-center text-white font-bold text-xl mr-4">
                С
              </div>
              <div>
                <h3 className="text-xl font-bold">Сергей</h3>
                <div className="flex text-bronx-orange">
                  ★★★★★
                </div>
              </div>
            </div>
            
            <p className="text-bronx-light mb-6 italic">
              "Вёл сына на стрижку - боялись, будут проблемы. Михаил нашёл подход, ребёнок сидел спокойно. Теперь только сюда ходим всей семьёй."
            </p>
            
            <div className="text-gray-500 text-sm">
              <p>Яндекс.Карты • 3 недели назад</p>
            </div>
          </div>
        </div>
        
        {/* Блок с гарантией обратной связи */}
        <div className="mt-16 bg-bronx-dark rounded-xl p-8 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-serif font-bold mb-4">Не понравилось — исправим!</h3>
          <p className="text-bronx-light max-w-2xl mx-auto mb-6">
            Если что-то пошло не так — пишите напрямую владельцу, разрулим. Любой спор решаем в пользу клиента — репутация дороже.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="tel:+79001234567" className="bg-bronx-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Позвонить нам
            </a>
            <a href="https://yandex.ru/maps/org/bronks/215587972488/" target="_blank" rel="noopener noreferrer" className="bg-bronx-gray hover:bg-bronx-gray text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Читать отзывы на Яндекс.Картах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;