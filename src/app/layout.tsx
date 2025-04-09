import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import './globals.css'

export const metadata = {
  title: 'Digital Mandi',
}

const RootLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <html lang="en">
    <body className="">
      <Header />
      <CartProvider>
        <Toaster position="top-right" reverseOrder={false} toastOptions={{duration: 3000}}/>
      <main>{children}</main>
      </CartProvider>
      <Footer />
    </body>
    </html>
  )
}

export default RootLayout