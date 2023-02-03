import React from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown(props) {
	if (!props.show) {
		return null;
	}

	return (
		<div
			className="BG"
			style={{
				height: '2000px',
				width: '2000px',
				backgroundColor: 'black',
			}}
			onClick={props.onClose}
		>
			<div className="container">
				<div className="title-container">
					<h1>P</h1>
					<h1>Pearl The Cat</h1>
				</div>

				<h2>Settings</h2>
				<div>
					<Link to="/account">Account information</Link>
					<Link to="/changepassword">Change password</Link>
					<Link to="/mypurchases">My purchases</Link>
					<Link to="/mylistings">
						My listings <div>notification badge</div>
					</Link>
				</div>
				<br />
				<h2>Help</h2>
				<div>
					<Link to="/faq">FAQ</Link>
					<Link to="/contact">Contact us</Link>
					<Link to="/mypurchases">My purchases</Link>
					<div>
						<Link to="/loginportal">
							<h3>Sign out</h3>
						</Link>
						<button>back icon here</button>
					</div>
				</div>
			</div>
		</div>
	);
}
