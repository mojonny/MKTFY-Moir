import React, { useState } from 'react';

import { auth } from '../../../Services/auth0.service';
import { AUTH0_REALM } from '../../../config';
import { Link } from 'react-router-dom';

import checkmark from '../../../assets/Checkmark.png';
import greyX from '../../../assets/GreyX.png';
import back from '../../../assets/Arrow.png';

import './index.css';

export default function PasswordModal({ setSignupPage }) {
	const [user, setUser] = useState({ email: '', password: '' });

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		auth.signup(
			{
				email: user.email,
				password: user.password,
				connection: AUTH0_REALM,
			},
			function (error, result) {
				if (error) {
					console.log('Oops! Registration failed.', error);
					return;
				} else {
					console.log('User registered!', result);
				}
			}
		);
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

					<label>
						Email
						<br />
						<input
							type="email"
							placeholder=" Insert your email"
							name="email"
							value={user.email}
							onChange={onChangeHandler}
							className="input-style2"
						/>
					</label>

					<h3>
						The password must have at least 6 characters and must contain 1
						uppercase and 1 number.
					</h3>

					<label className="password">
						Password
						<input
							type="password"
							placeholder="Insert your password"
							name="password"
							value={user.password}
							onChange={onChangeHandler}
							className="input-style2"
						/>
					</label>

					<div className="requirement-box">
						<div className="requirement">
							<img src={checkmark} alt="checkmark" />
							At least 6 characters
						</div>
						<div className="requirement">
							<img src={checkmark} alt="checkmark" /> 1 Uppercase
						</div>
						<div className="requirement">
							<img src={checkmark} alt="checkmark" /> 1 Number
						</div>
					</div>

					<div className="checkbox-info">
						<input className="checkbox" type="checkbox" />
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
					</div>

					<button type="button" onClick={onSubmit} className="create-button2">
						Create account
					</button>
				</form>
			</div>
		</div>
	);
}
