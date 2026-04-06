import React from 'react';
import Header from '../Components/Headers';
import Features from '../Components/Features';
import CTA from '../Components/CTA';
import Footer from '../Components/Footer';

function Landing() {
  return (
    <main className="landing">
      <Header />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

export default Landing;
