import React from 'react';

//import Modal from '../../../Components/Modal';

import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function CreateModal({ setSignupPage }) {
	return (
		<div className="darkBG" onClick={() => setSignupPage(0)}>
			<div
				title="Create Modal"
				className="create-modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="create-modal-container">
					<div className="form-container">
						<button
							className="cancel-button"
							style={{
								backgroundColor: '#ffffff',
								border: 'none',
							}}
							onClick={() => setSignupPage(0)}
						>
							<img src={greyX} alt="close" />
						</button>
						<h2>Welcome to MKTFY!</h2>
						<h3
							style={{
								paddingRight: '140px',
								size: '20px',
							}}
						>
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
							<button className="next-button" onClick={() => setSignupPage(2)}>
								Next
							</button>

							<p className="bottom-note">
								At MKTFY we respect your privacy and do not tolerate spam, and
								will never sell, rent, lease or give away your information. We
								only buy, sell or donate your stuff here at MKTFY.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
