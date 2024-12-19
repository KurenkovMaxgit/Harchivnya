import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer_boo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Menu from "./pages/Menu/menu";
import News from "./pages/News/news";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/cart";
import LoginCorrect from "./pages/LoginCorrect/Login";
import Register from "./pages/Register/Register";
import { useDispatch } from "react-redux";
import { getUserDetails } from "./features/usersAPISliceAxios";

function App() {
  const dispatch = useDispatch();
  dispatch(getUserDetails());

  return (
    <Router className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
        <Route path="/sign-up" element={<Account />} />
        <Route path="/login" element={<LoginCorrect />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
