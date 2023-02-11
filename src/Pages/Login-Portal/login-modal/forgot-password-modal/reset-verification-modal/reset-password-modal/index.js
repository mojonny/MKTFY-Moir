import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Success from '../../../../../../Components/Success';
import PasswordShowHide from '../../../../../../Components/PasswordShowHide';

import checkmark from '../../../../../../assets/Checkmark.png';
import greyX from '../../../../../../assets/GreyX.png';
import back from '../../../../../../assets/Arrow.png';

import './index.css';

export default function ResetPasswordModal({ setLoginPage }) {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateToPortal = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/');
			setIsLoading(false);
			setLoginPage(0);
		}, 2000);
	};

	return (
		<div className="darkBG" onClick={() => setLoginPage(0)}>
			<div
				className="reset-password-modal-container"
				title="Create Password Modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<div>
					<button
						className="back-button"
						style={{
							marginTop: '20px',
							marginLeft: '-20%',
							background: 'none',
							border: 'none',
						}}
						onClick={() => setLoginPage(1)}
					>
						<img src={back} alt="back" />
					</button>
					<button
						className="close-button"
						style={{
							transform: 'translate(45rem,15px)',
							background: 'none',
							border: 'none',
						}}
						onClick={() => setLoginPage(0)}
					>
						<img src={greyX} alt="close" />
					</button>
				</div>
				<div className="text-area">
					<h2 style={{ textAlign: 'center' }}>Reset Password</h2>
					<h3>
						The password must have at least 6 characters and must contain 1
						uppercase and 1 number.
					</h3>

					<label className="password">
						Password
						<PasswordShowHide />
					</label>

					<label className="password">
						Password
						<PasswordShowHide />
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

					<button
						onClick={navigateToPortal}
						disabled={isLoading}
						className="create-button2"
					>
						{isLoading ? <Success /> : navigateToPortal}
						Set password
					</button>
				</div>
			</div>
		</div>
	);
}
