import React from 'react';

import ChangePasswordForm from '../../Components/Forms/ChangePasswordForm';

import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function ChangePassword() {
	return (
		<>
			<div className="change-pw-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Account
					information{' '}
				</div>

				<ChangePasswordForm />
			</div>
		</>
	);
}
