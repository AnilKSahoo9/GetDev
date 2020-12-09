import React from "react";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBarHeader";
import ContainerDashboard from "./Pages/ContainerDashboard/ContainerDashboard";
//import PublicRoute from "./routes/routes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Search from "./Pages/Search/Search";
import UserProfile from "./Pages/UserProfile/UserProfile";
import SignUp from "./Pages/Signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ContainerDashboard}></Route>
          <Route path="/home" component={ContainerDashboard}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/team" component={Team}></Route>
          <Route path="/userprofile" component={UserProfile}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/search">
            <Search />
          </Route>
          {/* <PublicRoute path="/" component={Dashboard} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
