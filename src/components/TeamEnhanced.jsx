import React, { useState } from 'react';

const TeamEnhanced = () => {
  const [activeMember, setActiveMember] = useState(0);
  
  const teamMembers = [
    {
      name: "Алексей",
      position: "Основатель, главный барбер",
      experience: "8 лет",
      description: "Специализируется на классических мужских стрижках и сложных фейдах. Обучался в Москве и Санкт-Петербурге.",
      achievements: ["1000+ довольных клиентов", "Обучил 15+ барберов", "Участник чемпионатов"],
      specialties: ["Fade", "Undercut", "Классические стрижки", "Королевский бород"],
      quote: "Моя работа — не просто стрижка, а создание образа, в котором мужчина чувствует себя уверенно."
    },
    {
      name: "Дмитрий",
      position: "Барбер-стилист",
      experience: "5 лет",
      description: "Мастер современных тенденций в мужских стрижках и оформлении бороды. Имеет сертификаты международных школ.",
      achievements: ["Специалист по бородам", "Победитель конкурсов", "500+ постоянных клиентов"],
      specialties: ["Моделирование бороды", "Текстурные стрижки", "Татуировки", "Окантовка"],
      quote: "Каждый клиент уникален, и я стремлюсь подчеркнуть его индивидуальность через стиль."
    },
    {
      name: "Игорь",
      position: "Барбер",
      experience: "4 года",
      description: "Специалист по детским и подростковым стрижкам. Находит подход к самым маленьким клиентам.",
      achievements: ["Любимец детей", "Быстрые стрижки", "Сертификат по работе с детьми"],
      specialties: ["Детские стрижки", "Подростковые стрижки", "Игровые формы", "Наклейки"],
      quote: "Сделать так, чтобы ребенок с радостью шел на стрижку — моя главная задача."
    }
  ];

  return (
    <section id="team" className="py-20 bg-bronx-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Наша <span className="text-bronx-orange">команда</span>
          </h2>
          <div className="w-24 h-1 bg-bronx-orange mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Профессиональные барберы с опытом и индивидуальным подходом к каждому клиенту
          </p>
        </div>
        
        {/* Навигация по команде */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-bronx-dark rounded-lg p-1">
            {teamMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => setActiveMember(index)}
                className={`px-4 py-2 rounded-md transition duration-300 ${
                  activeMember === index 
                    ? 'bg-bronx-orange text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {member.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Карточка активного члена команды */}
        <div className="max-w-4xl mx-auto bg-bronx-dark rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            {/* Левая часть - изображение и основные данные */}
            <div className="md:w-2/5 bg-bronx-gray p-8 flex flex-col items-center justify-center">
              <div className="relative mb-6">
                {/* Изображение с рамкой */}
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-bronx-orange">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${activeMember + 10}.jpg`} 
                    alt={teamMembers[activeMember].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Декоративный элемент */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-bronx-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{activeMember + 1}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-1">
                {teamMembers[activeMember].name}
              </h3>
              <p className="text-bronx-orange mb-4">{teamMembers[activeMember].position}</p>
              
              <div className="flex items-center text-gray-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Опыт: {teamMembers[activeMember].experience}</span>
              </div>
              
              {/* Достижения */}
              <div className="mt-4">
                <h4 className="text-white font-bold mb-2">Достижения:</h4>
                <ul className="space-y-1">
                  {teamMembers[activeMember].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-bronx-orange mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Правая часть - детали и специализации */}
            <div className="md:w-3/5 p-8">
              <p className="text-gray-300 mb-6 italic">
                "{teamMembers[activeMember].quote}"
              </p>
              
              <p className="text-gray-300 mb-8">
                {teamMembers[activeMember].description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-white font-bold mb-3">Специализации:</h4>
                <div className="flex flex-wrap gap-2">
                  {teamMembers[activeMember].specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-bronx-orange bg-opacity-20 text-bronx-orange rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Примеры работ */}
              <div>
                <h4 className="text-white font-bold mb-3">Примеры работ:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item, index) => (
                    <div 
                      key={index}
                      className="aspect-square rounded overflow-hidden"
                    >
                      <img 
                        src={`https://picsum.photos/seed/barber${activeMember}${index}/200/200.jpg`} 
                        alt={`Работа ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Мини-карточки всех членов команды для мобильной версии и быстрой навигации */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              onClick={() => setActiveMember(index)}
              className={`bg-bronx-dark rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 ${
                activeMember === index ? 'ring-2 ring-bronx-orange' : ''
              }`}
            >
              <div className="p-6 flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${index + 10}.jpg`} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-bronx-orange">{member.position}</p>
                  <p className="text-xs text-gray-400">{member.experience} опыта</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamEnhanced;