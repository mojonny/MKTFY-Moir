import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function Slider({ title, className, sliderCategory }) {
	const [listings, setListings] = useState([]);

	let token = useSelector((state) => state.login.token);

	useEffect(() => {
		const url =
			'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/deals?maxResults=100';
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		if (token !== null) {
			axios
				.get(url, options)
				.then((res) => {
					setListings(res.data);
				})
				.catch((error) =>
					console.log('ERROR: Unable to retrieve deals:', error)
				);
		}
	}, [token]);

	const placeholderImage = defaultImg;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
		<div key={product.id}>
			<div className="info-label">
				<Link to={`/product/${product.id}`} key={product.id} id={product.id}>
					<img
						className="home-product-img"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="catPicture"
						onError={onImageError}
					/>
				</Link>
				<div className="bottom-card-info">
					<p>{product.productName}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>${product.price}</h3>
				</div>
			</div>
		</div>
	));
	return (
		<div className={className}>
			<h3 className="slider-title">
				<Link
					to={`/deals`}
					style={{ textDecoration: 'none', color: '#000000' }}
				>
					{title}
				</Link>
			</h3>
			<br />
			{sliderCategory === 'Deals' && (
				<div className="card-container">{listingComponents}</div>
			)}
			{sliderCategory === 'MoreDeals' && (
				<div className="card-container">
					{/* This will show the next 8 deals in the lower slider */}
					{listingComponents.slice(8)}
				</div>
			)}
		</div>
	);
}
