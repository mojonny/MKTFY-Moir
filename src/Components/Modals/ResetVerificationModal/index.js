import React, { useState } from 'react';

import back from '../../../assets/Arrow.png';
import greyX from '../../../assets/GreyX.png';

export default function ResetVerificationModal({ setLoginPage }) {
	const [user, setUser] = useState({
		email: sessionStorage.getItem('userEmail'),
	});
	console.log(setUser);
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
						Change Password
					</h2>

					<h3>
						An email has been sent to <em>{user.email}</em> to change your
						password. Follow the steps in the email and log in with your new
						password.
					</h3>

					<button
						onClick={() => setLoginPage(2)}
						style={{
							textAlign: 'right',
							color: '#FFBA00',
							textDecoration: 'none',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
					>
						I didn't receive an email, please send it again
					</button>
				</div>
			</div>
		</div>
	);
}
