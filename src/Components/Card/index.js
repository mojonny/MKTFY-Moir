import React from 'react';
import './index.css';

const cardData = [
	{
		id: 1,
		img: '../../assets/catDonut.png',
		title: 'Pearl The cat: Donut edition',
		price: '$340.00',
	},
	{
		id: 2,
		img: '../../assets/catMonster.png',
		title: 'Pearl The cat: Monster edition',
		price: '$340.00',
	},
	{
		id: 3,
		img: '../../assets/catXmas.png',
		title: 'Pearl The cat: Christmas edition',
		price: '$340.00',
	},
	{
		id: 4,
		img: '../../assets/catHallow.png',
		title: 'Pearl The cat: Halloween edition',
		price: '$340.00',
	},
	{
		id: 5,
		img: '../../assets/catBreakfast.png',
		title: 'Pearl The cat: Breakfast edition',
		price: '$340.00',
	},
	{
		id: 6,
		img: '../../assets/catToyedition.png',
		title: 'Pearl The cat: Donut edition',
		price: '$340.00',
	},
];
export default function Cards() {
	const listingComponents = cardData.map((card) => (
		<div key={card.id} className="info-label">
			<a href="/product">
				<img src={card.img} alt="catPicture" />
			</a>
			<p>{card.title}</p>
			<p>{card.price}</p>
		</div>
	));
	return <div className="card">{listingComponents}</div>;
}
