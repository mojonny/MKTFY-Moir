import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import logout from '../../../assets/LogOut.png';
import dropArrow from '../../../assets/DownArrow.png';
import './index.css';

export default function Dropdown() {
	const [isDropOpen3, setIsDropOpen3] = useState(false);

	const dropMenu = useRef(null);

	const closeOpenMenus = (e) => {
		if (
			dropMenu.current &&
			isDropOpen3 &&
			!dropMenu.current.contains(e.target)
		) {
			setIsDropOpen3(false);
		}
	};
	document.addEventListener('mousedown', closeOpenMenus);
	const handleToggle3 = () => {
		setIsDropOpen3((current) => !current);
	};
	return (
		<div>
			<div className="profile-dropdown">
				{/* This is what shows initially on header */}
				<div className="profile">
					<p style={{ margin: '0', textAlign: 'right', color: '#ffffff' }}>
						Welcome back,
					</p>
					<button className="profile-button" onClick={handleToggle3}>
						<img src={dropArrow} alt="dropArrow" />
						<h4 style={{ margin: '0' }}>Pearl The Cat</h4>
					</button>
				</div>
				{isDropOpen3 && (
					<div ref={dropMenu} onClick={(e) => e.stopPropagation()}>
						<div className="drop-container">
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
							<div>
								<Link className="bottom-drop-links" to="/">
									<h3>Sign out</h3>
									<img
										style={{ objectFit: 'contain' }}
										src={logout}
										alt="logout"
									/>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
