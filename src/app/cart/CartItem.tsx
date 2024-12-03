'use client'

import React from "react"
import { CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {

  const { dispatch } = useCart()
  const handleRemoveFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
  }

  const handleUpdateCart = (id: number, quantity: string) => {
    const parsedQuantity = parseInt(quantity, 10)
    if(!isNaN(parsedQuantity) && parsedQuantity > 0) {
    dispatch({ type: 'UPDATE_CART_ITEM', payload: { id, quantity: parsedQuantity } })
  }
}

  return (
    <div className="rounded mb-8 shadow-xl">
      {/* <div className="cart-item-img-container"> */}
        <img src={item.image} alt={item.title} className="w-full h-auto aspect-square object-contain"/>
      {/* </div> */}
      <h3>{item.title}</h3>
      <p> <span className="font-bold">Price: </span> ${item.price.toFixed(2)}</p>
      <label htmlFor=""><span className="font-bold">Quantity: </span></label>
      <input 
       type="number"
       value={item.quantity}
       min={1}
       onChange={e => handleUpdateCart(item.id, e.target.value)}/>
      <button onClick={() => handleRemoveFromCart(item.id)} className="block font-bold bg-orange-600 hover:bg-orange-400 px-4 py-2 rounded">Remove</button>
    </div>
  )
}

export default CartItem