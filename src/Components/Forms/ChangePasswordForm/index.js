import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Success from '../../../Components/Success';

import Checkmark from '../../../assets/Checkmark.svg';
import CheckmarkGrey from '../../../assets/CheckmarkGrey.svg';
import eye from '../../../assets/eye.png';
import eyeslash from '../../../assets/eye-slash.png';
import './index.css';

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
	let password1 = document.getElementById('newPassword');
	let verifyPassword = document.getElementById('confirmPassword');

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

export default function ChangePasswordForm() {
	//Show lottie when loading and moving to success
	const [isLoading, setIsLoading] = useState(false);

	//To toggle visibility of password text
	const [passwordType, setPasswordType] = useState('password');

	//Split inputs so onchange only affects one input
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	//Navigate back to home page once password is changed
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			function updatePassword() {
				const token = sessionStorage.getItem('accessToken');
				console.log('new pw:', newPassword);
				console.log('confirm pw:', confirmPassword);
				const url =
					'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Auth/changepassword';
				const data = {
					newPassword: newPassword,
					confirmPassword: confirmPassword,
				};
				const options = {
					headers: { Authorization: `Bearer ${token}` },
				};
				axios
					.post(url, data, options)
					.then((res) => {
						console.log('SUCCESS: Password updated!', res.data);
						navigate('/home');
					})
					.catch(
						(error) => console.log('ERROR: Unable to update password:', error),
						alert(
							"Heads up! Something happened and you password hasn't ChangePasswordForm."
						)
					);
			}

			updatePassword();
			setIsLoading(false);
		}, 3000);
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
			<div className="change-pw-landing">
				<form className="contact-form-container1" onSubmit={handleSubmit}>
					<h1
						style={{
							color: '#9349de',
							margin: '0 0 -50px 0',
							fontSize: '36px',
						}}
					>
						Change password
					</h1>

					<h3>
						The password must have at least 6 characters and must contain 1
						uppercase and 1 number.
					</h3>

					<label className="password">
						Password
						<div className="password-eye-box">
							<input
								id="newPassword"
								required
								onKeyUp={(e) => isPassCheck(e.target.value)}
								type={passwordType}
								placeholder="Insert your password"
								className="input-style2"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								autoComplete="false"
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
								id="confirmPassword"
								type={passwordType}
								placeholder="Insert your password"
								className="input-style2"
								onKeyUp={(e) => isPassCheck(e.target.value)}
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								autoComplete="false"
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
							{!isSixChar(newPassword) ? (
								<img src={CheckmarkGrey} alt="checkmark" />
							) : (
								<img src={Checkmark} alt="checkmark" />
							)}
							At least 6 characters
						</div>
						<div className="requirement">
							{!isUpperCase(newPassword) ? (
								<img src={CheckmarkGrey} alt="checkmark" />
							) : (
								<img src={Checkmark} alt="checkmark" />
							)}
							1 Uppercase
						</div>
						<div className="requirement">
							{!isNumber(newPassword) ? (
								<img src={CheckmarkGrey} alt="checkmark" />
							) : (
								<img src={Checkmark} alt="checkmark" />
							)}{' '}
							1 Number
						</div>
					</div>

					<button
						className="set-pw-button"
						id="set-pw-button"
						disabled={isLoading}
						onClick={handleSubmit}
					>
						{isLoading ? <Success /> : null}
						Set password
					</button>
				</form>
			</div>
		</>
	);
}
