import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SUBMENU_DATA from "./NavData";
import SubmenuSort from "./components/SubmenuSort";
import SubmenuCol from "./components/SubMenuCol";
import SubmenuImg from "./components/SubMenuImg";
import "./Nav.scss";

const Nav = () => {
  // localStorage.setItem("ACCESS_TOKEN", result.access_token);
  const getUserData = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    fetch("https://westagram-signup.herokuapp.com/profile", {
      method: "GET",
      headers: {
        Authorization: getUserData,
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result); // 나온 user 정보로, 안녕하세요 ㅇㅇ님 띄우기
        localStorage.setItem("userData", result);
      });
  }, [getUserData]);

  return (
    <nav className="nav">
      <div className="navWrapper">
        <Link to="/">
          <h1 className="logo">Threppa</h1>
        </Link>
        <ul className="menuMain">
          {/* [1 여성] */}
          <li className="menuTap">
            <a href="#" className="menuColor">
              여성
            </a>

            <div className="menuSub">
              <div className="subColumn">
                <h2>슈즈 종류</h2>
                <ul>
                  <SubmenuSort submenuSort={SUBMENU_DATA.여성.sort} />
                </ul>
              </div>
              <SubmenuCol submenuCol={SUBMENU_DATA.여성.collection} />
              <SubmenuImg imgCard={SUBMENU_DATA.여성.imgCard} />
            </div>
          </li>
          {/* [2 남성] */}
          <li className="menuTap">
            <a href="#" className="menuColor">
              남성
            </a>
            <div className="menuSub">
              <div className="subColumn">
                <h2>슈즈 종류</h2>
                <ul>
                  <SubmenuSort submenuSort={SUBMENU_DATA.남성.sort} />
                </ul>
              </div>
              <SubmenuCol submenuCol={SUBMENU_DATA.남성.collection} />
              <SubmenuImg imgCard={SUBMENU_DATA.남성.imgCard} />
            </div>
          </li>
          {/* [3 키즈] */}
          <li className="menuTap">
            <a href="#" className="menuColor">
              키즈
            </a>
            <div className="menuSub">
              <div className="subColumn">
                <h2>토글러(165MM이하)</h2>
                <ul>
                  <SubmenuSort submenuSort={SUBMENU_DATA.키즈.sort} />
                </ul>
              </div>
              <SubmenuCol submenuCol={SUBMENU_DATA.키즈.collection} />
              <SubmenuImg imgCard={SUBMENU_DATA.키즈.imgCard} />
            </div>
          </li>

          {/* [4 워크슈즈] */}
          <li className="menuTap">
            <p href="#" className="menuColor">
              워크 슈즈
            </p>
          </li>

          {/* [5 세일] */}
          <li className="menuTap">
            <p href="#" className="menuColor">
              세일
            </p>
          </li>
        </ul>

        <div className="navRight">
          <div className="navRightTap">
            <i className="fas fa-heart heart">
              <p href="#">
                <span>0</span>
              </p>
            </i>
          </div>
          <div className="navRightTap">
            <p href="#">
              <i className="fas fa-shopping-cart cart">
                <span className="cartNum">0</span>
              </i>
            </p>
          </div>

          {/* 3단 메뉴 */}
          <div className="navRightTap">
            <div className="barBtn">
              <i className="fas fa-bars bars" />
              <ul className="menuBar">
                <Link to="/login">
                  <li>로그인 </li>
                </Link>
                <Link to="/signup">
                  <li>회원가입</li>
                </Link>
                <li>주문내역조회</li>
                <li>반품</li>
                <li>고객 서비스</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
