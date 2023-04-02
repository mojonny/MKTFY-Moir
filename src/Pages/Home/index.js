import React, { useEffect, useState } from 'react';
import { auth } from '../../Services/auth0.service';
import { useNavigate } from 'react-router-dom';
//import { getProducts, filterProducts } from '../../Services/services';
//import { useSelector } from 'react-redux';
import axios from 'axios';

import Success from '../../Components/Success';
import Footer from '../../Components/Footer';
//import Slider from '../../Components/Sliders/Home-Slider';
//import MiniSlider from '../../Components/Sliders/Mini-Slider';

import appBanner from '../../assets/AppBanner1.png';
import './index.css';

export default function Home() {
	//Show lottie when loading and moving to success
	const [isLoading, setIsLoading] = useState(false);
	// const [showSliders, setShowSliders] = useState(true);
	// const [filteredProducts, setFilteredProducts] = useState(null);

	// const filterResult = useSelector((state) => state.product.value);
	//const location = useLocation();
	const navigate = useNavigate();

	//Send user to auth page if not logged in
	//IFFE to redirect user before processHash
	(() => {
		if (window.location.hash === '') {
			navigate('/auth');
		}
	})();

	var registered = sessionStorage.getItem('Registered');
	var token = sessionStorage.getItem('accessToken');

	//Get user accessToken and id
	useEffect(() => {
		auth.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken) {
				auth.client.userInfo(
					authResult.accessToken,

					function (err, user) {
						//To remove 'auth0|' from the start of the id string
						let str = user.sub;
						let n = 6;
						let ID = str.substring(n);

						sessionStorage.setItem('id', ID);
						sessionStorage.setItem('accessToken', authResult.accessToken);
					}
				);
			}
		});
	}, []);

	//Register user
	useEffect(() => {
		async function checkIfRegistered() {
			let id = sessionStorage.getItem('id');
			let firstName = sessionStorage.getItem('firstName');
			let lastName = sessionStorage.getItem('lastName');
			let email = sessionStorage.getItem('userEmail');
			let phone = sessionStorage.getItem('phone');
			let address = sessionStorage.getItem('address');
			let city = sessionStorage.getItem('city');

			//Only run check if user's email is stored (only happens on signup)
			//If it is, then register the user
			if (registered === true) {
				return;
			} else if (registered === null && firstName !== null && token !== null) {
				axios
					.post(
						'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/register',
						{
							id: id,
							firstName: firstName,
							lastName: lastName,
							email: email,
							phone: phone,
							address: address,
							city: city,
						},
						{ headers: { Authorization: `Bearer ${token}` } }
					)
					.then((res) => {
						sessionStorage.setItem('Registered', true);
						console.log('SUCCESS: Registered to db!', res);
					})
					.catch((error) =>
						console.log('ERROR: User may already be registered', error)
					);
			}
		}
		checkIfRegistered();
	}, [registered, token]);

	// useEffect(() => {
	// 	let typeCategory = filterResult;
	// 	typeCategory !== 'all'
	// 		? setFilteredProducts(filterProducts(typeCategory))
	// 		: setFilteredProducts(getProducts());
	// }, [filterResult]);

	// useEffect(() => {
	// 	let typeCategory = filterResult;
	// 	typeCategory !== '' ? setShowSliders(false) : setShowSliders(true);
	// }, [filterResult]);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="home-dashboard">
			{isLoading ? <Success /> : null}
			{/* <br />
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
			<br /> */}
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
