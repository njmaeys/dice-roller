import React, { useState } from 'react';

const spellLinks = require('./base-data/spells-links.json');
//const dummy = require('./base-data/dummy.json');
const BASE_URL = 'https://www.dnd5eapi.co';

function Spells() {
  // TODO a lot of this can be stripped out and moved to a helper

  // not totally smart to have this hard coded as initial but whatevs
  const [searchSpell, setSearchSpell] = useState('/api/spells/acid-splash');
  const [spellData, setSpellData] = useState(false);

  //const getSpellInfo = () => {
  const getSpellInfo = async () => {
    const res = await fetch(`${BASE_URL}${searchSpell}`)
    const data = await res.json();
    console.log(data);
    setSpellData(data);
  }

  // setting the searchSpell value to whatever is in the current dropdown selection
  const updateSearchSpell = e => {
    setSearchSpell(e.target.value);
  }

  // build the dynamic dropdown of all items
  let allSpellDataList = spellLinks.map((item) => {
    return (
      <option key={item.index} value={item.url}>{item.name}</option>
    )
  })

  const getSpell = e => {
    e.preventDefault();
    getSpellInfo();
  }

  return (
    <div>
      <h1>Spells</h1>
      <form onSubmit={getSpell} >
        <select onChange={updateSearchSpell}>
          {allSpellDataList}
        </select>
        <button>Search</button>
      </form>
      <div>
        <h2>{spellData.name}</h2>
        <p>{spellData.desc}</p>
      </div>
    </div>
  );
}

export default Spells;
