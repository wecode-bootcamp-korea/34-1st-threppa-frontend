import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../AppContext";
import PopupWrapper from "../../components/PopupWrapper/PopupWrapper";
import InputField from "../../components/InputField/InputField";
import "./Login.scss";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({ userId: "", userPw: "" });

  const location = useNavigate();

  const appContext = useContext(AppContext);

  const isValid = userInfo.userId && userInfo.userPw.length >= 6;

  const onSubmitForm = e => {
    e.preventDefault();

    fetch("http://10.58.3.27:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.userId,
        password: userInfo.userPw,
      }),
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(result => {
        localStorage.setItem("ACCESS_TOKEN", result.access_token);
        appContext.setToastMessage(["로그인 성공!", "😆"]);
        location("/");
      })
      .catch(err => {
        appContext.setToastMessage(["사용자 계정을 찾을 수 없습니다.", "😥"]);
      });
  };

  return (
    <PopupWrapper title="로그인">
      <form className="loginSignupForm" onSubmit={onSubmitForm}>
        {LOGIN_INPUT.map(el => (
          <InputField
            key={el.id}
            className={el.className}
            context={el.context}
            label={el.label}
            name={el.name}
            type={el.type}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        ))}

        <button
          disabled={!isValid}
          className={`submitBtn ${isValid ? " submitBtnOn" : ""}`}
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
      </form>
    </PopupWrapper>
  );
};

const LOGIN_INPUT = [
  {
    className: "filed",
    context: "전화번호, 사용자 이름 또는 이메일",
    label: "userId",
    name: "userId",
    type: "email",
  },
  {
    className: "filed",
    context: "비밀번호",
    label: "userPw",
    name: "userPw",
    type: "password",
  },
];

export default LoginForm;
