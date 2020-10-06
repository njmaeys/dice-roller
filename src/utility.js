import React from 'react';

// pass in any base url and api then return the data as json
async function get5eApiInfo(base_url, api_endpoint) {
  const res = await fetch(`${base_url}${api_endpoint}`)
  const data = await res.json();
  return data;
}

// build a dropdown from an array 
function buildDropDownFromArray(dropDownArray) {
  let dropDown = dropDownArray.map((item) => {
    return (
      <option key={item.index} value={item.url}>{item.name}</option>
    )
  })

  return dropDown
}

export {
  get5eApiInfo,
  buildDropDownFromArray
};
