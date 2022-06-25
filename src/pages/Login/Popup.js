import React from "react";
import "./Popup.scss";

const Popup = props => {
  // console.log(props); // {title: '로그인', children: {…}}
  return (
    <div className="loginContainer">
      <div className="backDrop" />
      <div className="loginWrapper">
        <h1 className="Loginlogo">Threppa</h1>
        <p className="loginTitle">{props.title}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
