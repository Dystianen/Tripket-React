// ESSENTSIALS
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './utils/useStore';
import { MainRoutes } from './routes';

// STYLES
import './custom.less';

// COMPONENTS
import ParticlesBg from 'particles-bg';
import Navbar from './component/Navbar/Navbar';

export const Main = () => {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <MainRoutes />
      </Router>
    </StoreProvider>
  );
};
