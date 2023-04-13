import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getDealsAsync } from '../../Features/Deals/dealsSlice';

import Success from '../../Components/Success';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function PickUp() {
	const [isLoading, setIsLoading] = useState(false);

	const firstName = sessionStorage.getItem('sellerFirstName');
	const lastName = sessionStorage.getItem('sellerLastName');
	const phone = sessionStorage.getItem('sellerPhone');
	const address = sessionStorage.getItem('itemAddress');
	const city = sessionStorage.getItem('sellerCity');
	const id = sessionStorage.getItem('listingId');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const navigateHome = () => {
		sessionStorage.removeItem('sellerFirstName');
		sessionStorage.removeItem('sellerLastName');
		sessionStorage.removeItem('sellerPhone');
		sessionStorage.removeItem('itemAddress');
		sessionStorage.removeItem('sellerCity');
		sessionStorage.removeItem('productName');
		sessionStorage.removeItem('productPrice');
		sessionStorage.removeItem('productImage');
		sessionStorage.removeItem('sellerId');
		sessionStorage.removeItem('listingId');
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};

	async function contactSeller() {
		let token = sessionStorage.getItem('accessToken');
		let config = {
			method: 'put',
			url: `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/checkout/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		};

		try {
			const response = await axios.request(config);
			console.log(
				'SUCCESS: Seller contacted to confirm listing.',
				response.data
			);
			navigateHome();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="pickup-container">
				<div>
					<button
						style={{ border: 'none', background: 'none' }}
						onClick={() => navigate('/deals') || dispatch(getDealsAsync())}
					>
						Deals for you
					</button>
					<img src={breadArrow} alt="path-arrow" />
					<button
						onClick={() => navigate(-2)}
						style={{ border: 'none', background: 'none' }}
					>
						Product listing
					</button>
					<img src={breadArrow} alt="path-arrow" />

					<button
						onClick={() => navigate(-1)}
						style={{ border: 'none', background: 'none' }}
					>
						Checkout
					</button>
					<img src={breadArrow} alt="path-arrow" />

					<button style={{ border: 'none', background: 'none' }}>
						Pickup information
					</button>
				</div>
				<div className="pickup-landing">
					<h1 style={{ color: '#6318af' }}> Pick up</h1>
					<div className="checkout-item-box">
						<div className="profile-icon">P</div>
						<div className="checkout-item-detail">
							<h2>
								{firstName} {lastName}
							</h2>
							<div className="price-info1">
								<h3
									style={{
										color: '#560f9f',
										margin: '0px',
									}}
								>
									{phone}
								</h3>
							</div>
						</div>
					</div>
					<div className="side-info-container">
						<p>
							Please pick up your purchase at {address}, {city}
						</p>
						<br />
						<button
							onClick={() => contactSeller()}
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
