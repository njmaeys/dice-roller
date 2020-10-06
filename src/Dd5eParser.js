import React, { useState } from 'react';

import { get5eApiInfo, buildDropDownFromArray } from './utility';

// I really dont think i have "props" right but ehh 
function Dd5eParser(props) {
  // TODO could use a special parser per api endpoint actually
  // but the boilerplate here is pretty solid

  const [search, setSearch] = useState(props.initial_url);
  const [resData, setResData] = useState(false);

  const getInfo = async () => {
    let data = await get5eApiInfo(props.base_url, search);
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

  return (
    <div>
      <h1>{props.page_name}</h1>
      <form onSubmit={getItemInList} >
        <select onChange={updateSearch}>
          {allResDataList}
        </select>
        <button>Search</button>
      </form>
      <div>
        <h2>{resData.name}</h2>
        <p>{resData.desc}</p>
      </div>
    </div>
  );
}

export default Dd5eParser;
