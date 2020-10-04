import React, {DropdownButton, Dropdown} from 'react';

const Dice = () => {
  return (
    <form>
      <input 
        value="FOO BAR"
      />
      <div className="dice">
        <select className="dice-select-button">
          <option value="d-20">D 20</option>
          <option value="d-12">D 12</option>
        </select>
      </div>
    </form>
  )
}

export default Dice;
