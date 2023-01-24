import React from 'react';
import catDonut from '../../../assets/catDonut.png';
import './Slider.styles.css';

export default function Slider() {
	const price = '$340.00';
	var title = 'Pearl The cat: Donut edition';

	return (
		<div className="slider">
			<h3>Deals for you</h3>

			{/* get cards call */}

			<img src={catDonut} alt="catDonut" />
			<p>{title}</p>
			<p>{price}</p>
		</div>
	);
}
