import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const navigate = useNavigate();
  const [navData, setNavData] = useState([]);
  const [userName, setUserName] = useState("");
  const getUserToken = localStorage.getItem("ACCESS_TOKEN");

  // < mock data api요청 >
  useEffect(() => {
    fetch("/datas/navbarData.json")
      .then(res => res.json())
      .then(result => setNavData(result));
  }, []);

  // < 유저정보 요청 >
  useEffect(() => {
    fetch("http://10.58.4.136:8000/products/user_nav", {
      method: "GET",
      headers: {
        Authorization: getUserToken,
      },
    })
      .then(res => res.json())
      .then(result => {
        setUserName(result.full_name);
        localStorage.setItem("USER_FULLNAME", result.full_name);
      });
  }, []);

  const logOut = e => {
    e.preventDefault();
    setUserName("");
    localStorage.removeItem("USER_FULLNAME");
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="navWrapper">
        <h1 className="logo">
          <Link to="/">Threppa</Link>
        </h1>

        <ul className="menuMain">
          {navData.map(obj => (
            <li key={obj.id} className="menuTap">
              {/* <Link to={obj.genderType} className="menuColor"> */}
              <Link to="list" className="menuColor">
                {obj.genderType}
              </Link>
              <div className="menuSubWrapper">
                <div className="menuSub">
                  <div className="subColumn">
                    <h2>shoes sort</h2>
                    <ul>
                      {obj.category.map(el => (
                        <li id={el.category_id} key={el.category_id}>
                          <Link to="list">{el.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="subColumn">
                    <h2>{obj.genderType} collection</h2>
                    <ul>
                      {obj.collection.map(el => (
                        <li key={el.collection_id}>
                          <Link to="list">{el.name}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="columnUnders">
                      <h2 className="columnUnder">
                        All {obj.genderType} shoes
                      </h2>
                      <h2 className="columnUnder red">sale</h2>
                    </div>
                  </div>
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
              </div>
            </li>
          ))}

          <li className="menuTap">
            <p className="menuColor">work shoes</p>
          </li>

          <li className="menuTap">
            <p className="menuColor">sales</p>
          </li>
        </ul>

        <div className="navRight">
          <p className="hello">{userName && `안녕하세요 ${userName}님 🙂`}</p>
          <div className="navRightTap">
            <i className="fas fa-heart heart">
              {/* <p>
                <span>0</span>
              </p> */}
            </i>
          </div>
          <div className="navRightTap">
            <Link to="/cart">
              <p>
                <i className="fas fa-shopping-cart cart">
                  {/* <span className="cartNum">0</span> */}
                </i>
              </p>
            </Link>
          </div>

          <div className="navRightTap">
            <div className="barBtn">
              <i className="fas fa-bars bars" />
              <ul className="menuBar">
                <li>
                  {getUserToken ? (
                    <p onClick={logOut}>
                      <span>로그아웃</span>
                      <i className="fas fa-sign-out-alt loginAndOut" />
                    </p>
                  ) : (
                    <Link to="/login">
                      <span>로그인</span>
                      <i className="fas fa-sign-in-alt" />
                    </Link>
                  )}
                </li>

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
