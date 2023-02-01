import React from 'react';

//import greyX from '../../../assets/GreyX.png';
import arrow from '../../../assets/Arrow.png';
import './index.css';

function CreateModal() {
	return (
		<>
			<div className="modal-container">
				<h2>Welcome to MKTFY!</h2>

				<h3>
					It’s nice to meet you. At MKTFY you are able to buy, sell and donate
					awesome stuff to a community of awesome people. Please fill out the
					form below to get started.
				</h3>

				<form className="form-container">
					<div className="form-input-layout">
						<label className="first">
							First name
							<br />
							<input
								className="input-style"
								type="text"
								name="name"
								placeholder=" Your first name"
							/>
						</label>

						<label className="address">
							Street address
							<br />
							<input
								type="text"
								name="Street address"
								placeholder=" Insert your address"
								className="input-style"
							/>
						</label>

						<label className="last">
							Last name
							<br />
							<input
								className="input-style"
								type="text"
								name="name"
								placeholder=" Your last name"
							/>
						</label>

						<label className="city">
							City
							<br />
							<input
								type="text"
								name="city"
								placeholder=" City name"
								className="input-style"
							/>
						</label>

						<label className="province">
							Province
							<br />
							<input
								type="text"
								name="province"
								placeholder=" Your province"
								className="input-style"
							/>
						</label>

						<label className="email">
							Email
							<br />
							<input
								type="email"
								name="email"
								placeholder=" Insert your email"
								className="input-style"
							/>
						</label>

						<label className="country">
							Country
							<br />
							<input
								type="text"
								name="country"
								placeholder=" Country name"
								className="input-style"
							/>
						</label>

						<label className="phone">
							Phone
							<br />
							<input
								type="phone"
								name="phone"
								placeholder=" +1 (000)000-0000"
								className="input-style"
							/>
						</label>
					</div>
					<p>
						At MKTFY we respect your privacy and do not tolerate spam, and will
						never sell, rent, lease or give away your information. We only buy,
						sell or donate your stuff here at MKTFY.{' '}
					</p>
				</form>
			</div>
			{/* I left the modal buttons outside of PasswordModal since they were not functioning inside the modal component itself. This is likely due to inexperience and not fully understanding binding props. */}

			<button
				style={{
					position: 'absolute',
					top: '25px',
					left: '15px',
					backgroundColor: '#ffffff',
					border: 'none',
				}}
			>
				<img src={arrow} alt="back" />
			</button>
		</>
	);
}

export default CreateModal;
