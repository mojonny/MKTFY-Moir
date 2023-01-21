import logo from '../../assets/MKTFYlogo.png';
import './login-portal.styles.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginModal from '../login-modal/login-modal-form.component';
import CreateModal from '../create-account-modal/create-account-modal.component';

function LoginPortal() {
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	console.log(loginModalIsOpen);

	const setLoginModalIsOpenToTrue = () => {
		setLoginModalIsOpen(true);
	};

	const setLoginModalIsOpenToFalse = () => {
		setLoginModalIsOpen(false);
	};

	const [accountModalIsOpen, setAccountModalIsOpen] = useState(false);
	console.log(accountModalIsOpen);

	const setAccountModalIsOpenToTrue = () => {
		setAccountModalIsOpen(true);
	};

	const setAccountModalIsOpenToFalse = () => {
		setAccountModalIsOpen(false);
	};

	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />

				<button className="login-button" onClick={setLoginModalIsOpenToTrue}>
					Login
				</button>

				<button className="create-button" onClick={setAccountModalIsOpenToTrue}>
					Create account
				</button>

				<div className="bottom-text">
					Find out more about us!
					<a href="https://www.google.ca" className="site-link">
						Visit our website
					</a>
				</div>

				<Modal isOpen={loginModalIsOpen}>
					<button onClick={setLoginModalIsOpenToFalse}>x</button>
					<LoginModal />
					<h1>login here</h1>
				</Modal>

				<Modal isOpen={accountModalIsOpen}>
					<button onClick={setAccountModalIsOpenToFalse}>x</button>
					<CreateModal />
					<h1>Create here</h1>
				</Modal>
			</div>
		</div>
	);
}

export default LoginPortal;
