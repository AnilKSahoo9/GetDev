import React from 'react';
import { Link } from 'react-router-dom';
import NavBarUL from './NavBarUL';
import './NavBarHeader.css';
const NavBar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">
          {/* <img src="https://www.freelogodesign.org/file/app/client/thumb/65a0ec75-9a2f-4040-900a-e3268d93a0fd_1000x600-watermark.png?20201107" width="190" height="65"/> */}
        GETDEV
        </Link>
        <NavBarUL />
      </div>
    </nav>
  );
};
export default NavBar;
