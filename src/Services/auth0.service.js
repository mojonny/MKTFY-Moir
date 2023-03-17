import auth0 from 'auth0-js';
import {
	AUTH0_CLIENT_ID,
	AUTH0_DOMAIN,
	AUTH0_USER_SCOPE,
	AUTH0_REALM,
	AUTH0_LOGIN_REDIRECT_URI,
	AUTH0_LOGIN_RESPONSE_TYPE,
} from '../config';

const register = ({ user }) => {
	auth.signup(
		{
			email: user.email,
			password: user.password,
			connection: AUTH0_REALM,
		},
		function (error, result) {
			if (error) {
				alert('Oops! Signup failed, please try again.');
				console.log('Oops! Registration failed.', error);
				console.log(user.email);

				return;
			} else {
				console.log('User registered!', result);
			}
		}
	);
};

const login = ({ user }) => {
	auth.login(
		{
			realm: AUTH0_REALM,
			username: user.email,
			password: user.password,
			redirectUri: AUTH0_LOGIN_REDIRECT_URI,
			responseType: AUTH0_LOGIN_RESPONSE_TYPE,
		},
		function (error, result) {
			if (error) {
				alert('Oops! Login failed, please try again.');
				console.log('Oops! login failed.', error);
				return;
			} else {
				console.log('Login success!', result);
			}
		}
	);
};

const logout = () => {
	auth.logout({
		returnTo: 'http://localhost:3000/',
		clientID: AUTH0_CLIENT_ID,
	});
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
	register,
	login,
	logout,
	getCurrentUser,
};

export default AuthService;

export const auth = new auth0.WebAuth({
	domain: AUTH0_DOMAIN,
	clientID: AUTH0_CLIENT_ID,
	scope: AUTH0_USER_SCOPE,
	redirectUri: AUTH0_LOGIN_REDIRECT_URI,
	responseType: AUTH0_LOGIN_RESPONSE_TYPE,
	realm: AUTH0_REALM,
});
