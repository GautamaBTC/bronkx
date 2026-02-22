import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: 'Мужская стрижка - 900₽',
    barber: 'Александр',
    date: '',
    time: '10:00',
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    console.log('FormData:', formData);
  };

  return (
    <section id="booking" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Записаться в BRONX</h2>
          <p className="text-xl text-bronx-light max-w-2xl mx-auto">
            Онлайн-запись за 30 секунд без звонков
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-bronx-gray rounded-xl overflow-hidden" data-aos="fade-up">
          <div className="md:flex">
            {/* Левая часть - форма */}
            <div className="md:w-2/3 p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Выбор услуги */}
                <div>
                  <label className="block text-bronx-light mb-2">Выберите услугу</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-bronx-dark border border-bronx-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bronx-orange"
                  >
                    <option>Мужская стрижка - 900₽</option>
                    <option>Стрижка + борода - 1600₽</option>
                    <option>Детская стрижка - 600₽</option>
                    <option>Только борода - 800₽</option>
                  </select>
                </div>
                
                {/* Выбор мастера */}
                <div>
                  <label className="block text-bronx-light mb-2">Выберите мастера</label>
                  <div className="grid grid-cols-3 gap-4">
                    <label className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="barber" 
                        value="Александр"
                        checked={formData.barber === 'Александр'}
                        onChange={handleChange}
                        className="sr-only" 
                      />
                      <div className={`bg-bronx-dark border-2 rounded-lg p-4 text-center ${formData.barber === 'Александр' ? 'border-bronx-orange' : 'border-bronx-gray hover:border-bronx-orange'}`}>
                        <div className="w-16 h-16 rounded-full bg-bronx-orange mx-auto mb-2 flex items-center justify-center text-white font-bold">
                          А
                        </div>
                        <p className="font-bold">Александр</p>
                      </div>
                    </label>
                    
                    <label className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="barber" 
                        value="Дмитрий"
                        checked={formData.barber === 'Дмитрий'}
                        onChange={handleChange}
                        className="sr-only" 
                      />
                      <div className={`bg-bronx-dark border-2 rounded-lg p-4 text-center ${formData.barber === 'Дмитрий' ? 'border-bronx-orange' : 'border-bronx-gray hover:border-bronx-orange'}`}>
                        <div className="w-16 h-16 rounded-full bg-bronx-orange mx-auto mb-2 flex items-center justify-center text-white font-bold">
                          Д
                        </div>
                        <p className="font-bold">Дмитрий</p>
                      </div>
                    </label>
                    
                    <label className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="barber" 
                        value="Михаил"
                        checked={formData.barber === 'Михаил'}
                        onChange={handleChange}
                        className="sr-only" 
                      />
                      <div className={`bg-bronx-dark border-2 rounded-lg p-4 text-center ${formData.barber === 'Михаил' ? 'border-bronx-orange' : 'border-bronx-gray hover:border-bronx-orange'}`}>
                        <div className="w-16 h-16 rounded-full bg-bronx-orange mx-auto mb-2 flex items-center justify-center text-white font-bold">
                          М
                        </div>
                        <p className="font-bold">Михаил</p>
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* Выбор даты и времени */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-bronx-light mb-2">Дата</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-bronx-dark border border-bronx-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bronx-orange"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-bronx-light mb-2">Время</label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-bronx-dark border border-bronx-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bronx-orange"
                    >
                      <option>10:00</option>
                      <option>11:30</option>
                      <option>13:00</option>
                      <option>14:30</option>
                      <option>16:00</option>
                      <option>17:30</option>
                      <option>19:00</option>
                    </select>
                  </div>
                </div>
                
                {/* Контактные данные */}
                <div>
                  <label className="block text-bronx-light mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван" 
                    className="w-full bg-bronx-dark border border-bronx-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bronx-orange"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-bronx-light mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (900) 123-45-67" 
                    className="w-full bg-bronx-dark border border-bronx-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bronx-orange"
                    required
                  />
                </div>
                
                {/* Кнопка отправки */}
                <button 
                  type="submit" 
                  className="w-full bg-bronx-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition duration-300"
                >
                  Записаться
                </button>
              </form>
            </div>
            
            {/* Правая часть - гарантии и информация */}
            <div className="md:w-1/3 bg-bronx-dark p-8">
              <h3 className="text-2xl font-serif font-bold mb-6">Наши гарантии</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Бесплатная коррекция</h4>
                    <p className="text-bronx-light text-sm">Если стрижка не понравится — исправим бесплатно в течение 3 дней</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Фиксированная цена</h4>
                    <p className="text-bronx-light text-sm">Никаких скрытых доплат и комиссий</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Удобная оплата</h4>
                    <p className="text-bronx-light text-sm">Карта, наличные, СБП — выбирайте любой способ</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-bronx-orange mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Стерильность</h4>
                    <p className="text-bronx-light text-sm">Инструменты дезинфицируются при вас</p>
                  </div>
                </li>
              </ul>
              
              <div className="border-t border-bronx-gray pt-6">
                <h4 className="font-bold mb-3">Контакты</h4>
                <ul className="space-y-2 text-bronx-light">
                  <li className="flex items-center">
                    <span className="mr-2">📱</span>
                    <a href="tel:+79001234567" className="hover:text-bronx-orange">+7 (900) 123-45-67</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>г. Шахты, ул. Ленина, 142А</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🕘</span>
                    <span>Ежедневно с 10:00 до 20:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;