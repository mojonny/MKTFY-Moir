import './index.css';
import arrow from '../../../assets/DropArrowBlk.png';
import search from '../../../assets/LookinGlass.png';
import { useState } from 'react';

export default function SearchBar() {
	const [isDropOpen, setIsDropOpen] = useState(false);
	const [isDropOpen1, setIsDropOpen1] = useState(false);

	const [category, setCategory] = useState('All');
	console.log(setCategory);

	function handleChange(event) {
		console.log(event.target.value);
	}

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
					<h2 style={{ color: '#000000' }} onChange={handleChange}>
						{category}
					</h2>
				</button>
				{isDropOpen && (
					<ul isDropOpen={isDropOpen}>
						<li class="options" id="1">
							All Categories
						</li>
						<li class="options">Deals</li>
						<li class="options">Cars & Vehicles</li>
						<li class="options">Furniture</li>
						<li class="options">Electronics</li>
						<li class="options">Real Estate</li>
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
					<h2 style={{ color: '#000000' }}>Calgary</h2>
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
						<li class="options">Calgary</li>
						<li class="options">Brooks</li>
						<li class="options">Camrose</li>
					</ul>
				)}
			</div>
		</div>
	);
}
