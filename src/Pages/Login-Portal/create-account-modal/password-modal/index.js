import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Success from '../../../../Components/Success';
import PasswordShowHide from '../../../../Components/PasswordShowHide';

import checkmark from '../../../../assets/Checkmark.png';
import greyX from '../../../../assets/GreyX.png';
import back from '../../../../assets/Arrow.png';

import './index.css';

export default function PasswordModal({ setSignupPage }) {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateToPortal = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/');
			setIsLoading(false);
			setSignupPage(0);
		}, 2000);
	};

	return (
		<div className="darkBG" onClick={() => setSignupPage(0)}>
			<div
				className="password-modal-container"
				title="Create Password Modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="nav-icons">
					<button
						className="back-button"
						style={{
							backgroundColor: '#ffffff',
							border: 'none',
						}}
						onClick={() => setSignupPage(1)}
					>
						<img src={back} alt="back" />
					</button>
					<button
						className="close-button"
						style={{
							backgroundColor: '#ffffff',
							border: 'none',
						}}
						onClick={() => setSignupPage(0)}
					>
						<img src={greyX} alt="close" />
					</button>
				</div>
				<h2 style={{ textAlign: 'center' }}>Create Password</h2>
				<h3>
					The password must have at least 6 characters and must contain 1
					uppercase and 1 number.
				</h3>
				<div className="password-form-container">
					<label className="password">
						Password
						<PasswordShowHide />
					</label>
					<br />
					<label className="password">
						Password
						<PasswordShowHide />
					</label>

					<div className="requirement-container">
						<div className="requirement">
							<p>
								<img src={checkmark} alt="checkmark" />
								At least 6 characters
							</p>
						</div>
						<div className="requirement">
							<p
								style={{
									verticalAlign: 'center',
								}}
							>
								<img src={checkmark} alt="checkmark" /> 1 Uppercase
							</p>
						</div>
						<div className="requirement">
							<p>
								<img src={checkmark} alt="checkmark" /> 1 Number
							</p>
						</div>
						<div className="requirement">
							<p className="TOC">
								<input className="checkbox" type="checkbox" /> By checking this
								box, you agree to our
								<Link to="/termsandservices" style={{ textDecoration: 'none' }}>
									{' '}
									Terms of Service{' '}
								</Link>
								and our
								<Link to="/privacy" style={{ textDecoration: 'none' }}>
									{' '}
									Privacy Policy{' '}
								</Link>
							</p>
						</div>
					</div>

					<button
						onClick={navigateToPortal}
						disabled={isLoading}
						className="create-button2"
					>
						{isLoading ? <Success /> : navigateToPortal}
						Create account
					</button>
				</div>
			</div>
		</div>
	);
}
