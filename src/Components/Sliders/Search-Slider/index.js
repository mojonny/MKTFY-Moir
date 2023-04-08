import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function SearchSlider({ sliderCategory, className }) {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			const token = sessionStorage.getItem('accessToken');
			//const loggedIn = sessionStorage.getItem('loggedIn');

			const url =
				'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/search';
			const data = {
				search: 'test',
				city: 'Calgary',
				category: 'ELECTRONICS',
			};
			const options = {
				headers: { Authorization: `Bearer ${token}` },
			};
			// if (loggedIn === true) {
			axios
				.post(url, data, options)
				.then((res) => {
					setListings(res.data);
					console.log('SUCCESS: Listings by category:', res.data);
				})
				.catch((error) =>
					console.log('ERROR: Unable to retrieve categories:', error)
				);
			//	}
		}, 3000);
	}, [sliderCategory]);

	const placeholderImage = defaultImg;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
		<div key={product.id}>
			<div className="search-info-label">
				<Link
					to={`/product/${product.id}`}
					key={product.id}
					id={product.id}
					style={{ textDecorationLine: 'none' }}
				>
					<img
						className="search-product-img"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="catPicture"
						onError={onImageError}
					/>
				</Link>
				<div className="search-bottom-card-info">
					<p>{product.productName}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>${product.price}</h3>
				</div>
			</div>
		</div>
	));
	return (
		<div className={className}>
			<h3 className="search-slider-title">Search results for..........</h3>
			<br />
			<div className="search-card-container">{listingComponents}</div>
		</div>
	);
}
