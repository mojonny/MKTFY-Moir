import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../../Components/Success';
import PasswordShowHide from '../../../Components/PasswordShowHide';

import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function LoginModal(props) {
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
							className="input-style1"
						/>
					</label>
					<br />
					<label className="password">
						Password
						<PasswordShowHide />
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
