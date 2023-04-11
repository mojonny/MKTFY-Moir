import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		data: [],
	},
	reducers: {
		getSearch: (state, action) => {
			state.data = action.payload;
		},
	},
});

export function changeCategory() {
	let category;
	let categoryText;
	if (category === 'Electronics') {
		return categoryText === 'ELECTRONICS';
	} else if (category === 'Cars & Vehicles') {
		return categoryText === 'VEHICLES';
	} else if (category === 'Real Estate') {
		return categoryText === 'REAL_ESTATE';
	} else if (category === 'Furniture') {
		return categoryText === 'FURNITURE';
	}
}

export const getSearchAsync =
	({ searchValue, city, category }) =>
	async (dispatch) => {
		try {
			const categoryText = changeCategory(category);
			const token = sessionStorage.getItem('accessToken');
			const url =
				'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/search';
			const param = {
				search: searchValue,
				city: city,
				category: categoryText,
			};
			const options = {
				headers: { Authorization: `Bearer ${token}` },
			};
			const response = await axios.post(url, param, options);
			console.log('getAsync:', response.data);
			return dispatch(getSearch(response.data));
		} catch (err) {
			console.log('err', err);
			throw new Error(err);
		}
	};

export const { getSearch } = searchSlice.actions;
export const showSearch = (state) => state.search.data;
export default searchSlice.reducer;
