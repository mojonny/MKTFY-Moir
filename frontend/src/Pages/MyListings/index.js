import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

import React, { useState, useEffect } from 'react';

import { getListings, filterListings } from '../../Services/services';

export default function MyListings() {
	const [filteredListings, setFilteredListings] = useState(null);

	const [buttonClass, setButtonClass] = useState('inactive-button');
	const [buttonClass1, setButtonClass1] = useState('inactive-button');

	useEffect(() => {
		//Gets all listings on initial render
		setFilteredListings(getListings());
	}, []);

	function handleListings(e) {
		//Sets filter onClick of active or sold buttons
		let typeListing = e.target.value;
		if (typeListing === 'active') {
			//Only show active listings onClick
			setFilteredListings(filterListings(typeListing));

			//change button style onClick
			setButtonClass('active-button');
			setButtonClass1('inactive-button');
		} else if (typeListing === 'sold') {
			setFilteredListings(filterListings(typeListing));
			setButtonClass1('active-button');
			setButtonClass('inactive-button');
		} else {
			setFilteredListings(getListings());
		}
	}

	return (
		<>
			<div className="listing-container">
				<div className="listing-labels">
					<div>
						Deals for you <img src={breadArrow} alt="path-arrow" /> My Listings
					</div>
					<br />
					<h1> My listings</h1>
					<br />
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
					<div className="all-listings">
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
		</>
	);
}
