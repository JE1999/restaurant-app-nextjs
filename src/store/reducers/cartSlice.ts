import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartState, LineItem } from 'models';
import { v4 as uuidv4 } from 'uuid';

export const initialState: CartState = {
  cart: {
    id: uuidv4(),
    items: [],
  },
};

export const authSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
    addLineItem: (state, action: PayloadAction<LineItem>) => {
      state.cart!.items = [...state.cart!.items, action.payload];
    },
  },
});

export const { actions, reducer } = authSlice;
