import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	setFirstName,
	setLastName,
	setEmail,
	setPhone,
	setAddress,
	setCity,
} from '../../../Features/Login/loginSlice';

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
	const [firstName, setFormFirstName] = useState('');
	const [lastName, setFormLastName] = useState('');
	const [email, setFormEmail] = useState('');
	const [phone, setFormPhone] = useState('');
	const [address, setFormAddress] = useState('');
	const [city, setFormCity] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		const userData = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			address: address,
			city: city,
		};

		setSignupPage(2);
		sessionStorage.setItem('firstName', userData.firstName);
		sessionStorage.setItem('lastName', userData.lastName);
		sessionStorage.setItem('userEmail', userData.email);
		sessionStorage.setItem('phone', userData.phone);
		sessionStorage.setItem('address', userData.address);
		sessionStorage.setItem('city', userData.city);

		dispatch(setFirstName(userData.firstName));
		dispatch(setLastName(userData.lastName));
		dispatch(setEmail(userData.email));
		dispatch(setPhone(userData.phone));
		dispatch(setAddress(userData.address));
		dispatch(setCity(userData.city));
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
							paddingTop: '20px',
							width: '50%',
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
								onChange={(e) => setFormFirstName(e.target.value)}
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
								onChange={(e) => setFormAddress(e.target.value)}
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
								onChange={(e) => setFormLastName(e.target.value)}
							/>
						</label>

						<label className="city">
							City
							<br />
							<select
								className="input-style"
								name="city"
								value={city}
								onChange={(e) => setFormCity(e.target.value)}
								placeholder=" City name"
							>
								<option value="Calgary">Calgary</option>
								<option value="Brooks">Brooks</option>
								<option value="Camrose">Camrose</option>
								<option value="Cold Lake">Cold Lake</option>
								<option value="Edmonton">Edmonton</option>
								<option value="Fort McMurray">Fort McMurray</option>
								<option value="Lacombe">Lacombe</option>
								<option value="Leduc">Leduc</option>
								<option value="Lethbridge">Lethbridge</option>
								<option value="Medicine Hat">Medicine Hat</option>
								<option value="Red Deer">Red Deer</option>
								<option value="St. Albert">St. Albert</option>
							</select>
						</label>

						<label className="email">
							Email
							<br />
							<input
								type="email"
								name="email"
								placeholder=" Insert your email"
								onChange={(e) => setFormEmail(e.target.value)}
								className="input-style"
								value={email}
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
								onChange={(e) => setFormPhone(e.target.value)}
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
