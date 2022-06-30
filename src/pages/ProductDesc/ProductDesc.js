import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecommendProducts from "./components/RecommendProducts/RecommendProducts";
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
    fetch("/datas/Product.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setRecommendAndNew(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.4.136:8000/products/${params.id}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        setProductSeverData(productData);
      });
  }, [params.id]);

  useEffect(() => {
    fetch("http://10.58.4.136:8000/products/sizes", {
      method: "GET",
    })
      .then(res => res.json())
      .then(sizeData => {
        setSizeSeverData(sizeData);
      });
  }, []);

  if (Object.keys(productSeverData).length === 0) return <>loading...</>;

  return (
    <>
      {isSizeModal && <SizeTableModal setIsSizeModal={setIsSizeModal} />}
      <div className="productDescPage">
        <ProductPurchase
          handleSizeModal={handleSizeModal}
          sizeSeverData={sizeSeverData}
          productSeverData={productSeverData}
        />
        <footer className="bottomContainer">
          <RecommendProducts
            recommend={recommendAndNew}
            newproduct={recommendAndNew}
          />
        </footer>
      </div>
    </>
  );
};

export default ProductDesc;
