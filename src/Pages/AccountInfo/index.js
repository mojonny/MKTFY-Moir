import React from 'react';
<<<<<<< HEAD
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../Store/userData';
=======
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
>>>>>>> main

import Success from '../../Components/Success';

import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function AccountInfo() {
	const [isLoading, setIsLoading] = useState(false);

	var [user, setUser] = useState([]);
	var [firstName, setFirstName] = useState('');
	var [lastName, setLastName] = useState('');
	var [phone, setPhone] = useState('');
	var [email, setEmail] = useState('');
	var [address, setAddress] = useState('');
	var [city, setCity] = useState('');

	async function updateUser() {
		setIsLoading(true);
		const token = sessionStorage.getItem('accessToken');
		const id = sessionStorage.getItem('id');
		const url = 'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User';
		const data = {
			id: id,
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			address: address,
			city: city,
		};
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		axios
			.put(url, data, options)
			.then((res) => {
				console.log('SUCCESS: Account info updated:', res.data);
			})
			.catch((error) => console.log('ERROR: Unable to update account', error));
		window.location.reload('/account');
		setIsLoading(false);
	}

	useEffect(() => {
		//Check if user exists
		function getUser() {
			const token = sessionStorage.getItem('accessToken');
			const id = sessionStorage.getItem('id');
			const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/${id}`;

			axios
				.get(url, { headers: { Authorization: `Bearer ${token}` } })
				.then((res) => {
					setUser(res.data);
					setFirstName(res.data.firstName);
					setLastName(res.data.lastName);
					setEmail(res.data.email);
					setPhone(res.data.phone);
					setAddress(res.data.address);
					setCity(res.data.city);
					return console.log('SUCCESS: User found!', res.data);
				})
				.catch((error) => {
					console.log('ERROR: User does not exist in db', error);
				});
		}
		getUser();
	}, []);

	const storedEmail = sessionStorage.getItem('userEmail');

	const filterByUser = userData.filter((user) => user.email === storedEmail);

	const filteredUser = filterByUser[0];

	return (
		<>
			<div className="account-info-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Account
					information{' '}
				</div>
				<div className="account-info-landing">
					<form className="account-form-container">
						<div className="left-side-form">
							<h2 style={{ color: '#000000', margin: '0px' }}>
								Personal information
							</h2>
							<div>
								<label>First name</label>
								<br />
								<input
<<<<<<< HEAD
									placeholder={filteredUser.firstName}
									className="account-input"
=======
									placeholder={user.firstName}
									className="account-input"
									name={firstName}
									onChange={(e) => setFirstName(e.target.value)}
>>>>>>> main
								/>
							</div>
							<div>
								<label>Last name</label>
								<br />
								<input
									className="account-input"
<<<<<<< HEAD
									placeholder={filteredUser.lastName}
								></input>
=======
									placeholder={user.lastName}
									name={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
>>>>>>> main
							</div>
							<div>
								<label>Email</label>
								<br />
								<input
									className="account-input"
									type="email"
<<<<<<< HEAD
									placeholder={filteredUser.email}
=======
									placeholder={user.email}
									name={email}
									onChange={(e) => setEmail(e.target.value)}
>>>>>>> main
								/>
							</div>
							<div>
								<label>Phone</label>
								<br />
								<input
									className="account-input"
									type="phone"
<<<<<<< HEAD
									placeholder={filteredUser.phone}
=======
									placeholder={user.phone}
									name={phone}
									onChange={(e) => setPhone(e.target.value)}
>>>>>>> main
								/>
							</div>
						</div>

						<div className="right-side-forms">
							<h2 style={{ color: '#000000', margin: '0px' }}>
								Address information
							</h2>
							<div>
								<label>Street address</label>
								<br />
								<input
									className="account-input"
<<<<<<< HEAD
									placeholder={filteredUser.address}
								/>
							</div>
							<div className="city-province">
								<div>
									<label>City</label>
									<br />
									<input
										className="account-input-city"
										placeholder={filteredUser.city}
									/>
								</div>
								<div>
									<label>Province</label>
									<br />
									<input
										className="account-input-city"
										placeholder={filteredUser.province}
									/>
								</div>
							</div>
=======
									placeholder={user.address}
									name={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
>>>>>>> main
							<div>
								<label>City</label>
								<br />
								<input
									className="account-input"
<<<<<<< HEAD
									placeholder={filteredUser.country}
=======
									placeholder={user.city}
									name={city}
									onChange={(e) => setCity(e.target.value)}
>>>>>>> main
								/>
							</div>
							<button
								onClick={updateUser}
								disabled={isLoading}
								className="save-button"
								style={{ alignSelf: 'center' }}
							>
								{isLoading ? <Success /> : null}
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
