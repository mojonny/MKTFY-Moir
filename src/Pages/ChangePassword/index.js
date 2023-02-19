import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../Components/Success';

import Checkmark from '../../assets/Checkmark.svg';
import CheckmarkGrey from '../../assets/CheckmarkGrey.svg';

import breadArrow from '../../assets/breadCrumbArrow.png';
import eye from '../../assets/eye.png';
import eyeslash from '../../assets/eye-slash.png';
import './index.css';

//This checks that there is at least 1 Upper,1 Lower, and 1 Number
// ^	The password string will start this way
// (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
// (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
// (?=.*[0-9])	The string must contain at least 1 numeric character
// (?=.[!@#$%^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
// (?=.{8,})	The string must be eight characters or longer

function isSixChar(password) {
	return RegExp('^(?=.{6,})').test(password);
}
function isUpperCase(password) {
	return RegExp('^(?=.*[A-Z])').test(password);
}
function isNumber(password) {
	return RegExp('^(?=.*[0-9])').test(password);
}

function isPassCheck() {
	let password1 = document.getElementById('password1');
	let verifyPassword = document.getElementById('verifyPassword');

	if (
		password1.value !== verifyPassword.value ||
		password1.value.length === 0 ||
		verifyPassword.value.length === 0 ||
		!isSixChar(password1.value) ||
		!isUpperCase(password1.value) ||
		!isNumber(password1.value)
	) {
		document.getElementById('set-pw-button').disabled = true;
	} else {
		document.getElementById('set-pw-button').disabled = false;
	}
}

export default function ChangePassword() {
	//Show lottie when loading and moving to success
	const [isLoading, setIsLoading] = useState(false);

	//To toggle visibility of password text
	const [passwordType, setPasswordType] = useState('password');

	//Split inputs so onchange only affects one input
	const [password, setPassword] = useState('');

	//Navigate back to home page once password is changed
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			navigate('/home');
		}, 2000);
	}

	//To change icon, change the input type
	const togglePassword = (event) => {
		event.preventDefault();
		if (passwordType === 'password') {
			setPasswordType('text');
			return;
		}
		setPasswordType('password');
	};
	//to run pass check and disable the button by default
	useEffect(() => {
		isPassCheck();
	}, []);

	return (
		<>
			<div className="change-pw-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Account
					information{' '}
				</div>
				<div className="change-pw-landing">
					<form className="contact-form-container1" onSubmit={handleSubmit}>
						<h1 style={{ color: '#9349de', margin: '0', fontSize: '36px' }}>
							{' '}
							Change password
						</h1>

						<label className="pw">
							Current password
							<div className="password-eye-box">
								<input
									type={passwordType}
									placeholder="Current password"
									className="input-style2"
									onChange={(e) => setPassword(e.target.value)}
								/>

								<button className="eye-slash" onClick={togglePassword}>
									{passwordType === 'password' ? (
										<i>
											<img src={eyeslash} alt="close-eye" />
										</i>
									) : (
										<i>
											<img src={eye} alt="open-eye" />
										</i>
									)}
								</button>
							</div>
						</label>
						<h3>
							The password must have at least 6 characters and must contain 1
							uppercase and 1 number.
						</h3>

						<label className="password">
							Password
							<div className="password-eye-box">
								<input
									id="password1"
									required
									onKeyUp={(e) => isPassCheck(e.target.value)}
									type={passwordType}
									placeholder="Insert your password"
									className="input-style2"
									onChange={(e) => setPassword(e.target.value)}
								/>

								<button className="eye-slash" onClick={togglePassword}>
									{passwordType === 'password' ? (
										<i>
											<img src={eyeslash} alt="close-eye" />
										</i>
									) : (
										<i>
											<img src={eye} alt="open-eye" />
										</i>
									)}
								</button>
							</div>
						</label>

						<label className="password">
							Password
							<div className="password-eye-box">
								<input
									required
									id="verifyPassword"
									type={passwordType}
									placeholder="Insert your password"
									className="input-style2"
									onKeyUp={(e) => isPassCheck(e.target.value)}
									onChange={(e) => setPassword(e.target.value)}
								/>

								<button className="eye-slash" onClick={togglePassword}>
									{passwordType === 'password' ? (
										<i>
											<img src={eyeslash} alt="close-eye" />
										</i>
									) : (
										<i>
											<img src={eye} alt="open-eye" />
										</i>
									)}
								</button>
							</div>
						</label>

						<div className="requirement-box">
							<div className="requirement">
								{!isSixChar(password) ? (
									<img src={CheckmarkGrey} alt="checkmark" />
								) : (
									<img src={Checkmark} alt="checkmark" />
								)}
								At least 6 characters
							</div>
							<div className="requirement">
								{!isUpperCase(password) ? (
									<img src={CheckmarkGrey} alt="checkmark" />
								) : (
									<img src={Checkmark} alt="checkmark" />
								)}
								1 Uppercase
							</div>
							<div className="requirement">
								{!isNumber(password) ? (
									<img src={CheckmarkGrey} alt="checkmark" />
								) : (
									<img src={Checkmark} alt="checkmark" />
								)}{' '}
								1 Number
							</div>
						</div>
						{/* <p style={{ color: 'red' }}>{passwordMatchError}</p> */}
						<button
							className="set-pw-button"
							id="set-pw-button"
							disabled={isLoading}
							onClick={handleSubmit}
						>
							{isLoading ? <Success /> : handleSubmit}
							Set password
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
