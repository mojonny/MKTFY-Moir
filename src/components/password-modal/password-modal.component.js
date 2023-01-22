import React, { useState } from 'react';
import checkmark from '../../assets/Checkmark.png';

export default function PasswordModal() {
	const [passwordOpened, setPasswordOpened] = useState(false);
	console.log(passwordOpened);
	return (
		<>
			<h1>Sign Up</h1>
			<button onClick={() => setPasswordOpened(false)}>
				go back to Create
			</button>
			<h1>Create Password</h1>
			<p>
				The password must have at least 6 characters and must contain 1
				uppercase and 1 number.
			</p>
			<form>
				<label className="password">
					Password
					<br />
					<input
						type="password"
						placeholder=" Insert your password"
						className="input-style"
					/>
				</label>

				<label className="password">
					Password
					<br />
					<input
						type="password"
						placeholder=" Insert your password"
						className="input-style"
					/>
				</label>
				<div className="requirement-container">
					<div className="requirement">
						<img src={checkmark} alt="checkmark" />
						<p>At least 6 characters</p>
					</div>
					<div className="requirement">
						<img src={checkmark} alt="checkmark" />
						<p>1 Uppercase</p>
					</div>
					<div className="requirement">
						<img src={checkmark} alt="checkmark" />
						<p>1 Number</p>
					</div>
					<div className="agreement">
						<input className="checkbox" type="checkbox" />
					</div>
					<p className="TOC">
						{' '}
						By checking this box, you agree to our{' '}
						{/* <a href={toc}> Terms of Service </a> and our{' '} */}
						{/* <a href={privacy}>Privacy Policy</a> */}
					</p>
				</div>
				<button className="create-button">Create account</button>
			</form>
		</>
	);
}
