import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Success from '../../../../Components/Success';

import checkmark from '../../../../assets/Checkmark.png';

export default function PasswordModal() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 200000);
	};

	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>Create Password</h2>
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
					<div className="requirement">
						<p className="TOC">
							<input className="checkbox" type="checkbox" /> By checking this
							box, you agree to our
							<Link to="/termsandservices" style={{ textDecoration: 'none' }}>
								{' '}
								Terms of Service{' '}
							</Link>
							and our
							<Link to="/privacy" style={{ textDecoration: 'none' }}>
								{' '}
								Privacy Policy{' '}
							</Link>
						</p>
					</div>
				</div>

				<button
					onClick={navigateHome}
					disabled={isLoading}
					className="create-button"
					style={{
						position: 'relative',
						top: '30px',
						left: '25%',
					}}
				>
					{isLoading ? <Success /> : navigateHome}
					Create account
				</button>
			</form>
		</div>
	);
}
