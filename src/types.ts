export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItemType {
  id: number;
 title: string;
 price: number;
 quantity: number;
 description: string;
 category: string;
 image: string;
 rating: {
   rate: number;
   count: number;
 };
}



export type Products = Product[]