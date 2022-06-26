import React from "react";
import "./NewProducts.scss";
import { useState } from "react";

const NewProducts = ({ newProductDatas }) => {
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
    <div className="bottomNewProduct">
      <h4 className="newTitle">신제품 소식</h4>
      <div className="newItemsCarousel">
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
          {newProductDatas.map(newProductDatas => {
            return (
              <li key={newProductDatas.product_id} className="newItem">
                <img
                  className="itemImage"
                  src={newProductDatas.productImage_url}
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">3색</p>
                  <h4 className="hContent">{newProductDatas.product_name}</h4>
                  <p className="pContent">{newProductDatas.price}</p>
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
