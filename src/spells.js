import React from 'react';

function Spells(resData) {

  function parseArrayForDesc(descArray) {
    if (descArray) {
      let desc = descArray.map((item, index) => {
      return (
          <p key={index}>{item}</p>
        )
      })
      return desc
    } else {
      let desc = <p></p>
      return desc
    }
  }

  const updateDamageDealt = (dmgType) => {
    // I'm sure this is a horibly hacky way to do it but f it
    if (dmgType) {
      if (dmgType.damage_at_slot_level) {
        return dmgType.damage_at_slot_level[Object.keys(dmgType.damage_at_slot_level)[0]];
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  const updateDamageType = (dmgType) => {
    // I'm sure this is a horibly hacky way to do it but f it
    if (dmgType) {
      return dmgType.damage_type.name;
    } else {
      return '';
    }
  }

  return (
    <div className="dd5e-result-div">
      <hr className="solid-divider"/>
      <h2>{resData.name}</h2>
      <div className="spell-basic-info-div">
        <h3>Range: {resData.range}</h3>
        <h3>Base Damage: {updateDamageDealt(resData.damage)}</h3>
        <h3>Damage Type: {updateDamageType(resData.damage)}</h3>
      </div>
      <ul className="dd5e-result-desc">{parseArrayForDesc(resData.desc)}</ul>
    </div>
  );
}

export default Spells;
