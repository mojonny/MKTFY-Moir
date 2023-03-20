import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../../../Store/productData';

import './index.css';

export default function MiniSlider({ title, sliderCategory, className }) {
	const filteredListings = productData.filter(
		({ category }) => category === sliderCategory
	);

	const listingComponents = filteredListings.map((product) => (
		<div key={product.id}>
			<div className="info-label2">
				<Link to={`/product/${product.id}`} key={product.id} id={product.id}>
					<img
						style={{
							objectFit: 'cover',
							height: '235px',
							width: '245px',
							borderRadius: '10px',
						}}
						src={product.imageUrl}
						alt="catPicture"
					/>
				</Link>
			</div>
		</div>
	));
	return (
		<div className={className}>
			<h3 className="slider-title">
				<Link to={`/${title}`}>{title}</Link>
			</h3>
			<br />
			<div className="card-container">{listingComponents}</div>
			<Link to={`/${title}`}>Explore more</Link>
		</div>
	);
}
