import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import "./Cart.scss";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const totalPrice = cartData.reduce((acc, cur) => acc + +cur.price, 0);

  // 로그인 후 나온 토큰 보내야 함.
  // const getUserToken =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTR9.uCo_nqlEeKoRuz9m6fhE9Mru4bMhLIuhFb7y0UWkq_E";

  useEffect(() => {
    fetch("data/cart.json")
      // fetch("http://192.168.225.215:8000/products/carts", {
      //   method: "GET",
      //   headers: {
      //     Authorization: getUserToken,
      //   },
      // })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        setCartData(result);
      });
  }, []);

  return (
    <div className="CartContainer">
      <h1 className="cartTitle">
        <span className="bolder">장바구니</span> ({cartData.length}개수량)
      </h1>
      <div className="columnWrapper">
        <div className="column">
          <p className="totalPrice">구매 상품 총액 : ₩{totalPrice}</p>

          <ul>
            {cartData.map(data => (
              <ItemList
                key={data.product_id}
                data={data}
                setCartData={setCartData}
              />
            ))}
          </ul>
        </div>
        <div className="column">
          <h2 className="orderFormTitle">주문 내역</h2>
          <div className="orderLists">
            <ul className="orderList">
              <li className="listTitle">구매 상품 총액 </li>
              <li className="listContent">₩{totalPrice}</li>
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
              <li>배송비</li>
              <li>{totalPrice >= 50000 ? "무료" : "₩5000"}</li>
              {/* <li className="three">5만원 이상 무료입니다.</li> */}
            </ul>
            <ul className="orderList">
              <li>주문 총액</li>
              <li>₩{totalPrice >= 50000 ? totalPrice : totalPrice + 5000} </li>
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

export default Cart;
