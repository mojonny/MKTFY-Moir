import { useState, useEffect } from 'react';
import { auth } from '../../../Services/auth0.service';
import {
	AUTH0_LOGIN_REDIRECT_URI,
	AUTH0_LOGIN_RESPONSE_TYPE,
	AUTH0_REALM,
} from '../../../config';

import eye from '../../../assets/eye.png';
import eyeslash from '../../../assets/eye-slash.png';
import greyX from '../../../assets/GreyX.png';
import './index.css';

function isValidEmail(email) {
	return RegExp(
		'^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
			'(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
			'|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
	).test(email);
}

function isValidPassword(password) {
	return RegExp('^(?=.*[0-9])(?=.*[A-Z])(?!.*\\s).{6,}$').test(password);
}

export default function LoginModal({ setLoginPage, setMessage }) {
	const [user, setUser] = useState({ email: '', password: '' });

	//validation error handling
	const [pwError, setPwError] = useState('');
	const [emailError, setEmailError] = useState('');

	//To toggle visibility of password text
	const [passwordType, setPasswordType] = useState('password');

	useEffect(() => {
		if (user.email) {
			const timeoutId = setTimeout(() => {
				if (!isValidEmail(user.email)) {
					setEmailError('Email formatted incorrectly');
				} else {
					setEmailError('');
				}
			}, 1500);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [user]);

	useEffect(() => {
		if (user.password) {
			const timeoutId = setTimeout(() => {
				if (!isValidPassword(user.password)) {
					setPwError(
						'Incorrect password: Min 6 characters, 1 capital, and 1 number.'
					);
				} else {
					setPwError('');
				}
			}, 1500);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [user]);

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();

		auth.login(
			{
				realm: AUTH0_REALM,
				username: user.email,
				password: user.password,
				redirectUri: AUTH0_LOGIN_REDIRECT_URI,
				responseType: AUTH0_LOGIN_RESPONSE_TYPE,
			},
			function (error) {
				if (error) {
					alert('Oops! Login failed, please try again.');
					console.log('Oops! login failed.', error);
					return;
				}
			}
		);
	};

	//To change icon, change the input type
	const togglePassword = (event) => {
		event.preventDefault();
		if (passwordType === 'password') {
			setPasswordType('text');
			return;
		}
		setPasswordType('password');
	};
	return (
		<div className="darkBG" onClick={() => setLoginPage(0)}>
			<div
				title="Login Modal"
				className="login-modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<button className="close-button-login" onClick={() => setLoginPage(0)}>
					<img src={greyX} alt="close" />
				</button>
				<form className="login-form">
					<h1 style={{ textAlign: 'center', color: 'rgba(147, 73, 222, 1)' }}>
						Welcome back!
					</h1>

					<label>
						Email
						<br />
						<input
							required
							type="email"
							id="email"
							placeholder=" Insert your email"
							name="email"
							value={user.email}
							onChange={onChangeHandler}
							className="input-style2"
						/>
						<p style={{ color: 'red' }}>{emailError}</p>
					</label>

					<label>
						Password
						<br />
						<div className="password-eye-box">
							<input
								required
								type={passwordType}
								placeholder="Insert your password"
								name="password"
								id="password"
								value={user.password}
								onChange={onChangeHandler}
								className="input-style2"
							/>
							<button className="eye-slash" onClick={togglePassword}>
								{passwordType === 'password' ? (
									<i>
										<img src={eyeslash} alt="close-eye" />
									</i>
								) : (
									<i>
										<img src={eye} alt="open-eye" />
									</i>
								)}
							</button>
						</div>
						<p style={{ color: 'red' }}>{pwError}</p>
					</label>

					<button
						type="button"
						onClick={() => setLoginPage(2)}
						style={{
							textAlign: 'right',
							color: '#FFBA00',
							textDecoration: 'none',
							width: 'auto',
							marginLeft: 'auto',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
					>
						Forgot password
					</button>

					<button
						type="submit"
						id="login-button"
						onClick={onSubmit}
						className="login-modal-button"
						disabled={
							!isValidPassword(user.password) || !isValidEmail(user.email)
						}
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}
