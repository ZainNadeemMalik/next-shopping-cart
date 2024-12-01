import React from "react";
import ProductItem from "./ProductItem";
import { Product as ProductType } from "./App";

interface ProductListPropsType {
  products: ProductType[];
}
const ProductList:React.FC<ProductListPropsType> = ({ products }) => {
  
  console.log('Products:', products)
  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  return(
    <div className="product-container">
      {products.map(product => (
        <ProductItem
        key={product.id}
        product={product}
        />
      ))}
    </div>
  )
}

export default ProductList