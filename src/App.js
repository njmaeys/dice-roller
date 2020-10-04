import React, { 
  useState 
} from 'react';
import './App.css';

// Components
import Dice from './components/Dice';
import Results from './components/Results';

function App() {
  // state stuff
  const [rollResult, setRollResult] = useState(0);
  const [dice, setDice] = useState(20);
  const [diceModifier, setDiceModifier] = useState(0);
  const [rollPlusMod, setRollPlusMod] = useState(0);

  return (
    <div className="App">
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
  );
}

export default App;
