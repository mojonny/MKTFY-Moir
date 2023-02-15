import React from 'react';
import { Link } from 'react-router-dom';
import catDonut from '../../assets/catDonut.png';
import './index.css';

const cardData = [
	{
		id: 1,
		title: 'Pearl The cat: Donut edition',
		price: '$340.00',
	},
	{
		id: 2,
		//img: '../../assets/catMonster.png',
		title: 'Pearl The cat: Monster edition',
		price: '$340.00',
	},
	{
		id: 3,
		//img: '../../assets/catXmas.png',
		title: 'Pearl The cat: Christmas edition',
		price: '$340.00',
	},
	{
		id: 4,
		//img: '../../assets/catHallow.png',
		title: 'Pearl The cat: Halloween edition',
		price: '$340.00',
	},
	{
		id: 5,
		//img: '../../assets/catBreakfast.png',
		title: 'Pearl The cat: Breakfast edition',
		price: '$340.00',
	},
	{
		id: 6,
		//img: '../../assets/catToyedition.png',
		title: 'Pearl The cat: Donut edition???',
		price: '$340.00',
	},
	{
		id: 1,
		title: 'Pearl The cat: Donut edition',
		price: '$340.00',
	},
	{
		id: 2,
		//img: '../../assets/catMonster.png',
		title: 'Pearl The cat: Monster edition',
		price: '$340.00',
	},
	{
		id: 3,
		//img: '../../assets/catXmas.png',
		title: 'Pearl The cat: Christmas edition',
		price: '$340.00',
	},
	{
		id: 4,
		//img: '../../assets/catHallow.png',
		title: 'Pearl The cat: Halloween edition',
		price: '$340.00',
	},
	{
		id: 5,
		//img: '../../assets/catBreakfast.png',
		title: 'Pearl The cat: Breakfast edition',
		price: '$340.00',
	},
	{
		id: 6,
		//img: '../../assets/catToyedition.png',
		title: 'Pearl The cat: Donut edition???',
		price: '$340.00',
	},
];

export default function Slider() {
	const title = 'Deals for you';

	const listingComponents = cardData.map((card) => (
		<div key={card.id}>
			<div className="info-label">
				<Link to="/product">
					<img
						style={{ objectFit: 'contain' }}
						src={catDonut}
						alt="catPicture"
					/>
				</Link>
				<div className="bottom-card-info">
					<p>{card.title}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>{card.price}</h3>
				</div>
			</div>
		</div>
	));
	return (
		<div className="slider">
			<h3 className="slider-title">{title}</h3>
			<br />
			<div className="card-container">{listingComponents}</div>
		</div>
	);
}
