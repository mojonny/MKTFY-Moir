import React from 'react';
import { Link } from 'react-router-dom';

import catDonut from '../../assets/catBreakfast.png';
import './index.css';

const Title = 'Shop Pearls & Pearls';

const SubTitle = 'Explore now';

export default function MiniSlider() {
	return (
		<div className="mini-slider1">
			<h3 className="top-shop-title">{Title}</h3>
			<div className="cat-pics">
				<Link to="/product">
					<img className="cat-image" src={catDonut} alt="catPicture" />
				</Link>
				<Link to="/product">
					<img className="cat-image" src={catDonut} alt="catPicture" />
				</Link>
				<Link to="/product">
					<img className="cat-image" src={catDonut} alt="catPicture" />
				</Link>
			</div>
			<h4 className="bottom-explore-link">{SubTitle}</h4>
		</div>
	);
}
