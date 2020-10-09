import React, { useState } from 'react';

import Spells from './spells';
import { 
  get5eApiInfo, 
  buildDropDownFromArray 
} from './utility';

// I really dont think i have "props" right but ehh 
function Dd5eParser(props) {

  const [search, setSearch] = useState(props.initial_url);
  const [resData, setResData] = useState(false);

  const getInfo = async () => {
    let data = await get5eApiInfo(props.base_url, search);
    //console.log(data);
    setResData(data);
  }

  // setting the search value to whatever is in the current dropdown selection
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  let allResDataList = buildDropDownFromArray(props.initial_json);

  const getItemInList = e => {
    e.preventDefault();
    getInfo();
  }

  const loadProperParser = (apiData) => {
    switch(props.page_name) {
      case 'Spells':
        return Spells(apiData);
      default:
        return "foo";
    }
  }

  return (
    <div>
      <h1>{props.page_name}</h1>
      <form onSubmit={getItemInList} >
        <select className="dd5e-dropdown" onChange={updateSearch}>
          {allResDataList}
        </select>
        <button className="dd5e-search">Search</button>
      </form>
      {loadProperParser(resData)}
    </div>
  );
}

export default Dd5eParser;
