import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state with types applied
const initialState: Items = {
	search: "",
	sort: "",
	filter: "",
	tab: "OrderOnline",
};

export const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {
		addSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		addSort: (state, action: PayloadAction<string>) => {
			state.sort = action.payload;
		},
		addFilter: (state, action: PayloadAction<string>) => {
			state.filter = action.payload;
		},
		addTab: (state, action: PayloadAction<string>) => {
			state.tab = action.payload;
		}
	},
});

export const { addSearch, addSort, addFilter, addTab } = itemSlice.actions;

export default itemSlice.reducer;
