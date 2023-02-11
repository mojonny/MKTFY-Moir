import React from 'react';
import { Link } from 'react-router-dom';

import topArrow from '../../../assets/DropdownTopArrow.png';
import logout from '../../../assets/LogOut.png';

import './index.css';

export default function Dropdown({ isDropOpen }) {
	return (
		<div className="dropBG" onClick={() => isDropOpen(false)}>
			<div className="drop-container" open={true}>
				<img
					src={topArrow}
					alt="top of box arrow"
					style={{
						transform: 'translate(0%, -65%)',
						marginBottom: '-70px',
					}}
				/>

				<div className="title-container">
					<div
						style={{
							color: '#ffffff',
							backgroundColor: '#560f9f',
							height: '40px',
							width: '40px',
							borderRadius: '200px',
							padding: '10px 15px 10px 15px',
						}}
					>
						P
					</div>
					<h1>Pearl The Cat</h1>
				</div>

				<h2 style={{ color: 'black', margin: '0px' }}>Settings</h2>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						textDecoration: 'none',
						gap: '16px',
						marginBottom: '70px',
					}}
				>
					<Link className="drop-nav-links" to="/account">
						Account information
					</Link>
					<Link className="drop-nav-links" to="/changepassword">
						Change password
					</Link>
					<Link className="drop-nav-links" to="/mypurchases">
						My purchases
					</Link>
					<Link className="drop-nav-links" to="/mylistings">
						My listings
					</Link>
				</div>
				<br />
				<h2 style={{ color: '#313131', margin: '0px' }}>Help</h2>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						marginBottom: '70px',
					}}
				>
					<Link className="drop-nav-links" to="/faq">
						FAQ
					</Link>
					<Link className="drop-nav-links" to="/contactus">
						Contact us
					</Link>
				</div>
				<div className="bottom-drop-links">
					<Link className="drop-nav-links" to="/">
						<h3>Sign out</h3>
					</Link>
					<button
						style={{
							background: 'none',
							border: 'none',
						}}
						onClick={() => isDropOpen(false)}
					>
						<img src={logout} alt="logout" />
					</button>
				</div>
			</div>
		</div>
	);
}
