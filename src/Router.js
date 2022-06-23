import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Popup from "./pages/Login/Popup";
import ProductList from "./pages/ProductList/ProductList";
import ProductDesc from "./pages/ProductDesc/ProductDesc";
import Signup from "./pages/Signup/Signup";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Login2 from "./pages/Login/Login2";
import Signup2 from "./pages/Signup/Signup2";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdesc" element={<ProductDesc />} />
        <Route path="/signup" element={<Signup2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
