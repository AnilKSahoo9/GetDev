import React from 'react';
import './App.css';
//import NavBarHeader from './components/header/nav';
import About from './components/header/about';
import Contact from './components/header/contact';
import Home from './components/header/home';
import Team from './components/header/team';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBarHeader from './components/header/NavBarHeader';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBarHeader />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/team" component={Team} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
