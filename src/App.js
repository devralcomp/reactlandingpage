import React from 'react';
import AboutUs from './components/AboutUs';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import FooterCmpt from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

function App() {
  return (
    <div style={{backgroundColor: "#FFFAFF"}}> 
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Pricing />
      <CallToAction />
      <FooterCmpt />
    </div>
  );
}

export default App;
