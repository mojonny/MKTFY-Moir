import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './index.css';

export default function MiniSlider({ title, sliderCategory, className }) {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		setTimeout(() => {
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
			axios
				.post(url, data, options)
				.then((res) => {
					setListings(res.data);
					console.log('SUCCESS: Listings by category:', res.data);
				})
				.catch((error) =>
					console.log('ERROR: Unable to retrieve listings:', error)
				);
		}, 3000);
	}, [sliderCategory]);

	const listingComponents = listings.map((product) => (
		<div key={product.id}>
			<div className="info-label">
				<Link
					to={`/product/${product.id}`}
					key={product.id}
					id={product.id}
					style={{ textDecorationLine: 'none' }}
				>
					<img
						style={{
							objectFit: 'cover',
							height: '235px',
							width: '245px',
							minWidth: '245px',
							borderRadius: '10px 10px 0px 0px',
						}}
						src={product.images[0]}
						alt="productImg"
					/>

					<div className="bottom-card-info">
						<p>{product.productName}</p>
						<br />
						<h3 style={{ color: '#6318af' }}>${product.price}</h3>
					</div>
				</Link>
			</div>
		</div>
	));
	return (
		<div className={className}>
			<h3 className="mini-slider-title">{title}</h3>
			<br />
			<div className="mini-card-container">{listingComponents}</div>
			<Link
				to={`/${title}`}
				style={{
					textDecoration: 'none',
					marginLeft: 'auto',
					color: '#9349de',
					size: '20px',
				}}
			>
				Explore now
			</Link>
		</div>
	);
}
