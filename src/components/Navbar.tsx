import React from "react";
import Link from "next/link"; 

const Navbar: React.FC = () => {
  return (
    <nav className="bg-yellow-500">
      <ul className="flex justify-around font-bold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="products">Products</Link></li>
        <li><Link href="cart">Cart</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar