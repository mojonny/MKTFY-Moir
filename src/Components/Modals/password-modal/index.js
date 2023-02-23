import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Success from '../../Success';
import PasswordShowHide from '../../PasswordShowHide';

import checkmark from '../../../assets/Checkmark.png';
import greyX from '../../../assets/GreyX.png';
import back from '../../../assets/Arrow.png';

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
				<div className="button-container">
					<button className="pw-back-button" onClick={() => setSignupPage(1)}>
						<img src={back} alt="back" />
					</button>
					<button className="pw-close-button" onClick={() => setSignupPage(0)}>
						<img src={greyX} alt="close" />
					</button>
				</div>
				<div className="text-area">
					<h1 style={{ textAlign: 'center', color: 'rgba(147, 73, 222, 1)' }}>
						Create Password
					</h1>
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
