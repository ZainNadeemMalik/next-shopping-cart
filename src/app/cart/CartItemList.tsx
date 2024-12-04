'use client'

import React, { useMemo } from "react"
import CartItem from "../../app/cart/CartItem"
import { CartItemType } from "@/types"
import { useCart } from "@/context/CartContext"


export default function CartItemList() {
  const { cart } = useCart()

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0) 
  }, [cart]) 

 return (
  <div className="">
    {cart.length === 0 ? (
      <p className="min-h-dvh text-center font-bold text-4xl mt-6">Your cart is empty</p>
    ) : (
      <div className="min-h-dvh grid auto-cols-min p-8">
        {cart.map((item: CartItemType) => (
          <CartItem
          key={item.id}
          item={item}/>
        ))}
        
      
      </div>
    )}
    <div className="bg-purple-800 text-white px-8 py-4">
      <button className="font-bold bg-pink-600 hover:bg-pink-400 rounded py-2 px-4 mb-4">Proceed to checkout</button>
        <div className="cart-total">
          <h3> <span className="font-bold">Total price: </span> ${totalPrice.toFixed(2)}</h3>
        </div>
    </div>
  </div>
 ) 
}