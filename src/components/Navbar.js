import React from "react";
import "./Navbar.css";
import CartContent from "../pages/Cart/cart_content";
//import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg my-auto nav_col">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="images/logo.svg"
              className="rounded float-start "
              alt="Logo"
              height="48"
              width="48"
            />
            <span className="fs-4 d-none my-1 d-md-block brand_name">
              Harchevnya
            </span>
          </a>
          <div className="d-lg-flex ms-auto me-2 order-lg-last">
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src="images/Cart Logo.svg"
                className="rounded float-start mx-auto my-auto"
                alt="Cart Logo"
                height="48"
                width="48"
              />
            </button>
            <a className="navbar-brand mx-auto my-auto" href="/sign-up">
              <img
                src="images/Avatar Placeholder.svg"
                className="rounded float-start mx-auto my-1 px-auto py-auto"
                height="40"
                width="40"
                alt="Avatar Placeholder"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse my-auto pt-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto my-auto mb-auto mb-lg-4">
              <li className="nav-item">
                <a
                  className="nav-link my-auto mx-3 nav_tabs"
                  aria-current="page"
                  href="/"
                >
                  Головна
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link my-auto mx-3 nav_tabs" href="/menu">
                  Меню
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link my-auto mx-3 nav_tabs" href="/news">
                  Новини
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 mx-auto" id="exampleModalLabel">
                Кошик
              </h1>
            </div>
            <div className="modal-body">
              <CartContent />
            </div>
            <div className="modal-footer">
              <a
                type="button"
                className="btn btn-primary col-3 mx-auto"
                href="/cart"
              >
                Замовити
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
