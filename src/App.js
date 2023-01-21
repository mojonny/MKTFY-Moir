import './App.css';
import LoginPortal from './components/login-portal/login-portal.component';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />
			</Routes>
		</div>
	);
}

export default App;
