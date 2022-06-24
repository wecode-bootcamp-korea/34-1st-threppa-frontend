import React from "react";
import SignupForm from "./SignupForm";
import Popup from "../Login/Popup";

const Signup = () => {
  return (
    <Popup title="회원가입">
      <SignupForm />
    </Popup>
  );
};

export default Signup;
