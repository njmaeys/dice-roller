import React from 'react';

const Results = ({ rollResult }) => {
  // Functions
  console.log('# REUSULTS #: '+rollResult);

  return (
    <div>
      <p>Your Roll: {rollResult}</p>
    </div>
  )
}

export default Results;
