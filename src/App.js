import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

import ScrollAnimation from './components/ScrollAnimation';

function HomePage() {
  return (
    <div className="font-sans text-bronx-light relative min-h-screen bg-bronx-dark">
      <div className="relative z-10">
        <ScrollAnimation />
        <Header />
        <HeroEnhanced />
        <ServicesEnhanced className="fade-in-section" />
        <TeamEnhanced className="fade-in-section" />
        <TestimonialsEnhanced className="fade-in-section" />
        <SocialProof className="fade-in-section" />
        <BookingFormEnhanced className="fade-in-section" />
        <MapSection className="fade-in-section" />
        <Footer className="fade-in-section" />
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
