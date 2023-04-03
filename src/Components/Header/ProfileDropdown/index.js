import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../Services/auth0.service';
import { AUTH0_CLIENT_ID, AUTH0_LOGOUT_URI } from '../../../config';
import axios from 'axios';

import logout from '../../../assets/LogOut.png';
import dropArrow from '../../../assets/DownArrow.png';
import './index.css';

export default function ProfileDropdown() {
	const [isDropOpen3, setIsDropOpen3] = useState(false);
	const dropMenu3 = useRef(null);
	const [user, setUser] = useState([]);
	const firstName = user.firstName;
	const lastName = user.lastName;

	useEffect(() => {
		setTimeout(() => {
			//Check if user exists
			function getUser() {
				const token = sessionStorage.getItem('accessToken');
				const id = sessionStorage.getItem('id');
				const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/${id}`;

				axios
					.get(url, { headers: { Authorization: `Bearer ${token}` } })
					.then((res) => {
						setUser(res.data);
						return console.log('SUCCESS: User found!', res.data);
					})
					.catch((error) => {
						console.log('ERROR: User does not exist in db', error);
					});
			}
			getUser();
		}, 3000);
	}, []);

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

	const handleClick = () => {
		setIsDropOpen3(false);
	};

	const onSubmit = () => {
		setIsDropOpen3(false);
		sessionStorage.clear();
		auth.logout({
			returnTo: AUTH0_LOGOUT_URI,
			clientID: AUTH0_CLIENT_ID,
		});
	};

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
							{firstName} {lastName}
						</h4>
					</button>
				</div>
				{/* This is what pops up on button click */}
				{isDropOpen3 && (
					<div ref={dropMenu3} onClick={(e) => e.stopPropagation()}>
						<div className="drop-container">
							<div className="title-container">
								<div className="profile-icon">{firstName[0]}</div>
								<h1>
									{firstName} {lastName}
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
