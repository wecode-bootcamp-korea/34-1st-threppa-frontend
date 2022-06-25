import React from "react";
import { useLocation } from "react-router";
import "./Home.scss";

const Home = () => {
  const { state } = useLocation();

  fetch("https://westagram-signup.herokuapp.com/profile", {
    method: "GET",
    headers: {
      Authorization: state,
    },
  })
    .then(res => res.json())
    .then(result => console.log(result));
  // [질문Q= 여기서 localStorage나 useContext 하면 안되는지?]

  return <div>home입니다.</div>;
};

export default Home;
