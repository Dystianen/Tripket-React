import { AnimatedSwitch } from 'react-router-transition';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PublicRoute } from '../component/PublicRoute';
import { Login } from '../pages/Login/Login';
import { App } from '../pages/App/App';

import { About } from '../pages/About/About';
import { Profile } from '../pages/Profile/Profile';

import { Home } from '../pages/Home/Home';
import { Train } from '../pages/Train/Train.js';

export const AppRoute = () => {
  return (
    <Switch>
      <Route path={'/app/home'}>
        <Home />
      </Route>
      <Route path={'/app/train'}>
        <Train />
      </Route>
      <Route path={'/app/about'}>
        <About />
      </Route>
      <Route path={'/app/profile'}>
        <Profile />
      </Route>
      <Route path='/app' exact>
        <Redirect to={'/app/home'} />
      </Route>
    </Switch>
  );
  // <About/>
};
