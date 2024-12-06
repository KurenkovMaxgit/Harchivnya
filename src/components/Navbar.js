import React from "react";
import "./Navbar.css";
import Cart from "../pages/Cart/cart_modal";
//import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
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
            <span class="fs-4 d-none my-1 d-md-block brand_name">
              Harchevnya
            </span>
          </a>
          <div class="d-lg-flex ms-auto me-2 order-lg-last">
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src="images/Cart Logo.svg"
                class="rounded float-start mx-auto my-auto"
                alt="Cart Logo"
                height="48"
                width="48"
              />
            </button>
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
          <div
            class="collapse navbar-collapse my-auto pt-4"
            id="navbarSupportedContent"
          >
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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 mx-auto" id="exampleModalLabel">
                Кошик
              </h1>
            </div>
            <div class="modal-body">
              <Cart/>
            </div>
            <div class="modal-footer">
        <a type="button" className="btn btn-primary col-3 mx-auto" href="/cart">Замовити</a>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
