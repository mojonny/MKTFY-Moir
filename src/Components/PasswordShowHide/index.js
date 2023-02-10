import React, { useState } from 'react';

import eye from '../../assets/eye.png';
import eyeslash from '../../assets/eye-slash.png';

export default function PasswordShowHide() {
	const [passwordType, setPasswordType] = useState('password');

	const togglePassword = () => {
		if (passwordType === 'password') {
			setPasswordType('text');
			return;
		}
		setPasswordType('password');
	};

	return (
		<div>
			<input
				type={passwordType}
				placeholder="Insert your password"
				className="input-style1"
			/>
			<button onClick={togglePassword}>
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
