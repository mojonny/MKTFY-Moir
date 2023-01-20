import logo from './assets/MKTFYlogo.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />
				<button className="login">Login</button>
				<button className="createPassword">Create account</button>
				<div className="bottom-text">
					Find out more about us!
					<a href="www.google.ca" className="site-link">
						Visit our website
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
