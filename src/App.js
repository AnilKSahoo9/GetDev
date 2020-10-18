import React from 'react';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Shared/NavBar/NavBarHeader';
import ContainerDashboard from './Pages/ContainerDashboard/ContainerDashboard';
import PublicRoute from './routes/routes';
import Dashboard from './Pages/Dashboard/Dashboard';
import Search from '../src/Pages/Search/Search';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ContainerDashboard}></Route>
          <Route path="/Home" component={ContainerDashboard}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Team" component={Team}></Route>
          <Route path="/search">
            <Search />
          </Route>
          <PublicRoute path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
