import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';

import { AuthenticationGuard } from './Components/Auth0/AuthenticationGuard';
import LoginPortal from './Pages/Login-Portal';
import Home from './Pages/Home';
import Success from './Components/Success';
import Privacy from './Pages/Login-Portal/Privacy';
import TOC from './Pages/Login-Portal/TOC';
import Product from './Pages/Home/Product';
import Profile from './Components/Auth0/Profile';

export default function App() {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className="page-layout">
				<Success />
			</div>
		);
	}

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />
				<Route
					path="/profile"
					element={<AuthenticationGuard component={Profile} />}
				/>
				<Route path="/home" element={<Home />} />

				<Route path="/privacy" element={<Privacy />} />
				<Route path="/termsandservices" element={<TOC />} />
				<Route
					path="/product"
					element={<AuthenticationGuard component={Product} />}
				/>
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</div>
	);
}
