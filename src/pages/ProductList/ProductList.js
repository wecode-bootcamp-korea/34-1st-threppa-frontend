import React from "react";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <div className="wrap">
      <p className="listTitle">크록스 여성 슈즈</p>
      <div className="listNav">
        <div className="listNavSmallLeft">
          <i class="fas fa-home leftSmallBtn"></i>
          <div>
            <a class="leftSmallBtn">여성 X</a>
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
              <li>5만원 이하 여셩 슈즈</li>
              <li>Classic Crocs</li>
              <li>모두 보기</li>
            </ul>
          </div>
          <div className="filteringProduct">
            <p className="filteringProductTitle">제품 필터링</p>
            <ul>
              <li className="style">
                스타일
                <ul className="styleUl">
                  <li>
                    <i class="fas fa-shoe-prints"></i>클로그
                  </li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>샌들
                  </li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>슬라이즈
                  </li>
                  <li>의류</li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>플립
                  </li>
                  <li>힐과 웨지</li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>털 안감
                  </li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>플랫
                  </li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>단화 / 슬립온
                  </li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>스니커즈
                  </li>
                  <li>
                    <i class="fas fa-shoe-prints"></i>슬리퍼
                  </li>
                </ul>
              </li>
              <li className="size">
                사이즈
                <ul className="sizeUl">
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
                <ul className="colorUl">
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
                    <span>블랙</span>
                  </li>
                  <li>
                    <div>색 원</div>
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
            <button className="sortBtn">베스트매치</button>
          </div>
          <div>
            <ul className="productInfoList">
              <li>
                <div className="productInfo">
                  <div className="productInfoTopNav">
                    <i class="far fa-heart"></i>
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
                    <p className="productName">상품 이름</p>
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
            <div>
              <a>더보기</a>
            </div>
            <div>
              <a>모두보기</a>
            </div>
          </div>
          <h2>
            스타일리시하면서도 편안한 크록스 여성 슈즈.(각각 카테고리에 맞는
            서술)
          </h2>
        </section>
      </div>
    </div>
  );
};
export default ProductList;
