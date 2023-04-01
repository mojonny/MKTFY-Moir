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

	//Get user info from session storage to check if registered with backend
	const id = sessionStorage.getItem('id');
	const firstName = sessionStorage.getItem('firstName');
	const lastName = sessionStorage.getItem('lastName');
	const email = sessionStorage.getItem('userEmail');
	const phone = sessionStorage.getItem('phone');
	const address = sessionStorage.getItem('address');
	const city = sessionStorage.getItem('city');

	function checkIfLoggedIn() {
		if (window.location.hash === '') {
			navigate('/auth');
		}
	}

	checkIfLoggedIn();

	//Check if user exists
	function findUser() {
		const token = sessionStorage.getItem('accessToken');
		axios
			.get(
				`http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/${id}`,
				{ id: id },
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => console.log('User already exists:', res))
			.catch((error) => {
				console.log('User does not exist...Registering user:', error);
				return registerUser();
			});
	}

	//If user doesn't exist, then register them
	function registerUser() {
		const token = sessionStorage.getItem('accessToken');
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
			.then((res) => console.log('User registered!', res))
			.catch((error) => console.log('User already exists:', error));
	}

	//Get the accessToken and user id after login
	//I want this to only run once to get the token
	useEffect(() => {
		async function processHash() {
			if (id) {
				return;
			} else if (!id) {
				auth.parseHash(
					{ hash: window.location.hash },
					function (err, authResult) {
						if (err) {
							return console.log('Parse hash error:', err);
						}
						auth.client.userInfo(authResult.accessToken, function (err, user) {
							//To remove 'auth0|' from the start of the id string
							let str = user.sub;
							let n = 6;
							let ID = str.substring(n);

							sessionStorage.setItem('id', ID);
							sessionStorage.setItem('accessToken', authResult.accessToken);

							console.log('Id stored from auth0:', ID);
							console.log('Token stored from auth0:', authResult.accessToken);
						});
					}
				);
			}
		}

		processHash();
	}, [id]);

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
			<button onClick={findUser}>CallAxios</button>
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
