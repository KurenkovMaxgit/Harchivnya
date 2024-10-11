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
          />
          <span class="fs-4 d-none my-1 d-md-block brand_name">Harchevnya</span>
        </a>
        
        <div class="d-lg-flex ms-auto me-2 order-lg-last">
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
