import React from 'react';
import './login-modal-overlay.styles.css';
import greyX from '../../../assets/GreyX.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	console.log(loginModalIsOpen);

	const navigate = useNavigate();

	const navigateToSuccess = () => {
		navigate('/success');
	};

	return (
		<>
			<div className="login-modal-container">
				<form className="login-form">
					<button
						style={{
							position: 'absolute',
							top: '25px',
							right: '15px',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
						onClick={() => setLoginModalIsOpen(false)}
					>
						<img src={greyX} alt="x" />
					</button>

					<h2 style={{ textAlign: 'center' }}>Welcome back!</h2>

					<label>
						Email
						<br />
						<input
							type="email"
							placeholder=" Insert your email"
							className="input-style"
						/>
					</label>
					<br />
					<label>
						Password
						<br />
						<input
							type="password"
							placeholder=" Insert your password"
							className="input-style"
						/>
					</label>
					<br />
					<a
						style={{
							textAlign: 'right',
							color: '#FFBA00',
							textDecoration: 'none',
						}}
						href="https://www.google.ca"
					>
						Forgot password
					</a>
					<br />
					<button
						className="login-button"
						style={{ alignSelf: 'center' }}
						onClick={navigateToSuccess}
					>
						Login
					</button>
				</form>
			</div>
		</>
	);
}

export default LoginModal;
