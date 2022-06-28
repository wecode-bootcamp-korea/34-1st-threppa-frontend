import React, { useState } from "react";
import "./ItemList.scss";

const ItemList = ({
  name,
  id,
  color,
  size,
  price,
  quantity,
  setCartData,
  setTotalPrice,
}) => {
  const [num, setNum] = useState(quantity);

  const onClickDel = () => {
    setTotalPrice(prev => prev - price);
    setCartData(prev => prev.filter(el => el.id !== id));
  };

  const minus = () => {
    setNum(prev => {
      // 갯수가 0이되면 해당상품 삭제
      if (prev - 1 === 0) {
        setTotalPrice(prev => prev - price);
        setCartData(prev => prev.filter(el => el.id !== id));
        return;
      }
      // 아니면 숫자 마이너스 처리
      setTotalPrice(prev => prev - price);
      return prev - 1;
    });
  };

  const add = () => {
    setNum(prev => prev + 1);
    setTotalPrice(prev => prev + price);
  };

  return (
    <li className="itemContainer" id={id}>
      <div className="itemWrapper">
        <img src="images/shoe1.jpg" alt="shoe1" className="itemImg" />
        <div className="itemInfo">
          <dl className="itemTxt">
            <dt>{name}</dt>
            <dd>
              색상 : <span className="underLine">{color}</span>
            </dd>
            <dd>
              사이즈 : <span className="underLine">{size}</span>
            </dd>
          </dl>
          <div className="countBtns">
            <button type="number" className="countBtn" onClick={minus}>
              -
            </button>
            <span className="num">{num}</span>
            <button type="number" className="countBtn" onClick={add}>
              +
            </button>
          </div>
          <ul className="modify">
            <li className="delBtn" onClick={onClickDel}>
              삭제
            </li>
            <li>주문수정</li>
          </ul>
        </div>
      </div>

      <p className="unitPrice">₩{price}</p>
    </li>
  );
};

export default ItemList;
