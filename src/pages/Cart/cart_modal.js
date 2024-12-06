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
    <div class="col px-4">
      {cartItems.map((item, index) => (
        <Element
          title={item.title}
          quantity={item.quantity}
          onChange={(value) => updateCartItemQty(index, value)}
        />
      ))}
    </div>
  );
};

export default Cart;
