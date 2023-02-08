import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPortal from './Pages/Login-Portal';
import Home from './Pages/Home';
import Privacy from './Pages/Login-Portal/Privacy';
import TOC from './Pages/Login-Portal/TOC';

import './App.css';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />
				<Route path="/home" element={<Home />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/termsandservices" element={<TOC />} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</div>
	);
}
