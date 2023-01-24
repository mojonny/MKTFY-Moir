import React from 'react';
import catDonut from '../../../assets/catDonut.png';
import './Card.styles.css';

export default function Cards() {
	const price = '$340.00';
	var title = 'Pearl The cat: Donut edition';

	return (
		<div className="card">
			{/* get cards call */}
			<img src={catDonut} alt="catDonut" />
			<div className="info-label">
				<p>{title}</p>
				<p>{price}</p>
			</div>
		</div>
	);
}
