import React from "react";

const ShoppingCartAdd = ({ releaseButtonCart, sendToCart }) => {
  return (
    <form>
      <button
        className={
          releaseButtonCart ? "shopingListAdd gray" : "shopingListAdd navy"
        }
        disabled={releaseButtonCart}
        //TODO: 인라인 스타일 ㄴㄴ *완료*
        onClick={sendToCart}
      >
        {releaseButtonCart ? "사이즈 선택하기" : "장바구니 추가"}
      </button>
      <button className="shopingLikeAdd">
        <i className="far fa-heart hearticon" />
      </button>
    </form>
  );
};

export default ShoppingCartAdd;
