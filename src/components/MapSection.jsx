import React, { useState } from 'react';

const MapSection = () => {
  const [transportMode, setTransportMode] = useState('driving');
  
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.843742690331!2d40.2234!3d47.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e9b2d3d3d3d3d3%3A0x3d3d3d3d3d3d3d3!2z0JzQvtGB0LrQstCw0YLRgdGC0LXRgNGB0LrQsNGPINGD0LsuLCAxNDLQkC!5e0!3m2!1sru!2sru!4v1645399999999!5m2!1sru!2sru`;
  
  const transportOptions = [
    { id: 'driving', label: 'На машине', icon: '🚗' },
    { id: 'walking', label: 'Пешком', icon: '🚶' },
    { id: 'transit', label: 'Общ. транспорт', icon: '🚌' }
  ];
  
  const parkingInfo = [
    "Бесплатная парковка рядом с барбершопом",
    "Парковка доступна с 9:00 до 21:00",
    "Места всегда свободные, даже в вечернее время",
    "Для клиентов с детьми - места у входа"
  ];
  
  const nearbyPlaces = [
    { name: "Магазин 'Пятерочка'", type: "Продукты", distance: "50 м" },
    { name: "Кафе 'Уют'", type: "Кафе", distance: "100 м" },
    { name: "Банк 'Сбербанк'", type: "Банкомат", distance: "150 м" },
    { name: "Аптека '36,6'", type: "Аптека", distance: "200 м" }
  ];

  return (
    <section id="contacts" className="py-20 bg-bronx-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Как <span className="text-bronx-orange">добраться</span> до BRONX
          </h2>
          <div className="w-24 h-1 bg-bronx-orange mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Удобное расположение в центре Шахт с бесплатной парковкой
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Карта */}
          <div className="lg:col-span-2">
            <div className="bg-bronx-dark rounded-xl overflow-hidden shadow-lg h-full">
              <div className="h-96 md:h-[500px]">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта проезда к барбершопу BRONX"
                ></iframe>
              </div>
              
              {/* Кнопки маршрутов */}
              <div className="p-4 bg-bronx-dark">
                <div className="flex flex-wrap gap-2 mb-4">
                  {transportOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setTransportMode(option.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                        transportMode === option.id
                          ? 'bg-bronx-orange text-white'
                          : 'bg-bronx-gray text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-2">{option.icon}</span>
                      {option.label}
                    </button>
                  ))}
                </div>
                
                <div className="text-center">
                  <a
                    href={`https://yandex.ru/maps/?rtext=~47.7089,40.2234&rtt=${transportMode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-bronx-orange text-white py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
                  >
                    Построить маршрут в Яндекс.Картах
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Информация о местоположении */}
          <div className="space-y-6">
            {/* Адрес */}
            <div className="bg-bronx-dark rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Адрес</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bronx-orange mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white">г. Шахты, ул. Ленина, 142А</p>
                    <p className="text-gray-400 text-sm">1 этаж, вход со стороны улицы</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bronx-orange mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white">Ежедневно с 10:00 до 20:00</p>
                    <p className="text-gray-400 text-sm">Без выходных</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bronx-orange mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-white">+7 (999) 123-45-67</p>
                    <p className="text-gray-400 text-sm">WhatsApp, Telegram</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Парковка */}
            <div className="bg-bronx-dark rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Парковка</h3>
              <ul className="space-y-2">
                {parkingInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bronx-orange mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Рядом расположенные объекты */}
            <div className="bg-bronx-dark rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Рядом с нами</h3>
              <ul className="space-y-3">
                {nearbyPlaces.map((place, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <p className="text-white">{place.name}</p>
                      <p className="text-gray-400 text-sm">{place.type}</p>
                    </div>
                    <span className="text-bronx-orange text-sm">{place.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Дополнительная информация */}
        <div className="mt-16 bg-bronx-dark rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Как нас найти?</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-bronx-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Доберитесь до ул. Ленина в центре Шахт</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bronx-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Ищите здание с большой вывеской "BRONX"</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bronx-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Вход с улицы, рядом есть парковка</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bronx-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <span>Наслаждайтесь профессиональным сервисом!</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Транспортная доступность</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-bronx-orange font-medium">Автобусы:</p>
                  <p className="text-gray-300">Остановки "ул. Ленина, 140" - маршруты 1, 5, 12, 15</p>
                </div>
                <div>
                  <p className="text-bronx-orange font-medium">Маршрутки:</p>
                  <p className="text-gray-300">Остановка "Центральный рынок" - маршруты 25, 32, 47</p>
                </div>
                <div>
                  <p className="text-bronx-orange font-medium">Такси:</p>
                  <p className="text-gray-300">До центра города от anywhere в Шахтах - 100-150₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;