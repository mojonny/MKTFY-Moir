import { useDispatch } from 'react-redux';
import {
	filternone,
	filterdeals,
	filtercars,
	filterfurniture,
	filterelectronics,
	filterrealestate,
	filterhide,
} from './productSlice';
import hamburger from '../../assets/LinesMenu.png';
import './index.css';

export function ProductFilter() {
	const dispatch = useDispatch();
	// gets the dispatch function to dispatch our actions

	return (
		<div>
			<ul className="search-bar-categories">
				<li>
					<button
						className="nav-category-button"
						onClick={() => dispatch(filterhide())}
					>
						<img alt="drop-down" src={hamburger} />
					</button>
					{'\xa0'.repeat(2)}
					<button
						className="nav-category-button"
						onClick={() => dispatch(filternone())}
					>
						All
					</button>
				</li>
				<li>
					<button
						className="nav-category-button"
						onClick={() => dispatch(filterdeals())}
					>
						Deals
					</button>
				</li>
				<li>
					<button
						className="nav-category-button"
						onClick={() => dispatch(filtercars())}
					>
						Cars & Vehicles
					</button>
				</li>
				<li>
					<button
						className="nav-category-button"
						onClick={() => dispatch(filterfurniture())}
					>
						Furniture
					</button>
				</li>
				<li>
					<button
						className="nav-category-button"
						onClick={() => dispatch(filterfurniture())}
					>
						Furniture
					</button>
				</li>
				<li>
					<button
						className="nav-category-button"
						onClick={() => dispatch(filterelectronics())}
					>
						Electronics
					</button>
				</li>
				<li>
					<button
						className="nav-category-button"
						onClick={() => dispatch(filterrealestate())}
					>
						Real Estate
					</button>
				</li>
			</ul>
		</div>
	);
}
