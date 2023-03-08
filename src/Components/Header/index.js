import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SearchBar from './SearchBar';
import ProfileDropdown from './ProfileDropdown';
import NotificationPopup from './NotificationDropdown';

import altLogo from '../../assets/altLogo.png';

import plus from '../../assets/Plus.png';
import hamburger from '../../assets/LinesMenu.png';

import './index.css';

export default function Header() {
	const navigate = useNavigate();

	const navigateToCreateListing = () => {
		navigate('/createlisting');
	};
	return (
		<div className="header">
			<div className="search-bar-container">
				<Link to="/home">
					<img alt="altLogo" src={altLogo} />
				</Link>

				<SearchBar />
				<div className="account-links">
					<ProfileDropdown />

					<NotificationPopup />

					<button
						className="create-listing-button"
						onClick={navigateToCreateListing}
					>
						<img src={plus} alt="plus" />
						<h4
							style={{
								color: '#ffffff',
								padding: '15px,14px,15px,14px',
								cursor: 'pointer',
							}}
						>
							{' '}
							Create Listing
						</h4>
					</button>
				</div>
			</div>

			<ul className="search-bar-categories">
				<li>
					<img alt="drop-down" src={hamburger} />
					{'\xa0'.repeat(2)}Categories
				</li>
				<li>Deals</li>
				<li>Cars & Vehicles</li>
				<li>Furniture</li>
				<li>Electronics</li>
				<li>Real Estate</li>
			</ul>
		</div>
	);
}
