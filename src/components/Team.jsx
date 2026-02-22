import React from 'react';
import { Link } from 'react-scroll';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Наши мастера</h2>
          <p className="text-xl text-bronx-light max-w-2xl mx-auto">
            Профессионалы с опытом, которые постоянно совершенствуют свои навыки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Мастер 1: Александр */}
          <div className="bg-bronx-gray rounded-xl overflow-hidden card-hover" data-aos="fade-up">
            <div className="h-80 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold">Александр</h3>
                  <p className="text-bronx-orange">Главный барбер</p>
                </div>
                <div className="text-right">
                  <p className="text-bronx-light">Опыт</p>
                  <p className="font-bold">8 лет</p>
                </div>
              </div>
              
              <p className="text-bronx-light mb-6">
                Специализируется на сложных стрижках и фейдах. Обучает других мастеров современным техникам.
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold mb-2">Специализация:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Fade</span>
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Undercut</span>
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Сложные стрижки</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold mb-2">Достижения:</h4>
                <ul className="text-bronx-light text-sm space-y-1">
                  <li>• Обучение более 15 мастеров</li>
                  <li>• Участник чемпионатов по барберингу</li>
                  <li>• 1000+ довольных клиентов</li>
                </ul>
              </div>
              
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="w-full bg-bronx-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 block text-center cursor-pointer"
              >
                Записаться к Александру
              </Link>
            </div>
          </div>
          
          {/* Мастер 2: Дмитрий */}
          <div className="bg-bronx-gray rounded-xl overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="h-80 bg-[url('https://images.unsplash.com/photo-1589882563916-47b6e4e670ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold">Дмитрий</h3>
                  <p className="text-bronx-orange">Мастер-универсал</p>
                </div>
                <div className="text-right">
                  <p className="text-bronx-light">Опыт</p>
                  <p className="font-bold">5 лет</p>
                </div>
              </div>
              
              <p className="text-bronx-light mb-6">
                Мастер классических стрижек и ухода за бородой. Подходит для клиентов, предпочитающих сдержанный стиль.
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold mb-2">Специализация:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Классика</span>
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Бороды</span>
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Укладки</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold mb-2">Достижения:</h4>
                <ul className="text-bronx-light text-sm space-y-1">
                  <li>• 500+ довольных клиентов</li>
                  <li>• Сертификат по уходу за бородой</li>
                  <li>• Постоянные клиенты с 2019 года</li>
                </ul>
              </div>
              
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="w-full bg-bronx-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 block text-center cursor-pointer"
              >
                Записаться к Дмитрию
              </Link>
            </div>
          </div>
          
          {/* Мастер 3: Михаил */}
          <div className="bg-bronx-gray rounded-xl overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="200">
            <div className="h-80 bg-[url('https://images.unsplash.com/photo-1552058544-f2b9fb8dc2c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold">Михаил</h3>
                  <p className="text-bronx-orange">Мастер по детским стрижкам</p>
                </div>
                <div className="text-right">
                  <p className="text-bronx-light">Опыт</p>
                  <p className="font-bold">3 года</p>
                </div>
              </div>
              
              <p className="text-bronx-light mb-6">
                Находит подход к самым капризным маленьким клиентам. Быстро и аккуратно стрижёт детей любого возраста.
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold mb-2">Специализация:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Детские стрижки</span>
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Модельные стрижки</span>
                  <span className="bg-bronx-dark px-3 py-1 rounded-full text-sm">Первые стрижки</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold mb-2">Достижения:</h4>
                <ul className="text-bronx-light text-sm space-y-1">
                  <li>• Лучший детский мастер по отзывам</li>
                  <li>• 300+ маленьких клиентов</li>
                  <li>• Специальная подготовка по детской психологии</li>
                </ul>
              </div>
              
              <Link 
                to="booking" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="w-full bg-bronx-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 block text-center cursor-pointer"
              >
                Записаться к Михаилу
              </Link>
            </div>
          </div>
        </div>
        
        {/* Блок с гарантией качества */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block bg-bronx-orange text-white px-6 py-4 rounded-lg">
            <p className="text-xl font-bold">
              Все мастера проходят внутреннее обучение и чек-листы качества
            </p>
            <p className="mt-2">
              Фиксируем схему вашей стрижки в карте клиента — в следующий раз повторим 1 в 1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;