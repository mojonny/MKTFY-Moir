import React from 'react';
import altLogo from '../../assets/altLogo.png';
import bell from '../../assets/Bell.png';
import plus from '../../assets/Plus.png';
import hamburger from '../../assets/LinesMenu.png';

import './index.css';

export default function Header() {
	const username = 'Pearl The Cat';
	return (
		<div
			className="header"
			style={{ backgroundColor: '#6318AF', height: '220px' }}
		>
			<div className="search-bar">
				<img alt="altLogo" src={altLogo} />
				<input type="text" placeholder="Search on MKTFY" />
				<p>Welcome back, {username}</p>
				<button>
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
		</div>
	);
}
