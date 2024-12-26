import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer_boo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Menu from "./pages/Menu/menu";
import News from "./pages/News/news";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/cart";
import LoginCorrect from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./features/userSlice";
import { getAllItems } from "./features/productSlice";
import { selectStatus } from "./features/cartSlice";
import PasswordChange from "./pages/Login/passwordChange";
import { ToastContainer } from 'react-toastify';


function App() {
  const dispatch = useDispatch();
  dispatch(getUserDetails());
  const storeStatus = useSelector(selectStatus);
  
  useEffect(() => {
    if (storeStatus === "idle") {
      dispatch(getAllItems());
    }
  }, [storeStatus, dispatch]);

  return (
    <Router className="container">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
        <Route path="/sign-up" element={<Account />} />
        <Route path="/login" element={<LoginCorrect />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordChange" element={<PasswordChange />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
