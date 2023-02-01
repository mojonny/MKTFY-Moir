import React, { useState } from 'react';

import Modal from 'react-modal';
import LoginModal from './login-modal';
import CreateModal from './create-account-modal';
import PasswordModal from './create-account-modal/password-modal';

import logo from '../../assets/MKTFYlogo.png';
import greyX from '../../assets/GreyX.png';
import back from '../../assets/Arrow.png';
import './index.css';

export default function LoginPortal() {
	//Opens login modal when button clicked
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	console.log(loginModalIsOpen);

	//Opens create-account modal when button clicked
	const [createOpened, setCreateOpened] = useState(false);

	//Opens second password modal when 'Next' button clicked
	const [passwordOpened, setPasswordOpened] = useState(false);

	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />

				<button
					className="login-button"
					onClick={() => setLoginModalIsOpen(true)}
				>
					Login
				</button>

				<button className="create-button" onClick={() => setCreateOpened(true)}>
					Create account
				</button>

				<div className="bottom-text">
					Find out more about us!
					<a
						href="https://mktfy-marketing-site.vercel.app/"
						className="site-link"
					>
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
					onRequestClose={() => setCreateOpened(false)}
				>
					<CreateModal />
					<button
						className="next-button"
						onClick={setPasswordOpened}
						style={{
							translate: '775px -175px',
						}}
					>
						Next
					</button>
					<button
						style={{
							backgroundColor: '#ffffff',
							border: 'none',
							translate: '990px -680px',
						}}
						onClick={() => setCreateOpened(false)}
					>
						<img src={greyX} alt="close" />
					</button>
				</Modal>

				<Modal
					isOpen={passwordOpened}
					onRequestClose={() => setPasswordOpened(false)}
					className="password-modal-container"
				>
					<PasswordModal />

					<button
						style={{
							position: 'absolute',
							top: '25px',
							right: '15px',
							backgroundColor: '#ffffff',
							border: 'none',
						}}
						onClick={() => {
							setCreateOpened(false);
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
				</Modal>
			</div>
		</div>
	);
}
