import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginModal from './login-modal';
import CreateModal from './create-account-modal';

import logo from '../../assets/MKTFYlogo.png';
import './index.css';

export default function LoginPortal() {
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	console.log(loginModalIsOpen);

	const setLoginModalIsOpenToTrue = () => {
		setLoginModalIsOpen(true);
	};

	const [createOpened, setCreateOpened] = useState(false);

	//Opens the first of two modals and ensures the second does not overlay until it is called.
	const setCreateOpenedToTrue = () => {
		setCreateOpened({
			createOpened: 'true',
			passwordOpened: 'false',
		});
	};

	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />

				<button className="login-button" onClick={setLoginModalIsOpenToTrue}>
					Login
				</button>

				<button className="create-button" onClick={setCreateOpenedToTrue}>
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
					<LoginModal />
				</Modal>

				<Modal
					isOpen={createOpened}
					className="modal-create-account"
					ariaHideApp={false}
					onRequestClose={() => setCreateOpened(false)}
				>
					<CreateModal />
				</Modal>
			</div>
		</div>
	);
}
