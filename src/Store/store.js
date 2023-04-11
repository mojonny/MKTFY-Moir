import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../Features/Search/searchSlice';
import loginSlice from '../Features/Login/loginSlice';

export default configureStore({
	reducer: {
		search: searchSlice,
		login: loginSlice,
	},
});
