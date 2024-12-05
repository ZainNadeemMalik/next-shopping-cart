'use client'

import React, { useState, useContext } from "react"
import { CartContext } from "@/context/CartContext";
import { Product } from "@/types"
import toast from "react-hot-toast";

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

  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1))


  const handleAddToCart = (product: Product, quantity: number) => {
    dispatch({ type:'ADD_TO_CART', payload: {...product, quantity: quantity }})
    toast.dismiss()

    setTimeout(() => {
    toast.success(`${product.title} added to cart`, { id: `add-${product.id}`, duration: 3000})
    }, 200);
  }

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = parseInt(e.target.value, 10)
    if(newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="bor rounded mb-8 shadow-xl">

        <img src={product.image} alt={product.title} className="w-full h-auto aspect-square object-contain mb-2"/>

      <div className="p-4">
        <h3 className="font-bold mb-1">{product.title}</h3>
        <p className="mb-1"><span className="font-bold">Price:</span> ${product.price.toFixed(2)}</p>

          <label htmlFor="quantity" id={`quantity-${product.id}`}> <span className="font-bold">Select Quantity: </span> </label>

        <div className="flex items-center p-2 gap-2">
          <button onClick={() => handleIncrement()} className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-orange-600 hover:bg-orange-700">+</button>

          <input type="number" id={`quantity-${product.id}`} value={quantity} className="mb-1" onChange={handleQuantityChange} />

          <button onClick={() => handleDecrement()} className="flex justify-center items-center w-8 h-8 text-white font-bold rounded-full bg-orange-600 hover:bg-orange-700">-</button>
        </div>

        <button onClick={() => handleAddToCart(product, quantity)} className="bg-green-700 hover:bg-green-800 rounded block py-2 px-4 text-white">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductItem