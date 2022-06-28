import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecommendProducts from "./components/RecommendProducts/RecommendProducts";
import NewProducts from "./components/NewProducts/NewProducts";
import ProductPurchase from "./components/ProductPurchase/ProductPurchase";
import SizeTableModal from "./components/SizeTableModal/SizeTableModal";
import "./ProductDesc.scss";

const ProductDesc = () => {
  const params = useParams();
  const [recommendAndNew, setRecommendAndNew] = useState([]);
  const [productSeverData, setProductSeverData] = useState({});
  const [sizeSeverData, setSizeSeverData] = useState();
  const [isSizeModal, setIsSizeModal] = useState(false);

  const handleSizeModal = () => {
    setIsSizeModal(true);
  };

  useEffect(() => {
    fetch("/datas/productData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setRecommendAndNew(data);
      });
  }, []);

  // productData
  useEffect(() => {
    fetch(`http://10.58.6.64:8000/products/${params.id}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        setProductSeverData(productData);
      });
  }, []);

  // productsSizeData
  useEffect(() => {
    fetch("http://10.58.6.64:8000/products/sizes", {
      method: "GET",
    })
      .then(res => res.json())
      .then(sizeData => {
        setSizeSeverData(sizeData);
      });
  }, []);

  return (
    <div className="productDescPage">
      {isSizeModal && <SizeTableModal setIsSizeModal={setIsSizeModal} />}
      <ProductPurchase
        // productDatas={productDatas}
        handleSizeModal={handleSizeModal}
        sizeSeverData={sizeSeverData}
        productSeverData={productSeverData}
      />
      <footer className="bottomContainer">
        <RecommendProducts recommend={recommendAndNew} />
        <NewProducts newproduct={recommendAndNew} />
      </footer>
    </div>
  );
};

export default ProductDesc;
