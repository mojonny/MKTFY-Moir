import React, { useEffect, useState } from 'react';
import { auth } from '../../Services/auth0.service';
//import { useNavigate } from 'react-router-dom';
//import { getProducts, filterProducts } from '../../Services/services';
//import { useSelector } from 'react-redux';
import axios from 'axios';

import Success from '../../Components/Success';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Sliders/Home-Slider';
import MiniSlider from '../../Components/Sliders/Mini-Slider';

import appBanner from '../../assets/AppBanner1.png';
import './index.css';

export default function Home() {
	//Show lottie when loading and moving to success
	const [isLoading, setIsLoading] = useState(false);

	// const [filteredProducts, setFilteredProducts] = useState(null);

	// const filterResult = useSelector((state) => state.product.value);

	//const navigate = useNavigate();
	var registered = sessionStorage.getItem('Registered');
	var token = sessionStorage.getItem('accessToken');
	//var loggedIn = sessionStorage.getItem('loggedIn');

	//Send user to auth page if not logged in
	//IFFE to redirect user before processHash
	// (() => {
	// 	if (loggedIn === true) {
	// 		return;
	// 	} else {
	// 		navigate('/auth');
	// 	}
	// })();

	//Get user accessToken and id
	useEffect(() => {
		auth.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken) {
				auth.client.userInfo(
					authResult.accessToken,

					function (err, user) {
						let ID = user.sub;
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
			} else if (firstName !== null) {
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

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="home-dashboard">
			{isLoading ? <Success /> : null}
			<br />
			<br />
			<Slider
				className="slider"
				key="001"
				title="Deals"
				sliderCategory="Deals"
			/>

			<br />
			<div className="mini-slider-container">
				<MiniSlider
					className="mini-slider"
					key="002"
					title="Cars & Vehicles"
					sliderCategory="Cars & Vehicles"
				/>

				<MiniSlider
					className="mini-slider"
					key="003"
					title="Furniture"
					sliderCategory="Furniture"
				/>
			</div>
			<br />

			<Slider
				className="slider"
				key="004"
				title="More deals for you"
				sliderCategory="Deals"
			/>

			<br />
			<div className="mini-slider-container" key="bottom">
				<MiniSlider
					className="mini-slider"
					key="005"
					title="Electronics"
					sliderCategory="Electronics"
				/>

				<MiniSlider
					className="mini-slider"
					key="006"
					title="Real Estate"
					sliderCategory="Real Estate"
				/>
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
