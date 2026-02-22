import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const ModernAnimatedBurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Варианты анимации для бургер-иконки (X-menu паттерн)
  const topLineVariants = {
    closed: { 
      rotate: 0, 
      y: 0,
      backgroundColor: "#ffffff"
    },
    open: { 
      rotate: 45, 
      y: 7,
      backgroundColor: isScrolled ? "#ff9500" : "#ffffff"
    }
  };

  const middleLineVariants = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 }
  };

  const bottomLineVariants = {
    closed: { 
      rotate: 0, 
      y: 0,
      backgroundColor: "#ffffff"
    },
    open: { 
      rotate: -45, 
      y: -7,
      backgroundColor: isScrolled ? "#ff9500" : "#ffffff"
    }
  };

  // Варианты анимации для фона меню
  const menuBackgroundVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  // Варианты анимации для контейнера меню
  const menuContainerVariants = {
    closed: { x: '100%' },
    open: { x: 0 }
  };

  // Варианты анимации для пунктов меню
  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  // Варианты анимации для социальных иконок
  const socialIconVariants = {
    closed: { scale: 0, opacity: 0 },
    open: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    })
  };

  // Навигационные пункты
  const navItems = [
    { name: 'Услуги', to: 'services' },
    { name: 'Мастера', to: 'team' },
    { name: 'Отзывы', to: 'testimonials' },
    { name: 'Запись', to: 'booking' }
  ];

  // Социальные сети
  const socialLinks = [
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z', url: '#' },
    { name: 'WhatsApp', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z', url: '#' },
    { name: 'Telegram', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.09 1-.27 1.34-.44 1.38-.37.07-.65-.23-.95-.45-.53-.39-1.11-.73-1.67-1.11-.7-.45-.28-.7.15-1.15.1-.11 1.85-1.7 1.89-1.75.03-.05.07-.17-.01-.3s-.14-.1-.2-.09c-.08.01-1.39.88-3.93 2.58-.37.25-.71.38-1.01.37-.33 0-.99-.2-1.48-.36-.6-.2-1.07-.3-1.03-.64.02-.18.27-.36.74-.55 3.87-1.69 6.46-2.8 7.86-3.37.69-.28 1.32-.42 1.82-.44.3 0 .55.07.74.21.24.18.31.48.28.84z', url: '#' }
  ];

  return (
    <>
      {/* Анимированная бургер-иконка (превращается в крестик) */}
      <motion.button
        className="md:hidden fixed top-4 right-6 w-12 h-12 flex justify-center items-center"
        style={{ zIndex: isMenuOpen ? 60 : 50 }}
        onClick={toggleMenu}
        aria-label="Меню"
        aria-expanded={isMenuOpen}
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="relative w-6 h-6"
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        >
          {/* Верхняя линия */}
          <motion.div
            className="absolute w-6 h-0.5 bg-white rounded-full origin-center"
            variants={topLineVariants}
            transition={{ duration: 0.3 }}
          />
          {/* Средняя линия */}
          <motion.div
            className="absolute w-6 h-0.5 bg-white rounded-full top-3 origin-center"
            variants={middleLineVariants}
            transition={{ duration: 0.2 }}
          />
          {/* Нижняя линия */}
          <motion.div
            className="absolute w-6 h-0.5 bg-white rounded-full top-6 origin-center"
            variants={bottomLineVariants}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.button>

      {/* Анимированный фон */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40"
            variants={menuBackgroundVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Анимированное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden fixed inset-0 z-50 overflow-hidden"
            variants={menuContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => {
              // Закрываем меню только при клике на фон, а не на контент
              if (e.target === e.currentTarget) {
                closeMenu();
              }
            }}
          >
            {/* Декоративный фон с градиентом */}
            <div className="absolute inset-0 bg-gradient-to-br from-bronx-dark via-bronx-gray to-black opacity-90"></div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-bronx-orange opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-bronx-orange opacity-10 blur-2xl"></div>
            
            {/* Контент меню */}
            <div className="relative h-full flex flex-col p-8" onClick={(e) => e.stopPropagation()}>
              {/* Логотип BRONX */}
              <div className="flex justify-start items-start mb-16 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-5xl font-serif font-bold text-white">BRONX</h2>
                  <motion.div
                    className="w-20 h-1 bg-bronx-orange mt-3"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  ></motion.div>
                </motion.div>
              </div>

              {/* Навигация */}
              <nav className="flex flex-col space-y-8 flex-grow">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-2xl text-white hover:text-bronx-orange transition duration-300 cursor-pointer flex items-center group"
                      onClick={closeMenu}
                    >
                      <motion.span 
                        className="w-3 h-3 bg-bronx-orange rounded-full mr-4"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                      <span className="relative">
                        {item.name}
                        <motion.span 
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-bronx-orange"
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Контакты и социальные сети */}
              <motion.div 
                className="mt-auto space-y-8 pt-8 border-t border-bronx-gray"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div>
                  <a href="tel:+79188557799" className="text-xl text-white hover:text-bronx-orange transition duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +7 (918) 855-77-99
                  </a>
                </div>
                
                {/* Социальные иконки */}
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-bronx-orange transition duration-300"
                      custom={index}
                      variants={socialIconVariants}
                      initial="closed"
                      animate="open"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.name}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
                
                {/* Кнопка записи */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="booking" 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    className="block w-full py-4 px-8 bg-bronx-orange text-white text-center rounded-lg hover:bg-opacity-90 transition duration-300 cursor-pointer text-lg font-medium shadow-lg"
                    onClick={closeMenu}
                  >
                    Записаться
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernAnimatedBurgerMenu;