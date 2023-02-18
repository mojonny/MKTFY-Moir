import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../Components/Success';

import mainImage from '../../assets/mainCat.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function Checkout() {
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
			<div className="product-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing <img src={breadArrow} alt="path-arrow" /> Checkout
				</div>
				<div className="product-landing1">
					<h1 style={{ color: '#6318af' }}> Checkout</h1>
					<div className="checkout-item-box">
						<img src={mainImage} alt="checkout-pic" className="checkout-pic" />
						<div className="checkout-item-detail">
							<h3> Pearl The Cat: Toy edition </h3>
							<div className="price-info1">
								<h4
									style={{
										color: '#560f9f',
										paddingTop: '10px',
										margin: '0px',
									}}
								>
									$340.00
								</h4>
							</div>
						</div>
					</div>
					<div className="side-info-container">
						<h3> Total</h3>
						<div className="price-info">
							<h1 style={{ color: '#6e20be' }}>$340.00</h1>
						</div>
						<button
							onClick={navigateHome}
							disabled={isLoading}
							className="checkout-button1"
							style={{ alignSelf: 'center' }}
						>
							{isLoading ? <Success /> : navigateHome}
							Contact seller to purchase
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
