import { useDispatch } from 'react-redux';
import {
	filterdeals,
	filtercars,
	filterfurniture,
	filterelectronics,
	filterrealestate,
} from './productSlice';
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
