import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Field from "./Field";
import "./LoginAndSignup.scss";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({ userId: "", userPw: "" });
  const [hasFormErr, setHasFormErr] = useState(false);

  const location = useNavigate();

  const isValid = userInfo.userId && userInfo.userPw.length >= 6;

  const onSubmitForm = e => {
    e.preventDefault();

    // 아아디: mokoko2@gmail.com
    // 비번 : mokoko123#
    // 성공시 : {access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.jV_CiuD3Xbb3Jq1xKKYE4yP1riXGAwPyr_AXOYSLLIg'}
    // 에러시 : POST http://10.58.3.190:8000/users/login 401 (Unauthorized) <-토근이 없다.
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
          setHasFormErr(false);
          localStorage.setItem("ACCESS_TOKEN", result.access_token);
          location("/", { replace: true }); // home화면 간 후 뒤로가기 하면 -> 로그인 창으로 못가게 처리
        } else {
          setHasFormErr(true);
        }
      });
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
  //       console.log(result);
  //       setHasFormErr(false);
  //       location("/", { replace: true });
  //       localStorage.setItem("ACCESS_TOKEN", result.token);
  //     }
  //   });

  return (
    <form onSubmit={onSubmitForm}>
      {LOGIN_INPUT.map(el => (
        <Field
          key={el.id}
          id={el.id}
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
        type="submit"
        // [(ㅇ)질문1. 로그인 버튼 활성화여부 따지는 코드가 중복되는데 이걸 처리할 수 있는 방법 있을지?
        disabled={!isValid}
        className={isValid ? "submitBtn submitBtnOn" : "submitBtn"}
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
      {hasFormErr ? (
        <p className="hasFormErr">사용자 계정을 찾을 수 없습니다.</p>
      ) : (
        ""
      )}
    </form>
  );
};

const LOGIN_INPUT = [
  {
    id: 1,
    className: "filed",
    context: "전화번호, 사용자 이름 또는 이메일",
    label: "userId",
    name: "userId",
    type: "email",
  },
  {
    id: 2,
    className: "filed",
    context: "비밀번호",
    label: "userPw",
    name: "userPw",
    type: "password",
  },
];

export default LoginForm;
