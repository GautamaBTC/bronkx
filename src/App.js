import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

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
      <Header />
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
