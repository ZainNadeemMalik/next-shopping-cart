import React from "react";
import Link from "next/link"; 

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-">
      <ul className="flex justify-around font-bold">
        <li className="flex-1 text-center"><Link className="block h-full w-full hover:bg-blue-600" href="/">Home</Link></li>
        <li className="flex-1 text-center"><Link className="block h-full w-full hover:bg-blue-600" href="products">Products</Link></li>
        <li className="flex-1 text-center"><Link className="block h-full w-full hover:bg-blue-600" href="cart">Cart</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar