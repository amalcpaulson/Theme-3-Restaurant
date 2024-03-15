import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "./landing/landingSlice";
import cartReducer from "./cart/cartSlice";
import editorReducer from "./editor/editorSlice";
import itemReducer from "./items/itemSlice";

export const store = configureStore({
    reducer: {
		landing: landingReducer,
		cart: cartReducer,
		editor: editorReducer,
		item: itemReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;