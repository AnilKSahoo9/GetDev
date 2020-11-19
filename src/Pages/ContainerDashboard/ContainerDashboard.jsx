import React from 'react';
import Login from '../Login/Login';
import Tagline from '../Tagline/Tagline';
import './ContainerDashboard.css';
const ContainerDashboard = () => {
  return (
    <div className="dashboard_container">
      <Tagline />
      <Login />
    </div>
  );
};
export default ContainerDashboard;
