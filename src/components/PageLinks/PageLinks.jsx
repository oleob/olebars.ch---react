import React from 'react';
import { Link } from 'react-router-dom';

import './page-links.scss';

const PageLinks = () => (
  <div className="page-links">
    <Link to="/projects" className="page-links__link page-links__link--left">
      <i className="page-links__icon fas fa-code" />
      <p>Projects</p>
    </Link>
    <Link to="/about" className="page-links__link page-links__link--right">
      <i className="page-links__icon fas fa-info-circle" />
      <p>About</p>
    </Link>
  </div>
);

export default PageLinks;
