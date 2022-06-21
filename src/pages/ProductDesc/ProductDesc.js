import React from "react";
import "./ProductDesc.scss";

const ProductDesc = () => {
  return (
    <div className="productDescPage">
      <main className="container">
        <div className="asideLeft">
          <div className="leftImageAndHeart">
            <img className="image" src="/images/crocs_01.jpg" alt="nono!" />
            <i class="fa-regular fa-heart heart" />
          </div>
          <div className="asideLeftItemImages">
            <img className="ItemImage" src="/images/crocs_01.jpg" alt="no" />
            <img className="ItemImage" src="/images/crocs_01.jpg" alt="no" />
            <img className="ItemImage" src="/images/crocs_01.jpg" alt="no" />
            <img className="ItemImage" src="/images/crocs_01.jpg" alt="no" />
            <img className="ItemImage" src="/images/crocs_01.jpg" alt="no" />
            <img className="ItemImage" src="/images/crocs_01.jpg" alt="no" />
          </div>
          <img
            className="asideLeftContent"
            src="/images/content_02.png"
            alt="nono!!"
          />
        </div>
        <div className="asideRight">
          <div className="stickyBox">
            <div className="slippersInfo">
              <h1 className="infoTitle">클래식 코지 샌들</h1>
              <p className="infoGender">여성</p>
              <div className="infoPrice">₩69,900</div>
            </div>
            <div className="slippersColor">
              <div className="colorTitle">
                <span>색상 :</span> 화이트
              </div>
              <div className="colorImages" />
            </div>
            <div className="slippersSize">
              <div className="sizeTitle">
                <p>
                  <span>사이즈:</span> 260mm
                </p>
                <button>사이즈 표 보기</button>
              </div>
              <ul className="sizeList">
                <li className="size">230</li>
                <li className="size">240</li>
                <li className="size">250</li>
                <li className="size">260</li>
                <li className="size">270</li>
                <li className="size">280</li>
                <li className="size">290</li>
              </ul>
              <form>
                <button className="shopingListAdd">장바구니 추가</button>
                <button className="shopingLikeAdd">
                  <i class="far fa-heart hearticon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="bottomContainer">
        <div className="bottomRecommendedProduct">
          <h4 className="recommendedTitle">추천 제품</h4>
          <div className="recommendItemsCarousel">
            <ul className="carouselBox">
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="recommendItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottomNewProduct">
          <h4 className="newTitle">신제품 소식</h4>
          <div className="newItemsCarousel">
            <ul className="carouselBox">
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
              <li className="newItem">
                <img
                  className="itemImage"
                  src="/images/crocs_01.jpg"
                  alt="nono!!"
                />
                <div className="itemContents">
                  <p className="pContent">20색</p>
                  <h4 className="hContent">클래식 플랫폼 클로그 우먼</h4>
                  <p className="pContent">₩69,900</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDesc;
