import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../../Components/Success';

import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function LoginModal(props) {
	//loading lottie for success message
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 3000);
	};

	return (
		<div className="darkBG" onClick={props.onClose}>
			<div
				title="Login Modal"
				className="login-modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					style={{
						backgroundColor: '#ffffff',
						border: 'none',
					}}
					onClick={props.onClose}
				>
					<img src={greyX} alt="close" />
				</button>
				<form className="login-form">
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
						href="https://mktfy-marketing-site.vercel.app/"
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
		</div>
	);
}
