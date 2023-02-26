import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Success from '../../Components/Success';

import logo from '../../assets/MKTFY Logo.svg';
import './index.css';

export default function NotFound() {
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
		<div className="lost-page">
			<div className="lost-page-text">
				<button
					onClick={navigateHome}
					disabled={isLoading}
					style={{ background: 'none', border: 'none' }}
				>
					{isLoading ? <Success /> : navigateHome}

					<img src={logo} alt="logo" style={{ height: '200px' }} />
				</button>
				CODE 404!
				<br />
				<p>
					There's nothing here! Pearl the cat is currently sleeping, so we can't
					get up to help you right now, please try again later.
				</p>
			</div>
		</div>
	);
}
