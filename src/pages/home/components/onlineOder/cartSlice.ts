import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string; // or number, depending on your ID system
  quantity: number;
  rate: number;
}

interface CartState {
  cart: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  cart: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cart.push({ ...newItem });
      }
      state.totalAmount += newItem.rate * newItem.quantity;
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      // Adjust the type based on your ID
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        const item = state.cart[index];
        state.totalAmount -= item.rate * item.quantity;
        state.cart.splice(index, 1);
      }
    },
    increaseItemQuantity: (state, action: PayloadAction<{ id: string }>) => {
      // Adjust the type based on your ID
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        state.totalAmount += item.rate;
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<{ id: string }>) => {
      // Adjust the type based on your ID
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalAmount -= item.rate;
      }
    },
  },
});
