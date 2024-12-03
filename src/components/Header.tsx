import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";


const Header: React.FC = () => {
 return (
  <header>
    <Link href="/" className="block">
    <h1 className="text-center text-4xl font-bold bg-red-500 leading-relaxed">Next.js Shopping Cart</h1>
    </Link>
    <Navbar />
  </header>
 )
}

export default Header