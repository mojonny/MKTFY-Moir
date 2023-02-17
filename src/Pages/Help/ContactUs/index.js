import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../../Components/Success';

import breadArrow from '../../../assets/breadCrumbArrow.png';
import './index.css';

export default function ContactUS() {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};

	return (
		<>
			<div className="product-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> FAQ{' '}
				</div>
				<div className="product-landing2">
					<form className="contact-form-container1">
						<h1 style={{ color: '#6318af' }}> Contact us</h1>
						<div>
							<label>Name</label>
							<br />
							<input className="contact-input" placeholder="Your name" />
						</div>
						<div>
							<label>Email address</label>
							<br />
							<input
								type="email"
								className="contact-input"
								placeholder="Your email"
							/>
						</div>
						<div>
							<label>Message</label>
							<br />
							<textarea
								className="message-text-area"
								placeholder="Your message"
							></textarea>
						</div>

						<button
							onClick={navigateHome}
							disabled={isLoading}
							className="send-button"
							style={{ alignSelf: 'center' }}
						>
							{isLoading ? <Success /> : navigateHome}
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
