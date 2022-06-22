import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({ userId: "", userPw: "" });
  const location = useNavigate();
  // const context = useContext(contextValue);

  const onInput = e => {
    const { value, name } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = e => {
    e.preventDefault();

    // 아아디: mokoko2@gmail.com
    // 비번 : mokoko123#
    fetch("http://10.58.0.144:8000/users/login", {
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
        location("/");
      });
    // 다시 서버에 보낸다
    // {access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.jV_CiuD3Xbb3Jq1xKKYE4yP1riXGAwPyr_AXOYSLLIg'}
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper signupWrapper">
        <h1 className="Loginlogo">Threppa</h1>
        <p className="loginTitle">회원가입</p>
        <form onSubmit={onSubmitForm}>
          <div className="fullName">
            <div className="filed lastName">
              <label htmlFor="userId">
                <span
                  className={
                    userInfo.userId !== ""
                      ? "placeHolderHasValue placeHolder"
                      : "placeHolder"
                  }
                >
                  성
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
            <div className="filed firstName">
              <label htmlFor="userId">
                <span
                  className={
                    userInfo.userId !== ""
                      ? "placeHolderHasValue placeHolder"
                      : "placeHolder"
                  }
                >
                  이름
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
          </div>
          <div className="filed">
            <label htmlFor="userId">
              <span
                className={
                  userInfo.userId !== ""
                    ? "placeHolderHasValue placeHolder"
                    : "placeHolder"
                }
              >
                닉네임
              </span>
              <input
                type="tel"
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
            <label htmlFor="userId">
              <span
                className={
                  userInfo.userId !== ""
                    ? "placeHolderHasValue placeHolder"
                    : "placeHolder"
                }
              >
                핸드폰번호
              </span>
              <input
                type="tel"
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
            <label htmlFor="userId">
              <span
                className={
                  userInfo.userId !== ""
                    ? "placeHolderHasValue placeHolder"
                    : "placeHolder"
                }
              >
                이메일
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
          <button type="submit" className="loginBtn">
            가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
