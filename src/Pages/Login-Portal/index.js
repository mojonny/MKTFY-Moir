import React, { useState } from 'react';

import LoginModal from './login-modal';
import CreateModal from './create-account-modal';
import PasswordModal from './create-account-modal/password-modal';

import logo from '../../assets/MKTFYlogo.png';
import './index.css';

export default function LoginPortal() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [signupPage, setSignupPage] = useState(0);

	const showModal = () => {
		setIsModalOpen(true);
	};

	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />

				<button className="login-button" onClick={showModal}>
					Login
				</button>

				<button
					className="create-button"
					onClick={() => {
						setSignupPage(1);
					}}
				>
					Create account
				</button>

				{isModalOpen && (
					<LoginModal
						isModalOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
					/>
				)}
				{signupPage === 1 && (
					<CreateModal
						signupPage={signupPage}
						onClose={() => setSignupPage(0)}
					/>
				)}
				{signupPage === 2 && (
					<PasswordModal
						signupPage={signupPage}
						onClose={() => setSignupPage(0)}
					/>
				)}

				<div className="bottom-text">
					Find out more about us!
					<a
						href="https://mktfy-marketing-site.vercel.app/"
						className="site-link"
					>
						Visit our website
					</a>
				</div>
			</div>
		</div>
	);
}
