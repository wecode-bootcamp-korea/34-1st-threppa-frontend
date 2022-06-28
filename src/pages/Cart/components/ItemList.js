import React, { useState } from "react";
import "./ItemList.scss";

const ItemList = (props) => {
  // const { product_id, product_name, color, image_url, price, quantity, size } = data;
 

  console.log(props);

  return (
  // <li className="itemContainer" id={id}>
  //   <div className="itemWrapper">
  //     <img src="images/shoe1.jpg" alt="shoe1" className="itemImg" />
  //     <div className="itemInfo">
  //       <dl className="itemTxt">
  //         <dt>{name}</dt>
  //         <dd>
  //           색상 : <span className="underLine">{color}</span>
  //         </dd>
  //         <dd>
  //           사이즈 : <span className="underLine">{size}</span>
  //         </dd>
  //       </dl>
  //       <div className="countBtns">
  //         <button type="number" className="countBtn">
  //           -
  //         </button>
  //         <span className="num">{quantity}</span>
  //         <button type="number" className="countBtn">
  //           +
  //         </button>
  //       </div>
  //       <ul className="modify">
  //         <li className="delBtn">삭제</li>
  //         <li>주문수정</li>
  //       </ul>
  //     </div>
  //   </div>

  //   <p className="unitPrice">₩{price}</p>
  // </li>
  )
}

export default ItemList;
