import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBarUL = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/team">Team</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NA
        </NavLink>
      </li>
    </ul>
  );
};
export default NavBarUL;
