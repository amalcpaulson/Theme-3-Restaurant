import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a TypeScript interface for the slice state


// Initial state with types applied
const initialState: LandingState = {
	title: "Food Co. UK",
	rating: "4.5",
	ratingCount: "(100+ ratings)",
	description: "Fast Food, Burger, Biryani, Desserts, Beverages",
	address: "Shobha City Mall, Puzhakkal, Thrissur",
	timing: "Open now 11:30Am to 4:00pm",
};

export const landingSlice = createSlice({
	name: "landing",
	initialState,
	reducers: {
		changeLandingTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
		changeLandingRating: (state, action: PayloadAction<string>) => {
			state.rating = action.payload;
		},
		changeLandingRatingCount: (state, action: PayloadAction<string>) => {
			state.ratingCount = action.payload;
		},
		changeLandingDescription: (state, action: PayloadAction<string>) => {
			state.description = action.payload;
		},
		changeLandingAddress: (state, action: PayloadAction<string>) => {
			state.address = action.payload;
		},
		changeLandingTiming: (state, action: PayloadAction<string>) => {
			state.timing = action.payload;
		},
	},
});

export const {
	changeLandingTitle,
	changeLandingRating,
	changeLandingRatingCount,
	changeLandingDescription,
	changeLandingAddress,
	changeLandingTiming,
} = landingSlice.actions;

export default landingSlice.reducer;
