//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import { productData } from '../../../Store/productData';

import './index.css';

export default function Slider({ title, sliderCategory, className }) {
	//const [listings, setListings] = useState(null);

	//const retrieveListings = async () => {
	// const response = await axios.get(`http://localhost:5000/listings`);
	// console.log(response.data);
	// return response.data;
	//};

	// useEffect(() => {
	// 	const getAllListings = async () => {
	// 		const allListings = await retrieveListings();
	// 		if (allListings) setListings(allListings);
	// 	};

	// 	getAllListings();
	// }, []);

	const filteredListings = productData.filter(
		({ category }) => category === sliderCategory
	);

	const listingComponents = filteredListings.map((product) => (
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
						src={product.imageUrl}
						alt="catPicture"
					/>
				</Link>
				<div className="bottom-card-info">
					<p>{product.name}</p>
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
