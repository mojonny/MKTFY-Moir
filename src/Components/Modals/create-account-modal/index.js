import React, { useState } from 'react';
import axios from 'axios';

import greyX from '../../../assets/GreyX.png';
import './index.css';

export default function CreateModal({ setSignupPage }) {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		province: '',
		country: '',
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	};

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const userData = {
			firstName: state.firstName,
			lastName: state.lastName,
			email: state.email,
			phone: state.phone,
			address: state.address,
			city: state.city,
			province: state.province,
			country: state.country,
		};
		axios
			.post('https://localhost:3000/api/account/register', userData)
			.then((response) => {
				console.log(response.status, response.data);
			});

		setSignupPage(2);
		sessionStorage.setItem('userEmail', user.email);
	};

	return (
		<div className="darkBG" onClick={() => setSignupPage(0)}>
			<div
				title="Create Modal"
				className="create-modal1"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="form-container-create">
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
								required
								className="input-style"
								type="text"
								name="name"
								placeholder=" Your first name"
								value={state.firstName}
								onChange={handleChange}
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
								value={state.address}
								onChange={handleChange}
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
								value={state.lastName}
								onChange={handleChange}
							/>
						</label>

						<label className="city">
							City
							<br />
							<input
								required
								type="text"
								name="city"
								placeholder=" City name"
								className="input-style"
								value={state.city}
								onChange={handleChange}
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
								value={state.province}
								onChange={handleChange}
							/>
						</label>

						<label className="email">
							Email
							<br />
							<input
								required
								type="email"
								name="email"
								placeholder=" Insert your email"
								onChange={onChangeHandler}
								className="input-style"
								value={state.email}
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
								value={state.country}
								onChange={handleChange}
							/>
						</label>

						<label className="phone">
							Phone
							<br />
							<input
								required
								type="phone"
								name="phone"
								placeholder=" +1 (000)000-0000"
								className="input-style"
								value={state.phone}
								onChange={handleChange}
							/>
						</label>
						<button className="next-button" onClick={onSubmit}>
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
	);
}
