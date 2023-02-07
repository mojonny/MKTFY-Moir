import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

import LogoutButton from '../Auth0/LogoutButton';
import altLogo from '../../assets/altLogo.png';
import bell from '../../assets/Bell.png';
import plus from '../../assets/Plus.png';
import hamburger from '../../assets/LinesMenu.png';
import './index.css';

export default function Header() {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	console.log(dropdownIsOpen);

	return (
		<div
			className="header"
			style={{ backgroundColor: '#6318AF', height: '220px' }}
		>
			<div className="search-bar">
				<Link to="/home">
					<img alt="altLogo" src={altLogo} />
				</Link>

				<LogoutButton />
				<input type="text" placeholder="Search on MKTFY" />

				<button>
					<p>Welcome back, Pearl</p>
				</button>
				<button onClick={() => setDropdownIsOpen(true)}>
					<img alt="notifications" src={bell} />
				</button>
				<button
					style={{
						display: 'flex',
						flexDirection: 'row',
						JustifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					<img alt="+" src={plus} />
					<p> Create Offer</p>
				</button>
			</div>

			<div className="Categories">
				<img alt="drop-down" src={hamburger} />
				<p>Categories</p>
				<p>Deals</p>
				<p>Cars & Vehicles</p>
				<p>Furniture</p>
				<p>Electronics</p>
				<p>Real estate</p>
			</div>

			<Dropdown
				isOpen={dropdownIsOpen}
				onRequestClose={() => setDropdownIsOpen(false)}
			/>
		</div>
	);
}
