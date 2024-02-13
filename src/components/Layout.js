import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems"
import "./Layout.css";
import { useSelector } from "react-redux";
// import Notifications from "./Notifications";
import { successToast } from "../utils/notifications"
import { Toaster } from 'react-hot-toast';
const Layout = () => {
  let total = 0;
  const showCart = useSelector((state) => state.cart.showCart);
  const itemList = useSelector((state) => state.cart.itemList);
  itemList.forEach(i => {
    total += i.totalPrice;
  });
  const handleClick = () => {
    successToast("Order Placed Successfull")
  }
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn" onClick={handleClick}>Place Order</button>
        </div>{" "}
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}

      />
    </React.Fragment>
  );
};

export default Layout;
