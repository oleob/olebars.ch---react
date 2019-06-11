import React from 'react';

import './loading-wave.scss';

const LoadingWave = ({ numBars = 20 }) => {
  const bars = [];
  for (let i = 0; i < numBars; i++) {
    bars.push(<div className="loading-wave__bar" style={{ animationDelay: `${i / 10}s` }} />);
  }
  return <div className="loading-wave">{bars}</div>;
};

export default LoadingWave;
