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
						<h3>New for you</h3>
						<div className="notification-box">
							<div className="note-box">
								<img src={mktfy} className="mini-logo" alt="mktfy" />
								<div style={{ margin: '0px' }}>
									<h4>Hey Pearl, welcome to MKTFY</h4>
									<p>September 07,2020</p>
								</div>
							</div>
						</div>
					</div>

					<div className="old-notifications">
						<h3>Previously seen</h3>
						<div className="notification-box">
							<div className="note-box">
								<img src={mktfy} className="mini-logo" alt="mktfy" />
								<div>
									<h4>Let's create your first listing!</h4>
									<p>September 05,2020</p>
								</div>
							</div>
							<div className="note-box">
								<img src={mktfy} className="mini-logo" alt="mktfy" />
								<div>
									<h4>Our Terms of Service has been updated!</h4>
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
