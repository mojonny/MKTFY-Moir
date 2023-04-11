import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		productName: null || sessionStorage.getItem('productName'),
		price: null || sessionStorage.getItem('productPrice'),
		sellerId: null || sessionStorage.getItem('sellerId'),
		sellerFirstName: null || sessionStorage.getItem('sellerFirstName'),
		sellerLastName: null || sessionStorage.getItem('sellerLastName'),
		phone: null || sessionStorage.getItem('sellerPhone'),
		address: null || sessionStorage.getItem('itemAddress'),
		city: null || sessionStorage.getItem('sellerCity'),
	},
	reducers: {
		setProductName: (state, action) => {
			state.registered = action.payload;
		},
		setPrice: (state, action) => {
			state.registered = action.payload;
		},
		setSellerId: (state, action) => {
			state.registered = action.payload;
		},
		setSellerFirstName: (state, action) => {
			state.registered = action.payload;
		},
		setSellerLastName: (state, action) => {
			state.registered = action.payload;
		},
		setPhone: (state, action) => {
			state.registered = action.payload;
		},
		setAddress: (state, action) => {
			state.registered = action.payload;
		},
		setCity: (state, action) => {
			state.registered = action.payload;
		},
	},
});

export const {
	setProductName,
	setPrice,
	setSellerId,
	setSellerFirstName,
	setSellerLastName,
	setPhone,
	setAddress,
	setCity,
} = productSlice.actions;
export default productSlice.reducer;
