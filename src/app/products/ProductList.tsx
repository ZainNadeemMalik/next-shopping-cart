import React from "react";
import ProductItem from "./ProductItem";
import redaxios from 'redaxios'
import { Product } from "@/types";

const ProductList:React.FC = async () => {

  const res = await redaxios.get<Product[]>('https://fakestoreapi.com/products')
  const products = res.data
  console.log('Products:', products)
  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  return(
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-yellow-400">
      {products.map((product: Product) => (
        <ProductItem
        key={product.id}
        product={product}
        />
      ))}
    </div>
  )
}

export default ProductList