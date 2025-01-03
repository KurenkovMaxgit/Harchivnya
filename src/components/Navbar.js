import React from "react";
import "./Navbar.css";
import { selectToken } from "../features/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartModal from "../pages/Cart/cart_modal";

//import { NavLink as Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const getUserHandler = async (e) => {
    e.preventDefault();
    if (token === null) {
      navigate("/login");
    } else {
      navigate("/sign-up");
    }
  };

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
              Harchivnya
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
            <button
              className="btn navbar-brand mx-auto my-auto"
              onClick={(e) => getUserHandler(e)}
            >
              <img
                src="images/Avatar Placeholder.svg"
                className="rounded float-start mx-auto my-1 px-auto py-auto"
                height="40"
                width="40"
                alt="Avatar Placeholder"
              />
            </button>
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
      <CartModal />
    </>
  );
};

/* function IsRegisered() {
  const dispatch = useDispatch();
  const token = selectToken();

  const getUserHandler = async (e) => {
    e.preventDefault();
    console.log(selectToken());
    const res = await dispatch(getUserDetails());
    if (selectToken() == null || getUserDetails.rejected.match(res)) {
      return (
        <div>
          <div>
            <div className="modal-footer">
              <div className="col-6 text-center">Ви не увійшли в аккаунт</div>
              <div className="col">
                <a
                  type="button"
                  className="btn btn-primary col-12 mx-auto"
                  href="/register"
                >
                  Створити
                </a>
              </div>
              <div className="col">
                <a
                  type="button"
                  className="btn btn-primary col-12 mx-auto"
                  href="/login"
                >
                  Увійти
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal-footer">
          <a
            type="button"
            className="btn btn-primary col-3 mx-auto"
            href="/cart"
          >
            Замовити
          </a>
        </div>
      );
    }
  };

  return getUserHandler();

  if (
    getUserDetails.rejected.match(async () => await dispatch(getUserDetails()))
  ) {
    return (
      <div className="modal-footer">
        <a type="button" className="btn btn-primary col-3 mx-auto" href="/cart">
          Замовити
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <div className="modal-footer">
            <div className="col-6 text-center">Ви не увійшли в аккаунт</div>
            <div className="col">
              <a
                type="button"
                className="btn btn-primary col-12 mx-auto"
                href="/register"
              >
                Створити
              </a>
            </div>
            <div className="col">
              <a
                type="button"
                className="btn btn-primary col-12 mx-auto"
                href="/login"
              >
                Увійти
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
} */
export default Navbar;
