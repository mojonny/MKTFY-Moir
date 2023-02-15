import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './Search-bar';
import Dropdown from './Profile-Dropdown';
import NotificationPopup from './Notification-Dropdown';

import altLogo from '../../assets/altLogo.png';

import plus from '../../assets/Plus.png';
import hamburger from '../../assets/LinesMenu.png';

import './index.css';

export default function Header() {
	return (
		<div className="header">
			<div className="search-bar-container">
				<Link to="/home">
					<img alt="altLogo" src={altLogo} />
				</Link>

				<SearchBar />
				<div className="account-links">
					<Dropdown />

					<NotificationPopup />

					<button className="create-listing-button">
						<img src={plus} alt="plus" />
						<h4 style={{ color: '#ffffff' }}> Create Listing</h4>
					</button>
				</div>
			</div>

			<div>
				<ul className="categories">
					<li>
						<img
							alt="drop-down"
							src={hamburger}
							style={{ paddingRight: '15px' }}
						/>
						Categories
					</li>
					<li>Deals</li>
					<li>Cars & Vehicles</li>
					<li>Furniture</li>
					<li>Electronics</li>
					<li>Real Estate</li>
				</ul>
			</div>
		</div>
	);
}
