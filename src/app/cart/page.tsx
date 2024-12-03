import React from "react";
import CartItemList from "./CartItemList";


const Cart = () => {
  return(
    <>
    <h2 className="font-bold text-3xl bg-green-700 leading-loose">Cart</h2>
    <CartItemList />
    </>
  )
}

export default Cart