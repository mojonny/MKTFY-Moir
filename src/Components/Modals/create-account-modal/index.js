import React, { useState } from 'react';
import axios from 'axios';

import greyX from '../../../assets/GreyX.png';
import './index.css';

function isValidEmail(email) {
	return RegExp(
		'^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
			'(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
			'|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
	).test(email);
}

export default function CreateModal({ setSignupPage }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [province, setProvince] = useState('');
	const [country, setCountry] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const userData = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			address: address,
			city: city,
			province: province,
			country: country,
		};
		axios
			.post('https://localhost:3000/api/account/register', userData)
			.then((response) => {
				console.log(response.status, response.data);
			});

		setSignupPage(2);
		sessionStorage.setItem('userEmail', userData.email);
	};

	return (
		<div className="darkBG" onClick={() => setSignupPage(0)}>
			<div
				title="Create Modal"
				className="create-modal1"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<form className="form-container-create">
					<button
						className="cancel-button-create"
						onClick={() => setSignupPage(0)}
					>
						<img src={greyX} alt="close" />
					</button>
					<h1
						style={{
							color: 'rgba(147,73,222,1)',
							size: '36px',
							paddingTop: '16px',
						}}
					>
						Welcome to MKTFY!
					</h1>
					<h3
						style={{
							paddingRight: '140px',
							size: '20px',
						}}
					>
						It’s nice to meet you. At MKTFY you are able to buy, sell and donate
						awesome stuff to a community of awesome people. Please fill out the
						form below to get started.
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
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
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
								value={address}
								onChange={(e) => setAddress(e.target.value)}
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
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
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
								value={city}
								onChange={(e) => setCity(e.target.value)}
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
								value={province}
								onChange={(e) => setProvince(e.target.value)}
							/>
						</label>

						<label className="email">
							Email
							<br />
							<input
								type="email"
								name="email"
								placeholder=" Insert your email"
								onChange={(e) => setEmail(e.target.value)}
								className="input-style"
								value={email}
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
								value={country}
								onChange={(e) => setCountry(e.target.value)}
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
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</label>
						<button
							type="submit"
							disabled={!isValidEmail(email)}
							className="next-page-button"
							onClick={onSubmit}
						>
							Next
						</button>

						<p className="bottom-note">
							At MKTFY we respect your privacy and do not tolerate spam, and
							will never sell, rent, lease or give away your information. We
							only buy, sell or donate your stuff here at MKTFY.{' '}
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
