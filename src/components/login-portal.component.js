import logo from '../assets/MKTFYlogo.png';
import './login-portal.styles.css';

function LoginPortal() {
	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />
				<button className="login-button">Login</button>
				<button className="createPassword-button">Create account</button>
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

export default LoginPortal;
