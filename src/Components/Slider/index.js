import React from 'react';
import Card from './Card';
import './index.css';

export default function Slider() {
	const title = 'Deals for you';

	return (
		<div className="slider">
			<div className="card-container">
				<h3 className="slider-title">{title}</h3>
				<br />
				<div className="cards">
					<Card />
				</div>
			</div>
		</div>
	);
}
