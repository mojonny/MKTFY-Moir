import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { showCategories } from '../../../Features/Categories/categoriesSlice';

import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function ExploreSlider({ title, className }) {
	const categories = useSelector(showCategories);

	const placeholderImage = defaultImg;
	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = categories.map((product) => (
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
					<h3 style={{ color: '#6318af' }}>${product.price.toFixed(2)}</h3>
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
