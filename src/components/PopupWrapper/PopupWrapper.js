import React from "react";
import "./PopupWrapper.scss";

const PopupWrapper = props => {
  return (
    <div>
      <div className="test" />
      <div className="popupContainer">
        <div className="backDrop" />

        <div className="popupWrapper">
          <h1 className="popuplogo">Threppa</h1>
          <p className="popupTitle">{props.title}</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default PopupWrapper;
