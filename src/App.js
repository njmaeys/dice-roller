import React from 'react';
import './App.css';

import Nav from './Nav';
import Home from './Home';
import Spells from './Spells';
import Items from './Items';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/spells" component={Spells} />
          <Route path="/items" component={Items} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
