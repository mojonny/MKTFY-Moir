import React from 'react';
import appBanner from '../../assets/AppBanner1.png';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Slider';
//import MiniSlider from '../../Components/Slider/Mini-Slider';

import './index.css';

export default function Home() {
	return (
		<div className="home">
			<Header />
			<br />
			<Slider />
			{/*
			 <div className="min-container">
				<MiniSlider />
				<MiniSlider />
			</div>
			<Slider />
			<div className="min-container">
				<MiniSlider />
				<MiniSlider />
			</div> */}
			<img
				alt="download app banner"
				className="download-app-add"
				src={appBanner}
			/>
			<Footer />
		</div>
	);
}
