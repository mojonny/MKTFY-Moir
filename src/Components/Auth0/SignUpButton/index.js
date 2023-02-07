import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function SignupButton() {
	const { loginWithRedirect } = useAuth0();

	const handleSignUp = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: '/',
			},
			authorizationParams: {
				screen_hint: 'signup',
			},
		});
	};

	return (
		<button
			className="button__sign-up"
			onClick={handleSignUp}
			style={{
				padding: '10px 0 10px 0',
				border: 'none',
				color: '#ffffff',
				width: '300px',
				height: '50px',
				background: '#6318af',
				boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.15)',
				borderRadius: '100px',
			}}
		>
			Sign Up
		</button>
	);
}
