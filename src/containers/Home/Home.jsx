import React from 'react';

import Curtain from '../../components/Curtain';
import PageLinks from '../../components/PageLinks';


import './home.scss';

const Home = () => (
  <div className="home">
    <Curtain text="welcome" />
    <PageLinks />
  </div>
);

export default Home;
