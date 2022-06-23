import React from "react";
// import { useLocation } from "react-router-dom";
// import Login from "./Login";
// import Signup from "../Signup/Signup";
import "./Popup.scss";

const Popup = props => {
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
