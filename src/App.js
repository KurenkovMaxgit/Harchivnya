import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/";
import Menu from "./pages/menu";
import News from "./pages/news";
import SignUp from "./pages/signup";
import Cart from "./pages/cart";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
                <Route path="/news" element={<News />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;