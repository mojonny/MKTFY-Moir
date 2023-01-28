import './App.css';
import LoginPortal from './Components/Pages/Login-Portal/login-portal.component';
import Home from './Components/Pages/Home/Home';
import Success from './Components/Pages/Success/Success.component';
import PrivacyAndTerms from './Components/Pages/TOC and Privacy Policies/PrivacyAndTerms.component';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />
				<Route path="/home" element={<Home />} />
				<Route path="/success" element={<Success />} />
				<Route path="/privacy" element={<PrivacyAndTerms />} />
				<Route path="/termsandservices" element={<PrivacyAndTerms />} />
			</Routes>
		</div>
	);
}

export default App;
