import React from "react";

const SubmenuCol = ({ submenuCol }) => {
  const { colBottom } = submenuCol;
  const { colList } = submenuCol;
  const { colTitle } = submenuCol;

  return (
    <div className="subColumn">
      <h2>{colTitle}</h2>
      <ul>
        {colList.map(el => (
          <li key={el.id}>{el.collectList}</li>
        ))}
      </ul>
      <div className="columnUnders">
        {colBottom.map((el, idx) => (
          <h2
            key={idx}
            className={
              idx === colBottom.length - 1 ? "columnUnder red" : "columnUnder"
            }
          >
            {el}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SubmenuCol;
