import React from 'react';
import Card from '../../Card';

import './index.css';

export default function MiniSlider() {
	const Title = 'Shop Pearls & Pearls';

	const SubTitle = 'Explore now';

	return (
		<div className="mini-slider">
			<div className="mini-card-container">
				<h3 className="mini-slider-title">{Title}</h3>
				<div className="mini-cards">
					<Card />
					<Card />
				</div>
				<h4 className="mini-slider-title">{SubTitle}</h4>
			</div>
		</div>
	);
}
