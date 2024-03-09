import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a TypeScript interface for the cart item
interface CartItem {
	id: string; // Assuming ID is a string, adjust if necessary
	quantity: number;
	rate: number;
}

// Define a TypeScript interface for the slice state
interface CartState {
	cart: CartItem[];
	totalAmount: number;
}

// Initial state with types applied
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
			const existingItem = state.cart.find(
				(item) => item.id === newItem.id
			);
			if (existingItem) {
				existingItem.quantity += newItem.quantity;
			} else {
				state.cart.push(newItem);
			}
			state.totalAmount += newItem.rate * newItem.quantity;
		},
		removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (index !== -1) {
				const item = state.cart[index];
				state.totalAmount -= item.rate * item.quantity;
				state.cart.splice(index, 1);
			}
		},
		increaseItemQuantity: (
			state,
			action: PayloadAction<{ id: string }>
		) => {
			const item = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (item) {
				item.quantity++;
				state.totalAmount += item.rate;
			}
		},
		decreaseItemQuantity: (
			state,
			action: PayloadAction<{ id: string }>
		) => {
			const item = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (item && item.quantity > 1) {
				item.quantity--;
				state.totalAmount -= item.rate;
			}
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	increaseItemQuantity,
	decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
