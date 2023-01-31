import './App.css';
import LoginPortal from './Pages/Login-Portal';
import Home from './Pages/Home';
import Success from './Components/Success';
import Privacy from './Pages/Login-Portal/Privacy';
import TOC from './Pages/Login-Portal/TOC';
import Product from './Pages/Home/Product';

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
				<Route path="/product" element={<Product />} />
			</Routes>
		</div>
	);
}

export default App;
