import React from "react";
import "./RecommendProducts.scss";
import { useState } from "react";

const RecommendProducts = ({ recommendProductDatas }) => {
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
