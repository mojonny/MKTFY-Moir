import { useDispatch } from 'react-redux';
import { getSearchAsync } from '../../../Features/Search/searchSlice';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../assets/DropArrowBlk.png';
import searchButton from '../../../assets/LookinGlass.png';
import './index.css';

export default function SearchBar() {
	const [isDropOpen, setIsDropOpen] = useState(false);
	const [isDropOpen1, setIsDropOpen1] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [category, setCategory] = useState('All');
	const [city, setCity] = useState('Calgary');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = () => {
		dispatch(getSearchAsync({ searchValue, city, category }));
		navigate('/search');
		sessionStorage.setItem('searchValue', searchValue);
		setSearchValue('');
		setCategory('All');
		setCity('Calgary');
	};

	const handleClick = (e) => {
		console.log(searchValue);
		setCategory(e.target.id);
		setIsDropOpen(false);
	};

	const handleClick1 = (e) => {
		//updates field
		setCity(e.target.id);
		//closes modal after click
		setIsDropOpen1(false);
	};

	const handleToggle = () => {
		setIsDropOpen((current) => !current);
	};

	const handleToggle1 = () => {
		setIsDropOpen1((current) => !current);
	};

	const dropMenu = useRef(null);

	//Closes dropdown when clicked outside
	const closeOpenMenus = (e) => {
		if (
			dropMenu.current &&
			isDropOpen &&
			!dropMenu.current.contains(e.target)
		) {
			setIsDropOpen(false);
		}
	};

	//Event listener to close dropdown on click outside
	document.addEventListener('mousedown', closeOpenMenus);

	const dropMenu1 = useRef(null);

	//Closes dropdown when clicked outside
	const closeOpenMenus1 = (e) => {
		if (
			dropMenu1.current &&
			isDropOpen1 &&
			!dropMenu1.current.contains(e.target)
		) {
			setIsDropOpen1(false);
		}
	};

	//Event listener to close dropdown on click outside
	document.addEventListener('mousedown', closeOpenMenus1);

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
					<ul ref={dropMenu} onClick={(e) => e.stopPropagation()}>
						<li
							className="options"
							id="VEHICLES"
							onClick={handleClick}
							value={category}
						>
							Cars & Vehicles
						</li>
						<li
							className="options"
							id="FURNITURE"
							onClick={handleClick}
							value={category}
						>
							Furniture
						</li>
						<li
							className="options"
							id="ELECTRONICS"
							onClick={handleClick}
							value={category}
						>
							Electronics
						</li>
						<li
							className="options"
							id="REAL_ESTATE"
							onClick={handleClick}
							value={category}
						>
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
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				{/* SEARCH LOOKING-GLASS BUTTON */}
				<button
					// style={{
					// 	border: 'none',
					// 	background: 'none',
					// }}
					onClick={handleSubmit}
				>
					<img
						// className="looking-glass"
						src={searchButton}
						alt="looking glass"
					/>
				</button>
			</div>
			<br />

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
					<h2>{city}</h2>
				</button>
				{isDropOpen1 && (
					<ul ref={dropMenu1} onClick={(e) => e.stopPropagation()}>
						{/*THIS LETS THE USER SEARCH THEIR CITY  */}
						<li className="mini-search">
							<img
								className="mini-looking-glass"
								src={searchButton}
								alt="looking glass"
							/>
							<input
								className="city-search"
								type="text"
								placeholder="Search city"
								style={{ border: 'none', background: 'none' }}
								onChange={(e) => setCity(e.target.value)}
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
						<li className="options" id="ColdLake" onClick={handleClick1}>
							Cold Lake
						</li>
						<li className="options" id="Edmonton" onClick={handleClick1}>
							Edmonton
						</li>
						<li className="options" id="FortMcMurray" onClick={handleClick1}>
							Fort McMurray
						</li>
						<li className="options" id="Lacombe" onClick={handleClick1}>
							Lacombe
						</li>
						<li className="options" id="Leduc" onClick={handleClick1}>
							Leduc
						</li>
						<li className="options" id="Lethbridge" onClick={handleClick1}>
							Lethbridge
						</li>
						<li className="options" id="MedicineHat" onClick={handleClick1}>
							Medicine Hat
						</li>
						<li className="options" id="RedDeer" onClick={handleClick1}>
							Red Deer
						</li>
						<li className="options" id="St.Albert" onClick={handleClick1}>
							St. Albert
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}
