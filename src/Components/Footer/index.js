import React from 'react';
import altLogo from '../../assets/altLogo.png';
import copyright from '../../assets/copyright.png';
import './index.css';

export default function Footer() {
	return (
		<div className="footer">
			<div>
				<img
					alt="altLogo"
					src={altLogo}
					style={{
						position: 'absolute',
						left: '250px',
						top: '160px',
					}}
				/>

				<div className="side-msg">
					Here at MKTFY we are human centric. We believe the stuff we buy, share
					and give are the backbone of our society — and we hope to ensure that
					we do this in a conscious way.
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '5px',
					position: 'absolute',
					width: '42px',
					height: '255px',
					left: '700px',
					top: '220px',
					color: '#ffffff',
				}}
			>
				Title
				<n />
				Tab
				<n />
				Tab
				<n />
				Tab
				<n />
				Tab
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '5px',
					position: 'absolute',
					width: '100px',
					height: '255px',
					left: '850px',
					top: '220px',
					color: '#ffffff',
				}}
			>
				Title
				<n />
				Contact us
				<n />
				Tab
				<n />
				Tab
				<n />
				Tab
			</div>
			<img
				alt="copyright"
				src={copyright}
				style={{
					position: 'absolute',
					width: '961px',
					height: '29px',
					left: '480px',
					bottom: '50px',
					objectFit: 'contain',
					filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
				}}
			/>
		</div>
	);
}
