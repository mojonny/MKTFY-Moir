import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../Success';
import PasswordShowHide from '../../PasswordShowHide';

import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function LoginModal({ setLoginPage }) {
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
		<div className="darkBG" onClick={() => setLoginPage(0)}>
			<div
				title="Login Modal"
				className="login-modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<button className="close-button-login" onClick={() => setLoginPage(0)}>
					<img src={greyX} alt="close" />
				</button>
				<div className="login-form">
					<h1 style={{ textAlign: 'center', color: 'rgba(147, 73, 222, 1)' }}>
						Welcome back!
					</h1>

					<label>
						Email
						<br />
						<input
							type="email"
							placeholder=" Insert your email"
							className="input-style2"
						/>
					</label>

					<label className="password">
						Password
						<PasswordShowHide />
					</label>

					<button
						onClick={() => setLoginPage(2)}
						style={{
							textAlign: 'right',
							color: '#FFBA00',
							textDecoration: 'none',

							backgroundColor: '#ffffff',
							border: 'none',
						}}
					>
						Forgot password
					</button>

					<button
						onClick={navigateHome}
						disabled={isLoading}
						className="login-button"
						style={{ alignSelf: 'center' }}
					>
						{isLoading ? <Success /> : navigateHome}
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
