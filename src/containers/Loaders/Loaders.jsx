import React from 'react';
import {
  Arrow,
  Squares,
  Circles,
  Wave,
  Cloud,
  DotCircle,
  ColorSquares
} from '../../components/Loaders';

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

const Loaders = () => (
  <Tabs labels={['SVG loaders', 'CSS loaders']}>
    <SVGLoaders />
    <h3>CSS loaders here</h3>
  </Tabs>
);

export default Loaders;
