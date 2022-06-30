import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toast/Toast";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductList from "./pages/ProductList/ProductList";
import ProductDesc from "./pages/ProductDesc/ProductDesc";
import Signup from "./pages/Signup/Signup";
import Cart from "./pages/Cart/Cart";

export default function Router() {
  const [toastMessage, setToastMessage] = useState([]);

  return (
    <AppContext.Provider value={{ toastMessage, setToastMessage }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDesc />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
    </AppContext.Provider>
  );
}
