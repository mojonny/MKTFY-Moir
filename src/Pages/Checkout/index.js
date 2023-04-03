import React from 'react';

import { useNavigate } from 'react-router-dom';

import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function Checkout() {
	const navigate = useNavigate();

	const navigatePickup = () => {
		navigate('/pickup');
	};

	Storage.prototype.getObj = function (key) {
		return JSON.parse(this.getItem(key));
	};

	const productName = sessionStorage.getItem('productName');
	const productPrice = sessionStorage.getItem('productPrice');
	const productImage = sessionStorage.getObj('productImage');

	return (
		<>
			<div className="product-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing <img src={breadArrow} alt="path-arrow" /> Checkout
				</div>
				<div className="product-landing1">
					<h1 style={{ color: '#6318af' }}> Confirm</h1>
					<div className="checkout-item-box">
						<img
							src={productImage}
							alt="checkout-pic"
							className="checkout-pic"
						/>
						<div className="checkout-item-detail">
							<h3>{productName}</h3>
							<div className="price-info1">
								<h4
									style={{
										color: '#560f9f',
										paddingTop: '10px',
										margin: '0px',
									}}
								>
									${productPrice}
								</h4>
							</div>
						</div>
					</div>
					<div className="side-info-container">
						<h3> Total</h3>
						<div className="price-info">
							<h1 style={{ color: '#6e20be' }}> ${productPrice}</h1>
						</div>
						<br />
						<button
							onClick={navigatePickup}
							className="checkout-button1"
							style={{ alignSelf: 'center' }}
						>
							Contact seller to purchase
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
