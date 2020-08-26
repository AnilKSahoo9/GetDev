import React from 'react';
import { Link } from 'react-router-dom';
function NavBarHeader() {
  const navStyle = { color: 'white' };
  return (
    <nav>
      <h3>GETDEV</h3>
      <ul className="nav-links">
        <Link to="/home" style={navStyle}>
          <li>home</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>about</li>
        </Link>
        <Link to="/contact" style={navStyle}>
          <li>contact</li>
        </Link>
        <Link to="/team" style={navStyle}>
          <li>team</li>
        </Link>
      </ul>
    </nav>
  );
}
export default NavBarHeader;
// export default NavBarHeader;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import ul_nav_header from '../ul_nav_header_/ul_nav_header'; //netninja signin
// import signup from '../signup/signup';

// const NavBarHeader = () => {
//   return (
//     <nav className="nav-wrapper grey darken-3">
//       <div className="container">
//         <Link to="/" className="brand-logo">
//           GETDEV
//         </Link>
//         <Link to="/home" component={}></Link>
//         {/* <ul_nav_header />
//         <signup /> */}
//       </div>
//     </nav>
//   );
// };
// export default NavBarHeader;
