import React from 'react';
import { Link } from 'react-router-dom';
import NavBarUL from './NavBarUL';
import './NavBarHeader.css';
const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          GETDEV
        </Link>
        <NavBarUL />
      </div>
    </nav>
  );
};
export default NavBar;
