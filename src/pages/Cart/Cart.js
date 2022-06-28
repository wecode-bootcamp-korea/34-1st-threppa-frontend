import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import "./Cart.scss";

const Cart = () => {
  // {id: 2, name: 'Clog2', price: 30000, quantity: 1}

  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // fetch("http://10.58.6.64:8000/products/carts") // 로그인 후 나온 토큰 보내야 함.
    fetch("data/cart.json")
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        setCartData(result);
        const firstTotalPrice = result.reduce((acc, cur) => acc + cur.price, 0);
        setTotalPrice(firstTotalPrice);
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
            {cartData.map(obj => (
              <ItemList
                key={obj.id}
                id={obj.id}
                name={obj.name}
                color={obj.color}
                size={obj.size}
                price={obj.price}
                quantity={obj.quantity}
                setCartData={setCartData}
                setTotalPrice={setTotalPrice}
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
              <li>배송비 </li>
              <li>{totalPrice >= 50000 ? "무료" : "₩5000"}</li>
              {/* <li className="three">5만원 이상 무료입니다.</li> */}
            </ul>
            <ul className="orderList">
              <li>주문 총액</li>
              <li>₩{totalPrice} </li>
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
