import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	images: [],
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addImg: (state, action) => {
			const newImageUrls = action.payload;
			const addedImages = [...state.image, newImageUrls];
			return { ...state, images: addedImages };
		},
		decrease: (state) => {
			state.value -= 1;
		},
	},
});

// each case under reducers becomes an action
export const { addImg, decrease } = counterSlice.actions;

export default counterSlice.reducer;
