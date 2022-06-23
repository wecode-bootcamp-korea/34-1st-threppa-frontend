import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signup/Signup.scss";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    lastName: "",
    firstName: "",
    nickName: "",
    phoneNum: "",
    email: "",
    password: "",
  });
  const location = useNavigate();
  // const context = useContext(contextValue);

  const onInput = e => {
    const { value, name } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = e => {
    e.preventDefault();
    // console.log(userInfo);

    // 아아디: mokoko2@gmail.com
    // 비번 :  dnlzhem1!
    fetch("http://10.58.3.190:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        username: userInfo.nickName,
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        phone_number: userInfo.phoneNum,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        alert("signup wow");
      });
  };
  // 성공시 : {message: 'SIGHUP SUCCESS'}
  // 실패시 : {message: 'INVALID_PASSWORD'}

  console.log(userInfo);

  return (
    <div className="loginContainer">
      <div className="loginWrapper signupWrapper">
        <h1 className="Loginlogo">Threppa</h1>
        <p className="loginTitle">회원가입</p>
        <form onSubmit={onSubmitForm}>
          <div className="fullName">
            <div className="filed lastName">
              <label htmlFor="userLastName">
                <span
                  className={
                    userInfo.lastName !== ""
                      ? "placeHolderHasValue placeHolder"
                      : "placeHolder"
                  }
                >
                  성
                </span>
                <input
                  type="text"
                  id="userLastName"
                  name="lastName"
                  onInput={onInput}
                  required
                  value={userInfo.lastName}
                  className={userInfo.lastName !== "" ? "inputHasValue" : ""}
                />
              </label>
            </div>
            <div className="filed firstName">
              <label htmlFor="userFirstName">
                <span
                  className={
                    userInfo.firstName !== ""
                      ? "placeHolderHasValue placeHolder"
                      : "placeHolder"
                  }
                >
                  이름
                </span>
                <input
                  type="text"
                  id="userFirstName"
                  name="firstName"
                  onInput={onInput}
                  required
                  value={userInfo.firstName}
                  className={userInfo.firstName !== "" ? "inputHasValue" : ""}
                />
              </label>
            </div>
          </div>
          <div className="filed">
            <label htmlFor="userNickName">
              <span
                className={
                  userInfo.nickName !== ""
                    ? "placeHolderHasValue placeHolder"
                    : "placeHolder"
                }
              >
                닉네임
              </span>
              <input
                type="text"
                id="userNickName"
                name="nickName"
                onInput={onInput}
                required
                value={userInfo.nickName}
                className={userInfo.nickName !== "" ? "inputHasValue" : ""}
              />
            </label>
          </div>
          <div className="filed">
            <label htmlFor="userPhoneNum">
              <span
                className={
                  userInfo.phoneNum !== ""
                    ? "placeHolderHasValue placeHolder"
                    : "placeHolder"
                }
              >
                핸드폰번호
              </span>
              <input
                type="tel"
                id="userPhoneNum"
                name="phoneNum"
                onInput={onInput}
                required
                value={userInfo.phoneNum}
                className={userInfo.phoneNum !== "" ? "inputHasValue" : ""}
              />
            </label>
          </div>

          <div className="filed">
            <label htmlFor="userEmail">
              <span
                className={
                  userInfo.email !== ""
                    ? "placeHolderHasValue placeHolder"
                    : "placeHolder"
                }
              >
                이메일
              </span>
              <input
                type="email"
                id="userEmail"
                name="email"
                onInput={onInput}
                // required
                value={userInfo.email}
                className={userInfo.email !== "" ? "inputHasValue" : ""}
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
                name="password"
                onInput={onInput}
                required
                value={userInfo.password}
                className={userInfo.password !== "" ? "inputHasValue" : ""}
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
