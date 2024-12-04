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
    <div className="bor rounded mb-8 shadow-xl">
      {/* <div className="product-img-container"> */}
        <img src={product.image} alt={product.title} className="w-full h-auto aspect-square object-contain mb-2"/>
      {/* </div> */}
      <h3 className="font-bold mb-1">{product.title}</h3>
      <p className="mb-1"><span className="font-bold">Price:</span> ${product.price.toFixed(2)}</p>
      <label htmlFor="quantity" id={`quantity-${product.id}`}> <span className="font-bold">Select Quantity: </span> </label>
      <input type="number" id={`quantity-${product.id}`} value={quantity} className="mb-1" onChange={handleQuantityChange} />
      <button onClick={() => handleAddToCart(product, quantity)} className="bg-purple-800 hover:bg-purple-600 rounded block py-2 px-4 text-white">Add to cart</button>
    </div>
  )
}

export default ProductItem