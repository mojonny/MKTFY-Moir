import React, { useEffect, useState } from 'react';
import { auth } from '../../Services/auth0.service';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	setToken,
	setId,
	setFirstName,
	setLastName,
	setEmail,
	setPhone,
	setAddress,
	setCity,
	setRegistered,
} from '../../Features/Login/loginSlice';
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

	const navigate = useNavigate();
	const dispatch = useDispatch();

	let loggedIn = useSelector((state) => state.login.login);
	let token = useSelector((state) => state.login.token);

	useEffect(() => {
		if (loggedIn === null) {
			navigate('/auth');
		} else return;
	}, [navigate, loggedIn]);

	useEffect(() => {
		if (token === null) {
			setIsLoading(true);
			setTimeout(() => {
				getToken();
				//Get user accessToken and id
				function getToken() {
					auth.parseHash((err, authResult) => {
						if (authResult) {
							auth.client.userInfo(
								authResult.accessToken,
								function (err, user) {
									let ID = user.sub;
									sessionStorage.setItem('id', ID);
									sessionStorage.setItem('accessToken', authResult.accessToken);
									dispatch(setToken(authResult.accessToken));
									dispatch(setId(ID));
									return getUser();
								}
							);
						}
					});
				}

				//Check if user exists
				function getUser() {
					const token = sessionStorage.getItem('accessToken');
					const id = sessionStorage.getItem('id');
					const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/${id}`;
					if (token !== null) {
						axios
							.get(url, { headers: { Authorization: `Bearer ${token}` } })
							.then((res) => {
								dispatch(setFirstName(res.data.firstName));
								dispatch(setLastName(res.data.lastName));
								dispatch(setEmail(res.data.email));
								dispatch(setPhone(res.data.phone));
								dispatch(setAddress(res.data.address));
								dispatch(setCity(res.data.city));
								dispatch(setRegistered(res.data.registered));

								sessionStorage.setItem('firstName', res.data.firstName);
								sessionStorage.setItem('lastName', res.data.lastName);
								sessionStorage.setItem('userEmail', res.data.email);
								sessionStorage.setItem('phone', res.data.phone);
								sessionStorage.setItem('address', res.data.address);
								sessionStorage.setItem('city', res.data.city);
								sessionStorage.setItem('registered', true);
								console.log('SUCCESS: User found!', res.data);
							})
							.catch((error) => {
								console.log('ERROR: User does not exist in db', error);
								return getRegistered();
							});
					}
				}

				//If user doesn't exist, then register them to backend
				function getRegistered() {
					const token = sessionStorage.getItem('accessToken');
					const id = sessionStorage.getItem('id');
					const firstName = sessionStorage.getItem('firstName');
					const lastName = sessionStorage.getItem('lastName');
					const email = sessionStorage.getItem('userEmail');
					const phone = sessionStorage.getItem('phone');
					const address = sessionStorage.getItem('address');
					const city = sessionStorage.getItem('city');

					const registered = sessionStorage.getItem('registered');

					//Only run check if user's email is stored (only happens on signup)
					//If it is, then register the user
					if (registered === true) {
						console.log('User is already registered, skipping registration...');
					} else if (registered === null) {
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
								console.log('SUCCESS: Registered to db!', res);
							})
							.catch((error) => {
								alert('Please register a new account');
								console.log('ERROR: User may already be registered', error);
							});
					}
				}
				setIsLoading(false);
			}, 4000);
		}
	}, [dispatch, token]);

	return (
		<div className="home-dashboard">
			{isLoading ? <Success /> : null}
			<br />
			<br />
			<Slider
				className="slider"
				key="001"
				title="Deals for you"
				sliderCategory="Deals"
			/>

			<br />
			<div className="mini-slider-container">
				<MiniSlider
					className="mini-slider"
					key="002"
					title="Cars & Vehicles"
					sliderCategory="VEHICLES"
				/>

				<MiniSlider
					className="mini-slider"
					key="003"
					title="Furniture"
					sliderCategory="FURNITURE"
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
					sliderCategory="ELECTRONICS"
				/>

				<MiniSlider
					className="mini-slider"
					key="006"
					title="Real Estate"
					sliderCategory="REAL_ESTATE"
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
