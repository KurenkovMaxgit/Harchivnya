import React from "react";
import CartItem from "./components/cart_item";
import { selectCartItems } from "../../features/cartSlice";
import { useSelector } from "react-redux";
import { selectItems } from "../../features/productSlice";

function CartContent() {
  const cartItems = useSelector(selectCartItems);
  const allProducts = useSelector(selectItems);

  const itemDetails = cartItems.map((cartItem) => {
    const product = allProducts.find(
      (product) => product.id === cartItem.itemId
    );
    return {
      ...cartItem,
      id: cartItem.itemId, // just for convenience
      name: product?.name ?? undefined, // Fallback for missing products
      price: product?.price ?? undefined,
    };
  });

  return (
    <div className="col">
      {itemDetails.map((item) => (
        <CartItem key={item.itemId} item={item} />
      ))}
    </div>
  );
}

export default CartContent;
