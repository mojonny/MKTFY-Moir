import React from 'react';
import appBanner from '../../../assets/AppBanner1.png';
import Header from '../../Layouts/Header/Header.component';
import Footer from '../../Layouts/Footer/Footer.component';
import Slider from '../../Layouts/Slider/Slider.component';

import './Home.styles.css';

export default function Home() {
	return (
		<div className="home">
			<Header />

			<Slider />
			<Slider />
			<Slider />
			<Slider />

			<img
				alt="download app banner"
				className="download-app-add"
				src={appBanner}
			/>
			<Footer />
		</div>
	);
}