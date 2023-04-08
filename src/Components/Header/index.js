import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { getProducts } from '../../Services/services';
import SearchBar from './SearchBar';
import ProfileDropdown from './ProfileDropdown';
import NotificationPopup from './NotificationDropdown';

import altLogo from '../../assets/altLogo.png';
import plus from '../../assets/Plus.png';

import './index.css';

export default function Header() {
	const navigate = useNavigate();

	const navigateToCreateListing = () => {
		navigate('/createlisting');
	};

	return (
		<div className="header">
			<div className="search-bar-container">
				<Link to="/home">
					<img alt="altLogo" src={altLogo} />
				</Link>

				<SearchBar />
				<div className="account-links">
					<ProfileDropdown />

					<NotificationPopup />

					<button
						className="create-listing-button"
						onClick={navigateToCreateListing}
					>
						<img src={plus} alt="plus" />
						<h4
							style={{
								color: '#ffffff',
								padding: '15px,14px,15px,14px',
								cursor: 'pointer',
							}}
						>
							{' '}
							Create Listing
						</h4>
					</button>
				</div>
			</div>

			<div>
				<ul className="search-bar-categories">
					<li>
						<button onClick={() => navigate('/search')}>SEARCH TEST</button>
					</li>
					<li>
						<button
							className="nav-category-button"
							onClick={() => navigate('/deals')}
						>
							Deals
						</button>
					</li>
					<li>
						<button
							className="nav-category-button"
							onClick={() => navigate('/vehicles')}
						>
							Cars & Vehicles
						</button>
					</li>
					<li>
						<button
							className="nav-category-button"
							onClick={() => navigate('/furniture')}
						>
							Furniture
						</button>
					</li>
					<li>
						<button
							className="nav-category-button"
							onClick={() => navigate('/electronics')}
						>
							Electronics
						</button>
					</li>
					<li>
						<button
							className="nav-category-button"
							onClick={() => navigate('/real_estate')}
						>
							Real Estate
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
