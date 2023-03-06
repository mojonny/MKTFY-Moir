import React from 'react';
import { useLottie } from 'lottie-react';
import successAnimation from './successAnimation.json';

import './index.css';

export default function Success({ title }) {
	// const [createAccount, setCreateAccount] = useState(false);
	const options = {
		animationData: successAnimation,
		loop: true,
	};

	const { View } = useLottie(options);
	return (
		<div className="success-layout">
			{title ? (
				<h1 style={{ paddingBottom: '400px' }} className="animation">
					{title}
				</h1>
			) : (
				''
			)}
			<div className="animation">{View}</div>
		</div>
	);
}
