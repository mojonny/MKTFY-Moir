import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		value: '',
	},

	reducers: {
		filterhide: (state) => {
			state.value = '';
			console.log('Updated filter to:', state);
		},
		filternone: (state) => {
			state.value = 'all';
			console.log('Updated filter to:', state);
		},
		filterdeals: (state) => {
			state.value = 'Deals';
			console.log('Updated filter to:', state);
		},
		filtercars: (state) => {
			state.value = 'Cars & Vehicles';
			console.log('Updated filter to:', state);
		},
		filterfurniture: (state) => {
			state.value = 'Furniture';
			console.log('Updated filter to:', state);
		},
		filterelectronics: (state) => {
			state.value = 'Electronics';
			console.log('Updated filter to:', state);
		},
		filterrealestate: (state) => {
			state.value = 'Real Estate';
			console.log('Updated filter to:', state);
		},
	},
});

export const {
	filterhide,
	filternone,
	filterdeals,
	filtercars,
	filterfurniture,
	filterelectronics,
	filterrealestate,
} = productSlice.actions;

export default productSlice.reducer;
