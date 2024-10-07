import React from "react";
import "./Navbar.css";
//import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg my-auto nav_col">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="images/logo.svg"
            class="rounded float-start "
            alt="Logo"
            height="48"
            width="48"
          />{" "}
          {/* It is recommended to put img size*/}
          {/* 
            Added classes `d-none d-md-block`  
            `d-none `- means hide on all screens
            `d-md-block` - show on all screens from md and bigger
            thus hidden on mobile, visible from breakpoint md and bigger

            https://getbootstrap.com/docs/5.0/utilities/display/#hiding-elements
          */}
          <span class="fs-4 d-none my-1 d-md-block brand_name">Harchevnya</span>
        </a>
        {/* 
          I've added `order-lg-last` class, look here what it does 
          https://getbootstrap.com/docs/5.0/utilities/flex/#order 
          Note: it is possible bc parent div uses flexbox layout
          
          Also added `ms-auto` to align to the right
          BTW, I believe padding cannot be set to auto (`px-auto py-auto`), that's only possible for margins
          */}
        <div class="d-lg-flex ms-auto order-lg-last">
          <a class="navbar-brand" href="/cart">
            <img
              src="images/Cart Logo.svg"
              class="rounded float-start mx-auto my-auto"
              alt="Cart Logo"
              height="48"
              width="48"
            />
          </a>
          <a class="navbar-brand mx-auto my-auto" href="/sign-up">
            <img
              src="images/Avatar Placeholder.svg"
              class="rounded float-start mx-auto my-1 px-auto py-auto"
              height="40"
              width="40"
              alt="Avatar Placeholder"
            />
          </a>
        </div>
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
        <div class="collapse navbar-collapse my-auto pt-4" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto my-auto mb-auto mb-lg-4">
            <li class="nav-item">
              <a
                class="nav-link my-auto mx-3"
                className="nav_tabs"
                aria-current="page"
                href="/"
              >
                Головна
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link my-auto mx-3"
                className="nav_tabs"
                href="/menu"
              >
                Меню
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link my-auto mx-3"
                className="nav_tabs"
                href="/news"
              >
                Новини
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
