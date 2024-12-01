import React from "react";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import '../styles/globals.css'

export const metadata = {
  title: 'My Shopping Cart App',
}

const RootLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <html lang="en">
    <body className='text-red-500 bg-yellow-400'>
      <h1 className="text-blue-500">HELLO</h1>
      <Header />
      <CartProvider>
      <main>{children}</main>
      </CartProvider>
    </body>
    </html>
  )
}

export default RootLayout