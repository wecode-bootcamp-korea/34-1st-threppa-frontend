import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav id="Nav">
      <div id="navWrapper">
        <Link to="/">
          <h1 className="logo">Threppa</h1>
        </Link>
        <ul className="menuMain">
          <li className="menuTap">
            <a href="#" className="menuColor">
              여성
            </a>
            <div className="menuSub">
              <div className="subColumn">
                <h2>슈즈 종류</h2>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      클로그
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      샌들 / 웨지
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      플립 / 슬라이드
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      플랫 / 로퍼
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      부츠
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />털 안감 겨울
                      클로그
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      지비츠 참
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      양말
                    </a>
                  </li>
                </ul>
              </div>
              <div className="subColumn">
                <h2>여성 컬렉션</h2>
                <ul>
                  <li>클래식</li>
                  <li>타이다이</li>
                  <li>라이트라이드</li>
                  <li>바야밴드</li>
                  <li>크록밴드</li>
                </ul>
                <div className="columnUnders">
                  <h2 className="columnUnder">여성용 슈즈 모두 보기</h2>
                  <h2 className="columnUnder red">세일</h2>
                </div>
              </div>
              <div className="subColumn">
                <div className="navImg">
                  <img src="./images/NavImgs/shoes1.jpg" alt="shoes1" />
                  <p className="navImgTitle">신상품</p>
                </div>
                <div className="navImg">
                  <img src="./images/NavImgs/shoes2.jpeg" alt="shoes2" />
                  <p className="navImgTitle">베스트셀러</p>
                </div>
              </div>
              <div className="subColumn">
                <div className="navImg">
                  <img src="./images/NavImgs/shoes2.jpeg" alt="shoes2" />
                  <p className="navImgTitle">크록스 삭스</p>
                </div>
              </div>
            </div>
          </li>
          <li className="menuTap">
            <a href="#" className="menuColor">
              남성
            </a>
            <div className="menuSub">
              <div className="subColumn">
                <h2>슈즈 종류</h2>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      클로그
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      샌들
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      플립 / 슬라이드
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      로퍼 / 슬라이드
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      로퍼 / 슬립온
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />털 안감 겨울
                      클로그
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      지비츠 참
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      양말
                    </a>
                  </li>
                </ul>
              </div>
              <div className="subColumn">
                <h2>남성 컬렉션</h2>
                <ul>
                  <li>클래식</li>
                  <li>카모</li>
                  <li>아웃도어</li>
                  <li>라이트라이드</li>
                  <li>크록밴드</li>
                </ul>
                <div className="columnUnders">
                  <h2 className="columnUnder">남성용 슈즈 모두 보기</h2>
                  <h2 className="columnUnder red">세일</h2>
                </div>
              </div>
              <div className="subColumn">
                <div className="navImg">
                  <img src="./images/NavImgs/shoes1.jpg" alt="shoes1" />
                  <p className="navImgTitle">신상품</p>
                </div>
                <div className="navImg">
                  <img src="./images/NavImgs/shoes2.jpeg" alt="shoes2" />
                  <p className="navImgTitle">베스트셀러</p>
                </div>
              </div>
              <div className="subColumn">
                <div className="navImg">
                  <img src="./images/NavImgs/shoes2.jpeg" alt="shoes2" />
                  <p className="navImgTitle">크록스 삭스</p>
                </div>
              </div>
            </div>
          </li>
          <li className="menuTap">
            <a href="#" className="menuColor">
              키즈
            </a>
            <div className="menuSub">
              <div className="subColumn">
                <h2>토글러(165MM이하)</h2>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      클로그
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      샌들
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      부츠 / 레인부츠
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fas fa-hand-point-right" />
                      양말
                    </a>
                  </li>
                </ul>
              </div>
              <div className="subColumn">
                <h2>키즈 컬렉션</h2>
                <ul>
                  <li>클래식</li>
                  <li>디즈니</li>
                  <li>캐릭터</li>
                  <li>LED셀렉션</li>
                  <li>털 안감 겨울 슈즈</li>
                  <li>지브스 참</li>
                </ul>
                <div className="columnUnders kids">
                  <h2 className="columnUnder">키즈 슈즈 모두 보기</h2>
                  <h2 className="columnUnder red">여름 세일 최대 50%</h2>
                </div>
              </div>
              <div className="subColumn">
                <div className="navImg">
                  <img src="./images/NavImgs/shoes1.jpg" alt="shoes1" />
                  <p className="navImgTitle">신상품</p>
                </div>
                <div className="navImg">
                  <img src="./images/NavImgs/shoes2.jpeg" alt="shoes2" />
                  <p className="navImgTitle">베스트셀러</p>
                </div>
              </div>
              <div className="subColumn">
                <div className="navImg">
                  <img src="./images/NavImgs/shoes2.jpeg" alt="shoes2" />
                  <p className="navImgTitle">크록스 삭스</p>
                </div>
              </div>
            </div>
          </li>
          <li className="menuTap">
            <p href="#" className="menuColor">
              워크 슈즈
            </p>
            <div className="menuSub">
              <div className="subColumn">
                <div className="columnUnders workShoes">
                  <h2>워크 슈즈</h2>
                  <h2 className="columnUnder">워크 슈즈 모두 보기</h2>
                </div>
              </div>
              <div className="subColumn">
                <div className="columnUnders workShoes">
                  <h2>워크 슈즈</h2>
                  <h2 className="columnUnder">워크 슈즈 모두 보기</h2>
                </div>
              </div>

              <div className="subColumn workShoesImg">
                <div className="navImg ">
                  <img src="./images/NavImgs/shoes1.jpg" alt="shoes1" />
                </div>
                <div className="navImg">
                  <img src="./images/NavImgs/shoes2.jpeg" alt="shoes2" />
                </div>
              </div>

              <div className="subColumn workShoesImg">
                <div className="navImg workShoesImg">
                  <img
                    src="./images/NavImgs/shoes2.jpeg"
                    alt="shoes2"
                    style={{ height: "260px" }}
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="menuTap">
            <p href="#" className="menuColor">
              세일
            </p>
            <div className="menuSub">
              <div className="subColumn">
                <ul className="saleTapSub">
                  <li>여성</li>
                  <li>남성</li>
                  <li>키즈</li>
                  <li className="saleAll">세일 모두보기</li>
                </ul>
              </div>
              <div className="subColumn ">
                <h2 className="price">가격대</h2>
                <ul className="saleTapSub salePrice">
                  <li>1만원 이하</li>
                  <li>10,000 ~ 20,000</li>
                  <li>20,000 ~ 30,000</li>
                  <li>30,000 ~ 40,000</li>
                  <li>4만원 이상</li>
                </ul>
              </div>
              <div className="subColumn" />
              <div className="subColumn">
                <img
                  src="./images/NavImgs/shoes2.jpeg"
                  alt="shoes2"
                  style={{ width: "400px", marginTop: "70px" }}
                />
              </div>
            </div>
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
