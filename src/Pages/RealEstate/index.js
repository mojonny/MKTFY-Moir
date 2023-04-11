import React from 'react';
import ExploreSlider from '../../Components/Sliders/Explore-Slider';
import Footer from '../../Components/Footer';
import './index.css';

export default function RealEstate() {
	return (
		<div className="explore-dashboard">
			<br />
			<ExploreSlider
				className="explore-slider"
				title="Real Estate"
				sliderCategory="REAL_ESTATE"
			/>
			<Footer className="footer" />
		</div>
	);
}
