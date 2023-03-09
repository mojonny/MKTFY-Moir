import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
								<input placeholder="Pearl" className="account-input" />
							</div>
							<div>
								<label>Last name</label>
								<br />
								<input className="account-input" placeholder="The cat"></input>
							</div>
							<div>
								<label>Email</label>
								<br />
								<input
									className="account-input"
									type="email"
									placeholder="Insert your email"
								/>
							</div>
							<div>
								<label>Phone</label>
								<br />
								<input
									className="account-input"
									type="phone"
									placeholder="+1 (585) 505-3333"
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
									placeholder="123 1st Street SW"
								/>
							</div>
							<div className="city-province">
								<div>
									<label>City</label>
									<br />
									<input className="account-input-city" placeholder="Calgary" />
								</div>
								<div>
									<label>Province</label>
									<br />
									<input className="account-input-city" placeholder="Alberta" />
								</div>
							</div>
							<div>
								<label>Country</label>
								<br />
								<input className="account-input" placeholder="Canada" />
							</div>

							<button
								onClick={navigateHome}
								disabled={isLoading}
								className="save-button"
								style={{ alignSelf: 'center' }}
							>
								{isLoading ? <Success /> : navigateHome}
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
