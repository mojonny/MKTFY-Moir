import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Landing Page for login/sign-up
import LoginPortal from './Pages/Login-Portal';

// Pages from sign-up modals
import Privacy from './Pages/Login-Portal/create-account-modal/password-modal/Privacy';
import TOC from './Pages/Login-Portal/create-account-modal/password-modal/TermsAndConditions';

//Layout used for main app pages
//import MainLayout from './Components/Layout';

// Homepage/ Dashboard after login
import Home from './Pages/Home';
import Product from './Pages/Home/Product';
import CreateListing from './Pages/Home/Create-Listing';
import Checkout from './Pages/Home/Product/Checkout';

//Pages accessed by settings dropdown
import AccountInfo from './Pages/Settings/AccountInfo';
import ChangePassword from './Pages/Settings/ChangePassword';
import MyPurchases from './Pages/Settings/MyPurchases';
import MyListings from './Pages/Settings/MyListings';
import PendingItems from './Pages/Settings/MyListings/Pending';

//Pages accessed by help links in dropdown
import FAQ from './Pages/Help/FAQ';
import ContactUs from './Pages/Help/FAQ';

//In case of 404
import NotFound from './Pages/NotFound';

import MainLayout from './Components/Layout';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />

				{/* Pages from sign-up modals */}
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/termsandservices" element={<TOC />} />

				<Route element={<MainLayout />}>
					<Route path="/home" element={<Home />} />
					{/* Linked to home page/dashboard */}
					<Route path="/product" element={<Product />} />
					<Route path="/createlisting" element={<CreateListing />} />

					{/* Linked to product listing */}
					<Route path="/checkout" element={<Checkout />} />

					{/* Links found in Settings dropdown */}
					<Route path="/account" element={<AccountInfo />} />
					<Route path="/changepassword" element={<ChangePassword />} />
					<Route path="/mypurchases" element={<MyPurchases />} />
					<Route path="/mylistings" element={<MyListings />} />

					{/* Linked to my listings */}
					<Route path="/pending" element={<PendingItems />} />

					{/* Links found under help in dropdown */}
					<Route path="/faq" element={<FAQ />} />
					<Route path="/contactus" element={<ContactUs />} />
				</Route>

				{/* In case of 404 */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}
