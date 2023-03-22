import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../Store/userData';

import Success from '../../Components/Success';

import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function PickUp() {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};
	const userId = sessionStorage.getItem('userId');
	console.log(userId);
	const filterByUser = userData.filter((user) => user.userId === userId);
	const filteredUser = filterByUser[0];
	console.log(filteredUser);

	return (
		<>
			<div className="pickup-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing <img src={breadArrow} alt="path-arrow" /> Checkout
					<img src={breadArrow} alt="path-arrow" /> Pickup Information
				</div>
				<div className="pickup-landing">
					<h1 style={{ color: '#6318af' }}> Pick up</h1>
					<div className="checkout-item-box">
						<div className="profile-icon">P</div>
						<div className="checkout-item-detail">
							<h2>
								{filteredUser.firstName} {filteredUser.lastName}
							</h2>
							<div className="price-info1">
								<h3
									style={{
										color: '#560f9f',
										margin: '0px',
									}}
								>
									{filteredUser.phone}
								</h3>
							</div>
						</div>
					</div>
					<div className="side-info-container">
						<p>
							Please pick up your purchase at {filteredUser.address},{' '}
							{filteredUser.city},{filteredUser.province}
						</p>
						<br />
						<button
							onClick={navigateHome}
							disabled={isLoading}
							className="checkout-button1"
							style={{ alignSelf: 'center' }}
						>
							Contact seller
						</button>
					</div>
				</div>
			</div>
			{isLoading ? <Success /> : null}
		</>
	);
}
