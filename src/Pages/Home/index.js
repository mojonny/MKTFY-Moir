import React from 'react';
import appBanner from '../../assets/AppBanner1.png';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Slider';

import './index.css';

export default function Home() {

	return (
		<div className="home">
			<Header />
			<div className="carousel">
				<div className="slider-container">
					<Slider />
				</div>
			</div>

			<img
				alt="download app banner"
				className="download-app-add"
				src={appBanner}
			/>
			<Footer />
		</div>
	);
}
