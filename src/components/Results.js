import React from 'react';

const Results = ({ rollResult, diceModifier, rollPlusMod }) => {
  // Functions

  return (
    <div>
      <p>You rolled <b className="roll-result">{rollResult}</b> with a <b className="dice-modifier-result">{diceModifier}</b> modifier</p>
      <div className="total-roll-div">
        <h2>Total Roll</h2>
        <h1 className="roll-plus-mod">{rollPlusMod}</h1>
      </div>
    </div>
  )
}

export default Results;
