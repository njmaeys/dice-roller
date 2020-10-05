import React from 'react';

const spellLinks = require('./base-data/spells-links.json');
//const dummy = require('./base-data/dummy.json');
const BASE_URL = 'https://www.dnd5eapi.co';

function Spells() {
  // TODO move to top lvl

  //const getSpells = async () => {
  const getSpells = () => {
    //const res = await fetch(`${BASE_URL}/spells`)
    //const data = await res.json();
    console.log('########### HERE ##########');
  }

  // build the dynamic dropdown of all items
  let spellDataList = spellLinks.map((item) => {
    return (
      <option key={item.index} value={item.url}>{item.name}</option>
    )
  })

  const getSearch = e => {
    e.preventDefault();
    getSpells();
  }

  return (
    <div>
      <h1>Spells</h1>
      <form onSubmit={getSearch} >
        <select>
          {spellDataList}
        </select>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Spells;
