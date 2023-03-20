import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Features/ProductFilter/productSlice';

export default configureStore({
	reducer: {
		product: productReducer,
	},
});
