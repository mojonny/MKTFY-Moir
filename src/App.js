import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Landing Page for login/sign-up
import LoginPortal from './Pages/LoginPortal';

// Pages from sign-up modals
import Privacy from './Pages/Privacy';
import TOC from './Pages/TermsAndConditions';

//Layout used for main app pages
//Use the main layout by react-router v6
import MainLayout from './Components/Layout';

// Homepage/ Dashboard after login
import Home from './Pages/Home';
import Search from './Pages/Search';
import Deals from './Pages/Deals';
import Cars from './Pages/Cars';
import Furniture from './Pages/Furniture';
import Electronics from './Pages/Electronics';
import RealEstate from './Pages/RealEstate';
import AllListings from './Pages/AllListings';
import Product from './Pages/Product';
import CreateListing from './Pages/CreateListing';
import Checkout from './Pages/Checkout';
import PickUp from './Pages/PickUp';

//Pages accessed by settings dropdown
import AccountInfo from './Pages/AccountInfo';
import ChangePassword from './Pages/ChangePassword';
import MyPurchases from './Pages/MyPurchases';
import MyListings from './Pages/MyListings';
import PendingItems from './Pages/Pending';

//Pages accessed by help links in dropdown
import FAQ from './Pages/FAQ';
import ContactUs from './Pages/ContactUs';

//In case of 404
import NotFound from './Pages/NotFound';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/auth" element={<LoginPortal />} />

				{/* Pages from sign-up modals */}
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/termsandservices" element={<TOC />} />

				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/deals" element={<Deals />} />
					<Route path="/vehicles" element={<Cars />} />
					<Route path="/furniture" element={<Furniture />} />
					<Route path="/electronics" element={<Electronics />} />
					<Route path="/real_estate" element={<RealEstate />} />
					<Route path="/all" element={<AllListings />} />
					<Route path="/search" element={<Search />} />

					{/* Linked to home page/dashboard */}
					<Route path="/product/:id" element={<Product />} />
					<Route path="/createlisting" element={<CreateListing />} />
					<Route path="/pending/:id" element={<PendingItems />} />

					{/* Linked to product listing */}
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/pickup" element={<PickUp />} />

					{/* Links found in Settings dropdown */}
					<Route path="/account" element={<AccountInfo />} />
					<Route path="/changepassword" element={<ChangePassword />} />
					<Route path="/mypurchases" element={<MyPurchases />} />
					<Route path="/mylistings" element={<MyListings />} />

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
