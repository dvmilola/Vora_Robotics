import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import CoreSolutions from '../components/CoreSolutions';
import FeaturesAppearances from '../components/FeaturesAppearances';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <CoreSolutions />
      <FeaturesAppearances />
      <Testimonials />
    </div>
  );
};

export default HomePage;
