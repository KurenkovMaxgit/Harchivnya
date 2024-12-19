import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../features/authSlice";
import CartContent from "./cart_content";

const CartModal = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  return (
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

          {Boolean(token) ? (
            <div className="modal-footer">
              <a
                type="button"
                className="btn btn-primary col-3 mx-auto"
                href="/cart"
              >
                Замовити
              </a>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
