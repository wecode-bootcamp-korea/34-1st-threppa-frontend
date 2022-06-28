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
  const [releaseButtonCart, setReleaseButtonCart] = useState(true); // TODO: boolean naming convention 고민 중

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
                  setReleaseButtonCart(false);
                }}
              >
                {sizes}
              </li>
            );
          })}
        </ul>
      </div>
      <ShoppingCartAdd sendToCart={sendToCart} cartAdd={releaseButtonCart} />
    </div>
  );
};

export default Size;
