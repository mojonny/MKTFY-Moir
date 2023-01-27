import './login-modal-overlay.styles.css';
import greyX from '../../../assets/GreyX.png';
import { useState } from 'react';
import Success from '../../Pages/Success/Success.component';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
	const [isLoading, setIsLoading] = useState(false);

	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	console.log(loginModalIsOpen);

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
						onClick={navigateHome}
						disabled={isLoading}
						className="login-button"
						style={{ alignSelf: 'center' }}
					>
						{isLoading ? <Success /> : navigateHome}
						Login
					</button>
				</form>
			</div>
		</>
	);
}

export default LoginModal;
