import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart.jsx";
import Details from "./components/Details.jsx";
import Filters from "./components/Filters.jsx";
import Navbar from "./components/Navbar.jsx";
import { calculateTotal } from "./featues/cart/CartSlice.jsx";
import 'react-toastify/dist/ReactToastify.css';
import About from "./components/About.jsx";
import Shop from "./components/Shop.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

  const {cartItems} = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Filters />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/shop" element={<Shop/>} />
        {/* </> */}
        </Routes>
        <Footer/>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
};

export default App;
