import React from 'react';
import Card from '../Card';
import './index.css';

export default function Slider() {
	const title = 'Deals for you';
	//will
	return (
		<div className="slider">
			<p className="slider-title">{title}</p>
			<div className="cards">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
