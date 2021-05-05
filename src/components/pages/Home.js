import '../../App.less';
import React from 'react';

// Components
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../Card/Cards';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
