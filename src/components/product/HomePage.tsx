import React from "react";
import { Link, useParams} from "react-router-dom";
import { useRouter } from "next/router";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import DefaultPage from "./DefaultPage";
import { Product as ProductType } from "./App";

interface RouteParams {
  name: string;
}

interface HomePageProps{
  products: ProductType[];
}
const HomePage:React.FC<HomePageProps> = ({ products }) => {
  
  // useParams needs to be typed after you've setup routes correctly
  const { name } = useParams()

  return (
    <>
    <header className="header">
      <h1>Shopping Cart Project</h1>
      <p>Hey there, this is my react shopping cart project. <br /> Use the nav bar below to go see the product page and the shopping cart with your selected products in there.</p>
      <nav>
        <ul>
          <li><Link to='/homePage/home'>Home</Link></li>
          <li><Link to='/homePage/productList'>Products</Link></li>
          <li><Link to='/homePage/cart'>Cart</Link></li>
        </ul>
      </nav>
    </header>

    <div>
      {name === "productList" ? (
        <ProductList products={products}/>
      ) : name === "cart" ? (
        <Cart />
      ) : name === 'home' ? (
        <div>Welcome to the home page!</div>
      ) :(
        <DefaultPage />
      )}
    </div>
    </>
  )
}

export default HomePage