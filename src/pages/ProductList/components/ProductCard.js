import { useState } from "react";
import ProductColor from "./ProductColor";

const ProductCard = ({ clickLike, productImg, productTitle, productPrice }) => {
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
          <div className="productPrice">₩ {productPrice}</div>
          <ul className="productColorNav"></ul>
          <button className="lookClose">둘러보기</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
