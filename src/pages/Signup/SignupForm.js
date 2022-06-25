import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../Login/Field";
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
  const [pwIsValid, setPwIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const location = useNavigate();

  const onSubmitForm = e => {
    e.preventDefault();

    if (!pwCheck(userInfo.password)) {
      setPwIsValid(true);
      return;
    }

    // // 아아디: mokoko2@gmail.com
    // // 비번 :  dnlzhem1!
    // // 성공시 : {message: 'SIGHUP SUCCESS'}
    // // 실패시 : {message: 'INVALID_PASSWORD'} , status = 401
    // // email 중복시 :  {message: "Email Already Exists"}, status = 400

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
        if (result.message === "Email Already Exists") {
          setEmailIsValid(true);
          return;
        }
        setPwIsValid(false);
        setEmailIsValid(false);
        location("/");
      });
  };

  // <실습예제>
  // useEffect(() => {
  //   fetch("https://westagram-signup.herokuapp.com/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: "wecode4@gamil.com",
  //       password: "we4",
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       // console.log(result);
  //       if (result.message === "user already exist") {
  //         setEmailIsValid(true);
  //         return;
  //       }
  //       setPwIsValid(false);
  //       setEmailIsValid(false);
  //       location("/");
  //     });
  // }, []);

  return (
    <form onSubmit={onSubmitForm}>
      {/*[질문] - map을 돌면서 Field컴포넌트 실행해야 하는데, fullName떄문에 두번돌림. 이게 맞는지? */}
      <div className="fullName">
        {SIGNUP_INPUT.slice(0, 2).map(el => (
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
      </div>

      {SIGNUP_INPUT.slice(2).map(el => (
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
      <button type="submit" className="submitBtn  ">
        가입
      </button>
      {pwIsValid ? (
        <p className="hasFormErr" style={{ fontSize: "14px" }}>
          이 비밀번호는 추측하기 너무 쉽습니다.
          <br /> (8글자 이상, 숫자와 특수문자 1개이상 포함)
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
    </form>
  );
};

export default SignupForm;

// (ㅇ)[질문] - 비번,핸드폰 검증하는 함수는, 컴포넌트 밖에, 전역에 놓고 써도 되는지?
// 8 ~ 12자 영문, 숫자, 특수문자를 최소 한가지씩 조합
function pwCheck(text) {
  const regExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/;
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
