import React from "react";
import Signup from "./Signup";
import Popup from "../Login/Popup";

const Signup2 = () => {
  return (
    <Popup title="회원가입">
      <Signup />
    </Popup>
  );
};

export default Signup2;
