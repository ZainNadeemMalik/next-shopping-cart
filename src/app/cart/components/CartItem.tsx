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
    <div className="cart-item">
      <div className="cart-item-img-container">
        <img src={item.image} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.price.toFixed(2)}</p>
      <input 
       type="number"
       value={item.quantity}
       min={1}
       onChange={e => handleUpdateCart(item.id, e.target.value)}/>
      <button onClick={() => handleRemoveFromCart(item.id)} className="remove-from-cart-button">Remove</button>
    </div>
  )
}

export default CartItem