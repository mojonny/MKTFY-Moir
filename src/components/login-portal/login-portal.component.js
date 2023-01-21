import logo from '../../assets/MKTFYlogo.png';
import greyX from '../../assets/GreyX.png';
import './login-portal.styles.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginModal from '../login-modal/login-modal-overlay.component';
import CreateModal from '../create-account-modal/create-account-modal.component';

function LoginPortal() {
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	console.log(loginModalIsOpen);

	const setLoginModalIsOpenToTrue = () => {
		setLoginModalIsOpen(true);
	};

	const [accountModalIsOpen, setAccountModalIsOpen] = useState(false);
	console.log(accountModalIsOpen);

	const setAccountModalIsOpenToTrue = () => {
		setAccountModalIsOpen(true);
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

				<Modal
					isOpen={loginModalIsOpen}
					onRequestClose={() => setLoginModalIsOpen(false)}
					className="modal-login"
				>
					<button
						style={{
							position: 'absolute',
							top: '25px',
							right: '15px',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
						onClick={() => setLoginModalIsOpen(false)}
					>
						<img src={greyX} alt="x" />
					</button>
					<LoginModal />
				</Modal>

				<Modal
					isOpen={accountModalIsOpen}
					onRequestClose={() => setAccountModalIsOpen(false)}
					className="modal-create-account"
				>
					<button
						style={{
							position: 'absolute',
							top: '25px',
							right: '15px',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
						onClick={() => setAccountModalIsOpen(false)}
					>
						<img src={greyX} alt="x" />
					</button>
					<CreateModal />
				</Modal>
			</div>
		</div>
	);
}

export default LoginPortal;
