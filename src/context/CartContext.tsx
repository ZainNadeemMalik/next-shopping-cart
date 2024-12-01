'use client'

import React, { createContext, useReducer, ReactNode, Dispatch, useContext } from 'react';
import cartReducer from './CartReducer';
import { CartAction } from './CartReducer';
import { CartItemType } from '@/types';
// import { CartState } from '@/components/cart/CartReducer';

export interface CartContextProps {
  cart: CartItemType[];
  dispatch: Dispatch<CartAction>;
 }

 interface CartState {
  cart: CartItemType[];
 }

const initialCartState: CartState = {
  cart: [],
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextProps => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export { CartContext, CartProvider, useCart };
