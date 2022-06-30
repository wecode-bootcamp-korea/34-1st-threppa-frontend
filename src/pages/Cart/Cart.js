import React, { useState, useEffect, useRef, useContext } from "react";
import AppContext from "../../AppContext";
import CartItem from "./components/CartItem";
import "./Cart.scss";

const Cart = () => {
  const appContext = useContext(AppContext);

  const timerRef = useRef(0);
  const [cartData, setCartData] = useState([]);
  const [couponValue, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const [test, setTest] = useState({}); // 추가

  const couponInput = e => {
    setCoupon(e.target.value);
  };

  let totalPrice = cartData.reduce(
    (acc, cur) => acc + +cur.price * cur.quantity,
    0
  );

  let discountPrice = totalPrice * discountPercent;

  let deliveryFee = totalPrice === 0 ? 0 : totalPrice >= 100000 ? "무료" : 5000;

  let totalAndFee =
    totalPrice - discountPrice + (deliveryFee === "무료" ? 0 : deliveryFee);

  const getUserToken = localStorage.getItem("ACCESS_TOKEN");
  console.log("토큰", getUserToken);
  // < get api >
  useEffect(() => {
    // fetch("datas/cart.json")
    fetch("http://10.58.4.136:8000/products/carts", {
      method: "GET",
      headers: {
        Authorization: getUserToken,
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartData(result.carts);
      });
  }, []);

  console.log("카트데이터", cartData);

  // < post api >
  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const postData = cartData.map(({ cart_id, quantity }) => {
        return { cart_id, quantity };
      });

      console.log(postData);

      fetch("http://10.58.4.136:8000/products/cartsupdate", {
        method: "POST",
        headers: {
          Authorization: getUserToken,
        },
        body: JSON.stringify(test), // 수정
      })
        .then(res => res.json())
        .then(result => console.log("포스트응답", result));
    }, 2000);
  }, [cartData]);

  // <수량조절 함수>
  const onClickQuantity = (itemId, itemQuantity, itemValue) => {
    if (itemQuantity === 1 && itemValue === "minus") {
      return;
    }

    const foundIdx = cartData.findIndex(data => data.cart_id === itemId);

    if (foundIdx === -1) {
      return;
    }

    const newItem = { ...cartData[foundIdx] };

    if (itemValue === "minus") {
      newItem.quantity -= 1;
    } else {
      newItem.quantity += 1;
    }

    setTest(newItem); // 추가

    setCartData(prev => {
      const updataData = [...prev];
      updataData[foundIdx] = newItem;
      return updataData;
    });
  };

  // <삭제 함수>
  const onClickDelete = cart_id => {
    const updataData = cartData.filter(data => data.cart_id !== cart_id);
    setCartData(updataData);
  };

  // <결제 함수>
  const OnClickPaymentBtn = () => {
    if (cartData.length === 0) {
      return;
    }
    appContext.setToastMessage(["결제완료 되었습니다", "🌝"]);
  };

  // < 쿠폰입력 >
  const couponBtn = () => {
    if (couponValue === "wecode1") {
      setDiscountPercent(0.1);
      return;
    }

    setDiscountPercent(0);
  };

  return (
    <div className="CartContainer">
      <div className="columnWrapper">
        <div className="column">
          <h1 className="cartTitle">
            <span className="bolder">장바구니</span> ({cartData.length}개수량)
          </h1>

          <p className="totalTitle">
            구매 상품 총액 {`: `}
            <span className="totalPrice">₩{totalPrice.toLocaleString()}</span>
          </p>

          <ul>
            {cartData.map(data => (
              <CartItem
                key={data.cart_id}
                product_id={data.product_id}
                cart_id={data.cart_id}
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
          <div
            className={`emptyCart ${
              cartData.length === 0 ? "" : "isShowemptyCart"
            }`}
          >
            <p>
              <i class="fas fa-shopping-basket basket" />
              장바구니에 담긴 상품이 없습니다.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="fixedCol">
            <h2 className="orderFormTitle">주문 내역</h2>
            <div className="orderLists">
              <ul className="orderList">
                <li className="listTitle">구매 상품 총액 </li>
                <li className="listContent">₩{totalPrice.toLocaleString()}</li>
              </ul>
              <ul className="orderList">
                <li>쿠폰 코드 입력 </li>
                <li>
                  <label htmlFor="coupon">
                    <input
                      type="text"
                      className="coupon"
                      id="coupon"
                      placeholder="쿠폰 번호를 입력하세요"
                      onInput={couponInput}
                    />
                    <button
                      className="couponBtn"
                      type="button"
                      onClick={couponBtn}
                    >
                      확인
                    </button>
                  </label>
                </li>
              </ul>
              <ul className="orderList">
                <li>할인 내역</li>
                <li className="deliveryLi">
                  <p>
                    {discountPrice &&
                      `위코더할인(10%) ₩ -${discountPrice.toLocaleString()}`}
                  </p>
                </li>
              </ul>
              <ul className="orderList">
                <li>배송비</li>
                <li className="deliveryLi">
                  <p>{totalPrice > 0 ? deliveryFee.toLocaleString() : ""}</p>
                  <p className="three">10만원 이상 무료입니다.</p>
                </li>
              </ul>
              <ul className="orderList">
                <li>주문 총액</li>
                <li className="totalPrice">₩{totalAndFee.toLocaleString()}</li>
              </ul>
            </div>
            <button
              type="button"
              className="orderBtn"
              onClick={OnClickPaymentBtn}
            >
              <i className="fas fa-calculator calculator" />
              주문 진행하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
