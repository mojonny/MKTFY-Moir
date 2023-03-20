import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		value: 'all',
	},

	reducers: {
		filterdeals: (state) => {
			state.value = 'Deals';
			console.log('Updated filter to:', state);
		},
	},
});

export const { filterdeals } = productSlice.actions;

export default productSlice.reducer;
