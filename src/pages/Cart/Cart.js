import React, { useState, useEffect, useRef } from "react";
import CartItem from "./components/CartItem";
import "./Cart.scss";

const Cart = () => {
  const timerRef = useRef(0);
  const [cartData, setCartData] = useState([]);
  let totalPrice = cartData.reduce(
    (acc, cur) => acc + +cur.price * cur.quantity,
    0
  );
  let deliveryFee = totalPrice >= 100000 ? "무료" : 5000;

  // <데이터 요청>
  // const getUserToken =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTR9.uCo_nqlEeKoRuz9m6fhE9Mru4bMhLIuhFb7y0UWkq_E";
  useEffect(() => {
    // fetch("http://192.168.225.215:8000/products/carts", {
    //   method: "GET",
    //   headers: {
    //     Authorization: getUserToken,
    //   },
    // })
    fetch("data/cart.json")
      .then(res => res.json())
      .then(result => {
        // console.log(result);

        setCartData(result);
      });
  }, []);

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const postData = cartData.map(({ product_id, color, quantity, size }) => {
        return { product_id, color, quantity, size };
      });
      console.log(postData);
      // fetch("#", {
      //   method: "POST",
      //   headers: {
      //     Authorization: "token",
      //   },
      //   body: postData,
      // })
      //   .then()
      //   .then(result => console.log(result));
    }, 2000);
  }, [cartData]);

  // <수량조절 함수>
  const onClickQuantity = (itemId, itemQuantity, price, itemValue) => {
    if (itemQuantity === 1 && itemValue === "minus") {
      return;
    }

    const foundIdx = cartData.findIndex(data => data.product_id === itemId);

    if (foundIdx === -1) {
      return;
    }

    const newItem = { ...cartData[foundIdx] };

    if (itemValue === "minus") {
      newItem.quantity -= 1;
    } else {
      newItem.quantity += 1;
    }

    // const updataData = cartData.map(data => {
    //   if (data.product_id === itemId) {
    //     if (itemValue === "minus") {
    //       data.quantity -= 1;
    //
    //     } else {
    //       data.quantity += 1;
    //       deliveryFee = totalPrice + price >= 100000 ? "무료" : 5000;
    //     }
    //   }
    //   return data;
    // });

    setCartData(prev => {
      const updataData = [...prev];
      updataData[foundIdx] = newItem;

      return updataData;
    });
  };

  // <삭제 함수>
  const onClickDelete = product_id => {
    const updataData = cartData.filter(data => data.product_id !== product_id);
    setCartData(updataData);
  };

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
              <CartItem
                key={data.product_id}
                product_id={data.product_id}
                product_name={data.product_name}
                color={data.color}
                image_url={data.image_url}
                price={+data.price}
                quantity={data.quantity}
                size={data.size}
                onClickQuantity={onClickQuantity}
                onClickDelete={onClickDelete}
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
              <li>{totalPrice > 0 ? deliveryFee : ""}</li>
              {/* <li className="three">10만원 이상 무료입니다.</li> */}
            </ul>
            <ul className="orderList">
              <li>주문 총액</li>
              <li>
                ₩
                {totalPrice >= 50000
                  ? totalPrice
                  : totalPrice > 0
                  ? totalPrice + 5000
                  : "0"}
              </li>
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
