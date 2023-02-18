import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../Components/Success';
import PasswordShowHide from '../../Components/PasswordShowHide';

import checkmark from '../../assets/Checkmark.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function ChangePassword() {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};

	return (
		<>
			<div className="change-pw-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Account
					information{' '}
				</div>
				<div className="change-pw-landing">
					<form className="contact-form-container1">
						<h1 style={{ color: '#9349de', margin: '0', fontSize: '36px' }}>
							{' '}
							Change password
						</h1>
						<label className="pw">
							Current password
							<PasswordShowHide className="pw-input" />
						</label>
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
							onClick={navigateHome}
							disabled={isLoading}
							className="set-pw-button"
						>
							{isLoading ? <Success /> : navigateHome}
							Set password
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
