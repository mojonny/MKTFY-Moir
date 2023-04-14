import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesAsync } from '../../../Features/Categories/categoriesSlice';
import defaultImg from '../../../assets/LP.png';
import './index.css';

export default function MiniSlider({ title, sliderCategory, className }) {
	const [listings, setListings] = useState([]);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	let token = useSelector((state) => state.login.token);

	useEffect(() => {
		const url =
			'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/category?maxResults=100';
		const data = {
			category: `${sliderCategory}`,
			city: 'Calgary',
		};
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		if (token !== null) {
			axios
				.post(url, data, options)
				.then((res) => {
					setListings(res.data);
				})
				.catch((error) =>
					console.log('ERROR: Unable to retrieve categories:', error)
				);
		}
	}, [sliderCategory, token]);

	const placeholderImage = defaultImg;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
		<div key={product.id}>
			<div className="mini-info-label">
				<Link
					to={`/product/${product.id}`}
					key={product.id}
					id={product.id}
					style={{ textDecorationLine: 'none' }}
				>
					<img
						className="mini-product-img"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="catPicture"
						onError={onImageError}
					/>
				</Link>
				<div className="bottom-card-info">
					<p>{product.productName}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>${product.price.toFixed(2)}</h3>
				</div>
			</div>
		</div>
	));

	return (
		<div className={className}>
			<h3 className="mini-slider-title">{title}</h3>
			<br />
			<div className="mini-card-container">{listingComponents}</div>
			<button
				onClick={() =>
					navigate(`/${sliderCategory.toLowerCase()}`) ||
					dispatch(
						getCategoriesAsync({
							city: 'Calgary',
							category: sliderCategory,
						})
					)
				}
				style={{
					border: 'none',
					background: 'none',
					marginLeft: 'auto',
					color: '#9349de',
					size: '20px',
				}}
			>
				Explore now
			</button>
		</div>
	);
}
