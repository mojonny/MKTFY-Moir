import { useSelector } from 'react-redux';
import { showSearch } from '../../../Features/Search/searchSlice';

import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function SearchSlider({ className }) {
	const search = useSelector(showSearch);

	const searchTitle = sessionStorage.getItem('searchValue');

	const placeholderImage = defaultImg;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = search[0].map((product) => (
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
			<h3 className="search-slider-title">
				Search results for: "{searchTitle}"
			</h3>
			<br />
			<div className="search-card-container">{listingComponents}</div>
		</div>
	);
}
