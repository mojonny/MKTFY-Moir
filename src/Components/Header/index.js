import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

import altLogo from '../../assets/altLogo.png';
import bell from '../../assets/Bell.png';
import plus from '../../assets/Plus.png';
import hamburger from '../../assets/LinesMenu.png';
import dropArrow from '../../assets/DownArrow.png';
import './index.css';

export default function Header() {
	const [isDropOpen, setIsDropOpen] = useState(false);
	console.log('dropdown: ', isDropOpen);

	const showDrop = () => {
		setIsDropOpen(true);
	};

	return (
		<div className="header">
			<div className="search-bar-container">
				<Link to="/home">
					<img alt="altLogo" src={altLogo} />
				</Link>

				<input
					className="search-bar"
					type="text"
					placeholder="All |  Search on MKTFY | Calgary"
				/>
				<div className="account-links">
					<div className="profile-dropdown">
						<p style={{ margin: '0', textAlign: 'right', color: '#ffffff' }}>
							Welcome back,
						</p>
						<button className="profile-button" onClick={showDrop}>
							<img src={dropArrow} alt="dropArrow" />
							<h4 style={{ margin: '0' }}>Pearl The Cat</h4>
						</button>
					</div>
					<button style={{ background: 'none', border: 'none' }}>
						<img alt="notifications" src={bell} />
					</button>

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
			{isDropOpen && (
				<Dropdown
					isDropOpen={isDropOpen}
					onClose={() => setIsDropOpen(false)}
				/>
			)}
		</div>
	);
}
