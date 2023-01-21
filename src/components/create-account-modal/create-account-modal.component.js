import React from 'react';
import './create-account-modal.styles.css';

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
				<div className="form-container">
					<form className="form-input">
						<label>
							First name
							<input type="text" name="name" placeholder="Your first name" />
						</label>
						<label>
							Street address
							<input
								type="text"
								name="Street address"
								placeholder="Insert your address"
							/>
						</label>
						<label>
							Last name
							<input type="text" name="name" placeholder="Your last name" />
						</label>
						<label>
							City
							<br />
							<input type="text" name="city" placeholder="City name" />
						</label>
						<label>
							Province
							<input type="text" name="province" placeholder="Your province" />
						</label>
						<label>
							Email
							<input
								type="email"
								name="email"
								placeholder="Insert your email"
							/>
						</label>
						<label>
							Country
							<input type="text" name="country" placeholder="Country name" />
						</label>
						<label>
							Phone
							<input type="phone" name="phone" placeholder="+1 (000)000-0000" />
						</label>
						<button className="next-button" type="submit" value="Next">
							Next
						</button>
						<p>
							At MKTFY we respect your privacy and do not tolerate spam, and
							will never sell, rent, lease or give away your information. We
							only buy, sell or donate your stuff here at MKTFY.{' '}
						</p>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateModal;
