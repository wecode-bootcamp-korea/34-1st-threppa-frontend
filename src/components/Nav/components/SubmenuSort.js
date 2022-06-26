import React from "react";

const SubmenuSort = ({ submenuSort }) => {
  return submenuSort.map(el => (
    <li key={el.id}>
      <a href="#">
        <i className="fas fa-hand-point-right" />
        {el.menu}
      </a>
    </li>
  ));
};

export default SubmenuSort;
