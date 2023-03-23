import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../Services/auth0.service';
import { AUTH0_CLIENT_ID } from '../../../config';

import { userData } from '../../../Store/userData';

import logout from '../../../assets/LogOut.png';
import dropArrow from '../../../assets/DownArrow.png';
import './index.css';

export default function ProfileDropdown() {
	const [isDropOpen3, setIsDropOpen3] = useState(false);

	const dropMenu3 = useRef(null);

	//Closes dropdown when clicked outside
	const closeOpenMenus3 = (e) => {
		if (
			dropMenu3.current &&
			isDropOpen3 &&
			!dropMenu3.current.contains(e.target)
		) {
			setIsDropOpen3(false);
		}
	};

	//Event listener to close dropdown on click outside
	document.addEventListener('mousedown', closeOpenMenus3);

	//This function opens the dropdown when the button is clicked
	const handleToggle3 = () => {
		setIsDropOpen3(true);
	};

	const handleClick = (e) => {
		setIsDropOpen3(false);
	};

	const onSubmit = (e) => {
		setIsDropOpen3(false);

		setTimeout(() => {
			auth.logout({
				returnTo: 'http://localhost:3000/',
				clientID: AUTH0_CLIENT_ID,
			});
		}, 1500);
	};

	const storedEmail = sessionStorage.getItem('userEmail');
	console.log(storedEmail);

	let filterByUser = userData.filter((user) => user.email === storedEmail);

	let filteredUser = filterByUser[0];

	if (filteredUser === undefined) {
		const tempUser = [
			{
				firstName: 'Pearl',
				lastName: 'The Cat',
				email: 'pearl@gmail.com',
				phone: 4034563456,
				province: 'Alberta',
				country: 'Canada',
				address: '123 Nowhere St. NW',
				city: 'Calgary',
				userId: '641a19eb739976b747123132131231230db9c6',
			},
		];

		filteredUser = tempUser[0];
	}
	console.log(filteredUser);
	const profileLetter = filteredUser.firstName[0];

	return (
		<div>
			<div className="profile-dropdown">
				{/* This is what shows initially on header */}
				<div
					className="profile"
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						height: '100%',
						padding: '5px',
						color: '#ffffff',
						fontWeight: 'lighter',
					}}
				>
					Welcome back,
					<br />
					<button
						className="profile-button"
						onClick={handleToggle3}
						style={{ width: '100%', cursor: 'pointer' }}
					>
						<img src={dropArrow} alt="dropArrow" />
						<h4>
							{filteredUser.firstName} {filteredUser.lastName}
						</h4>
					</button>
				</div>
				{/* This is what pops up on button click */}
				{isDropOpen3 && (
					<div ref={dropMenu3} onClick={(e) => e.stopPropagation()}>
						<div className="drop-container">
							<div className="title-container">
								<div className="profile-icon">{profileLetter}</div>
								<h1>
									{filteredUser.firstName} {filteredUser.lastName}
								</h1>
							</div>

							<h2 style={{ color: 'black', margin: '0px' }}>Settings</h2>
							<div className="settings-links">
								<Link
									className="drop-nav-links"
									to="/account"
									onClick={handleClick}
								>
									Account information
								</Link>
								<Link
									className="drop-nav-links"
									onClick={handleClick}
									to="/changepassword"
								>
									Change password
								</Link>
								<Link
									className="drop-nav-links"
									onClick={handleClick}
									to="/mypurchases"
								>
									My purchases
								</Link>
								<Link
									className="drop-nav-links"
									onClick={handleClick}
									to="/mylistings"
								>
									My listings
								</Link>
							</div>
							<br />
							<h2 style={{ color: '#313131', margin: '0px' }}>Help</h2>
							<div className="help-links">
								<Link
									className="drop-nav-links"
									onClick={handleClick}
									to="/faq"
								>
									FAQ
								</Link>
								<Link
									className="drop-nav-links"
									onClick={handleClick}
									to="/contactus"
								>
									Contact us
								</Link>
							</div>
							<div>
								<button
									type="button"
									onClick={onSubmit}
									className="bottom-drop-links"
								>
									<h2>Sign out</h2>
									<img
										style={{ objectFit: 'contain' }}
										src={logout}
										alt="logout"
									/>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
