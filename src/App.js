import './App.css';
import LoginPortal from './Components/Pages/Login-Portal/login-portal.component';
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
