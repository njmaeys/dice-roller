import React, { Component } from 'react';
import './App.css';

// Components
import Dice from './components/Dice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dice Roller</h1>
        <Dice />
      </div>
    );
  }
}

export default App;
