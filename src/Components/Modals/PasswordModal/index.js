import React, { useState, useEffect } from 'react';

import { auth } from '../../../Services/auth0.service';
import { AUTH0_REALM } from '../../../config';
import { Link } from 'react-router-dom';

import Success from '../../Success';

import eye from '../../../assets/eye.png';
import eyeslash from '../../../assets/eye-slash.png';
import Checkmark from '../../../assets/Checkmark.svg';
import CheckmarkGrey from '../../../assets/CheckmarkGrey.svg';
import greyX from '../../../assets/GreyX.png';
import back from '../../../assets/Arrow.png';

import './index.css';

function isSixChar(password) {
	return RegExp('^(?=.{6,})').test(password);
}
function isUpperCase(password) {
	return RegExp('^(?=.*[A-Z])').test(password);
}
function isNumber(password) {
	return RegExp('^(?=.*[0-9])').test(password);
}

export default function PasswordModal({ setSignupPage }) {
	//Show lottie when loading and moving to success
	const [isLoading, setIsLoading] = useState(false);

	//Make sure they agree to terms
	const [agreement, setAgreement] = useState(false);

	const handleChange = (event) => {
		setAgreement(event.target.checked);
	};

	const [user, setUser] = useState({
		email: sessionStorage.getItem('userEmail'),
		password: '',
	});

	const [verifyPassword, setVerifyPassword] = useState('');

	const [pwError, setPwError] = useState('');

	//To toggle visibility of password text
	const [passwordType, setPasswordType] = useState('password');

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		const password1 = document.getElementById('password');

		if (verifyPassword) {
			const timeoutId = setTimeout(() => {
				if (verifyPassword !== password1.value) {
					setPwError('Passwords do not match');
				} else {
					setPwError('');
				}
			}, 2000);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [verifyPassword]);

	const onSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
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
						setSignupPage(0);
						setIsLoading(false);
						return;
					} else {
						console.log('User registered in auth0!', result);
						setSignupPage(0);
						setIsLoading(false);
					}
				}
			);
		}, 2000);
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
		<div className="darkBG" onClick={() => setSignupPage(0)}>
			<div
				className="password-modal-container"
				title="Create Password Modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="button-container">
					<button className="pw-back-button" onClick={() => setSignupPage(1)}>
						<img src={back} alt="back" />
					</button>
					<button className="pw-close-button" onClick={() => setSignupPage(0)}>
						<img src={greyX} alt="close" />
					</button>
				</div>
				<form className="text-area">
					<h1 style={{ textAlign: 'center', color: 'rgba(147, 73, 222, 1)' }}>
						Create Password
					</h1>

					<h3>
						The password must have at least 6 characters and must contain 1
						uppercase and 1 number.
					</h3>
					<label className="password">
						Password
						<div className="password-eye-box">
							<input
								type={passwordType}
								placeholder="Insert your password"
								name="password"
								id="password"
								value={user.password}
								onChange={onChangeHandler}
								className="input-style2"
								autoComplete="false"
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
					</label>

					<label className="password">
						Password
						<div className="password-eye-box">
							<input
								type={passwordType}
								placeholder="Insert your password"
								id="verifyPassword"
								onChange={(e) => setVerifyPassword(e.target.value)}
								className="input-style2"
								autoComplete="false"
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

					<div className="requirement-box">
						<div className="requirement">
							{!isSixChar(user.password) ? (
								<img src={CheckmarkGrey} alt="checkmark" />
							) : (
								<img src={Checkmark} alt="checkmark" />
							)}
							At least 6 characters
						</div>
						<div className="requirement">
							{!isUpperCase(user.password) ? (
								<img src={CheckmarkGrey} alt="checkmark" />
							) : (
								<img src={Checkmark} alt="checkmark" />
							)}
							1 Uppercase
						</div>
						<div className="requirement">
							{!isNumber(user.password) ? (
								<img src={CheckmarkGrey} alt="checkmark" />
							) : (
								<img src={Checkmark} alt="checkmark" />
							)}{' '}
							1 Number
						</div>
					</div>

					<label className="checkbox-info">
						<input
							id="checkbox"
							name="agreement"
							onChange={handleChange}
							className="checkbox"
							type="checkbox"
						/>
						<div style={{ fontSize: '14px', fontWeight: '400' }}>
							By checking this box, you agree to our{' '}
							<Link
								to="/termsandservices"
								style={{ fontSize: '14px', fontWeight: '700' }}
							>
								Terms of Service
							</Link>
							{'  '}and our{'  '}
							<Link
								to="/privacy"
								style={{ fontSize: '14px', fontWeight: '700' }}
							>
								Privacy Policy
							</Link>
						</div>
					</label>

					<button
						type="button"
						id="set-pw-button"
						disabled={!agreement || isLoading}
						onClick={onSubmit}
						className="create-button2"
					>
						Create account
					</button>
				</form>
			</div>
			{isLoading ? <Success title="Account Created!" /> : null}
		</div>
	);
}
