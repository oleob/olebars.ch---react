import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './scss/app.scss';

import Routes from './containers/Routes';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <div className="grid">
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
