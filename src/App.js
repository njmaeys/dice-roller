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

  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <Dice 
        rollResult={rollResult} 
        setRollResult={setRollResult}
      />
      <Results 
        rollResult={rollResult} 
      />
    </div>
  );
}

export default App;
