import React from 'react';

import catSide from '../../../assets/catToyedition.png';
import upDownArrow from '../../../assets/UpDownArrow.png';
import './index.css';

export default function VerticalSlider() {
	//Scrolls through vertical image carousel
	const ScrollDown = () => {
		document.getElementById('container').scrollBy({
			top: -139,
			behavior: 'smooth',
		});
	};

	const ScrollUp = () => {
		document.getElementById('container').scrollBy({
			top: 139,
			behavior: 'smooth',
		});
	};

	return (
		<div className="vert-slider-landing">
			<button onClick={ScrollDown} className="vert-up-arrow">
				<img src={upDownArrow} alt="up-arrow" />
			</button>
			<div id="container" className="vert-image-slider1">
				<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
				<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
				<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
				<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
				<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
				<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
			</div>
			<button onClick={ScrollUp} className="vert-down-arrow">
				<img src={upDownArrow} alt="down-arrow" />
			</button>
		</div>
	);
}
