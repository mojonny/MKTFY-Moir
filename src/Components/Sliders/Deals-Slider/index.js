import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { showDeals } from '../../../Features/Deals/dealsSlice';

import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function DealsSlider({ title, className, sliderCategory }) {
	const deals = useSelector(showDeals);

	const placeholderImage = defaultImg;
	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = deals.map((product) => (
		<div key={product.id}>
			<div className="deals-info-label">
				<Link to={`/product/${product.id}`} key={product.id} id={product.id}>
					<img
						className="deals-product-img"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="Product pic"
						onError={onImageError}
					/>
				</Link>
				<div className="deals-bottom-card-info">
					<p>{product.productName}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>${product.price}</h3>
				</div>
			</div>
		</div>
	));
	return (
		<div className={className}>
			<h3 className="deals-slider-title">
				<Link
					to={`/${sliderCategory.toLowerCase()}`}
					style={{ textDecoration: 'none' }}
				>
					{title} for you
				</Link>
			</h3>
			<br />
			<div className="deals-card-container">{listingComponents}</div>
		</div>
	);
}
