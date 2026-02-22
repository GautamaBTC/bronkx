import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HeroEnhanced from './components/HeroEnhanced';
import ServicesEnhanced from './components/ServicesEnhanced';
import TeamEnhanced from './components/TeamEnhanced';
import TestimonialsEnhanced from './components/TestimonialsEnhanced';
import BookingFormEnhanced from './components/BookingFormEnhanced';
import SocialProof from './components/SocialProof';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import DiagonalBackground from './components/DiagonalBackground';
import AnimatedBurgerMenu from './components/AnimatedBurgerMenu';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="font-sans text-bronx-light">
      <DiagonalBackground />
      <Header />
      <HeroEnhanced />
      <ServicesEnhanced />
      <TeamEnhanced />
      <TestimonialsEnhanced />
      <SocialProof />
      <BookingFormEnhanced />
      <MapSection />
      <Footer />
      <AnimatedBurgerMenu />
    </div>
  );
}

export default App;
