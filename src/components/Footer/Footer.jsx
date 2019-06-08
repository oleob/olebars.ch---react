import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <ul className="footer__links">
      <li>
        <a href="https://github.com/oleob">
          <i className="footer__icon fab fa-github" />
          Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ole-barsch/">
          <i className="footer__icon fab fa-linkedin" />
          linkedin
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/olebarsch/">
          <i className="footer__icon fab fa-instagram" />
          Instagram
        </a>
      </li>
    </ul>
    <div className="footer__about">
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
    <div className="footer__source">
      <a href="https://github.com/oleob">
        <i className="footer__icon fas fa-file-code" />
        Source code
      </a>
    </div>
  </div>
);

export default Footer;
