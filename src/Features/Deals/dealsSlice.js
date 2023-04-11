import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const dealsSlice = createSlice({
	name: 'deals',
	initialState: {
		data: [],
	},
	reducers: {
		getDeals: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const getDealsAsync = () => async (dispatch) => {
	try {
		const token = sessionStorage.getItem('accessToken');
		const url =
			'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/deals?maxResults=100';
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const response = await axios.get(url, options);
		console.log('getAsyncDeals:', response.data);
		return dispatch(getDeals(response.data));
	} catch (err) {
		console.log('err', err);
		throw new Error(err);
	}
};

export const { getDeals } = dealsSlice.actions;
export const showDeals = (state) => state.deals.data;
export default dealsSlice.reducer;
