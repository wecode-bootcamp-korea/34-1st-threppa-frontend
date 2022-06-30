import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendProducts.scss";

const RecommendProducts = ({ recommend, newproduct }) => {
  const navigate = useNavigate();
  const goToProductDesc = () => {
    navigate(`/productdesc/${recommend}`);
  };

  const [carouselMoverecommend, setCarouselMoverecommend] = useState(0);
  const [carouselMoveNew, setCarouselMoveNew] = useState(0);

  const PRODUCT_WIDTH = 195;
  const handleCarouselRightMovie = () => {
    const rightMaxWidth = -PRODUCT_WIDTH * (recommend.length / 2);
    const imageWidthRight = carouselMoverecommend - PRODUCT_WIDTH;
    if (carouselMoverecommend > rightMaxWidth) {
      setCarouselMoverecommend(imageWidthRight);
    }
  };

  const handleCarouselLeftMovie = () => {
    const imageWidthLeft = carouselMoverecommend + PRODUCT_WIDTH;
    if (carouselMoverecommend < 0) {
      setCarouselMoverecommend(imageWidthLeft);
    }
  };

  const handleCarouselNewRight = () => {
    const rightMaxWidth = -PRODUCT_WIDTH * (newproduct.length / 2);
    const imageWidthRight = carouselMoveNew - PRODUCT_WIDTH;
    if (carouselMoveNew > rightMaxWidth) {
      setCarouselMoveNew(imageWidthRight);
    }
  };

  const handleCarouselNewLeft = () => {
    const imageWidthLeft = carouselMoveNew + PRODUCT_WIDTH;
    if (carouselMoveNew < 0) {
      setCarouselMoveNew(imageWidthLeft);
    }
  };

  return (
    <>
      <div className="RecommendProducts">
        <h4 className="recommendedTitle">추천 제품</h4>
        <div className="recommendItemsCarousel">
          <div className="carouselArrowLeft" onClick={handleCarouselLeftMovie}>
            <i className="fas fa-angle-left" />
          </div>
          <div
            className="carouselArrowRight"
            onClick={handleCarouselRightMovie}
          >
            <i className="fas fa-angle-right" />
          </div>
          <ul
            className="carouselBox"
            style={{ transform: `translateX(${carouselMoverecommend}px)` }}
          >
            {recommend.map(recommend => {
              return (
                <li
                  key={recommend.product_id}
                  className="recommendItem"
                  onClick={goToProductDesc}
                >
                  <img
                    className="itemImage"
                    src={recommend.productImage_url}
                    alt="nono"
                  />
                  <div className="itemContents">
                    <p className="pContent">3색</p>
                    <h4 className="hContent">{recommend.product_name}</h4>
                    <p className="pContent">{recommend.price}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="newProducts">
        <h4 className="newTitle">신제품 소식</h4>
        <div className="newItemsCarousel">
          <div className="carouselArrowLeft" onClick={handleCarouselNewLeft}>
            <i className="fas fa-angle-left" />
          </div>
          <div className="carouselArrowRight" onClick={handleCarouselNewRight}>
            <i className="fas fa-angle-right" />
          </div>
          <ul
            className="carouselBox"
            style={{ transform: `translateX(${carouselMoveNew}px)` }}
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
    </>
  );
};

export default RecommendProducts;
