import React from "react";
import "./ProductDesc.scss";
import { useState, useEffect } from "react";
import RecommendProducts from "./components/RecommendProducts/RecommendProducts";
import NewProducts from "./components/NewProducts/NewProducts";

const ProductDesc = () => {
  useEffect(() => {
    fetch("/datas/RECOMMENDPRODUCTS_DATA.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(RECOMMENDPRODUCTS_DATA => {
        setRecommendProductsData(RECOMMENDPRODUCTS_DATA);
      });
  }, []);

  const [recommendProductsData, setRecommendProductsData] = useState([]);

  const [mainImageUrl, setMainImageUrls] = useState("/images/crocs_01.png");
  const [mainColor, setMainColor] = useState("기본");

  return (
    <div className="productDescPage">
      <main className="container">
        <div className="asideLeft">
          <div className="leftImageAndHeart">
            <img className="image" src={mainImageUrl} alt="nono!" />
            <i class="fa-regular fa-heart heart" />
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
                <span>색상 :</span> {mainColor}
              </div>
              <div className="colorList">
                <ul>
                  <li
                    className="black"
                    onClick={() => {
                      setMainImageUrls(recommendProductsData[0].imageURL);
                      setMainColor(recommendProductsData[0].color);
                    }}
                  >
                    black
                  </li>
                  <li
                    className="white"
                    onClick={() => {
                      setMainImageUrls(recommendProductsData[1].imageURL);
                      setMainColor(recommendProductsData[1].color);
                    }}
                  >
                    white
                  </li>
                  <li
                    className="blue"
                    onClick={() => {
                      setMainImageUrls(recommendProductsData[2].imageURL);
                      setMainColor(recommendProductsData[2].color);
                    }}
                  >
                    blue
                  </li>
                </ul>
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
        <RecommendProducts reco={recommendProductsData} />
        <NewProducts reco={recommendProductsData} />
      </footer>
    </div>
  );
};

export default ProductDesc;
