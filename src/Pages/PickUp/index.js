import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
							<h2>Matt Smith</h2>
							<div className="price-info1">
								<h3
									style={{
										color: '#560f9f',
										margin: '0px',
									}}
								>
									403-123-4567
								</h3>
							</div>
						</div>
					</div>
					<div className="side-info-container">
						<p>Please pick up your purchase at 12 12ave SW, Calgary, Alberta</p>
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
