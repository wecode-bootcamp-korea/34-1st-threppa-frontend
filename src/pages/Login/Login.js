import React from "react";
import Popup from "./Popup";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Popup title="로그인">
      <LoginForm />
    </Popup>
  );
};

export default Login;
