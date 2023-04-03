import React, { useState } from 'react';

import back from '../../../assets/Arrow.png';
import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function ResetVerificationModal({ setLoginPage }) {
	const [user, setUser] = useState({
		email: sessionStorage.getItem('userEmail'),
	});
	console.log(setUser);
	return (
		<div className="darkBG" onClick={() => setLoginPage(0)}>
			<div
				className="verify-password-modal-container"
				title="Create Password Modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="button-container">
					<button className="back-button2" onClick={() => setLoginPage(2)}>
						<img src={back} alt="back" />
					</button>
					<button className="close-button1" onClick={() => setLoginPage(0)}>
						<img src={greyX} alt="close" />
					</button>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '20px',
						margin: '0 100px 100px 100px',
					}}
				>
					<h2
						style={{
							textAlign: 'center',
							color: '#9349de',
						}}
					>
						Reset Password?
					</h2>

					<h3>
						An email has been sent to <em>{user.email}</em>.
						<br />
						<br />
						Please check your email for further instructions and click the
						button below when the process is complete.
					</h3>

					<button onClick={() => setLoginPage(1)} className="create-button3">
						Return to login
					</button>
				</div>
			</div>
		</div>
	);
}
