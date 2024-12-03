'use client'

import React, { useState, useContext } from "react"
import { CartContext } from "@/context/CartContext";
import { Product } from "@/types"

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('CartItem must be used within a CartProvider')
  }

  const { dispatch } = context
  const [quantity, setQuantity] = useState<number>(1)

  const handleAddToCart = (product: Product, quantity: number) => {
    dispatch({ type:'ADD_TO_CART', payload: {...product, quantity: quantity }})
  }

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = parseInt(e.target.value, 10)
    if(newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="border rounded">
      {/* <div className="product-img-container"> */}
        <img src={product.image} alt={product.title} className="w-full h-auto aspect-square object-contain"/>
      {/* </div> */}
      <h3>{product.title}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <label htmlFor="quantity" id={`quantity-${product.id}`}>Select Quantity:</label>
      <input type="number" min={1} id={`quantity-${product.id}`} value={quantity} onChange={handleQuantityChange} />
      <button onClick={() => handleAddToCart(product, quantity)} className="add-to-cart-button">Add to cart</button>
    </div>
  )
}

export default ProductItem