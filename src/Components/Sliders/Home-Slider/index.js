import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './index.css';

export default function Slider({ title, className }) {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			const token = sessionStorage.getItem('accessToken');
			//const loggedIn = sessionStorage.getItem('loggedIn');
			const url =
				'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/deals?maxResults=100';
			const options = {
				headers: { Authorization: `Bearer ${token}` },
			};
			//if (loggedIn === true ) {
			axios
				.get(url, options)
				.then((res) => {
					setListings(res.data);
					console.log('SUCCESS: Retrieved DEALS:', res.data);
				})
				.catch((error) =>
					console.log('ERROR: Unable to retrieve deals:', error)
				);
			//}
		}, 3000);
	}, []);

	const listingComponents = listings.map((product) => (
		<div key={product.id}>
			<div className="info-label">
				<Link to={`/product/${product.id}`} key={product.id} id={product.id}>
					<img
						style={{
							objectFit: 'cover',
							height: '235px',
							width: '245px',
							borderRadius: '10px 10px 0px 0px',
						}}
						src={product.images[0]}
						alt="catPicture"
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
				<Link to={`/${title}`} style={{ textDecoration: 'none' }}>
					{title}
				</Link>
			</h3>
			<br />
			<div className="card-container">{listingComponents}</div>
		</div>
	);
}
