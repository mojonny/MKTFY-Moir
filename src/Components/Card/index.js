import React from 'react';
import catDonut from '../../assets/catDonut.png';
import './index.css';

export default function Cards() {
	const price = '$340.00';
	var title = 'Pearl The cat: Donut edition';

	return (
		<div className="card">
			{/* get cards call */}
			<a href="/product">
				<img src={catDonut} alt="catDonut" />
			</a>

			<div className="info-label">
				<p>{title}</p>
				<p>{price}</p>
			</div>
		</div>
	);
}
