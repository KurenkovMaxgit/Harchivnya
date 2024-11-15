import React from "react";
import Element from "./components/quantity_element";

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
    <div class="container">
      <h1 className="text-center">Кошик</h1>
      <div class="row col-9 mx-auto row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <div class="col mb-3">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label for="floatingInput">Адреса</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label for="floatingInput">Під'їзд</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label for="floatingInput">Поверх</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label for="floatingInput">Квартира</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              class="form-control border border-1 border-black"
              id="floatingInput"
              placeholder=""
            />
            <label for="floatingInput">Номер телефону</label>
          </div>

          <a class="btn btn-primary col-5 d-block mt-3 " href="/menu">
            Назад до меню
          </a>
        </div>
        <div class="col px-4">
          {cartItems.map((item, index) => (
              <Element
                title={item.title}
                quantity={item.quantity}
                onChange={(value) => updateCartItemQty(index, value)}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
