import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "./landing/landingSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
		landing: landingReducer,
		cart: cartReducer,
	},
})