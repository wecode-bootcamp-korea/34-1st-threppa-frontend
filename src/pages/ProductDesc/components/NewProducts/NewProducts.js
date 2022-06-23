import React from "react";
import "./NewProducts.scss";
import { useState } from "react";

const NewProducts = ({ reco }) => {
  const [carouselLRmovie, setCarouselLRmovie] = useState(0);

  const handleCarouselRightMovie = () => {
    if (carouselLRmovie > -1000) {
      setCarouselLRmovie(carouselLRmovie - 200);
    }
  };

  const handleCarouselLeftMovie = () => {
    if (carouselLRmovie < 0) {
      setCarouselLRmovie(carouselLRmovie + 200);
    }
  };

  return (
    <div className="bottomNewProduct">
      <h4 className="newTitle">신제품 소식</h4>
      <div className="newItemsCarousel">
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
                className="newItem"
                style={{ transform: `translateX(${carouselLRmovie}px)` }}
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

export default NewProducts;
