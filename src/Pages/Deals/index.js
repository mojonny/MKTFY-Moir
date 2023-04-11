import React from 'react';

import DealsSlider from '../../Components/Sliders/Deals-Slider';
import Footer from '../../Components/Footer';
import './index.css';

export default function Deals() {
	return (
		<div className="deals-dashboard">
			<br />
			<DealsSlider
				className="deals-slider"
				key="001"
				title="Deals"
				sliderCategory="Deals"
			/>
			<Footer className="footer" />
		</div>
	);
}
