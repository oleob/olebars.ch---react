import React, { useState } from 'react';
import {
  Arrow,
  Squares,
  Circles,
  Wave,
  Cloud,
  DotCircle,
  ColorSquares
} from '../../components/Loaders';

import { LoadingWave, SquareDots } from '../../components/Loaders/CSSLoaders';

import Tabs from '../../components/Tabs';

import './loaders.scss';

const SVGLoaders = () => (
  <div className="loaders">
    <div className="loaders__loader-container">
      <Arrow />
    </div>
    <div className="loaders__loader-container">
      <Squares />
    </div>
    <div className="loaders__loader-container">
      <Circles />
    </div>
    <div className="loaders__loader-container">
      <Wave />
    </div>
    <div className="loaders__loader-container">
      <Cloud />
    </div>
    <div className="loaders__loader-container">
      <DotCircle />
    </div>
    <div className="loaders__loader-container">
      <ColorSquares />
    </div>
  </div>
);

const CSSLoaders = () => {
  const [numbars, setNumBars] = useState(10);
  return (
    <div className="loaders">
      <div className="loaders__loader-container">
        <input
          type="number"
          placeholder="Number of bars"
          onChange={e => setNumBars(e.target.value)}
          max={25}
        ></input>
        <LoadingWave numBars={numbars} />
      </div>
      <div className="loaders__loader-container">
        <SquareDots />
      </div>
    </div>
  );
};

const Loaders = () => (
  <Tabs labels={['SVG loaders', 'CSS loaders']}>
    <SVGLoaders />
    <CSSLoaders />
  </Tabs>
);

export default Loaders;
