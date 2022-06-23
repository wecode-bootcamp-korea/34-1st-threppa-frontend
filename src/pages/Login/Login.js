import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ userId: "", userPw: "" });

  const location = useNavigate();

  const onInput = e => {
    const { value, name } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = e => {
    e.preventDefault();

    // 아아디: mokoko2@gmail.com
    // 비번 : mokoko123#
    fetch("http://10.58.3.190:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.userId,
        password: userInfo.userPw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem("ACCESS_TOKEN", result.access_token);
        // console.log(result);
        alert("wow");
        location("/signup");
      });

    // {access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.jV_CiuD3Xbb3Jq1xKKYE4yP1riXGAwPyr_AXOYSLLIg'}
    // 에러시 : POST http://10.58.3.190:8000/users/login 401 (Unauthorized) <-토근이 없다.
  };

  console.log(userInfo);

  return (
    // <div className="loginContainer">
    //   <div className="backDrop" />
    //   <div className="loginWrapper">
    //     <h1 className="Loginlogo">Threppa</h1>
    //     <p className="loginTitle">로그인</p>
    <form onSubmit={onSubmitForm}>
      <div className="filed">
        <label htmlFor="userId">
          <span
            className={
              userInfo.userId !== ""
                ? "placeHolderHasValue placeHolder"
                : "placeHolder"
            }
          >
            전화번호, 사용자 이름 또는 이메일
          </span>
          <input
            type="email"
            id="userId"
            name="userId"
            onInput={onInput}
            required
            value={userInfo.userId}
            // className="inputHasValue"
            className={userInfo.userId !== "" ? "inputHasValue" : ""}
          />
        </label>
      </div>
      <div className="filed">
        <label htmlFor="userPw">
          <span
            className={
              userInfo.userPw !== ""
                ? "placeHolderHasValue placeHolder"
                : "placeHolder"
            }
          >
            비밀번호
          </span>
          <input
            type="password"
            id="userPw"
            name="userPw"
            onInput={onInput}
            required
            value={userInfo.userPw}
            className={userInfo.userPw !== "" ? "inputHasValue" : ""}
          />
        </label>
      </div>
      <button type="submit" className="loginBtn">
        로그인
      </button>
      <ul className="loginquestion">
        <li>비밀번호를 잊어버리셨나요?</li>
        <li>
          <span className="noAccount">계정이 없으신가요?</span>

          <Link to="/signup" className="signUpBtn">
            회원가입
          </Link>
        </li>
      </ul>
    </form>
    //   </div>
    // </div>
  );
};

export default Login;
