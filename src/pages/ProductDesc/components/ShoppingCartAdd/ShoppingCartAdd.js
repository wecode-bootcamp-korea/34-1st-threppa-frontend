import React from "react";
import "./ShoppingCartAdd.scss";

const ShoppingCartAdd = ({ releaseButtonCart, sendToCart }) => {
  return (
    <form className="shoppingCartAdd">
      <button
        className={
          releaseButtonCart ? "shopingListAdd gray" : "shopingListAdd black"
        }
        disabled={releaseButtonCart}
        onClick={sendToCart}
      >
        {releaseButtonCart ? "사이즈 선택하기" : "장바구니 추가"}
      </button>
    </form>
  );
};

export default ShoppingCartAdd;
