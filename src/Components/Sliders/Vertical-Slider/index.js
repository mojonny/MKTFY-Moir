import React from 'react';

// import cat1 from '../../../assets/catBreakfast.png';
// import cat2 from '../../../assets/catDonut.png';
// import cat3 from '../../../assets/catHallow.png';

// import catSide from '../../../assets/catToyedition.png';
import upDownArrow from '../../../assets/UpDownArrow.png';
import './index.css';

export default function VerticalSlider({ filtered, setMainImage }) {
	//Scrolls through vertical image carousel
	const ScrollDown = () => {
		document.getElementById('container').scrollBy({
			top: -165,
			behavior: 'smooth',
		});
	};

	const ScrollUp = () => {
		document.getElementById('container').scrollBy({
			top: 165,
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
					onClick={() => setMainImage(filtered.imageUrls[0])}
				>
					<img
						src={filtered.imageUrls[0]}
						className="vert-cat-pic"
						alt="vert-cat-pic"
					/>
				</button>
				<button
					className="vert-cat-button"
					onClick={() => setMainImage(filtered.imageUrls[1])}
				>
					<img
						src={filtered.imageUrls[1]}
						className="vert-cat-pic"
						alt="vert-cat-pic"
					/>
				</button>
				<button
					className="vert-cat-button"
					onClick={() => setMainImage(filtered.imageUrls[2])}
				>
					<img
						src={filtered.imageUrls[2]}
						className="vert-cat-pic"
						alt="vert-cat-pic"
					/>
				</button>
				<button
					className="vert-cat-button"
					onClick={() => setMainImage(filtered.imageUrls[3])}
				>
					<img
						src={filtered.imageUrls[3]}
						className="vert-cat-pic"
						alt="vert-cat-pic"
					/>
				</button>
			</div>
			<button onClick={ScrollUp} className="vert-down-arrow">
				<img src={upDownArrow} alt="down-arrow" />
			</button>
		</div>
	);
}
