import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({ userId: "", userPw: "" });
  const [loginFail, setLoginFail] = useState(false);

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
        if (result.access_token) {
          setLoginFail(false);
          // localStorage.setItem("ACCESS_TOKEN", result.access_token); // 방법1
          location("/", { state: result.access_token }); // 방법2 <-home? 질문Q
        } else {
          setLoginFail(true);
        }
      });

    // {access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.jV_CiuD3Xbb3Jq1xKKYE4yP1riXGAwPyr_AXOYSLLIg'}
    // 에러시 : POST http://10.58.3.190:8000/users/login 401 (Unauthorized) <-토근이 없다.
  };

  // <연습서버>
  // fetch("https://westagram-signup.herokuapp.com/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     id: "wecode4@gamil.com",
  //     password: "wecode4",
  //   }),
  // })
  //   .then(res => res.json())
  //   .then(result => {
  //     if (result.message === "login success") {
  //       setLoginFail(false);
  //       location("/", { state: result.token });
  //       setLoginFail(true);
  //     }
  //   });

  return (
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
      <button
        type="submit"
        // [질문1. 로그인 버튼 활성화여부 따지는 코드가 중복되는데 이걸 처리할 수 있는 방법 있을지?
        disabled={!(userInfo.userId && userInfo.userPw.length >= 6)}
        className={
          userInfo.userId && userInfo.userPw.length >= 6
            ? "loginBtn loginBtnOn"
            : "loginBtn"
        }
      >
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
      {loginFail ? (
        <p className="loginFail">사용자 계정을 찾을 수 없습니다.</p>
      ) : null}
    </form>
  );
};

export default LoginForm;
