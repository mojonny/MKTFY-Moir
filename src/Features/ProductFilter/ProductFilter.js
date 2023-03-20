import { useDispatch } from 'react-redux';
import {
	filternone,
	filterdeals,
	filtercars,
	filterfurniture,
	filterelectronics,
	filterrealestate,
} from './productSlice';
import hamburger from '../../assets/LinesMenu.png';

export function ProductFilter() {
	const dispatch = useDispatch();
	// gets the dispatch function to dispatch our actions

	return (
		<div>
			<ul className="search-bar-categories">
				<li>
					<img alt="drop-down" src={hamburger} />
					{'\xa0'.repeat(2)}
					<button onClick={() => dispatch(filternone())}>All</button>
				</li>
				<li>
					<button onClick={() => dispatch(filterdeals())}>Deals</button>
				</li>
				<li>
					<button onClick={() => dispatch(filtercars())}>
						Cars & Vehicles
					</button>
				</li>
				<li>
					<button onClick={() => dispatch(filterfurniture())}>Furniture</button>
				</li>
				<li>
					<button onClick={() => dispatch(filterelectronics())}>
						Electronics
					</button>
				</li>
				<li>
					<button onClick={() => dispatch(filterrealestate())}>
						Real Estate
					</button>
				</li>
			</ul>
		</div>
	);
}
