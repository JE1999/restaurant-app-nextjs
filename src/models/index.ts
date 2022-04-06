export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface LineItem {
  id: string;
  quantity: number;
  product: Product;
}

export interface Cart {
  id: string | null;
  items: LineItem[];
}

export interface CartState {
  cart: Cart;
}
