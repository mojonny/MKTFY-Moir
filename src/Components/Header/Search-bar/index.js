import './index.css';
import arrow from '../../../assets/DropArrowBlk.png';
import search from '../../../assets/LookinGlass.png';
import { useState } from 'react';

export default function SearchBar() {
	const [isDropOpen, setIsDropOpen] = useState(false);
	const [isDropOpen1, setIsDropOpen1] = useState(false);

	const [category, setCategory] = useState('All');

	const [location, setLocation] = useState('Calgary');

	const handleClick = (e) => {
		setCategory(e.target.id);
		setIsDropOpen(false);
	};

	const handleClick1 = (e) => {
		setLocation(e.target.id);
		setIsDropOpen1(false);
	};

	const handleToggle = () => {
		setIsDropOpen((current) => !current);
	};

	const handleToggle1 = () => {
		setIsDropOpen1((current) => !current);
	};
	return (
		<div className="search-bar">
			<div id="select">
				<button
					onClick={handleToggle}
					style={{ border: 'none', background: 'none' }}
				>
					<h2>{category}</h2>
				</button>
				{isDropOpen && (
					<ul isDropOpen={isDropOpen}>
						<li className="options" id="All Categories" onClick={handleClick}>
							All Categories
						</li>
						<li className="options" id="Deals" onClick={handleClick}>
							Deals
						</li>
						<li className="options" id="Cars & Vehicles" onClick={handleClick}>
							Cars & Vehicles
						</li>
						<li className="options" id="Furniture" onClick={handleClick}>
							Furniture
						</li>
						<li className="options" id="Electronics" onClick={handleClick}>
							Electronics
						</li>
						<li className="options" id="Real Estate" onClick={handleClick}>
							Real Estate
						</li>
					</ul>
				)}
			</div>
			<div className="main-search">
				<input
					className="text-search"
					type="text"
					placeholder=" Search on MKTFY"
				/>
				<img className="looking-glass" src={search} alt="looking glass" />
			</div>
			<div id="select">
				<button
					onClick={handleToggle1}
					style={{
						border: 'none',
						background: 'none',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<img src={arrow} alt="arrow" />
					<h2>{location}</h2>
				</button>
				{isDropOpen1 && (
					<ul>
						<li class="mini-search">
							<img
								className="mini-looking-glass"
								src={search}
								alt="looking glass"
							/>
							<input
								className="city-search"
								type="text"
								placeholder="Search city"
								style={{ border: 'none', background: 'none' }}
							/>
						</li>
						<li className="options" id="Calgary" onClick={handleClick1}>
							Calgary
						</li>
						<li className="options" id="Brooks" onClick={handleClick1}>
							Brooks
						</li>
						<li className="options" id="Camrose" onClick={handleClick1}>
							Camrose
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}
