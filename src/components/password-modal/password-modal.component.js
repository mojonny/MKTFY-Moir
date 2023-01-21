import React from 'react';

export default function PasswordModal() {
	return (
		<>
			<h1>Create Password</h1>
			<p>
				The password must have at least 6 characters and must contain 1
				uppercase and 1 number.
			</p>
			<label className="password">
				Password
				<br />
				<input
					type="password"
					placeholder=" Insert your password"
					className="input-style"
				/>
			</label>
		</>
	);
}
