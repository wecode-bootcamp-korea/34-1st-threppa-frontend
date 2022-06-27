import React from "react";
import { useState } from "react";
import "./CartAll.scss";

const CartAll = ({ handleSizeModal, sizeSeverData, productSeverData }) => {
  const [colorChangeImage, setColorChangeImage] = useState(
    "/images/crocs_03.jpg"
  );
  const [color, setColor] = useState([]);

  const [sizeSelectButton, setSizeSelectButton] = useState("");
  const [sizeModal, setSizeModal] = useState(false);

  return (
    <main className="container">
      <div className="asideLeft">
        <div className="leftImageAndHeart">
          <img className="image" src={colorChangeImage} alt="nono!" />
          <i className="fa-regular fa-heart heart" />
        </div>
        <img
          className="asideLeftContent"
          src="/images/content_02.png"
          alt="nono!!"
        />
      </div>
      <div className="asideRight">
        <div className="stickyBox">
          <div className="slippersInfo">
            <h1 className="infoTitle">{productSeverData?.results.name}</h1>
            <p className="infoGender">여성</p>
            <div className="infoPrice">{productSeverData?.results.price}</div>
          </div>
          <div className="slippersColor">
            <div className="colorTitle">
              <span>색상 :</span> {color}
            </div>
            <div className="colorList">
              <ul>
                {productSeverData?.results.colors.map(colors => {
                  return (
                    <li
                      key={colors.id}
                      className="color"
                      style={{
                        backgroundColor: colors.name,
                      }}
                      onClick={() => {
                        setColor(colors.name);
                        setColorChangeImage(colors.image_url);
                        setSizeModal(true);
                      }}
                    >
                      {colors.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="colorImages" />
          </div>
          {sizeModal === true ? (
            <Size
              setSizeSelectButton={setSizeSelectButton}
              sizeSelectButton={sizeSelectButton}
              handleSizeModal={handleSizeModal}
              sizeSeverData={sizeSeverData}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
};

const Size = ({
  sizeSelectButton,
  handleSizeModal,
  setSizeSelectButton,
  sizeSeverData,
}) => {
  const [cartAdd, setCartAdd] = useState(true);

  const [cartText, setCartText] = useState("사이즈 선택하기");
  return (
    <div className="slippersSize">
      <div>
        <div className="sizeTitle">
          <p>
            <span>사이즈:</span> {sizeSelectButton}
          </p>
          <button className="sizeTable" onClick={handleSizeModal}>
            사이즈 표 보기
          </button>
        </div>
        <ul className="sizeList">
          {sizeSeverData.sizes.map(({ id, sizes }) => {
            return (
              <li
                className={sizeSelectButton === sizes ? "size black" : "size"}
                key={id}
                onClick={() => {
                  setSizeSelectButton(sizes);
                  setCartAdd(false);
                  setCartText("장바구니 추가");
                }}
              >
                {sizes}
              </li>
            );
          })}
        </ul>
      </div>
      <form>
        <button
          className="shopingListAdd"
          disabled={cartAdd}
          style={cartAdd === false ? { backgroundColor: "#002982" } : null}
          onClick={() => {}}
        >
          {cartText}
        </button>
        <button className="shopingLikeAdd">
          <i className="far fa-heart hearticon" />
        </button>
      </form>
    </div>
  );
};

export default CartAll;
