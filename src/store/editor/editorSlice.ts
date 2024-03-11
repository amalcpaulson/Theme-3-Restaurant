import { createSlice } from "@reduxjs/toolkit";

const initialState: EditorState = {
	isEditorVisible: false,
};

export const editorSlice = createSlice({
	name: "editor",
	initialState,
	reducers: {
		toggleEditor: (state) => {
			state.isEditorVisible = !state.isEditorVisible;
		},
	},
});

export const { toggleEditor } = editorSlice.actions;

export default editorSlice.reducer;