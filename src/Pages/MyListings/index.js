import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
// import { Link } from 'react-router-dom';

import breadArrow from '../../assets/breadCrumbArrow.png';
import defaultImg from '../../assets/LP.png';
import './index.css';

export default function MyListings() {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		const token = sessionStorage.getItem('accessToken');
		const url =
			'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/products';
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		axios
			.get(url, options)
			.then((res) => {
				setListings(res.data);
				console.log('SUCCESS: Retrieved your listings:', res.data);
			})
			.catch((error) =>
				console.log('ERROR: Unable to retrieve your listings:', error)
			);
	}, []);

	const placeholderImage = defaultImg;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
		<ul className="listing-item-box" key={product.id}>
			<li className="listing-landing">
				<div className="listing-item-box">
					<img
						className="listing-pic"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="Product pic"
						onError={onImageError}
					/>
					<div className="listing-item-detail">
						<p>{moment(product.created).format('MMM Do YYYY')}</p>
						<h4>{product.productName}</h4>
						<h4>{product.price}</h4>
					</div>
				</div>
			</li>
		</ul>
	));
	return (
		<div className="listing-container">
			{' '}
			<div className="listing-labels">
				<div>
					Deals for you <img src={breadArrow} alt="path-arrow" /> My Listings
				</div>
				<br />
				<h1> My listings</h1>
				<br />
				<div className="active-sold-labels">
					<button
					// onClick={handleListings}
					// className={buttonClass}
					// value="active"
					>
						Active items
					</button>
					<button
					// onClick={handleListings}
					// className={buttonClass1}
					// value="sold"
					>
						Sold items
					</button>
				</div>
			</div>
			<br />
			<div className="mylistings-container">{listingComponents}</div>
		</div>
	);
}
