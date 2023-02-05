import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0ProviderWithNavigate } from './Components/Auth0/ProviderWithNavigate';

import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0ProviderWithNavigate>
				<App />
			</Auth0ProviderWithNavigate>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
