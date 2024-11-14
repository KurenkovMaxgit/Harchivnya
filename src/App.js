import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer_boo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Menu from "./pages/Menu/menu";
import News from "./pages/News/news";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/cart";
import Login from "./pages/Login/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
        <Route path="/sign-up" element={<Account />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
