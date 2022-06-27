import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext";
import PopupWrapper from "../../components/PopupWrapper/PopupWrapper";
import InputField from "../../components/InputField/InputField";
import "../../components/PopupWrapper/LoginAndSignup.scss";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    lastName: "",
    firstName: "",
    nickName: "",
    phoneNum: "",
    email: "",
    password: "",
  });
  const [pwIsValid, setPwIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [nickNameIsValid, setNickNameIsValid] = useState(false);
  const [phoneNumIsValid, setPhoneNumIsValid] = useState(false);

  const location = useNavigate();

  const appContext = useContext(AppContext);

  const onSubmitForm = e => {
    e.preventDefault();

    if (!isPasswordValid(userInfo.password)) {
      setPwIsValid(true);
      return;
    }
    setPwIsValid(false);

    fetch("http://10.58.3.27:8000/users/signup", {
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
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(result => {
        setNickNameIsValid(false);
        setPhoneNumIsValid(false);
        setEmailIsValid(false);

        if (result.message === "USERNAME Already Exists") {
          setNickNameIsValid(true);
          return;
        }

        if (result.message === "PHONE_NUMBER Already Exists") {
          setPhoneNumIsValid(true);
          return;
        }

        if (result.message === "Email Already Exists") {
          setEmailIsValid(true);
          return;
        }

        appContext.setToastMessage(["회원가입 성공!", "😆"]);
        location("/");
      })

      .catch(err => {
        appContext.setToastMessage(["네트워크 오류가 발생했습니다.", "😥"]);
      });
  };

  return (
    <PopupWrapper title="회원가입">
      <form className="loginSignupForm" onSubmit={onSubmitForm}>
        <div className="fullName">
          {SIGNUP_INPUT.slice(0, 2).map(el => (
            <InputField
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
        </div>

        {SIGNUP_INPUT.slice(2).map(el => (
          <InputField
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

        <button type="submit" className="submitBtn submitBtnOn">
          가입
        </button>

        {nickNameIsValid ? (
          <p className="hasFormErr" style={{ fontSize: "14px" }}>
            중복된 닉네임 입니다.
          </p>
        ) : (
          ""
        )}

        {phoneNumIsValid ? (
          <p className="hasFormErr" style={{ fontSize: "14px" }}>
            중복된 핸드폰번호 입니다.
          </p>
        ) : (
          ""
        )}

        {emailIsValid ? (
          <p className="hasFormErr" style={{ fontSize: "14px" }}>
            중복된 이메일 입니다.
          </p>
        ) : (
          ""
        )}

        {pwIsValid ? (
          <p className="hasFormErr">
            이 비밀번호는 추측하기 너무 쉽습니다.
            <br /> (8글자 이상, 숫자와 특수문자 1개이상 포함)
          </p>
        ) : (
          ""
        )}
      </form>
    </PopupWrapper>
  );
};

export default Signup;

function isPasswordValid(text) {
  const regExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/;
  return regExp.test(text);
}

const SIGNUP_INPUT = [
  {
    id: 1,
    className: "filed lastName",
    context: "성",
    label: "userLastName",
    name: "lastName",
    type: "text",
  },
  {
    id: 2,
    className: "filed firstName",
    context: "이름",
    label: "userFirstName",
    name: "firstName",
    type: "text",
  },
  {
    id: 3,
    className: "filed",
    context: "닉네임",
    label: "userNickName",
    name: "nickName",
    type: "text",
  },
  {
    id: 4,
    className: "filed",
    context: "핸드폰번호",
    label: "userPhoneNum",
    name: "phoneNum",
    type: "tel",
  },
  {
    id: 5,
    className: "filed",
    context: "이메일",
    label: "userEmail",
    name: "email",
    type: "email",
  },
  {
    id: 6,
    className: "filed",
    context: "비밀번호",
    label: "userPw",
    name: "password",
    type: "password",
  },
];
