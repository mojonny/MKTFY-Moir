import React, { useState } from 'react';

import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function CreateModal(props) {
	const [createOpened, setCreateOpened] = useState(false);
	console.log(createOpened);

	const [passwordOpened, setPasswordOpened] = useState(false);
	console.log(passwordOpened);

	if (!props.createOpened) {
		return null;
	}

	const showPassword = () => {
		setCreateOpened(false);
		setPasswordOpened(true);
	};

	return (
		<div className="darkBG" onClick={props.onClose}>
			<div className="modal-create" onClick={(e) => e.stopPropagation()}>
				<div className="create-modal-container">
					<div className="form-container">
						<button
							style={{
								backgroundColor: '#ffffff',
								border: 'none',
							}}
							onClick={props.onClose}
						>
							<img
								style={{
									backgroundColor: '#ffffff',
									border: 'none',
								}}
								src={greyX}
								alt="close"
							/>
						</button>
						<button
							className="next-button"
							props={props}
							onClick={showPassword}
						>
							Next
						</button>
						<h2>Welcome to MKTFY!</h2>
						<h3>
							It’s nice to meet you. At MKTFY you are able to buy, sell and
							donate awesome stuff to a community of awesome people. Please fill
							out the form below to get started.
						</h3>
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
							At MKTFY we respect your privacy and do not tolerate spam, and
							will never sell, rent, lease or give away your information. We
							only buy, sell or donate your stuff here at MKTFY.{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
