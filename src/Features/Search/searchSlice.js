// import { createSlice } from '@reduxjs/toolkit';
// import { axios } from 'axios';
// const API_URL =
// 	'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/search';

// export const searchSlice = createSlice({
// 	name: 'search',
// 	initialState: {
// 		data: [],
// 	},
// 	reducers: {
// 		getSearch: (state, action) => {
// 			state.data = [action.payload];
// 		},
// 	},
// });

// export const getSearchAsync = (data) => async (dispatch) => {
// 	try {
// 		const token = sessionStorage.getItem('accessToken');

// 		const url =
// 			'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/search';
// 		const data = {
// 			search:{search.text},
// 			city: {search.city},
// 			category: {search.category},
// 		};
// 		const options = {
// 			headers: { Authorization: `Bearer ${token}` },
// 		};
// 		const response = await
// 		axios
// 		.post(url, data, options)
// 		dispatch(getSearch(response.data))
// 			setSearch(response.data);
// 			console.log('SUCCESS: Search completed:', response.data)} catch (err) {
// 			throw new Error(err);
// 		}

// 		.catch((error) =>
// 			console.log('ERROR: Unable to search:', error)
// 		);

// 		axios.get(`${API_URL}/${data}`);
// 		dispatch(getSearch(response.data));

// };

// export const { getSearch } = searchSlice.actions;
// export default searchSlice.reducer;

// 		// if (loggedIn === true) {