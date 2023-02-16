import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

import './index.css';

export default function MainLayout() {
	return (
		<div className="Main-layoutBG">
			<nav>
				<Header />
			</nav>

			<Outlet />
		</div>
	);
}
