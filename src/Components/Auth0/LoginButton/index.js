import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const LoginButton = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: '/home',
			},
		});
	};

	return (
		!isAuthenticated && (
			<button
				onClick={handleLogin}
				style={{
					padding: '10px 0 10px 0',

					border: 'none',
					color: '#ffffff',
					width: '300px',
					height: '50px',
					background: '#ffba00',
					boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.15)',
					borderRadius: '100px',
				}}
			>
				Login
			</button>
		)
	);
};

export default LoginButton;
