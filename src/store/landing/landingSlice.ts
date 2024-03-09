import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a TypeScript interface for the slice state
interface LandingState {
	title: string;
	description: string;
	about: string;
	contact: string;
	terms: string;
	referral: string;
}

// Initial state with types applied
const initialState: LandingState = {
	title: "PARADISE - FAMILY RESTAURANT & BAKESHOP",
	description:
		"The dishes of Kerala and India's south feature on a multi-cuisine menu at this casual restaurant.",
	about: "The dishes of Kerala and India's south feature on a multi-cuisine menu at this casual restaurant.",
	contact: "Paradise Family Restaurant & Bake Shop",
	terms: "The Paradise online ordering application and app must only be used by persons over the age of eighteen (18) years, or the minimum legal age as permitted by the law or otherwise under the supervision of an adult or guardian. The pictures of the products are for presentation only. The ordered products may have differences (e.g., colour, form, etc.) towards the photos existing on the site. We are not liable in any way if the description of products is not complete. Home Delivery orders are also subject to:",
	referral: "referral program contents here",
};

export const landingSlice = createSlice({
	name: "landing",
	initialState,
	reducers: {
		changeLandingTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
		changeLandingDescription: (state, action: PayloadAction<string>) => {
			state.description = action.payload;
		},
		changeLandingAbout: (state, action: PayloadAction<string>) => {
			state.about = action.payload;
		},
		changeLandingContact: (state, action: PayloadAction<string>) => {
			state.contact = action.payload;
		},
		changeLandingTerms: (state, action: PayloadAction<string>) => {
			state.terms = action.payload;
		},
		changeLandingReferral: (state, action: PayloadAction<string>) => {
			state.referral = action.payload;
		},
	},
});

export const {
	changeLandingTitle,
	changeLandingDescription,
	changeLandingAbout,
	changeLandingContact,
	changeLandingTerms,
	changeLandingReferral,
} = landingSlice.actions;

export default landingSlice.reducer;
