import React, { useState, useRef } from 'react';

import bell from '../../../assets/Bell.png';
import mktfy from '../../../assets/altLogo.png';
import './index.css';

export default function NotificationPopup() {
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);

	const notificationMenu = useRef(null);

	//Closes dropdown when clicked outside
	const closeNotificationPopup = (e) => {
		if (
			notificationMenu.current &&
			isNotificationOpen &&
			!notificationMenu.current.contains(e.target)
		) {
			setIsNotificationOpen(false);
		}
	};

	//Event listener to close dropdown on click outside
	document.addEventListener('mousedown', closeNotificationPopup);

	//This function opens the dropdown when the button is clicked
	const handleNotification = () => {
		setIsNotificationOpen(true);
	};

	return (
		<div>
			{/* This is what shows initially on header */}
			<div
				className="notifications-button"
				style={{
					verticalAlign: 'center',
				}}
			>
				<button
					onClick={handleNotification}
					style={{
						background: 'none',
						border: 'none',
					}}
				>
					<img alt="notifications" src={bell} />
				</button>
			</div>
			{/* This is what pops up on button click */}
			{isNotificationOpen && (
				<div
					ref={notificationMenu}
					onClick={(e) => e.stopPropagation()}
					className="notification-container"
				>
					<div className="new-notifications">
						<h3 style={{ paddingLeft: '20px' }}>New for you</h3>
						<div className="notification-box">
							<div className="note-box">
								<img src={mktfy} className="mini-logo" alt="mktfy" />
								<div className="note">
									Hey there, welcome to MKTFY
									<br />
									<p>September 07,2020</p>
								</div>
							</div>
						</div>
					</div>
					<br />
					<div className="old-notifications">
						<h3 style={{ paddingLeft: '20px' }}>Previously seen</h3>
						<div className="notification-box">
							<div className="note-box">
								<img src={mktfy} className="mini-logo" alt="mktfy" />

								<div className="note">
									Let's create your first listing!
									<br />
									<p>September 05,2020</p>
								</div>
							</div>
							<br />
							<div className="note-box">
								<img src={mktfy} className="mini-logo" alt="mktfy" />

								<div className="note">
									Our Terms of Service has been updated!
									<br />
									<p>September 03,2020</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
