import React, { useState } from 'react';

import CreateModal from './create-account-modal';
import PasswordModal from './create-account-modal/password-modal';

import LoginButton from '../../Components/Auth0/LoginButton';
import SignupButton from '../../Components/Auth0/SignUpButton';

import logo from '../../assets/MKTFYlogo.png';
import './index.css';

export default function LoginPortal() {
	const [createOpened, setCreateOpened] = useState(false);
	console.log(createOpened);

	const [passwordOpened, setPasswordOpened] = useState(false);
	console.log(passwordOpened);

	const showCreate = () => {
		setCreateOpened(true);
		setPasswordOpened(false);
	};

	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />

				<div>
					<LoginButton>Login</LoginButton>
				</div>

				<div>
					<SignupButton className="create-button" onClick={showCreate}>
						Create account
					</SignupButton>

					<CreateModal
						createOpened={createOpened}
						onClose={() => setCreateOpened(false)}
					/>

					<PasswordModal
						passwordOpened={passwordOpened}
						onClose={() => setPasswordOpened(false)}
					/>
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
