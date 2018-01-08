import React from "react";

const CollapseItem = ({ removePet, name }) => {
  return (
    <li>
      {name}
      <i
        onClick={removePet}
        className="fa fa-minus-circle"
        aria-hidden="true"
      />
    </li>
  );
};

export default CollapseItem;
