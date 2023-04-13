import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getDealsAsync } from '../../Features/Deals/dealsSlice';

import defaultImg from '../../assets/LP.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function Checkout() {
	const [productImage, setProductImage] = useState();

	const productName = sessionStorage.getItem('productName');
	const productPrice = sessionStorage.getItem('productPrice');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const navigatePickup = () => {
		navigate('/pickup');
	};

	Storage.prototype.getObj = function (key) {
		return JSON.parse(this.getItem(key));
	};

	useEffect(() => {
		if (!sessionStorage.getObj('productImage')) {
			return;
		} else if (sessionStorage.getObj('productImage')) {
			setProductImage(sessionStorage.getObj('productImage'));
		}
	}, [productImage]);

	const placeholderImage = defaultImg;
	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	return (
		<>
			<div className="product-container">
				<div>
					<button
						style={{ border: 'none', background: 'none' }}
						onClick={() => navigate('/deals') || dispatch(getDealsAsync())}
					>
						Deals for you
					</button>
					<img src={breadArrow} alt="path-arrow" />
					<button
						onClick={() => navigate(-1)}
						style={{ border: 'none', background: 'none' }}
					>
						Product listing
					</button>
					<img src={breadArrow} alt="path-arrow" />
					<button style={{ border: 'none', background: 'none' }}>
						Checkout
					</button>
				</div>
				<div className="product-landing1">
					<h1 style={{ color: '#6318af' }}> Confirm</h1>
					<div className="checkout-item-box">
						<img
							src={productImage ? productImage : placeholderImage}
							className="checkout-pic"
							alt="checkout-pic"
							onError={onImageError}
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
