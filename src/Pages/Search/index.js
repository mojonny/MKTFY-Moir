import React from 'react';
import SearchSlider from '../../Components/Sliders/Search-Slider';
import Footer from '../../Components/Footer';
import './index.css';

export default function Search() {
	return (
		<div className="search-container">
			<br />
			<br />
			<div className="search-dashboard">
				<SearchSlider className="search-slider" />
			</div>
			<Footer />
		</div>
	);
}
