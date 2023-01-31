import React, { useState } from 'react';
import appBanner from '../../assets/AppBanner1.png';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Slider';
import Modal from '../../Components/Modal';

import './index.css';

export default function Home() {
	const [show, setShow] = useState(false);
	return (
		<div className="home">
			<Header />
			<div className="carousel">
				<div className="slider-container">
					<Slider />
				</div>
			</div>
			<button onClick={() => setShow(true)}>Show me the modal!</button>
			<Modal onClose={() => setShow(false)} show={show} />

			<img
				alt="download app banner"
				className="download-app-add"
				src={appBanner}
			/>
			<Footer />
		</div>
	);
}
