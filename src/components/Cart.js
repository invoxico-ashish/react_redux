import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice"
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispactch = useDispatch();
  const ShowCart = () => {
    dispactch(cartAction.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={ShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
