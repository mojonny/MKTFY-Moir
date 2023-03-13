import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const cardData = [
	{
		id: 1,
		name: 'Brown Brim',
		imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
		price: 25,
	},
	{
		id: 2,
		name: 'Blue Beanie',
		imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
		price: 18,
	},
	{
		id: 3,
		name: 'Brown Cowboy',
		imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
		price: 35,
	},
	{
		id: 4,
		name: 'Grey Brim',
		imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
		price: 25,
	},
	{
		id: 5,
		name: 'Green Beanie',
		imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
		price: 18,
	},
	{
		id: 6,
		name: 'Palm Tree Cap',
		imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
		price: 14,
	},
	{
		id: 7,
		name: 'Red Beanie',
		imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
		price: 18.0,
	},
	{
		id: 8,
		name: 'Wolf Cap',
		imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
		price: 14.0,
	},
	{
		id: 9,
		name: 'Blue Snapback',
		imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
		price: 16.0,
	},
];

export default function Slider() {
	const title = 'Deals for you';

	const listingComponents = cardData.map((card) => (
		<div key={card.id}>
			<div className="info-label">
				<Link to="/product">
					<img
						style={{
							objectFit: 'cover',
							height: '235px',
							width: '245px',
							borderRadius: '10px 10px 0px 0px',
						}}
						src={card.imageUrl}
						alt="catPicture"
					/>
				</Link>
				<div className="bottom-card-info">
					<p>{card.name}</p>
					<br />
					<h3 style={{ color: '#6318af' }}>${card.price}</h3>
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
