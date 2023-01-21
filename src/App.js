import './App.css';
import LoginPortal from './components/login-portal/login-portal.component';
import CreateAccount from './components/create-account/create-account.component';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPortal />} />
				<Route path="/create" element={<CreateAccount />} />
			</Routes>
		</div>
	);
}

export default App;
