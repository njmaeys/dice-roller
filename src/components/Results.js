import React from 'react';

const Results = ({ rollResult, diceModifier, rollPlusMod }) => {
  // Functions

  return (
    <div>
      <p>You rolled {rollResult} with a {diceModifier} modifier</p>
      <h2>Total Roll</h2>
      <h2>{rollPlusMod}</h2>
    </div>
  )
}

export default Results;
