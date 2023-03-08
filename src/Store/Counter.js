import { useSelector, useDispatch } from 'react-redux';
import { decrease, addImg } from './counterSlice';

export function Counter() {
	const count = useSelector((state) => state.counter.value);
	// in our slice, we provided the name property as 'counter'
	// and the initialState with a 'value' property
	// thus to read our data, we need useSelector to return the state.counter.value

	const dispatch = useDispatch();
	// gets the dispatch function to dispatch our actions

	return (
		<div>
			<button onClick={() => dispatch(addImg())}>Add Image</button>
			<p>{count}</p>
			<button onClick={() => dispatch(decrease())}>Decrease</button>
		</div>
	);
}
