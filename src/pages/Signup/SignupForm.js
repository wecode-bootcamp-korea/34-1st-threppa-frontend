import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import "./Signup.scss";

const SignupForm = () => {
  const [userInfo, setUserInfo] = useState({
    lastName: "",
    firstName: "",
    nickName: "",
    phoneNum: "",
    email: "",
    password: "",
  });
  const [signupFail, setSignupFail] = useState(false);

  const location = useNavigate();

  const onInput = e => {
    const { value, name } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (!pwCheck(userInfo.password)) {
      setSignupFail(true);
      return;
    }

    // // 아아디: mokoko2@gmail.com
    // // 비번 :  dnlzhem1!
    // 성공시 : {message: 'SIGHUP SUCCESS'}
    // 실패시 : {message: 'INVALID_PASSWORD'}
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
        setSignupFail(false);
        location("/login");
      });
  };

  // <실습예제>
  // useEffect(() => {
  //   fetch("https://westagram-signup.herokuapp.com/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: "wecode4@gamil.com",
  //       password: "wecode4",
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // }, []);
  return (
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
      <button type="submit" className="loginBtn  ">
        가입
      </button>
      {signupFail ? (
        <p className="loginFail" style={{ fontSize: "14px" }}>
          이 비밀번호는 추측하기 너무 쉽습니다.
          <br /> (8글자 이상, 숫자와 특수문자 1개이상 포함)
        </p>
      ) : (
        ""
      )}
    </form>
  );
};

export default SignupForm;

// [질문] - 비번,핸드폰 검증하는 함수는, 컴포넌트 밖에, 전역에 놓고 써도 되는지?
// 8 ~ 12자 영문, 숫자, 특수문자를 최소 한가지씩 조합
function pwCheck(text) {
  const regExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/;
  return regExp.test(text);
}
