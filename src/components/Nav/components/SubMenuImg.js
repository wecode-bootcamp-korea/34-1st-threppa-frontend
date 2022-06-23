import React from "react";

const SubmenuImg = ({ imgCard }) => {
  return imgCard.map((el, idx) => (
    <div className="subColumn" key={idx}>
      {el.map(obj => (
        <div className="navImg" key={obj.imgId}>
          <img src={obj.imgSrc} alt={obj.imgName} />
          <p className="navImgTitle">{obj.imgName}</p>
        </div>
      ))}
    </div>
  ));
};

export default SubmenuImg;
