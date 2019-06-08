import React from 'react';

import './curtain.scss';

const Curtain = ({ text }) => {
  return (
    <div className="paper curtain">
      <div className="curtain__left" />
      <div className="curtain__text">
        <h1>{text}</h1>
      </div>
      <div className="curtain__right" />
    </div>
  );
};

export default Curtain;
