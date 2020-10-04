import React from 'react';

const Results = ({ rollResult, diceModifier }) => {
  // Functions

  return (
    <div>
      <p>Your Roll with a {diceModifier} modifier</p>
      <h3>{rollResult}</h3>
    </div>
  )
}

export default Results;
