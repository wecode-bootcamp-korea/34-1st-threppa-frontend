import React from "react";
import Item from "./components/Item";
import "./Basket.scss";

const Basket = () => {
  // fetch("data/cart.json")
  //   .then(res => res.json())
  //   .then(result => console.log(result));

  return (
    <div className="basketContainer">
      <h1 className="cartTitle">
        <span className="bolder">장바구니</span> (1개수량)
      </h1>
      <div className="columnWrapper">
        <div className="column">
          <p className="totalPrice">구매 상품 총액 : ₩89,800</p>
          {/* 컴포넌트 */}
          <Item />
          <Item />
          <Item />
        </div>
        <div className="column">
          <h2 className="orderFormTitle">주문 내역</h2>
          <div className="orderLists">
            <ul className="orderList">
              <li className="listTitle">구매 상품 총액 </li>
              <li className="listContent">₩179,700 </li>
            </ul>
            <ul className="orderList">
              <li>쿠폰 코드 입력 </li>
              <li>
                <input
                  type="text"
                  className="coupon"
                  placeholder="쿠폰 번호를 입력하세요"
                />
              </li>
            </ul>
            <ul className="orderList">
              <li>배송비 </li>
              <li>무료</li>
              <li className="three">3만원 이상 무료입니다.</li>
            </ul>
            <ul className="orderList">
              <li>주문 총액</li>
              <li>₩179,700 </li>
            </ul>
          </div>
          <button type="button" className="orderBtn">
            <i className="fas fa-calculator calculator" />
            주문 진행하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
