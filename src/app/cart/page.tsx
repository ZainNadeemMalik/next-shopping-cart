'use client'

import React, { useMemo } from "react"
import CartItem from "../../app/cart/components/CartItem"
import { CartItemType } from "@/types"
import { useCart } from "@/context/CartContext"


export default function Cart() {
  const { cart } = useCart()

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0) 
  }, [cart]) 

 return (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <div>
        {cart.map((item: CartItemType) => (
          <CartItem
          key={item.id}
          item={item}/>
        ))}
        <div className="cart-total">
          <h3>Total price: ${totalPrice.toFixed(2)}</h3>
        </div>
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    )}
  </div>
 ) 
}