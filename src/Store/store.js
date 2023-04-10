import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../Features/Search/searchSlice';

export default configureStore({
	reducer: {
		search: searchSlice,
	},
});
