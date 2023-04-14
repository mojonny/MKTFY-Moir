import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDealsAsync } from '../../Features/Deals/dealsSlice';
import Success from '../../Components/Success';

import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

function isValidEmail(email) {
	return RegExp(
		'^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
			'(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
			'|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
	).test(email);
}

export default function ContactUS() {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const dispatch = useDispatch();
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
					<button
						style={{ border: 'none', background: 'none' }}
						onClick={() => navigate('/deals') || dispatch(getDealsAsync())}
					>
						Deals for you
					</button>

					<img src={breadArrow} alt="path-arrow" />
					<button style={{ border: 'none', background: 'none' }}> FAQ </button>
				</div>

				<div className="product-landing2">
					<form className="contact-form-container1">
						<h1 style={{ color: '#6318af' }}> Contact us</h1>
						<div>
							<label>Name</label>
							<br />
							<input
								className="contact-input"
								placeholder="Your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label>Email address</label>
							<br />
							<input
								type="email"
								className="contact-input"
								placeholder="Your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label>Message</label>
							<br />
							<textarea
								className="message-text-area"
								placeholder="Your message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>

						<button
							type="submit"
							onClick={navigateHome}
							disabled={isLoading || !isValidEmail(email) || !name || !message}
							className="send-button"
							style={{ alignSelf: 'center' }}
						>
							Send
						</button>
					</form>
				</div>
			</div>
			{isLoading ? <Success /> : null}
		</>
	);
}
