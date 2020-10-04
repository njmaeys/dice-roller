import React, { 
  useState 
} from 'react';
import './App.css';

// Components
import Dice from './components/Dice';
import Results from './components/Results';
import Nav from './Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  // state stuff
  const [rollResult, setRollResult] = useState(0);
  const [dice, setDice] = useState(20);
  const [diceModifier, setDiceModifier] = useState(0);
  const [rollPlusMod, setRollPlusMod] = useState(0);

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="div-dice-roller">
          <h1>Dice Roller</h1>
          <Dice 
            setRollResult={setRollResult}
            dice={dice}
            setDice={setDice}
            diceModifier={diceModifier}
            setDiceModifier={setDiceModifier}
            setRollPlusMod={setRollPlusMod}
          />
          <Results 
            rollResult={rollResult} 
            diceModifier={diceModifier} 
            rollPlusMod={rollPlusMod}
          />
        </div>
        <div className="div-something-else">
          <h1>More Stuffs</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
