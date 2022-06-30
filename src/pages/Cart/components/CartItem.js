import React from "react";
import "./CartItem.scss";

// item 하나의 객체에 대한 처리
const CartItem = ({
  product_id,
  product_name,
  color,
  image_url,
  price,
  quantity,
  size,
  onClickQuantity,
  onClickDelete,
}) => {
  const _onClickQuantity = e => {
    const { value } = e.target;
    onClickQuantity(product_id, quantity, value);
  };

  const _onClickDelete = () => {
    onClickDelete(product_id);
  };

  return (
    <li className="itemContainer" id={product_id}>
      <div className="itemWrapper">
        <img src={image_url} alt="shoe1" className="itemImg" />
        <div className="itemInfo">
          <dl className="itemTxt">
            <dt>{product_name}</dt>
            <dd>
              <span> 색상</span>
              <span>:</span>
              <span>{color}</span>
            </dd>
            <dd>
              <span>사이즈</span> : <span className="underLine">{size}</span>
            </dd>
          </dl>
          <div className="countBtns">
            <button
              type="number"
              className="countBtn"
              value="minus"
              onClick={_onClickQuantity}
            >
              -
            </button>
            <p className="num">{quantity}</p>
            <button
              type="number"
              className="countBtn"
              value="plus"
              onClick={_onClickQuantity}
            >
              +
            </button>
          </div>
          <ul className="modify">
            <li className="delBtn" onClick={_onClickDelete}>
              삭제
            </li>
            <li>주문수정</li>
          </ul>
        </div>
      </div>

      <p className="unitPrice">₩{price.toLocaleString()}</p>
    </li>
  );
};

export default CartItem;
