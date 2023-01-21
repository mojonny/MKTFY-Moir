import logo from '../../assets/Clouds.png';
import { useNavigate } from 'react-router-dom';
import './login-portal.styles.css';

function LoginPortal() {
	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate('/login');
	};

	const navigateToCreateAccount = () => {
		navigate('/create');
	};

	return (
		<div className="Login-Portal">
			<div className="intro-container">
				<img src={logo} className="logo" alt="logo" />
				<button className="login-button" onClick={navigateToLogin}>
					Login
				</button>
				<button
					className="createPassword-button"
					onClick={navigateToCreateAccount}
				>
					Create account
				</button>
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
