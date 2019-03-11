import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="site-header">
    <NavLink to="/">
      <h1 className="site-heading">Betslip</h1>
    </NavLink>
  </header>
);

export default Header;
