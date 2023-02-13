import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../../Components/Success';
import PasswordShowHide from '../../../Components/PasswordShowHide';

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
				<button className="close-button2" onClick={() => setLoginPage(0)}>
					<img src={greyX} alt="close" />
				</button>
				<div className="login-form">
					<h2 style={{ textAlign: 'center' }}>Welcome back!</h2>

					<label
						style={{
							paddingLeft: '50px',
						}}
					>
						Email
						<br />
						<input
							type="email"
							placeholder=" Insert your email"
							className="input-style2"
						/>
					</label>
					<br />
					<label
						className="password"
						style={{
							paddingLeft: '50px',
						}}
					>
						Password
						<PasswordShowHide />
					</label>
					<br />
					<button
						onClick={() => setLoginPage(2)}
						style={{
							textAlign: 'right',
							color: '#FFBA00',
							textDecoration: 'none',
							paddingRight: '50px',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
					>
						Forgot password
					</button>
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
				</div>
			</div>
		</div>
	);
}
