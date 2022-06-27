import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductList from "./pages/ProductList/ProductList";
import ProductDesc from "./pages/ProductDesc/ProductDesc";
import Signup from "./pages/Signup/Signup";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdesc" element={<ProductDesc />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
