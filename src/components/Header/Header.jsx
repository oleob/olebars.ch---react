import React from 'react';
import { withRouter } from 'react-router-dom';

import './header.scss';

const Header = ({ location, history }) => (
  <div className="header">
    {location.pathname === '/' ? (
      <i onClick={() => alert("This button does nothing right now, but maybe in the future? ¯\\_(ツ)_/¯")} className="header__icon fas fa-bars" />
    ) : (
      <i onClick={history.goBack} className="header__icon fas fa-arrow-left" />
    )}
  </div>
);

export default withRouter(Header);
