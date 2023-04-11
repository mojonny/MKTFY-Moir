import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function Slider({ title, className, sliderCategory }) {
	const [listings, setListings] = useState([]);

	let loggedIn = useSelector((state) => state.login.login);

	useEffect(() => {
		setTimeout(() => {
			const token = sessionStorage.getItem('accessToken');
			const url =
				'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/deals?maxResults=100';
			const options = {
				headers: { Authorization: `Bearer ${token}` },
			};
			if (loggedIn === true) {
				axios
					.get(url, options)
					.then((res) => {
						setListings(res.data);
						console.log('SUCCESS: Retrieved DEALS:', res.data);
					})
					.catch((error) =>
						console.log('ERROR: Unable to retrieve deals:', error)
					);
			}
		}, 3000);
	}, [loggedIn]);

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
					to={`/${sliderCategory.toLowerCase()}`}
					style={{ textDecoration: 'none' }}
				>
					{title}
				</Link>
			</h3>
			<br />
			<div className="card-container">{listingComponents}</div>
		</div>
	);
}
