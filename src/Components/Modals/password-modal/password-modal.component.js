import React from 'react';
import { useNavigate } from 'react-router-dom';
import checkmark from '../../../assets/Checkmark.png';
import './password-modal.styles.css';

export default function PasswordModal() {
	const navigate = useNavigate();
	//navigate to Terms/Privacy policies pages

	const navigateToTOC = () => {
		navigate('/toc');
	};

	const navigateToPrivacy = () => {
		navigate('/privacy');
	};
	const navigateHome = () => {
		navigate('/home');
	};

	return (
		<div className="password-container">
			<h2>Create Password</h2>
			<h3>
				The password must have at least 6 characters and must contain 1
				uppercase and 1 number.
			</h3>

			<form>
				<label className="password">
					Password
					<br />
					<input
						type="password"
						placeholder=" Insert your password"
						className="input-style"
					/>
				</label>
				<br />
				<label className="password">
					Password
					<br />
					<input
						type="password"
						placeholder=" Insert your password"
						className="input-style"
					/>
				</label>
				<div className="requirement-container">
					<div className="requirement">
						<p>
							<img src={checkmark} alt="checkmark" />
							At least 6 characters
						</p>
					</div>
					<div className="requirement">
						<p>
							<img src={checkmark} alt="checkmark" /> 1 Uppercase
						</p>
					</div>
					<div className="requirement">
						<p>
							<img src={checkmark} alt="checkmark" /> 1 Number
						</p>
					</div>
					<div className="agreement">
						<input className="checkbox" type="checkbox" />
					</div>
					<p className="TOC">
						By checking this box, you agree to our {''}
						<a href={navigateToTOC}> Terms of Service </a> and our
						<a href={navigateToPrivacy}> Privacy Policy</a>
					</p>
				</div>
				<button className="create-button" onClick={navigateHome}>
					{' '}
					Create account
				</button>
			</form>
		</div>
	);
}
