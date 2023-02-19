import React from 'react';
import { useNavigate } from 'react-router-dom';

import Chat from '../../assets/Chat.svg';
import Arrow from '../../assets/Arrow.png';
import './index.css';

export default function Privacy() {
	let Title = 'MKTFY Privacy policy';

	const navigate = useNavigate();

	return (
		<div className="page-container">
			<div>
				<img alt="people chatting" className="chat-image" src={Chat} />
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-start',
				}}
			>
				<button className="back-button1">
					<img src={Arrow} alt="back" onClick={() => navigate(-1)} />
				</button>
				<div className="text-content">
					<h2 style={{ color: 'black' }}>{Title}</h2>
					<h3>
						These Terms of Service constitute a legally binding agreement made
						between you, whether personally or on behalf of an entity (“you”)
						and [business entity name] (“we,” “us” or “our”), concerning your
						access to and use of the [website name.com] website as well as any
						other media form, media channel, mobile website or mobile
						application related, linked, or otherwise connected thereto
						(collectively, the “Site”).
						<br />
						<br />
						You agree that by accessing the Site, you have read, understood, and
						agree to be bound by all of these Terms of Service. If you do not
						agree with all of these Terms of Service, then you are expressly
						prohibited from using the Site and you must discontinue use
						immediately.
						<br />
						<br />
						Supplemental Terms of Service or documents that may be posted on the
						Site from time to time are hereby expressly incorporated herein by
						reference. We reserve the right, in our sole discretion, to make
						changes or modifications to these Terms of Service at any time and
						for any reason.
						<br />
						<br />
						We will alert you about any changes by updating the “Last updated”
						date of these Terms of Service, and you waive any right to receive
						specific notice of each such change.
						<br />
						<br />
						It is your responsibility to periodically review these Terms of
						Service to stay informed of updates. You will be subject to, and
						will be deemed to have been made aware of and to have accepted, the
						changes in any revised Terms of Service by your continued use of the
						Site after the date such revised Terms of Service are posted. The
						information provided on the Site is not intended for distribution to
						or use by any person or entity in any jurisdiction or country where
						such distribution or use would be contrary to law or regulation or
						which would subject us to any registration requirement within such
						jurisdiction or country.
					</h3>
				</div>
			</div>
		</div>
	);
}
