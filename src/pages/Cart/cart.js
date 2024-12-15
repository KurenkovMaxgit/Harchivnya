import React from "react";
import CartContent from "./cart_content";
import { placeOrderAsync, selectCartItems } from "../../features/cartSlice";
import { useDispatch } from "react-redux";



const Cart = () => {
  const dispatch = useDispatch();
  const items = selectCartItems; // Select items from state

  const placeOrder = () => {
    
    dispatch(placeOrderAsync(items)); // Dispatch the thunk
  };

  return (
    <div className="container">
      <h1 className="text-center">Кошик</h1>
      <div className="row col-9 mx-auto row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <div className="col mb-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput">Адреса</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput">Під'їзд</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput">Поверх</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput">Квартира</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput">Номер телефону</label>
          </div>
        </div>
        <CartContent />
        <div className=" col">
          <div className="row">
            <div className="col">
              <a className="btn btn-primary col-12 d-block" href="/menu">
                Назад до меню
              </a>
            </div>
            <div className="col">
              <button className="btn btn-primary col-12 d-block"
              onClick={()=>placeOrder()}>
                Замовити
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
