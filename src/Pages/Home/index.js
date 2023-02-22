import React from 'react';

import MiniSlider from '../../Components/Sliders/Mini-Slider';
import appBanner from '../../assets/AppBanner1.png';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Sliders/Home-Slider';

import './index.css';

export default function Home() {
	return (
		<div className="home-dashboard">
			<br />
			<br />
			<Slider key="0" />
			<br />
			<div className="mini-slider-container">
				<MiniSlider />
				<MiniSlider />
			</div>
			<br />
			<Slider key="1" />
			<br />
			<div className="mini-slider-container">
				<MiniSlider />
				<MiniSlider />
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
