import React from "react";
import { useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
  const [styleState, setStyleState] = useState(false);
  const [sizeState, setSizeState] = useState(false);
  const [colorState, setColorState] = useState(false);

  const [modalState, setModalState] = useState(false);
  const styleMenuOpen = () => {
    {
      styleState ? setStyleState(false) : setStyleState(true);
    }
  };
  const sizeMenuOpen = () => {
    {
      sizeState ? setSizeState(false) : setSizeState(true);
    }
  };
  const colorMenuOpen = () => {
    {
      colorState ? setColorState(false) : setColorState(true);
    }
  };

  const onClickSortModal = () => {
    {
      modalState ? setModalState(false) : setModalState(true);
    }
  };
  const SortModal = () => {
    return (
      <div className="modal" style={{ display: modalState ? "block" : "none" }}>
        <ul>
          <li>베스트 매치</li>
          <li>베스트 셀러</li>
          <li>높은 평점</li>
          <li>추천순</li>
          <li>최저가 - 최고가</li>
          <li>최고가 - 최저가</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="wrap">
      <p className="listTitle">크록스 여성 슈즈</p>
      <div className="listNav">
        <div className="listNavSmallLeft">
          <i className="fas fa-home leftSmallBtn"></i>
          <div className="leftSmallCategory">
            <a>여성 X</a>
          </div>
        </div>
        <div className="listNavSmallRight">
          <a className="showAll" href="">
            모두보기
          </a>
          <span>127개의 상품</span>
        </div>
      </div>

      <div className="sectionWrap">
        <section className="leftSection">
          <div className="reccomendProduct">
            <p className="recommendProductTitle">추천상품</p>
            <ul>
              <li>신상품</li>
              <li>베스트셀러</li>
              <li>5만원 이하 여성 슈즈</li>
              <li>Classic Crocs</li>
              <li>모두 보기</li>
            </ul>
          </div>
          <div className="filteringProduct">
            <p className="filteringProductTitle">제품 필터링</p>
            <ul>
              <li className="style">
                스타일
                <i
                  className="fas fa-plus stylePlus"
                  onClick={styleMenuOpen}
                ></i>
                <ul
                  className="styleUl"
                  style={{
                    display: styleState ? "block" : "none",
                  }}
                >
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      클로그
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      샌들
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      슬라이드
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      의류
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      플립
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      힐과 웨지
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>털 안감
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      플랫
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      단화 / 슬립온
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      스니커즈
                    </div>
                    <input type="checkbox"></input>
                  </li>
                  <li>
                    <div>
                      <i className="fas fa-shoe-prints"></i>
                      슬리퍼
                    </div>
                    <input type="checkbox"></input>
                  </li>
                </ul>
              </li>
              <li className="size">
                사이즈
                <i className="fas fa-plus sizePlus" onClick={sizeMenuOpen}></i>
                <ul
                  className="sizeUl"
                  style={{
                    display: sizeState ? "grid" : "none",
                  }}
                >
                  <li>210</li>
                  <li>220</li>
                  <li>230</li>
                  <li>240</li>
                  <li>250</li>
                  <li>260</li>
                  <li>265</li>
                  <li>270</li>
                  <li>280</li>
                  <li>290</li>
                </ul>
              </li>
              <li className="color">
                색상
                <i
                  className="fas fa-plus colorPlus"
                  onClick={colorMenuOpen}
                ></i>
                <ul
                  className="colorUl"
                  style={{
                    display: colorState ? "grid" : "none",
                  }}
                >
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div className="colorCircle"></div>
                    <span>블랙</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="adImg"
              alt="광고이미지"
              src="https://www.street.co.kr/wp-content/uploads/2020/07/street.co_.kr_2020_07_casestudy-crocs-classic-clog_1-1.jpg"
            ></img>
          </div>
        </section>

        <section className="rightSection">
          <div className="dropdownMenu">
            <button className="sortBtn" onClick={onClickSortModal}>
              베스트매치
              <i className="fas fa-angle-down arrowBtn"></i>
            </button>
            <SortModal></SortModal>
          </div>
          <div>
            <ul className="productInfoList">
              <li>
                <div className="productInfo">
                  <div className="productInfoTopNav">
                    <i className="far fa-heart"></i>
                    <span>세일정보</span>
                  </div>
                  <div className="productInfoDetail">
                    <div>
                      <img
                        alt="shoes"
                        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                        className="productImg"
                      ></img>
                    </div>
                    <p className="productName">클래식 코지 샌들</p>
                    <p className="productRate">⭑⭑⭑⭑⭑ 5</p>
                    <div className="productPrice">₩69,000</div>
                    <div className="productColorNav">
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="productInfo">
                  <div className="productInfoTopNav">
                    <i className="far fa-heart"></i>
                    <span>세일정보</span>
                  </div>
                  <div className="productInfoDetail">
                    <div>
                      <img
                        alt="shoes"
                        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                        className="productImg"
                      ></img>
                    </div>
                    <p className="productName">클래식 코지 샌들</p>
                    <p className="productRate">⭑⭑⭑⭑⭑ 5</p>
                    <div className="productPrice">₩69,000</div>
                    <div className="productColorNav">
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="productInfo">
                  <div className="productInfoTopNav">
                    <i className="far fa-heart"></i>
                    <span>세일정보</span>
                  </div>
                  <div className="productInfoDetail">
                    <div>
                      <img
                        alt="shoes"
                        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                        className="productImg"
                      ></img>
                    </div>
                    <p className="productName">클래식 코지 샌들</p>
                    <p className="productRate">⭑⭑⭑⭑⭑ 5</p>
                    <div className="productPrice">₩69,000</div>
                    <div className="productColorNav">
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="productInfo">
                  <div className="productInfoTopNav">
                    <i className="far fa-heart"></i>
                    <span>세일정보</span>
                  </div>
                  <div className="productInfoDetail">
                    <div>
                      <img
                        alt="shoes"
                        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                        className="productImg"
                      ></img>
                    </div>
                    <p className="productName">클래식 코지 샌들</p>
                    <p className="productRate">⭑⭑⭑⭑⭑ 5</p>
                    <div className="productPrice">₩69,000</div>
                    <div className="productColorNav">
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="productInfo">
                  <div className="productInfoTopNav">
                    <i className="far fa-heart"></i>
                    <span>세일정보</span>
                  </div>
                  <div className="productInfoDetail">
                    <div>
                      <img
                        alt="shoes"
                        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                        className="productImg"
                      ></img>
                    </div>
                    <p className="productName">클래식 코지 샌들</p>
                    <p className="productRate">⭑⭑⭑⭑⭑ 5</p>
                    <div className="productPrice">₩69,000</div>
                    <div className="productColorNav">
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="productInfo">
                  <div className="productInfoTopNav">
                    <i className="far fa-heart"></i>
                    <span>세일정보</span>
                  </div>
                  <div className="productInfoDetail">
                    <div>
                      <img
                        alt="shoes"
                        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
                        className="productImg"
                      ></img>
                    </div>
                    <p className="productName">클래식 코지 샌들</p>
                    <p className="productRate">⭑⭑⭑⭑⭑ 5</p>
                    <div className="productPrice">₩69,000</div>
                    <div className="productColorNav">
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                      <div className="colorCircle"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="moreProduct">
            <div className="showMoreBtn">
              <a>더보기</a>
            </div>
            <div className="showAllBtn">
              <a>모두보기(127)</a>
            </div>
          </div>
          <p className="categoryComment">
            스타일리시하면서도 편안한 크록스 여성 슈즈.(각각 카테고리에 맞는
            서술)
          </p>
        </section>
      </div>
    </div>
  );
};
export default ProductList;
