import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendProducts.scss";

const RecommendProducts = ({ recommendProductDatas }) => {
  const navigate = useNavigate();
  const goToProductDesc = () => {
    navigate(`/productdesc/${recommendProductDatas}`);
  };

  const [carouselLRmove, setCarouselLRmovie] = useState(0);

  const handleCarouselRightMovie = () => {
    if (carouselLRmove > -1000) {
      setCarouselLRmovie(carouselLRmove - 200);
    }
  };

  const handleCarouselLeftMovie = () => {
    if (carouselLRmove < 0) {
      setCarouselLRmovie(carouselLRmove + 200);
    }
  };

  return (
    <div className="bottomRecommendedProduct">
      <h4 className="recommendedTitle">추천 제품</h4>
      <div className="recommendItemsCarousel">
        <div
          className="carouselArrowLeft"
          onClick={() => {
            handleCarouselLeftMovie();
          }}
        >
          <i className="fas fa-angle-left" />
        </div>
        <div
          className="carouselArrowRight"
          onClick={() => {
            handleCarouselRightMovie();
          }}
        >
          <i className="fas fa-angle-right" />
        </div>
        <ul
          className="carouselBox"
          style={{ transform: `translateX(${carouselLRmove}px)` }}
        >
          {recommendProductDatas.map(recommendProductDatas => {
            return (
              <li
                key={recommendProductDatas.product_id}
                className="recommendItem"
                onClick={goToProductDesc}
                // 고오오오급 라우팅
                // 1. onClick이벤트를 발생시켜주고 클릭 했을 때 발생할 이벤트를 생각해본다
                // 2. 예를 들어 클릭을 했을때 페이지가 이동을 해야 한다
                // 3. 함수를 만들고 함수에 콘솔로그를 찍어 이벤트 클릭이 잘되는지 확인한다
                // 4. navigate라는 함수를 만들어 함수안에 useNavigate를 선언하고 클릭시 어디로 이동할지 생각해본다
              >
                <img
                  className="itemImage"
                  src={recommendProductDatas.productImage_url}
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">3색</p>
                  <h4 className="hContent">
                    {recommendProductDatas.product_name}
                  </h4>
                  <p className="pContent">{recommendProductDatas.price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecommendProducts;
