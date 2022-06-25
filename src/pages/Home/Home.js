import React from "react";
import { useLocation } from "react-router";
import "./Home.scss";

const Home = () => {
  fetch("https://westagram-signup.herokuapp.com/profile", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("ACCESS_TOKEN"),
    },
  })
    .then(res => res.json())
    .then(result => console.log(result));
  // [(o)질문Q= 여기서 localStorage하면 된다.
  // [리팩토링] 로그인시 나오는 token도 local에 저장해야 함.
  // 이 api호출은 네브바에서 호출하면 됨

  return <div>home입니다.</div>;
};

export default Home;
