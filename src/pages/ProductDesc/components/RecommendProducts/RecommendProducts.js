import React from "react";
import "./RecommendProducts.scss";
import { useState } from "react";

const RecommendProducts = ({ reco }) => {
  const [carouselLRmovie, setCarouselLRmovie] = useState(0);

  const handleCarouselRightMovie = () => {
    if (carouselLRmovie === carouselLRmovie) {
      setCarouselLRmovie(carouselLRmovie - 13);
    }
  };

  const handleCarouselLeftMovie = () => {
    if (carouselLRmovie === 0) {
      setCarouselLRmovie(0);
    } else if (carouselLRmovie === carouselLRmovie) {
      setCarouselLRmovie(carouselLRmovie + 13);
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
          <i class="fas fa-angle-left" />
        </div>
        <div
          className="carouselArrowRight"
          onClick={() => {
            handleCarouselRightMovie();
          }}
        >
          <i class="fas fa-angle-right" />
        </div>
        <ul className="carouselBox">
          {reco.map(reco => {
            return (
              <li
                key={reco.id}
                className="recommendItem"
                style={{ transform: `translateX(${carouselLRmovie}em)` }}
              >
                <img
                  className="itemImage"
                  src="/images/crocs_01.png"
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">{reco.color}</p>
                  <h4 className="hContent">{reco.title}</h4>
                  <p className="pContent">{reco.price}</p>
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
