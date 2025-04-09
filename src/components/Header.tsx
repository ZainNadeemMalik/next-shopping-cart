import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";


const Header: React.FC = () => {
 return (
  <header className="bg-black text-white">
    <Link href="/" className="block">
    <h1 className="text-center text-4xl font-bold bg-rd-500 leading-relaxed">Digital Mandi</h1>
    </Link>
    <Navbar />
  </header>
 )
}

export default Header