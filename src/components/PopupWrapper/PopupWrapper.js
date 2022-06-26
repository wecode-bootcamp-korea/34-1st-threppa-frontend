import React from "react";
import "./PopupWrapper.scss";

const PopupWrapper = props => {
  return (
    <div className="PopupContainer">
      <div className="backDrop" />
      <div className="PopupWrapper">
        <h1 className="Popuplogo">Threppa</h1>
        <p className="PopupTitle">{props.title}</p>
        {props.children}
      </div>
    </div>
  );
};

export default PopupWrapper;
