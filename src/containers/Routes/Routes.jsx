import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './routes.scss';

import Home from '../Home';
import Error404 from '../Error404';
import Loaders from '../Loaders';
import Projects from '../Projects';
import About from '../About';

const Routes = () => (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/loaders">
        <Loaders />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
);

export default Routes;
