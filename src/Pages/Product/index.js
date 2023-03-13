import React from 'react';
//import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import VerticalSlider from '../../Components/Sliders/Vertical-Slider';
import listingIcon from '../../assets/listingTag.png';

//import catSide from '../../assets/catToyedition.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';
import { productData } from '../../Store/productData';

export default function Product() {
	//const [mainImage, setMainImage] = useState(singleProduct.id);

	const navigate = useNavigate();
	const navigateToCheckout = () => {
		navigate('/checkout');
	};

	const routeParams = useParams();

	const id = routeParams.productId;

	const filtered = productData.find(function (obj) {
		return (obj.id = id);
	});
	console.log('filtered:', filtered);

	return (
		<>
			<div className="product-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>
				<div className="product-landing">
					<VerticalSlider id={id} />
					<img
						src={filtered.imageUrl}
						alt="main-cat-pic"
						className="main-img"
					/>

					<div className="side-info-container">
						<h1> {filtered.name}</h1>
						<div className="price-info">
							<h1 style={{ color: '#6e20be' }}>${filtered.price}</h1>
							<div className="new-price-label"> NEW </div>
						</div>
						<button className="checkout-button" onClick={navigateToCheckout}>
							I want this!
						</button>
						<div className="product-details">
							<h4>Details</h4>
							<p>{filtered.description}</p>
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
