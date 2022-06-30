import React from "react";
import "./ShoppingCartAdd.scss";

const ShoppingCartAdd = ({ cartAdd, sendToCart }) => {
  return (
    <form className="shoppingCartAdd">
      <button
        className={cartAdd ? "shopingListAdd gray" : "shopingListAdd black"}
        disabled={cartAdd}
        onClick={sendToCart}
      >
        {cartAdd ? "사이즈 선택하기" : "장바구니 추가"}
      </button>
    </form>
  );
};

export default ShoppingCartAdd;
