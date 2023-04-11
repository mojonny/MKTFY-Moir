import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		data: [],
	},
	reducers: {
		getCategories: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const getCategoriesAsync =
	({ city, category }) =>
	async (dispatch) => {
		try {
			const token = sessionStorage.getItem('accessToken');
			const url =
				'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/category?maxResults=100';
			const param = {
				city: city,
				category: category,
			};
			const options = {
				headers: { Authorization: `Bearer ${token}` },
			};
			const response = await axios.post(url, param, options);
			console.log('getAsyncCategories:', response.data);
			return dispatch(getCategories(response.data));
		} catch (err) {
			console.log('err', err);
			throw new Error(err);
		}
	};

export const { getCategories } = categoriesSlice.actions;
export const showCategories = (state) => state.categories.data;
export default categoriesSlice.reducer;
