import '../../src/App.less';
import React from 'react';

// Components
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection';
import Cards from '../components/Card/Cards';

export const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Cards />
    </>
  );
}

export default Home;
