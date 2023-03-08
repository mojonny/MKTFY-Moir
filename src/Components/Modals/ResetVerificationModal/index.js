import React, { useState } from 'react';

import { auth } from '../../../Services/auth0.service';
import { phoneNumberAutoFormat } from '../../../Utils';
import back from '../../../assets/Arrow.png';
import greyX from '../../../assets/GreyX.png';

export default function ResetVerificationModal({ setLoginPage }) {
	const [valueCode, setValueCode] = useState('');
	const [user, setUser] = useState({
		//get the email stored from previous modal
		email: sessionStorage.getItem('userEmail'),
		verificationCode: '',
	});

	const onChangeHandler = (e) => {
		//format the input to have dash between number pairs
		const targetValue = phoneNumberAutoFormat(e.target.value);
		setValueCode(targetValue);
		//set user info for auth0
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	//This checks the code then redirects the user to the homepage(skipping change pw***)
	const onSubmit = (event) => {
		event.preventDefault();

		// format the code to remove dashes
		const userCode = user.verificationCode.replace(/-/g, '');

		auth.passwordlessLogin(
			{
				connection: 'email',
				//use the email from session storage
				email: user.email,
				verificationCode: userCode,
			},
			function (err, resp) {
				if (err) {
					console.log(err);
				} else {
					console.log(resp);
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
					<button className="back-button2" onClick={() => setLoginPage(0)}>
						<img src={back} alt="back" />
					</button>
					<button className="close-button1" onClick={() => setLoginPage(0)}>
						<img src={greyX} alt="close" />
					</button>
				</div>

				<div className="text-area1">
					<h2 style={{ textAlign: 'center', margin: '30px 0 0 0' }}>
						Reset password?
					</h2>

					<h3>
						A code has been sent to your email <br /> pearl_the_cat@g*****,
						Please enter the verification code below.
					</h3>

					<label>
						Verification code
						<br />
						<input
							placeholder="00-00-00"
							name="verificationCode"
							value={valueCode}
							onChange={onChangeHandler}
							className="input-style2"
							maxLength={8}
						/>
					</label>
					<button
						onClick={() => setLoginPage(2)}
						style={{
							textAlign: 'right',
							color: '#FFBA00',
							textDecoration: 'none',
							paddingRight: '50px',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
					>
						I didn't receive the code, please send it again
					</button>
					<button
						className="create-button2"
						button
						type="button"
						onClick={onSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
