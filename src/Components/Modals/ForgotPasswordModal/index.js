import React, { useState } from 'react';

import { auth } from '../../../Services/auth0.service';
import { AUTH0_CLIENT_ID, AUTH0_REALM } from '../../../config';

import back from '../../../assets/Arrow.png';
import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function ForgotPasswordModal({ setLoginPage }) {
	const [user, setUser] = useState({ email: '' });

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	//Sends the verification code to the user's email
	const onSubmit = (event) => {
		event.preventDefault();
		auth.changePassword(
			{
				client_id: AUTH0_CLIENT_ID,
				connection: AUTH0_REALM,
				email: user.email,
			},
			function (err, resp) {
				if (err) {
					console.log(err);
				} else {
					console.log(resp);
					sessionStorage.setItem('userEmail', user.email);
					setLoginPage(3);
				}
			}
		);
	};

	return (
		<div className="darkBG" onClick={() => setLoginPage(0)}>
			<div
				className="forgot-password-modal-container"
				title="Create Password Modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="button-container">
					<button className="back-button2" onClick={() => setLoginPage(1)}>
						<img src={back} alt="back" />
					</button>
					<button className="close-button1" onClick={() => setLoginPage(0)}>
						<img src={greyX} alt="close" />
					</button>
				</div>
				<div className="text-area1">
					<h2 style={{ textAlign: 'center', color: '#9349de' }}>
						Forgot password?
					</h2>

					<h3>
						It’s okay, these things happen. Please enter your email in the field
						below. We will send you an email to reset your password.
					</h3>

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

					<button className="create-button4" type="button" onClick={onSubmit}>
						Send
					</button>
				</div>
			</div>
		</div>
	);
}
