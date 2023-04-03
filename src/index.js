import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store/store';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//my config
// export const AUTH0_DOMAIN = 'dev-62wog3nd0hxykavq.us.auth0.com';
// export const AUTH0_CLIENT_ID = '1gS6o6vxLxzuy6o68aDqC098s9FqTQsk';
// export const AUTH0_LOGIN_REDIRECT_URI = 'http://localhost:3000/home';
// export const AUTH0_REALM = 'Username-Password-Authentication';
// export const AUTH0_USER_SCOPE = 'openid profile email';
// export const AUTH0_LOGIN_RESPONSE_TYPE = 'token id_token';
// export const AUTH0_LOGOUT_URI = 'http://localhost:3000/';
