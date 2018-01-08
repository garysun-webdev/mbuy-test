import React from "react";
import PropTypes from "prop-types";

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

CollapseItem.propTypes = {
  removePet: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default CollapseItem;
