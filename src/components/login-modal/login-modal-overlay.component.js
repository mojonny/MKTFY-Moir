import React from 'react';
import './login-modal-overlay.styles.css';

function LoginModal() {
	return (
		<>
			<div className="modal-container">
				<h2>Welcome back!</h2>

				<form>
					<label>
						Email
						<br />
						<input
							type="email"
							placeholder=" Insert your email"
							className="input-style"
						/>
					</label>
					<label>
						Password
						<br />
						<input
							type="password"
							placeholder=" Insert your password"
							className="input-style"
						/>
					</label>

					<button className="login-button">Login</button>
				</form>
			</div>
		</>
	);
}

export default LoginModal;
