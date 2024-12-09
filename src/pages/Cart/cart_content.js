import React from "react";
import Element from "./components/quantity_element";
import { selectCartItems, setAmount } from "../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function CartContent(props) {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  function updateCartItemQty(itemId, value) {
    if(value=Math.max(1, value))
    dispatch(setAmount({ itemId: itemId, quantity: value }))
  }

  return (
    <div className="col px-4">
      {cartItems.map((item, index) => (
        <Element
          title={item.itemId}
          quantity={item.quantity}
          onChange={(value) => updateCartItemQty(item.itemId, value)}
        />
      ))}
    </div>
  );
}

export default CartContent;
