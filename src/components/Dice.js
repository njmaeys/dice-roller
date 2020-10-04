import React from 'react';

const Dice = ({ rollResult, setRollResult, dice, setDice }) => {
  // Functions
  const setRollResultHandler = (e) => {
    // simply prevent page from full refresh
    e.preventDefault();

    setRollResult(Math.floor(Math.random() * (dice - 1 + 1)) + 1);
  }

  const diceHandler = (e) => {
    setDice(parseInt(e.target.value, 10));
  }

  return (
    <form>
      <div className="dice">
        <select className="dice-select-button" onChange={diceHandler}>
          <option value="20">D 20</option>
          <option value="12">D 12</option>
          <option value="102">D 10</option>
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
