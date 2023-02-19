import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

import React, { useState, useEffect } from 'react';

import { getListings, filterListings } from '../../Services/services';

export default function MyListings() {
	const [filteredListings, setFilteredListings] = useState(null);
	const [activeItems, setActiveItems] = useState('AVAILABLE ITEMS');
	const [buttonClass, setButtonClass] = useState('inactive-button');
	const [buttonClass1, setButtonClass1] = useState('inactive-button');

	useEffect(() => {
		setFilteredListings(getListings());
	}, []);

	function handleListings(e) {
		//Sets filter onClick of active or sold buttons
		let typeListing = e.target.value;
		if (typeListing === 'active') {
			setFilteredListings(filterListings(typeListing));
			setButtonClass('active-button');
			setButtonClass1('inactive-button');
			setActiveItems('AVAILABLE ITEMS');
		} else if (typeListing === 'sold') {
			setFilteredListings(filterListings(typeListing));
			setButtonClass1('active-button');
			setButtonClass('inactive-button');
			setActiveItems('');
		} else {
			setFilteredListings(getListings());
			setActiveItems('');
		}
	}

	return (
		<>
			<div className="listing-container">
				<div className="listing-labels">
					<div>
						Deals for you <img src={breadArrow} alt="path-arrow" /> My Listings
					</div>
					<h1> My listings</h1>
					<div className="active-sold-labels">
						<button
							onClick={handleListings}
							className={buttonClass}
							value="active"
						>
							Active items
						</button>
						<button
							onClick={handleListings}
							className={buttonClass1}
							value="sold"
						>
							Sold items
						</button>
					</div>
				</div>
				<div>
					<h2>{activeItems}</h2>
					<div>
						<div>
							{filteredListings &&
								filteredListings.map((type) => (
									<ul className="listing-item-box" key={type.id}>
										<li className="listing-landing">
											<div className="listing-item-box">
												<img
													className="listing-pic"
													src={type.src}
													alt="listing img"
												/>
												<div className="listing-item-detail">
													<p>{type.date}</p>

													<h4>{type.title}</h4>
													<h4>{type.price}</h4>
												</div>
											</div>
										</li>
									</ul>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
