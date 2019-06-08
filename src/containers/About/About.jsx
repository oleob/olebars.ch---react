import React from 'react';

import './about.scss';

const About = () => (
  <div className="about">
    <img className="about__picture" alt="headshot" src="/picture.jpg" />
    <h1>About</h1>
    <p>I'm just your average developer, currently working at Knowit.</p>
    <p>
      This page is made with React and SASS and is hosted on{' '}
      <a href="http://netlify.com">Netlify</a>.
    </p>
    <p>
      If you have any questions, send me an email:{' '}
      <a href="mailto:ole.barsch@gmail.com">ole.barsch@gmail.com</a>
    </p>
  </div>
);

export default About;
