import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Components/Footer';

import defaultImg from '../../assets/LP.png';
import './index.css';

export default function AllListings() {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		async function getAll() {
			try {
				const token = sessionStorage.getItem('accessToken');
				const url =
					'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product';
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
		getAll();
	}, []);

	const placeholderImage = defaultImg;
	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
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
		<div className="view-all-dashboard">
			<h1 className="view-all-title">All Listings</h1>
			<div className="view-all-card-container">{listingComponents}</div>
			<Footer className="footer" />
		</div>
	);
}
