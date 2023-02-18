import React from 'react';

import { useNavigate } from 'react-router-dom';

import VerticalSlider from '../../Components/Sliders/Vertical-Slider';
import listingIcon from '../../assets/listingTag.png';
import mainImage from '../../assets/mainCat.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function Product() {
	const navigate = useNavigate();

	const navigateToCheckout = () => {
		navigate('/checkout');
	};

	const ProductTitle = 'Pearl The Cat: Toy edition';
	const ProductPrice = '$340.00';
	return (
		<>
			<div className="product-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>
				<div className="product-landing">
					<VerticalSlider />

					<img src={mainImage} alt="main-cat-pic" className="main-img" />

					<div className="side-info-container">
						<h1> {ProductTitle}</h1>
						<div className="price-info">
							<h1 style={{ color: '#6e20be' }}>{ProductPrice}</h1>
							<div className="new-price-label"> NEW </div>
						</div>
						<button className="checkout-button" onClick={navigateToCheckout}>
							I want this!
						</button>
						<div className="product-details">
							<h4>Details</h4>
							<p>
								The world’s most beautiful cat. Pearl The Cat is a pretty cat
								who is grey with black stripes on top and spots on the belly.
								She likes catching flies and eating beef jerky as well as
								yogurt. This edition of Pearl The Cat includes toys for maximum
								Pearl enjoyment. (Batteries not included)
							</p>
						</div>
						<div className="product-seller-info">
							<h4 className="profile-icon">P</h4>
							<div className="seller-details">
								<h4 style={{ margin: '15px 0px 2px' }}>Matt Smith</h4>

								<div className="seller-listings">
									<img src={listingIcon} alt="listing icon" />
									<div>2</div>
									<p> listings</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}