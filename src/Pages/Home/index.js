import React, { useEffect, useState } from 'react';
import { auth } from '../../Services/auth0.service';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProducts, filterProducts } from '../../Services/services';
import { useSelector } from 'react-redux';

import appBanner from '../../assets/AppBanner1.png';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Sliders/Home-Slider';
import MiniSlider from '../../Components/Sliders/Mini-Slider';

import './index.css';

export default function Home() {
	const location = useLocation();

	const processHash = () => {
		auth.parseHash({ hash: window.location.hash }, function (error, result) {
			//if there is an error
			if (error) {
				return console.log('There is something wrong', error);
			}

			//Else we need to get hash and modify it
			if (result) {
				//get the access token
				const { accessToken } = result;

				// 1. Store this token in local storage
				// 2. Authenticate application routes on the base of token
				if (accessToken) {
					auth.client.userInfo(accessToken, function (error, result) {
						if (error) {
							return console.log(
								'Something went wrong in fetching user profile',
								error
							);
						}
						if (result) {
							return console.log('User login success!', result);
							//then redirect to home page
						}
					});
				}
			}
		});
	};

	//adding dependency for location
	useEffect(() => {
		// If we have the access token, then process the hash
		if (window.location.hash) {
			processHash(window.location.hash);
		}
	}, [location]);

	const [showSliders, setShowSliders] = useState(true);

	const [filteredProducts, setFilteredProducts] = useState(null);

	const filterResult = useSelector((state) => state.product.value);

	useEffect(() => {
		let typeCategory = filterResult;
		typeCategory !== 'all'
			? setFilteredProducts(filterProducts(typeCategory))
			: setFilteredProducts(getProducts());
	}, [filterResult]);

	useEffect(() => {
		let typeCategory = filterResult;
		typeCategory !== '' ? setShowSliders(false) : setShowSliders(true);
	}, [filterResult]);

	return (
		<div className="home-dashboard">
			<br />
			<br />
			<div className="results">
				{filteredProducts &&
					filteredProducts.map((product) => (
						<div className="Search-Results-Container" key={product.id}>
							<div className="search-result-item">
								<Link
									to={`/product/${product.id}`}
									key={product.id}
									id={product.id}
								>
									<img
										style={{
											objectFit: 'cover',
											height: '235px',
											width: '245px',
											borderRadius: '10px 10px 0px 0px',
										}}
										src={product.imageUrl}
										alt="product"
									/>
								</Link>
								<div className="bottom-card-info">
									<h3 style={{ color: '#6318af', textAlign: 'center' }}>
										{product.name} - ${product.price}
									</h3>
								</div>
							</div>
						</div>
					))}
			</div>
			<br />
			<br />
			{showSliders && (
				<Slider
					className="slider"
					key="001"
					title="Deals"
					sliderCategory="Deals"
				/>
			)}
			<br />
			<div className="mini-slider-container">
				{showSliders && (
					<MiniSlider
						className="mini-slider"
						key="002"
						title="Cars & Vehicles"
						sliderCategory="Cars & Vehicles"
					/>
				)}{' '}
				{showSliders && (
					<MiniSlider
						className="mini-slider"
						key="003"
						title="Furniture"
						sliderCategory="Furniture"
					/>
				)}
			</div>
			<br />
			{showSliders && (
				<Slider
					className="slider"
					key="004"
					title="More deals for you"
					sliderCategory="Deals"
				/>
			)}
			<br />
			<div className="mini-slider-container" key="bottom">
				{showSliders && (
					<MiniSlider
						className="mini-slider"
						key="005"
						title="Electronics"
						sliderCategory="Electronics"
						showSliders={showSliders}
					/>
				)}
				{showSliders && (
					<MiniSlider
						className="mini-slider"
						key="006"
						title="Real Estate"
						sliderCategory="Real Estate"
						showSliders={showSliders}
					/>
				)}
			</div>
			<br />
			<img
				alt="download app banner"
				className="download-app-add"
				src={appBanner}
			/>
			<br />
			<Footer />
		</div>
	);
}
