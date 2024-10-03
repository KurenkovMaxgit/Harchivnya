import React from "react";
import './Navbar.css'
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg my-auto nav_col">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="images/logo.svg" class="rounded float-start " alt="Logo"/>
        </a>
            <a class="brand_name" href="/">
              Harchevnya
            </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto my-3 mb-auto mb-lg-4">
            <li class="nav-item">
              <a class="nav-link my-auto mx-3" className="nav_tabs" aria-current="page" href="/">
                Головна
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link my-auto mx-3" className="nav_tabs" href="/menu">
                Меню
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link my-auto mx-3" className="nav_tabs" href="/news">
                Новини
              </a>
            </li>
          </ul>
          <div class="d-flex" >
          <a class="navbar-brand" href="/cart">
            <img src="images/Cart Logo.svg" class="rounded float-start mx-auto" alt="Cart Logo"/>
            </a> 
            <a class="navbar-brand" href="/sign-up">
            <img src="images/Avatar Placeholder.svg" class="rounded float-start mt-2" alt="Avatar Placeholder"/>
            </a>
            <a class="username my-auto mx-3">
              Username
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

{
  /* <Nav>
  <NavMenu>
    <NavLink to="/about" activeStyle>
      About
    </NavLink>
    <NavLink to="/contact" activeStyle>
      Contact Us
    </NavLink>
    <NavLink to="/blogs" activeStyle>
      Blogs
    </NavLink>
    <NavLink to="/sign-up" activeStyle>
      Sign Up
    </NavLink>
  </NavMenu>
</Nav> */
}
