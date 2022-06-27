import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [navData, setNavData] = useState([]);
  const [userName, setUserName] = useState("");

  const getUserToken = localStorage.getItem("ACCESS_TOKEN");

  // <네브바 데이터 요청 - mock data 이용할 것임 >
  useEffect(() => {
    fetch("http://10.58.3.27:8000/products/nav")
      .then(res => res.json())
      .then(result => {
        console.log(result); // 경로 달라졌는지 확인!
      });
  }, []);

  // < mock data api요청 >
  useEffect(() => {
    fetch("datas/navbarData.json")
      .then(res => res.json())
      .then(result => setNavData(result));
  }, []);

  // < 유저정보 요청 >
  useEffect(() => {
    fetch("http://10.58.3.27:8000/products/user_nav", {
      method: "GET",
      headers: {
        Authorization: getUserToken,
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result); // 경로 달라졌는지 확인!
        setUserName(result.full_name);
        localStorage.setItem("USER_FULLNAME", result.full_name); // { full_name: "전지현" };
      });
  }, []);

  return (
    <nav className="nav">
      <div className="navWrapper">
        <h1 className="logo">
          <Link to="/">Threppa </Link>
        </h1>

        <ul className="menuMain">
          {navData.map(obj => (
            <li key={obj.id} className="menuTap">
              <Link to={obj.genderType} className="menuColor">
                {obj.genderType}
              </Link>
              <div className="menuSub">
                <div className="subColumn">
                  <h2>shoes sort</h2>
                  <ul>
                    {obj.category.map(el => (
                      <li id={el.category_id} key={el.category_id}>
                        <Link to={`${obj.genderType}/${el.name}`}>
                          {el.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="subColumn">
                  <h2>{obj.genderType} collection</h2>
                  <ul>
                    {obj.collection.map(el => (
                      <li key={el.collection_id}>
                        <Link to={`${obj.genderType}/${el.name}`}>
                          {el.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="columnUnders">
                    <h2 className="columnUnder">All {obj.genderType} shoes</h2>
                    <h2 className="columnUnder red">sale</h2>
                  </div>
                </div>
                {/* 이미지 렌더 */}
                {obj.imgcard.map((el, idx) => {
                  return (
                    <div className="subColumn" key={idx}>
                      {el.map(obj => (
                        <div className="navImg" key={obj.imgSrc_id}>
                          <img src={obj.url} alt={obj.name} />
                          <p className="navImgTitle">{obj.name}</p>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </li>
          ))}

          {/* [4 워크슈즈] */}
          <li className="menuTap">
            <p href="#" className="menuColor">
              work shoes
            </p>
          </li>
          {/* [5 세일] */}
          <li className="menuTap">
            <p href="#" className="menuColor">
              sales
            </p>
          </li>
        </ul>

        <div className="navRight">
          <p className="hello">
            {userName ? `안녕하세요 ${userName}님 🙂` : ""}
          </p>
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
