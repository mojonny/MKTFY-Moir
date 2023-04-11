import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		login: null || sessionStorage.getItem('loggedIn'),
		token: null || sessionStorage.getItem('accessToken'),
		id: null || sessionStorage.getItem('id'),
		firstName: null || sessionStorage.getItem('firstName'),
		lastName: null || sessionStorage.getItem('lastName'),
		email: null || sessionStorage.getItem('userEmail'),
		phone: null || sessionStorage.getItem('phone'),
		address: null || sessionStorage.getItem('address'),
		city: null || sessionStorage.getItem('city'),
		registered: null || sessionStorage.getItem('registered'),
	},
	reducers: {
		setLogin: (state) => {
			state.login = true;
		},
		setLogout: (state) => {
			state.login = false;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setId: (state, action) => {
			state.id = action.payload;
		},
		setFirstName: (state, action) => {
			state.firstName = action.payload;
		},
		setLastName: (state, action) => {
			state.lastName = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPhone: (state, action) => {
			state.phone = action.payload;
		},
		setAddress: (state, action) => {
			state.address = action.payload;
		},
		setCity: (state, action) => {
			state.city = action.payload;
		},
		setRegistered: (state, action) => {
			state.registered = action.payload;
		},
	},
});

export const {
	setLogin,
	setLogout,
	setToken,
	setId,
	setFirstName,
	setLastName,
	setEmail,
	setPhone,
	setAddress,
	setCity,
	setRegistered,
} = loginSlice.actions;
export default loginSlice.reducer;
