import React from 'react';
import altLogo from '../../../assets/altLogo.png';
import bell from '../../../assets/Bell.png';
import './Header.styles.css';

export default function Header() {
	const username = 'Pearl The Cat';
	return (
		<div className="header" style={{ backgroundColor: '#6318AF' }}>
			<img alt="altLogo" src={altLogo} />
			<input type="text" placeholder="Search on MKTFY" />
			<p>Welcome back, {username}</p>
			<button>
				<img alt="alert-bell" src={bell} />
			</button>
		</div>
	);
}
