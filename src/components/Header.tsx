import React from "react";
import Navbar from "./Navbar";


const Header: React.FC = () => {
 return (
  <header>
    <h1 className="text-center text-4xl font-bold bg-red-500 leading-relaxed">Next.js Shopping Cart</h1>
    <Navbar />
  </header>
 )
}

export default Header