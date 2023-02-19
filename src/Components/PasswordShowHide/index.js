import React, { useState } from 'react';

import eye from '../../assets/eye.png';
import eyeslash from '../../assets/eye-slash.png';
import './index.css';

export default function PasswordShowHide() {
	const [passwordType, setPasswordType] = useState('password');

	const togglePassword = (event) => {
		event.preventDefault();
		if (passwordType === 'password') {
			setPasswordType('text');
			return;
		}
		setPasswordType('password');
	};

	return (
		<div className="password-eye-box">
			<input
				required
				type={passwordType}
				placeholder="Insert your password"
				className="input-style2"
			/>
			<button className="eye-slash" onClick={togglePassword}>
				{passwordType === 'password' ? (
					<i>
						<img src={eyeslash} alt="close" />
					</i>
				) : (
					<i>
						<img src={eye} alt="close" />
					</i>
				)}
			</button>
		</div>
	);
}
