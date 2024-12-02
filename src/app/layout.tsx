import React from "react";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import './globals.css'

export const metadata = {
  title: 'My Shopping Cart App',
}

const RootLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <html lang="en">
    <body className="min-h-dvh">
      <Header />
      <CartProvider>
      <main className="">{children}</main>
      </CartProvider>
    </body>
    </html>
  )
}

export default RootLayout