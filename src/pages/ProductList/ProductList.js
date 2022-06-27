import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.scss";

const ProductList = () => {
  const navigate = useNavigate();
  const goToProductDesc = () => {
    navigate("/productdesc");
    console.log("hello");
  };
  return <button onClick={goToProductDesc}>페이지 이동</button>;
};

export default ProductList;
