import React from 'react';
import './App.css';

import Nav from './Nav';
import Home from './Home';
import Dd5eParser from './Dd5eParser';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const DD5E_BASE_URL = 'https://www.dnd5eapi.co';

// Base data - allows the further parsing of the api
const SPELL_LINKS = require('./base-data/spells-links.json');
const MONSTER_LINKS = require('./base-data/monsters-links.json');

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/spells" 
            render={() => <Dd5eParser 
              page_name='Spells'
              base_url={DD5E_BASE_URL} 
              initial_url='/api/spells/acid-arrow'
              initial_json={SPELL_LINKS}
            />}
          />
          <Route path="/monsters" 
            render={() => <Dd5eParser 
              page_name='Monsters'
              base_url={DD5E_BASE_URL} 
              initial_url='/api/monsters/aboleth'
              initial_json={MONSTER_LINKS}
            />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
