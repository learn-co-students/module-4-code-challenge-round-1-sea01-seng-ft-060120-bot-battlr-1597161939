import React from "react";

const SortBar = (props) => {
  return (
    <div>
      <strong>Sort by: </strong>
      <label>
        <input
          type="radio"
          value="Health"
          checked={props.checked[0]}
          onChange={props.sort}
        />
        Health
      </label>
      <label>
        <input
          type="radio"
          value="Damage"
          checked={props.checked[1]}
          onChange={props.sort}
        />
        Damage
      </label>
      <label>
        <input
          type="radio"
          value="Armor"
          checked={props.checked[2]}
          onChange={props.sort}
        />
        Armor
      </label>
      <br />

      <label>
        <strong>Filter: </strong>
        <select onChange={props.search}>
          {/* <option value="All">All</option> */}
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;
