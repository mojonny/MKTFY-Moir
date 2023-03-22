import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../Store/userData';

import Success from '../../Components/Success';

import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function AccountInfo() {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};

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
									placeholder={filteredUser.firstName}
									className="account-input"
								/>
							</div>
							<div>
								<label>Last name</label>
								<br />
								<input
									className="account-input"
									placeholder={filteredUser.lastName}
								></input>
							</div>
							<div>
								<label>Email</label>
								<br />
								<input
									className="account-input"
									type="email"
									placeholder={filteredUser.email}
								/>
							</div>
							<div>
								<label>Phone</label>
								<br />
								<input
									className="account-input"
									type="phone"
									placeholder={filteredUser.phone}
								/>
							</div>
						</div>

						<div className="right-side-form">
							<h2 style={{ color: '#000000', margin: '0px' }}>
								Address information
							</h2>
							<div>
								<label>Street address</label>
								<br />
								<input
									className="account-input"
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
							<div>
								<label>Country</label>
								<br />
								<input
									className="account-input"
									placeholder={filteredUser.country}
								/>
							</div>

							<button
								onClick={navigateHome}
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
