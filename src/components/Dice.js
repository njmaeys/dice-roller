import React from 'react';

const Dice = ({ rollResult, setRollResult }) => {
  // Functions
  const setRollResultHandler = (e) => {
    // simply prevent page from full refresh
    e.preventDefault();

    setRollResult(rollResult+20);
  }

  return (
    <form>
      <div className="dice">
        <select className="dice-select-button">
          <option value="d-20">D 20</option>
          <option value="d-12">D 12</option>
        </select>
        <button className="roll-button" onClick={setRollResultHandler}>Roll</button>
      </div>
    </form>
  )
}

export default Dice;
