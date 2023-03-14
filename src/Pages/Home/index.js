import React, { useEffect } from 'react';
import { auth } from '../../Services/auth0.service';
import { useLocation } from 'react-router-dom';

import appBanner from '../../assets/AppBanner1.png';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Sliders/Home-Slider';

import './index.css';

export default function Home() {
	const location = useLocation();

	const processHash = (hash) => {
		auth.parseHash({ hash }, function (error, result) {
			//if there is an error
			if (error) {
				return console.log('There is something wrong', error);
			}

			//Else we need to get hash and modify it
			if (result) {
				//get the access token
				const { accessToken } = result;
				console.log(accessToken);
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

	return (
		<div className="home-dashboard">
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
				<Slider
					key="002"
					title="Cars & Vehicles"
					sliderCategory="Cars & Vehicles"
					className="mini-slider"
				/>
				<Slider
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
				<Slider
					className="mini-slider"
					key="005"
					title="Electronics"
					sliderCategory="Electronics"
				/>
				<Slider
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
