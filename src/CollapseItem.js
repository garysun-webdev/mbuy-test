import React from "react";

const CollapseItem = ({ removePet, name }) => {
  return (
    <li onClick={removePet}>
      <label>{name}</label>
    </li>
  );
};

export default CollapseItem;
