import React from 'react';

const Dice = ({ setRollResult, dice, setDice, diceModifier, setDiceModifier, setRollPlusMod }) => {
  // Functions
  const setRollResultHandler = (e) => {
    // simply prevent page from full refresh
    e.preventDefault();

    let baseRoll = Math.floor(Math.random() * (dice - 1 + 1)) + 1;
    //if (diceModifier === '') {
    //  setDiceModifier(0);
    //  setRollResult(baseRoll + 0);
    //} else {
    //  setRollResult(baseRoll + parseInt(diceModifier, 10));
    //}
    if (diceModifier === '') {
      setDiceModifier(0);
      setRollResult(baseRoll);
      setRollPlusMod(baseRoll + 0);
    } else {
      setRollResult(baseRoll);
      setRollPlusMod(baseRoll + parseInt(diceModifier, 10));
    }
  }

  const diceHandler = (e) => {
    setDice(parseInt(e.target.value, 10));
  }

  const modifierHandler = (e) => {
    setDiceModifier(e.target.value);
  }

  return (
    <form>
      <div className="dice">
        <div className="modifier-input">
          <label className="modifier-label">Modifier</label>
          <input type="text" value={diceModifier} onChange={modifierHandler} />
        </div>
        <select className="dice-select-button" onChange={diceHandler}>
          <option value="20">D 20</option>
          <option value="12">D 12</option>
          <option value="10">D 10</option>
          <option value="8">D 8</option>
          <option value="6">D 6</option>
          <option value="4">D 4</option>
        </select>
        <button className="roll-button" onClick={setRollResultHandler}>Roll</button>
      </div>
    </form>
  )
}

export default Dice;
