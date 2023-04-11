import React from 'react';
import ExploreSlider from '../../Components/Sliders/Explore-Slider';
import Footer from '../../Components/Footer';
import './index.css';

export default function Furniture() {
	return (
		<div className="explore-dashboard">
			<br />
			<ExploreSlider
				className="explore-slider"
				title="Furniture"
				sliderCategory="FURNITURE"
			/>

			<Footer className="footer" />
		</div>
	);
}
