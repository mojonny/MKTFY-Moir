import React from 'react';
import altLogo from '../../../assets/altLogo.png';
import './Header.styles.css';

export default function Header() {
	return (
		<div className="header" style={{ backgroundColor: '#6318AF' }}>
			<img alt="altLogo" src={altLogo} />
		</div>
	);
}
