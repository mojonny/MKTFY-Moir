import React, { useState } from 'react';

import LoginModal from './login-modal';
import CreateModal from './create-account-modal';

import logo from '../../assets/MKTFYlogo.png';

import './index.css';
import PasswordModal from './create-account-modal/password-modal';

export default function LoginPortal() {
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

	const [createOpened, setCreateOpened] = useState(false);

	const [passwordOpened, setPasswordOpened] = useState(false);
	console.log(passwordOpened);

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

				<div>
					<button
						className="login-button"
						onClick={() => setLoginModalIsOpen(true)}
					>
						Login
					</button>
					<LoginModal
						className="modal-login"
						loginModalIsOpen={loginModalIsOpen}
						onClose={() => setLoginModalIsOpen(false)}
					/>
				</div>
				<div>
					<button className="create-button" onClick={setCreateOpenedToTrue}>
						Create account
					</button>
					<div>
						<CreateModal
							className="modal-create"
							createOpened={createOpened}
							onClose={() => setCreateOpened(false)}
						/>
						<button className="next-button" onClick={setPasswordOpened}>
							Next
						</button>
						<PasswordModal
							className="modal-create"
							createOpened={createOpened}
							onClose={() => setCreateOpened(false)}
						/>
					</div>
				</div>

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
