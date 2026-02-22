import React, { useState } from 'react';
import { Link } from 'react-scroll';

const BookingFormEnhanced = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    master: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const services = [
    { id: 'haircut', name: 'Мужская стрижка', price: 'от 800₽' },
    { id: 'beard', name: 'Стрижка и оформление бороды', price: 'от 1200₽' },
    { id: 'complex', name: 'Стрижка + борода', price: 'от 1600₽' },
    { id: 'child', name: 'Детская стрижка', price: 'от 600₽' }
  ];

  const masters = [
    { id: 'alexey', name: 'Алексей' },
    { id: 'dmitry', name: 'Дмитрий' },
    { id: 'igor', name: 'Игорь' }
  ];

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите ваш телефон';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }
    
    if (!formData.service) {
      newErrors.service = 'Выберите услугу';
    }
    
    if (!formData.master) {
      newErrors.master = 'Выберите мастера';
    }
    
    if (!formData.date) {
      newErrors.date = 'Выберите дату';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Выберите дату не раньше сегодняшнего дня';
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'Выберите время';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Имитация отправки данных на сервер
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // В реальном приложении здесь будет запрос к API
      console.log('Отправка формы:', formData);
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        master: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <section id="booking" className="py-20 bg-bronx-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Запись в <span className="text-bronx-orange">барбершоп BRONX</span>
          </h2>
          <div className="w-24 h-1 bg-bronx-orange mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Запишитесь онлайн и получите скидку 10% на первую услугу
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-bronx-dark rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              {/* Левая часть - информация о записи */}
              <div className="md:w-2/5 bg-bronx-orange text-white p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Почему записаться онлайн?</h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Гарантированное время без ожидания</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Скидка 10% на первую услугу</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Напоминание о записи за день</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Возможность отмены за 2 часа</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-3">Контакты для связи:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>г. Шахты, ул. Ленина, 142А</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Ежедневно с 10:00 до 20:00</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Правая часть - форма */}
              <div className="md:w-3/5 p-8">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Заявка отправлена!</h3>
                    <p className="text-gray-300 mb-6">
                      Спасибо за запись! Мы свяжемся с вами в ближайшее время для подтверждения.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn-primary"
                    >
                      Записаться еще раз
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {submitError && (
                      <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                        {submitError}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Ваше имя *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-bronx-gray border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronx-orange text-white ${
                            errors.name ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="Иван"
                        />
                        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 mb-2">Телефон *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-bronx-gray border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronx-orange text-white ${
                            errors.phone ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="+7 (999) 123-45-67"
                        />
                        {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-gray-300 mb-2">Услуга *</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-bronx-gray border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronx-orange text-white ${
                            errors.service ? 'border-red-500' : 'border-gray-600'
                          }`}
                        >
                          <option value="">Выберите услугу</option>
                          {services.map(service => (
                            <option key={service.id} value={service.id}>
                              {service.name} - {service.price}
                            </option>
                          ))}
                        </select>
                        {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="master" className="block text-gray-300 mb-2">Мастер *</label>
                        <select
                          id="master"
                          name="master"
                          value={formData.master}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-bronx-gray border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronx-orange text-white ${
                            errors.master ? 'border-red-500' : 'border-gray-600'
                          }`}
                        >
                          <option value="">Выберите мастера</option>
                          {masters.map(master => (
                            <option key={master.id} value={master.id}>
                              {master.name}
                            </option>
                          ))}
                        </select>
                        {errors.master && <p className="mt-1 text-red-500 text-sm">{errors.master}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="date" className="block text-gray-300 mb-2">Дата *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={getMinDate()}
                          max={getMaxDate()}
                          className={`w-full px-4 py-2 bg-bronx-gray border rounded-lg focus:outline-none focus:ring-2 focus:ring-bronx-orange text-white ${
                            errors.date ? 'border-red-500' : 'border-gray-600'
                          }`}
                        />
                        {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-gray-300 mb-2">Время *</label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map(time => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, time }));
                                if (errors.time) {
                                  setErrors(prev => ({ ...prev, time: '' }));
                                }
                              }}
                              className={`py-2 px-3 rounded-lg text-sm transition duration-300 ${
                                formData.time === time
                                  ? 'bg-bronx-orange text-white'
                                  : 'bg-bronx-gray text-gray-300 hover:bg-gray-600'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {errors.time && <p className="mt-1 text-red-500 text-sm">{errors.time}</p>}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="message" className="block text-gray-300 mb-2">Комментарий</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 bg-bronx-gray border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-bronx-orange text-white"
                        placeholder="Ваши пожелания или особенности"
                      ></textarea>
                    </div>
                    
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 ${
                          isSubmitting
                            ? 'bg-gray-500 cursor-not-allowed'
                            : 'bg-bronx-orange hover:bg-opacity-90 text-white'
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Отправка...
                          </span>
                        ) : (
                          'Записаться'
                        )}
                      </button>
                    </div>
                    
                    <div className="mt-6 text-center text-gray-400 text-sm">
                      Нажимая кнопку "Записаться", вы соглашаетесь с политикой конфиденциальности
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormEnhanced;