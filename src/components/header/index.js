import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="logo">
        <h1 className="logo__text">
         <Link to="/">GIZI
         </Link>
        </h1>
      </div>
      <ul className="header__top-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul className="header__top-login">
        <li><Link to="/login">Sign in</Link></li>
        <li><Link to="/registration">Sign up</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
