import React from "react";
import "./cart_item.css";
import { removeItem, setAmount } from "../../../features/cartSlice";
import { useDispatch } from "react-redux";
import QuantityInput from "./quantity_input";
import { ReactSVG } from "react-svg";

function CartItem(props) {
  const dispatch = useDispatch();
  const { item } = props;

  const title = item.name ?? "Unknown";
  const price = item.price ? item.price.toFixed(2) : "-";

  function updateCartItemQty(value) {
    if ((value = Math.max(1, value)))
      dispatch(setAmount({ itemId: item.id, quantity: value }));
  }

  function deleteItem() {
    dispatch(removeItem({ itemId: item.id }));
  }

  return (
    <div className="rounded-3 border border-1 pe-2 border-black mb-3 d-flex flex-wrap align-items-center cart-item">
      {/* Item image */}
      <img
        className=""
        src="images\Cart Logo.svg"
        alt="prod.photo"
        width="56"
        height="56"
      />
      {/* Item name */}
      <div className="title">{title}</div>
      {/* Item Price */}
      <div className="ms-auto price">{price}₴</div>
      {/* Quantity Input */}
      <QuantityInput
        quantity={item.quantity}
        onChange={(value) => updateCartItemQty(value)}
      />
      {/* Delete button */}
      <button
        className="btn btn-outline-danger delete-button"
        onClick={() => deleteItem()}
      >
        <ReactSVG
          src="/images/cross_delete_remove_icon.svg"
        />
      </button>
    </div>
  );
}

export default CartItem;
