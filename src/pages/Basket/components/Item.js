import React from "react";
import "./Item.scss";

const Item = () => {
  return (
    <div className="itemContainer">
      <div className="itemWrapper">
        <img src="images/shoe1.jpg" alt="shoe1" className="itemImg" />
        <div className="itemInfo">
          <dl className="itemTxt">
            <dt>클래식 크록스 마블 샌들</dt>
            <dd>
              색상 : <span className="underLine">파파야 멀티</span>
            </dd>
            <dd>
              사이즈 : <span className="underLine">230</span>
            </dd>
          </dl>
          <div className="countBtns">
            <button type="number" className="countBtn">
              -
            </button>
            <span className="num">1</span>
            <button type="number" className="countBtn">
              +
            </button>
          </div>
          <ul className="modify">
            <li className="delBtn">삭제</li>
            <li>주문수정</li>
          </ul>
        </div>
      </div>

      <p className="unitPrice">₩44,900</p>
    </div>
  );
};

export default Item;
