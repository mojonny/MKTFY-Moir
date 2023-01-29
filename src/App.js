import './App.css';
import LoginPortal from './Components/Pages/Login-Portal/login-portal.component';
import Home from './Components/Pages/Home/Home';
import Success from './Components/Pages/Success/Success.component';
import Privacy from './Components/Pages/TOC and Privacy Policies/Privacy.component';
import TOC from './Components/Pages/TOC/';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />
				<Route path="/home" element={<Home />} />
				<Route path="/success" element={<Success />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/termsandservices" element={<TOC />} />
			</Routes>
		</div>
	);
}

export default App;
