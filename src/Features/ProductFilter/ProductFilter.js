import { useDispatch } from 'react-redux';
import { filterdeals } from './productSlice';

export function ProductFilter() {
	const dispatch = useDispatch();
	// gets the dispatch function to dispatch our actions

	return (
		<div>
			<button onClick={() => dispatch(filterdeals())}>Deals</button>
		</div>
	);
}
