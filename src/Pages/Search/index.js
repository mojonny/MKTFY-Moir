import React from 'react';
import SearchSlider from '../../Components/Sliders/Search-Slider';
import Footer from '../../Components/Footer';
import './index.css';

export default function Search() {
	return (
		<div className="home-dashboard">
			<br />
			<br />
			<SearchSlider className="search-slider" title="Search results for" />
			<br />
			<Footer />
		</div>
	);
}
