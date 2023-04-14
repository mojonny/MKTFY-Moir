import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import newBell from '../../../assets/newBell.png';
import bell from '../../../assets/Bell.png';
import mktfy from '../../../assets/altLogo.png';
import moment from 'moment/moment';
import './index.css';

export default function NotificationPopup() {
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const [newNotifications, setNewNotifications] = useState([]);
	const [seenNotifications, setSeenNotifications] = useState([]);

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

	useEffect(() => {
		async function getNotifications() {
			try {
				const token = sessionStorage.getItem('accessToken');
				const url =
					'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/notifications';
				const options = {
					headers: { Authorization: `Bearer ${token}` },
				};
				const response = await axios.get(url, options);
				setNewNotifications(response.data.new);
				setSeenNotifications(response.data.seen);

				console.log('SUCCESS: Got all notifications:', response.data);
			} catch (err) {
				console.log('err', err);
				throw new Error(err);
			}
		}

		getNotifications();
	}, []);

	const newNotificationComponents = newNotifications.map((type) => {
		return (
			<div key={type.id}>
				<div className="notification-box">
					<div className="note-box">
						<img src={mktfy} className="mini-logo" alt="mktfy" />
						<div className="note">
							{type.message}
							<br />
							<p>{moment(type.created).format('MMM Do YYYY')}</p>
						</div>
					</div>
				</div>
			</div>
		);
	});

	const seenNotificationComponents = seenNotifications.map((type) => {
		return (
			<div key={type.id}>
				<div className="notification-box">
					<div className="seen-note-box">
						<img src={mktfy} className="mini-logo" alt="mktfy" />

						<div className="note">
							<p>{type.message}</p>
							<br />
							<p>{moment(type.created).format('MMM Do YYYY')}</p>
						</div>
					</div>
				</div>
			</div>
		);
	});

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
					{newNotifications.length === 0 ? (
						<i>
							<img alt="notifications" src={bell} />
						</i>
					) : (
						<i>
							<img alt="notifications" src={newBell} />
						</i>
					)}
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
						<br />
						<h4 style={{ paddingLeft: '20px' }}>New for you</h4>
						{newNotificationComponents}
					</div>
					<br />
					<div className="old-notifications">
						<h4 style={{ paddingLeft: '20px' }}>Previously seen</h4>
						<br />
						{seenNotificationComponents}
					</div>
				</div>
			)}
		</div>
	);
}
