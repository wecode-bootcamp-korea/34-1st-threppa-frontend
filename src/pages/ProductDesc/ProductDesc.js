import React from "react";
import "./ProductDesc.scss";
import { useState, useEffect } from "react";
import RecommendProducts from "./components/RecommendProducts/RecommendProducts";
import NewProducts from "./components/NewProducts/NewProducts";
import CartAll from "./components/CartAll/CartAll";

const ProductDesc = () => {
  const [productDatas, setProductData] = useState([]);
  const [productSeverData, setProductSeverData] = useState();
  const [sizeSeverData, setSizeSeverData] = useState();

  const [sizeModal, setSizeModal] = useState(false);

  const handleSizeModal = () => {
    setSizeModal(true);
  };
  useEffect(() => {
    fetch("/datas/productData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  // productData
  useEffect(() => {
    fetch("http://10.58.3.27:8000/products/1", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        setProductSeverData(productData);
      });
  }, []);

  // productsSizeData
  useEffect(() => {
    fetch("http://10.58.3.27:8000/products/sizes", {
      method: "GET",
    })
      .then(res => res.json())
      .then(sizeData => {
        setSizeSeverData(sizeData);
      });
  }, []);

  return (
    <div className="productDescPage">
      {sizeModal === true && <SizeTableModal setSizeModal={setSizeModal} />}
      <CartAll
        productDatas={productDatas}
        handleSizeModal={handleSizeModal}
        sizeSeverData={sizeSeverData}
        productSeverData={productSeverData}
      />
      <footer className="bottomContainer">
        <RecommendProducts recommendProductDatas={productDatas} />
        <NewProducts newProductDatas={productDatas} />
      </footer>
    </div>
  );
};

const SizeTableModal = ({ setSizeModal }) => {
  return (
    <>
      <div className="blackModal" />
      <div className="whiteModalStickyBox">
        <div className="whiteModal">
          <button
            onClick={() => {
              setSizeModal(false);
            }}
          >
            X
          </button>
          <img src="./images/sizeTable_01.png" alt="nonono!" />
        </div>
      </div>
    </>
  );
};

export default ProductDesc;
