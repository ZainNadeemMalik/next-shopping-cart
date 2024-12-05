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

  const handleUpdateCart = (id: number, quantity: number) => {
    if(quantity > 0) {
    dispatch({ type: 'UPDATE_CART_ITEM', payload: { id, quantity } })
  }
}

const handleIncrement = () => {
  handleUpdateCart(item.id, item.quantity + 1)
}

const handleDecrement = () => {
  if(item.quantity > 1) {
  handleUpdateCart(item.id, item.quantity - 1)
}
}

  return (
    <div className="rounded mb-8 shadow-xl">
 
        <img src={item.image} alt={item.title} className="w-full h-auto mb-2 aspect-square object-contain"/>

      <div className="p-4">
        <h3 className="font-bold mb-1">{item.title}</h3>
        <p className="mb-1"><span className="font-bold">Price: </span> ${item.price.toFixed(2)}</p>

        <label htmlFor={`quantity-${item.id}`}><span className="font-bold">Change Quantity: </span></label>

      <div className="flex items-center p-2 gap-2">

        <button className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-orange-600 hover:bg-orange-700" onClick={() => handleIncrement()}>+</button>

          <input 
          type="number"
          id={`quantity-${item.id}`}
          className="mb-1"
          value={item.quantity}
          min={1}
          onChange={e => handleUpdateCart(item.id, Number(e.target.value))}/>

          <button className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-orange-600 hover:bg-orange-700" onClick={() => handleDecrement()}>-</button>
        </div>

        <button onClick={() => handleRemoveFromCart(item.id)} className="block font-bold text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded">Remove</button>
      </div>
    </div>
  )
}

export default CartItem