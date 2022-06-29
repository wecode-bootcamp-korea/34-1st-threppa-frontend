import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Size from "../Size/Size";
import "./ProductPurchase.scss";

const ProductPurchase = ({
  handleSizeModal,
  sizeSeverData,
  productSeverData,
}) => {
  const params = useParams();
  const [colorChangeImage, setColorChangeImage] = useState(
    productSeverData.results.colors[0].image_url
  );
  const [color, setColor] = useState("");
  const [sizeSelect, setSizeSelect] = useState("");
  const [isSizeModal, setIsSizeModal] = useState(false);
  const getUserToken = localStorage.getItem("ACCESS_TOKEN");

  const sendToCart = e => {
    e.preventDefault();
    fetch("http://10.58.6.64:8000/products/carts", {
      method: "POST",
      headers: {
        Authorization: getUserToken,
      },
      body: JSON.stringify({
        product_id: params.id,
        color: color,
        size: sizeSelect,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert("장바구니에 추가 하였습니다");
        console.log("result", result);
      });
  };

  return (
    <main className="productPurchase">
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
            <h1 className="infoTitle">{productSeverData.results.name}</h1>
            <p className="infoGender">여성</p>
            <div className="infoPrice">{productSeverData.results.price} ₩</div>
          </div>
          <div className="slippersColor">
            <div className="colorTitle">
              <span>색상 :</span> {color}
            </div>
            <div className="colorList">
              <ul>
                {productSeverData.results.colors.map(colors => {
                  return (
                    <li
                      key={colors.id}
                      className="color"
                      style={{
                        backgroundColor: colors.name,
                        color: colors.name === "White" ? "black" : "white",
                      }}
                      onClick={() => {
                        setColor(colors.name);
                        setColorChangeImage(colors.image_url);
                        setIsSizeModal(true);
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
          {isSizeModal && (
            <Size
              setSizeSelect={setSizeSelect}
              sizeSelect={sizeSelect}
              handleSizeModal={handleSizeModal}
              sizeSeverData={sizeSeverData}
              sendToCart={sendToCart}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductPurchase;
