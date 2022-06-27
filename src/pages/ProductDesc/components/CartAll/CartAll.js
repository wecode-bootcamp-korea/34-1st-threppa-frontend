import React from "react";
import { useState } from "react";
import "./CartAll.scss";

const CartAll = ({ productDatas, handleSizeModal }) => {
  const [colorChangeImage, setColorChangeImage] = useState(
    "/images/crocs_03.jpg"
  );
  const [colorTitle, setColorTitle] = useState(["black", "gray", "royalblue"]);

  let [sizeButtonTarget, setSizeButtonTarget] = useState("");
  const [sizeButtonHandle, setSizeButtonHandle] = useState("");

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
            <h1 className="infoTitle">{productDatas[0]?.product_name}</h1>
            <p className="infoGender">여성</p>
            <div className="infoPrice">{productDatas[0]?.price}</div>
          </div>
          <div className="slippersColor">
            <div className="colorTitle">
              <span>색상 :</span> {colorTitle}
            </div>
            <div className="colorList">
              <ul>
                {productDatas[0]?.colors.map(productColor => {
                  const handleColorImageTilte = () => {
                    setColorChangeImage(
                      productDatas[0]?.colors[productColor.color_id - 1]
                        .image_url
                    );
                    setColorTitle(
                      productDatas[0]?.colors[productColor.color_id - 1]
                        .color_name
                    );
                  };
                  return (
                    <li
                      key={productColor.color_id}
                      className="color white blue"
                      style={{
                        backgroundColor: `${
                          colorTitle[productColor.color_id - 1]
                        }`,
                      }}
                      onClick={handleColorImageTilte}
                    >
                      {
                        productDatas[0]?.colors[productColor.color_id - 1]
                          .color_name
                      }
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="colorImages" />
          </div>

          <div className="slippersSize">
            <div>
              <div className="sizeTitle">
                <p>
                  <span>사이즈:</span> {sizeButtonTarget}
                  mm
                </p>
                <button className="sizeTable" onClick={handleSizeModal}>
                  사이즈 표 보기
                </button>
              </div>
              <ul className="sizeList">
                {productDatas[0]?.size.map(({ size_id }) => {
                  const sizeTitleText = e => {
                    setSizeButtonTarget(e.target.innerHTML);
                    setSizeButtonHandle(size_id);
                  };
                  return (
                    // button active효과 참고 https://www.geeksforgeeks.org/how-to-switch-css-class-between-buttons-rendered-with-map/
                    <li
                      className="size"
                      key={size_id}
                      onClick={sizeTitleText}
                      style={{
                        backgroundColor:
                          sizeButtonHandle === size_id ? "black" : "",
                        color: sizeButtonHandle === size_id ? "white" : "",
                      }}
                    >
                      {productDatas[0]?.size[size_id - 1].size}
                    </li>
                  );
                })}
              </ul>
            </div>
            <form>
              <button className="shopingListAdd" disabled={true}>
                사이즈 선택하기!
              </button>
              <button className="shopingLikeAdd">
                <i className="far fa-heart hearticon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartAll;
