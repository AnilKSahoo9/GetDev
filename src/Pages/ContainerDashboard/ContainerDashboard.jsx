import React from "react";
import Login from "../Login/Login";
//import Tagline from "../Tagline/Tagline";
import "./ContainerDashboard.css";
const ContainerDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="dashboard_container">{/* <Tagline /> */}</div>
      <Login />
    </div>
  );
};
export default ContainerDashboard;
