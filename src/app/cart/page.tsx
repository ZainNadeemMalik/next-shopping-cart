import React from "react";
import CartItemList from "./CartItemList";


const Cart = () => {
  return(
    <>
    <h2 className="font-bold text-3xl p-2 bg-purple-800 text-white leading-loose">Cart</h2>
    <CartItemList />
    </>
  )
}

export default Cart