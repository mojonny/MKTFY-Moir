// import { createSlice } from '@reduxjs/toolkit';
// import { auth } from '../../Services/auth0.service';
// import {
// 	AUTH0_LOGIN_REDIRECT_URI,
// 	AUTH0_LOGIN_RESPONSE_TYPE,
// 	AUTH0_REALM,
// } from '../../config';

// export const slice = createSlice({
// 	name: 'counter',
// 	initialState: {
// 		value: 0,
// 		email: '',
// 		password: '',
// 	},
// 	reducers: {
// 		increment: (state) => {
// 			// Redux Toolkit allows us to write "mutating" logic in reducers. It
// 			// doesn't actually mutate the state because it uses the immer library,
// 			// which detects changes to a "draft state" and produces a brand new
// 			// immutable state based off those changes
// 			state.value += 1;
// 			// state.value = state.value+1
// 		},
// 		decrement: (state) => {
// 			state.value -= 1;
// 		},
// 		incrementByAmount: (state, action) => {
// 			state.value += action.payload;
// 		},
// 		reset: (state) => {
// 			state.value = 0;
// 		},
// 		loginUser: (state, action) => {
// 			state.email = action.payload.email;
// 			state.password = action.payload.password;
// 			return state;
// 		},
// 	},
// });

// export const { increment, decrement, loginUser, incrementByAmount, reset } =
// 	slice.actions;

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

// export const loginUserAuth0 = ({ user }) => {
// 	const email = user.email;
// 	const password = user.password;
// 	auth.login(
// 		{
// 			realm: AUTH0_REALM,
// 			username: email,
// 			password: password,
// 			redirectUri: AUTH0_LOGIN_REDIRECT_URI,
// 			responseType: AUTH0_LOGIN_RESPONSE_TYPE,
// 		},
// 		function (error, result) {
// 			if (error) {
// 				alert('Oops! Login failed, please try again.');
// 				console.log('Oops! login failed.', error);
// 				return;
// 			} else {
// 				console.log('Login success!', result);
// 			}
// 		}
// 	);
// };
// export default slice.reducer;
