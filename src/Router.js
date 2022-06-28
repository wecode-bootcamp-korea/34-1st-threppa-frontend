import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductList from "./pages/ProductList/ProductList";
import ProductDesc from "./pages/ProductDesc/ProductDesc";
import Signup from "./pages/Signup/Signup";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toast/Toast";
import AppContext from "./AppContext";

export default function Router() {
  const [toastMessage, setToastMessage] = useState([]);

  return (
    <AppContext.Provider value={{ toastMessage, setToastMessage }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productdesc" element={<ProductDesc />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
    </AppContext.Provider>
  );
}
