import React from 'react';

import cat1 from '../../../assets/catBreakfast.png';
import cat2 from '../../../assets/catDonut.png';
import cat3 from '../../../assets/catHallow.png';

import catSide from '../../../assets/catToyedition.png';
import upDownArrow from '../../../assets/UpDownArrow.png';
import './index.css';

export default function VerticalSlider({ setMainImage }) {
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
				<button
					className="vert-cat-button"
					onClick={() => setMainImage(catSide)}
				>
					<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
				</button>
				<button className="vert-cat-button" onClick={() => setMainImage(cat1)}>
					<img src={cat1} className="vert-cat-pic" alt="vert-cat-pic" />
				</button>
				<button className="vert-cat-button" onClick={() => setMainImage(cat2)}>
					<img src={cat2} className="vert-cat-pic" alt="vert-cat-pic" />
				</button>
				<button className="vert-cat-button" onClick={() => setMainImage(cat3)}>
					<img src={cat3} className="vert-cat-pic" alt="vert-cat-pic" />
				</button>
				<button
					className="vert-cat-button"
					onClick={() => setMainImage(catSide)}
				>
					<img src={catSide} className="vert-cat-pic" alt="vert-cat-pic" />
				</button>
				<button className="vert-cat-button" onClick={() => setMainImage(cat1)}>
					<img src={cat1} className="vert-cat-pic" alt="vert-cat-pic" />
				</button>
				<button className="vert-cat-button" onClick={() => setMainImage(cat2)}>
					<img src={cat2} className="vert-cat-pic" alt="vert-cat-pic" />
				</button>
			</div>
			<button onClick={ScrollUp} className="vert-down-arrow">
				<img src={upDownArrow} alt="down-arrow" />
			</button>
		</div>
	);
}
