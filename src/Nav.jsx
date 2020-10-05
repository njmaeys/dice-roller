import React from 'react';
import './App.css';
import {
  Link
} from 'react-router-dom';

import logo from './images/d20_logo.png';

function Nav() {

  return (
    <div>
      <nav>
        <Link to="/">
          <img className="logo-image" src={logo} alt="Logo" />
        </Link>
        <ul className="nav-links">
          <Link to="/spells">
            <li>Spells</li>
          </Link>
          <Link to="/items">
            <li>Items</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
