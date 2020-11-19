import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import image from "../../assets/Mahi.jpg";
const NavBarUL = () => {
  // const history = useHistory();
  // let path =
  //   history.location === "/userprofile" || history.location === "/dashboard";
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
        <img
          style={{ borderRadius: "50%", width: "40px", margin: "10px" }}
          src={image}
          alt="Ankur"
        />
      </li>
    </ul>
  );
};
export default NavBarUL;
