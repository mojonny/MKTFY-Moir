import React, { useState } from 'react';

import { auth } from '../../../Services/auth0.service';

import back from '../../../assets/Arrow.png';
import greyX from '../../../assets/GreyX.png';

export default function ResetVerificationModal({ setLoginPage }) {
	const [user, setUser] = useState({ verificationCode: '' });

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();

		auth.passwordlessLogin(
			{
				connection: 'email',
				email: 'moir89@hotmail.com',
				verificationCode: user.verificationCode,
			},
			function (err, resp) {
				if (err) {
					console.log(err);
				} else {
					console.log(resp);
					setLoginPage(4);
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
							type="number"
							placeholder=" 00-00-00"
							name="verificationCode"
							value={user.verificationCode}
							onChange={onChangeHandler}
							className="input-style2"
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
