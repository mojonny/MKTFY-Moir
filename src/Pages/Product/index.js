import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productData } from '../../Store/productData';
import { userData } from '../../Store/userData';

import VerticalSlider from '../../Components/Sliders/Vertical-Slider';
import listingIcon from '../../assets/listingTag.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function Product() {
	const { id } = useParams();
	const productId = parseInt(id);
	console.log(productId);

	const filteredById = productData.filter(
		(product) => product.id === productId
	);

	const filtered = filteredById[0];
	console.log('filter by id:', filteredById);
	const [mainImage, setMainImage] = useState(filtered.imageUrl);

	const filterByUser = userData.filter(
		(user) => user.userId === filtered.userId
	);
	const filteredUser = filterByUser[0];
	console.log(filteredUser);

	const profileLetter = filteredUser.firstName[0];
	console.log(profileLetter);

	const navigate = useNavigate();
	const navigateToCheckout = () => {
		navigate('/checkout');
		sessionStorage.setItem('productName', filtered.name);
		sessionStorage.setItem('productPrice', filtered.price);
		sessionStorage.setItem('productImage', filtered.imageUrl);
		sessionStorage.setItem('userId', filtered.userId);
	};

	return (
		<>
			<div className="product-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>
				<div className="product-landing">
					<VerticalSlider filtered={filtered} setMainImage={setMainImage} />
					<img src={mainImage} alt="main-cat-pic" className="main-img" />

					<div className="side-info-container">
						<h1
							style={{
								fontSize: '48px',
								fontWeight: 'bold',
								lineHeight: '54px',
							}}
						>
							{' '}
							{filtered.name}
						</h1>
						<div className="price-info">
							<h1
								style={{
									color: '#6e20be',
									fontSize: '40px',
									fontWeight: 'bold',
									lineHeight: '54px',
								}}
							>
								${filtered.price}
							</h1>
							<div className="new-price-label"> NEW </div>
						</div>
						<button
							className="checkout-button"
							onClick={navigateToCheckout}
							filtered={filtered}
						>
							I want this!
						</button>
						<div className="product-details">
							<h4>Details</h4>
							<p>{filtered.description}</p>
						</div>
						<div className="product-seller-info">
							<h4 className="profile-icon">{profileLetter}</h4>
							<div className="seller-details">
								<h4 style={{ margin: '15px 0px 2px' }}>
									{filteredUser.firstName} {filteredUser.lastName}
								</h4>

								<div className="seller-listings">
									<img src={listingIcon} alt="listing icon" />
									<div>1</div>
									<p> listing</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
