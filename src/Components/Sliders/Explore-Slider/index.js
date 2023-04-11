import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function ExploreSlider({ title, sliderCategory, className }) {
	const [listings, setListings] = useState([]);

	let loggedIn = useSelector((state) => state.login.login);

	useEffect(() => {
		const token = sessionStorage.getItem('accessToken');
		const url =
			'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/category?maxResults=100';
		const data = {
			category: `${sliderCategory}`,
			city: 'Calgary',
		};
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		if (loggedIn === true) {
			axios
				.post(url, data, options)
				.then((res) => {
					setListings(res.data);
					console.log('SUCCESS: Listings by category:', res.data);
				})
				.catch((error) =>
					console.log('ERROR: Unable to retrieve categories:', error)
				);
		}
	}, [sliderCategory, loggedIn]);

	const placeholderImage = defaultImg;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
		<div key={product.id}>
			<div className="explore-info-label">
				<Link
					to={`/product/${product.id}`}
					key={product.id}
					id={product.id}
					style={{ textDecorationLine: 'none' }}
				>
					<img
						className="explore-product-img"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="catPicture"
						onError={onImageError}
					/>
				</Link>
				<div className="explore-bottom-card-info">
					<p>{product.productName}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>${product.price}</h3>
				</div>
			</div>
		</div>
	));
	return (
		<div className={className}>
			<h3 className="explore-slider-title">{title}</h3>
			<br />
			<div className="explore-card-container">{listingComponents}</div>
		</div>
	);
}
