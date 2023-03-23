import auth0 from 'auth0-js';
import {
	AUTH0_CLIENT_ID,
	AUTH0_DOMAIN,
	AUTH0_USER_SCOPE,
	AUTH0_REALM,
	AUTH0_LOGIN_REDIRECT_URI,
	AUTH0_LOGIN_RESPONSE_TYPE,
} from '../config';

export const auth = new auth0.WebAuth({
	domain: AUTH0_DOMAIN,
	clientID: AUTH0_CLIENT_ID,
	scope: AUTH0_USER_SCOPE,
	redirectUri: AUTH0_LOGIN_REDIRECT_URI,
	responseType: AUTH0_LOGIN_RESPONSE_TYPE,
	realm: AUTH0_REALM,
});
