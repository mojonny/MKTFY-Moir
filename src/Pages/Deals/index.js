import React from 'react';

import ExploreSlider from '../../Components/Sliders/Explore-Slider';
import Footer from '../../Components/Footer';
import './index.css';

export default function Deals() {
	return (
		<div className="home-dashboard">
			<br />
			<br />
			<ExploreSlider
				className="slider"
				key="001"
				title="Deals"
				sliderCategory="Deals"
			/>
			<br />
			<Footer />
		</div>
	);
}
