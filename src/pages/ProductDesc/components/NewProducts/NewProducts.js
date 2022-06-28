import React from "react";
import { useState } from "react";
import "./NewProducts.scss";

const NewProducts = ({ newproduct }) => {
  const [carouselLRmove, setCarouselLRmovie] = useState(0);

  const handleCarouselRightMovie = () => {
    let rightMaxWidth = -195 * (newproduct.length / 2);
    let imageWidthRight = carouselLRmove - 195;
    if (carouselLRmove > rightMaxWidth) {
      setCarouselLRmovie(imageWidthRight);
    }
  };

  const handleCarouselLeftMovie = () => {
    let imageWidthLeft = carouselLRmove + 195;
    if (carouselLRmove < 0) {
      setCarouselLRmovie(imageWidthLeft);
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
          {newproduct.map(newproduct => {
            return (
              <li key={newproduct.product_id} className="newItem">
                <img
                  className="itemImage"
                  src={newproduct.productImage_url}
                  alt="nono"
                />
                <div className="itemContents">
                  <p className="pContent">3색</p>
                  <h4 className="hContent">{newproduct.product_name}</h4>
                  <p className="pContent">{newproduct.price}</p>
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
