import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../Features/Search/searchSlice';
import loginSlice from '../Features/Login/loginSlice';
import dealsSlice from '../Features/Deals/dealsSlice';
import categoriesSlice from '../Features/Categories/categoriesSlice';
import productSlice from '../Features/Product/productSlice';

export default configureStore({
	reducer: {
		search: searchSlice,
		login: loginSlice,
		deals: dealsSlice,
		categories: categoriesSlice,
		product: productSlice,
	},
});
