import React from 'react';
import { Link } from 'react-router-dom';
function NavBarLoginSignup() {
  const navStyle = { color: 'white' };
  return (
    <nav className="nav_login_signup">
      <ul className="nav-links2">
        <Link to="/login" style={navStyle}>
          <li>login</li>
        </Link>
        <Link to="/signup" style={navStyle}>
          <li>signup</li>
        </Link>
      </ul>
    </nav>
  );
}
export default NavBarLoginSignup;
