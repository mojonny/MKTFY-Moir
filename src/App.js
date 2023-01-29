import './App.css';
import LoginPortal from './Components/Pages/Login-Portal/login-portal.component';
import Home from './Components/Pages/Home/Home';
import Success from './Components/Pages/Success/Success.component';
import Privacy from './Components/Pages/Privacy/Privacy.component';
import TOC from './Components/Pages/TOC/TOC.component';
import Product from './Components/Pages/Product/Product.component';

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
