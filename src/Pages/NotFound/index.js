import React from 'react';
import './index.css';

import logo from '../../assets/MKTFY Logo.svg';

export default function NotFound() {
	return (
		<div className="lost-page">
			<div className="lost-page-text">
				<img src={logo} alt="logo" />
				<h2>
					CODE 404!
					<br />
					There's nothing here! Pearl the cat is sleeping on our lap, so we
					can't get up to help you right now, please try again later.
				</h2>
			</div>
		</div>
	);
}
