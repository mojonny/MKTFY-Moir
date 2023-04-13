import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import defaultImg from '../../assets/LP.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function MyPurchases() {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		async function getPurchases() {
			try {
				const token = sessionStorage.getItem('accessToken');
				const url =
					'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/purchases';
				const options = {
					headers: { Authorization: `Bearer ${token}` },
				};
				const response = await axios.get(url, options);
				setListings(response.data);
				console.log('Get all Listings:', response.data);
			} catch (err) {
				console.log('err', err);
				throw new Error(err);
			}
		}
		getPurchases();
	}, []);

	const placeholderImage = defaultImg;
	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
		// 	<div className="purchases-landing">
		// 	<div className="purchase-item-box">
		// 		<div className="purchase-item-detail">
		// 			<p> September 07,2020</p>
		// 			<h4> Pearl The Cat: Toy edition </h4>
		// 			<div className="price-info1">
		// 				<h4
		// 					style={{
		// 						color: '#560f9f',

		// 						margin: '0px',
		// 					}}
		// 				>
		// 					$340.00
		// 				</h4>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div key={product.id}>
			<div className="view-all-info-label">
				<Link
					to={`/product/${product.id}`}
					key={product.id}
					id={product.id}
					style={{ textDecorationLine: 'none' }}
				>
					<img
						className="all-product-img"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="catPicture"
						onError={onImageError}
					/>
				</Link>
				<div className="all-bottom-card-info">
					<p>{product.productName}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>${product.price}</h3>
				</div>
			</div>
		</div>
	));

	return (
		<>
			<div className="purchase-container">
				<div className="purchase-labels">
					<div>
						Deals for you <img src={breadArrow} alt="path-arrow" /> My Purchases
					</div>
					<h1> My purchases</h1>
					<p>number of items goes here</p>
				</div>

				<div className="purchases-landing">
					<div className="purchase-item-box">
						<div className="purchase-item-detail">{listingComponents}</div>
					</div>
				</div>
			</div>
		</>
	);
}
