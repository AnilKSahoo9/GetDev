import React from 'react';
import Login from '../login/login';
import Signup from '../signup/signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBarLoginSignup from '../NavBarLoginSignup/NavBarLoginSignup';
const Home = () => {
  return (
    <div>
      <div className="tagline">
        <p>welcome to the world of developers..</p>
      </div>
      <Router>
        <div className="loginsignup">
          <NavBarLoginSignup />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default Home;
