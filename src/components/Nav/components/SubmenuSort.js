import React from "react";
import { Link } from "react-router-dom";

const SubmenuSort = ({ id, submenuSort }) => {
  return submenuSort.map(el => (
    <li key={id}>
      <Link to="/">
        <i className="fas fa-hand-point-right" />
        {submenuSort}
      </Link>
    </li>
  ));
};

export default SubmenuSort;
