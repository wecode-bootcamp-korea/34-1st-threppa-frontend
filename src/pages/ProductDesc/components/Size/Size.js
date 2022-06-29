import React, { useState } from "react";
import ShoppingCartAdd from "../ShoppingCartAdd/ShoppingCartAdd";
import "./Size.scss";

const Size = ({
  sizeSelect,
  handleSizeModal,
  setSizeSelect,
  sizeSeverData,
  sendToCart,
}) => {
  const [isButtonCart, setIsButtonCart] = useState(true);

  return (
    <div className="slippersSize">
      <div>
        <div className="sizeTitle">
          <p>
            <span>사이즈:</span> {sizeSelect}
          </p>
          <button className="sizeTable" onClick={handleSizeModal}>
            사이즈 표 보기
          </button>
        </div>
        <ul className="sizeList">
          {sizeSeverData.sizes.map(({ id, sizes }) => {
            return (
              <li
                className={sizeSelect === sizes ? "size black" : "size"}
                key={id}
                onClick={() => {
                  setSizeSelect(sizes);
                  setIsButtonCart(false);
                }}
              >
                {sizes}
              </li>
            );
          })}
        </ul>
      </div>
      <ShoppingCartAdd sendToCart={sendToCart} cartAdd={isButtonCart} />
    </div>
  );
};

export default Size;
