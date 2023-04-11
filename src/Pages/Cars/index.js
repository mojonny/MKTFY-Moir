import React from 'react';
import ExploreSlider from '../../Components/Sliders/Explore-Slider';
import Footer from '../../Components/Footer';
import './index.css';

export default function Cars() {
	return (
		<div className="explore-dashboard">
			<br />
			<br />
			<ExploreSlider
				className="explore-slider"
				title="Cars & Vehicles"
				sliderCategory="VEHICLES"
			/>
			<br />
			<Footer className="footer" />
		</div>
	);
}
