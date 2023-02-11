import React, { useState } from 'react';

import LoginModal from './login-modal';
import ForgotPasswordModal from './login-modal/forgot-password-modal';
import ResetVerificationModal from './login-modal/forgot-password-modal/reset-verification-modal';
import ResetPasswordModal from './login-modal/forgot-password-modal/reset-verification-modal/reset-password-modal';

import CreateModal from './create-account-modal';
import PasswordModal from './create-account-modal/password-modal';

import logo from '../../assets/MKTFYlogo.png';
import './index.css';

export default function LoginPortal() {
	const [loginPage, setLoginPage] = useState(0);
	const [signupPage, setSignupPage] = useState(0);

	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />

				<button
					className="login-button"
					onClick={() => {
						setLoginPage(1);
					}}
				>
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

				{/*  Login Modals*/}
				{loginPage === 1 && (
					<LoginModal
						setLoginPage={setLoginPage}
						onClose={() => setLoginPage(0)}
					/>
				)}
				{loginPage === 2 && (
					<ForgotPasswordModal
						setLoginPage={setLoginPage}
						onClose={() => setLoginPage(0)}
					/>
				)}
				{loginPage === 3 && (
					<ResetVerificationModal
						setLoginPage={setLoginPage}
						onClose={() => setLoginPage(0)}
					/>
				)}
				{loginPage === 4 && (
					<ResetPasswordModal
						setLoginPage={setLoginPage}
						onClose={() => setLoginPage(0)}
					/>
				)}

				{/*  Signup Modals*/}
				{signupPage === 1 && (
					<CreateModal
						setSignupPage={setSignupPage}
						onClose={() => setSignupPage(0)}
					/>
				)}
				{signupPage === 2 && (
					<PasswordModal
						setSignupPage={setSignupPage}
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
