import React from "react";
import Element from "./components/quantity_element";
import CartContent from "./cart_content";
const Cart = () => {
  const [cartItems, setCartItems] = React.useState([
    { title: "Apple", quantity: 4 },
    { title: "Coconut", quantity: 3 },
    { title: "Coconut", quantity: 3 },
    { title: "Coconut", quantity: 3 },
    
  ]);

  function updateCartItemQty(index, value) {
    const updatedCartItems = cartItems.map((item, i) => {
      if (index !== i) return item;
      item.quantity = value;
      return item;
    });
    console.log(updatedCartItems);
    setCartItems(updatedCartItems);
  }

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

          <a className="btn btn-primary col-5 d-block mt-3 " href="/menu">
            Назад до меню
          </a>
        </div>
        <CartContent/>
      </div>
    </div>
  );
};

export default Cart;
