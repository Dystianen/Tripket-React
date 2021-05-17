import React from 'react';
import HeroSection from '../../component/HeroSection/HeroSection';
import Cards from '../../component/Card/Cards';
import ParticlesBg from 'particles-bg';

export const Home = () => {
  return (
    <div>
      <ParticlesBg type='cobweb' num={100} color='black' bg={true} />
      <HeroSection />
      <Cards />
    </div>
  );
};
