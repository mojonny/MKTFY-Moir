import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Success from '../../../../Components/Success';

import checkmark from '../../../../assets/Checkmark.png';
import greyX from '../../../../assets/GreyX.png';
import back from '../../../../assets/Arrow.png';

export default function PasswordModal(props) {
	const [passwordOpened, setPasswordOpened] = useState(false);
	console.log(passwordOpened);

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateToPortal = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/');
			setIsLoading(false);
		}, 2000);
	};

	if (!props.passwordOpened) {
		return null;
	}

	return (
		<div className="darkBG" onClick={props.onClose}>
			<div className="modal-password" onClick={(e) => e.stopPropagation()}>
				<div className="password-modal-container">
					<form className="password-form">
						<div>
							<button
								style={{
									position: 'absolute',
									top: '25px',
									right: '15px',
									backgroundColor: '#ffffff',
									border: 'none',
								}}
								onClick={() => {
									setPasswordOpened(false);
								}}
							>
								<img src={greyX} alt="close" />
							</button>
							<button
								style={{
									backgroundColor: '#ffffff',
									border: 'none',
									translate: '-360px -730px',
								}}
								onClick={() => setPasswordOpened(false)}
							>
								<img src={back} alt="back" />
							</button>
						</div>
						<h2 style={{ textAlign: 'center' }}>Create Password</h2>
						<h3>
							The password must have at least 6 characters and must contain 1
							uppercase and 1 number.
						</h3>

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
									<input className="checkbox" type="checkbox" /> By checking
									this box, you agree to our
									<Link
										to="/termsandservices"
										style={{ textDecoration: 'none' }}
									>
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
							onClick={navigateToPortal}
							disabled={isLoading}
							className="create-button"
							style={{
								position: 'relative',
								top: '30px',
								left: '25%',
							}}
						>
							{isLoading ? <Success /> : navigateToPortal}
							Create account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
