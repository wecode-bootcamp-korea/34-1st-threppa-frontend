import { useState } from "react";

const ProductCard = ({
  clickLike,
  hoverColor,
  productImg,
  productTitle,
  productRate,
  productColor,
}) => {
  return (
    <li>
      <div className="productInfo">
        <div className="productInfoTopNav">
          <i className="far fa-heart" onClick={clickLike}></i>
          <span>세일정보</span>
        </div>
        <div className="productInfoDetail">
          <div>
            <img alt="shoes" src={productImg} className="productImg"></img>
          </div>
          <p className="productName">{productTitle}</p>
          <p className="productRate">⭑⭑⭑⭑⭑{productRate}</p>
          <div className="productPrice">₩69,000</div>
          <div className="productColorNav">
            <div className="colorCircle black" onMouseOver={hoverColor}></div>
            <div className="colorCircle white" onMouseOver={hoverColor}></div>
            <div className="colorCircle blue" onMouseOver={hoverColor}></div>
          </div>
          <button className="lookClose">둘러보기</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
