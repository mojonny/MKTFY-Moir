import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../../../Components/Modal';
import Success from '../../../../Components/Success';

import checkmark from '../../../../assets/Checkmark.png';
import greyX from '../../../../assets/GreyX.png';
import back from '../../../../assets/Arrow.png';

export default function PasswordModal(props) {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateToPortal = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/');
			setIsLoading(false);
		}, 2000);
	};

	return (
		<div className="darkBG" onClick={props.onClose}>
			<Modal
				title="Create Password Modal"
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
				<div>
					<button
						style={{
							backgroundColor: '#ffffff',
							border: 'none',
							translate: '-360px -730px',
						}}
						onClick={props.onClose}
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
			</Modal>
		</div>
	);
}
