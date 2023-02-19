import React from 'react';
import appBanner from '../../assets/AppBanner1.png';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Sliders/Home-Slider';

import { Link } from 'react-router-dom';
import catDonut from '../../assets/catBreakfast.png';
import './index.css';

const Title = 'Shop Pearls & Pearls';

const SubTitle = 'Explore now';

export default function Home() {
	return (
		<div className="home-dashboard">
			<br />
			<br />
			<Slider key="0" />
			<br />
			<div className="mini-slider-container">
				<div className="mini-slider1">
					<h3 className="top-shop-title">{Title}</h3>
					<div className="cat-pics">
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
					</div>
					<h4 className="bottom-explore-link">{SubTitle}</h4>
				</div>

				<div className="mini-slider2">
					<h3 className="top-shop-title">{Title}</h3>
					<div className="cat-pics">
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
					</div>
					<h4 className="bottom-explore-link">{SubTitle}</h4>
				</div>
			</div>
			<br />
			<Slider key="1" />
			<br />
			<div className="mini-slider-container">
				<div className="mini-slider1">
					<h3 className="top-shop-title">{Title}</h3>
					<div className="cat-pics">
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
					</div>
					<h4 className="bottom-explore-link">{SubTitle}</h4>
				</div>

				<div className="mini-slider2">
					<h3 className="top-shop-title">{Title}</h3>
					<div className="cat-pics">
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
						<Link to="/product">
							<img className="cat-image" src={catDonut} alt="catPicture" />
						</Link>
					</div>
					<h4 className="bottom-explore-link">{SubTitle}</h4>
				</div>
			</div>
			<br />
			<img
				alt="download app banner"
				className="download-app-add"
				src={appBanner}
			/>
			<br />
			<Footer />
		</div>
	);
}
