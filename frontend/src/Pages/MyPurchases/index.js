import React from 'react';

import purchaseImage from '../../assets/toy.svg';
import purchaseImage1 from '../../assets/xmas.svg';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function MyPurchases() {
	const Items = '2 items';

	return (
		<>
			<div className="purchase-container">
				<div className="purchase-labels">
					<div>
						Deals for you <img src={breadArrow} alt="path-arrow" /> My Purchases
					</div>
					<h1> My purchases</h1>
					<p>{Items}</p>
				</div>

				<div className="purchases-landing">
					<div className="purchase-item-box">
						<img
							src={purchaseImage}
							alt="purchase-pic"
							className="purchase-pic"
						/>

						<div className="purchase-item-detail">
							<p> September 07,2020</p>
							<h4> Pearl The Cat: Toy edition </h4>
							<div className="price-info1">
								<h4
									style={{
										color: '#560f9f',

										margin: '0px',
									}}
								>
									$340.00
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="purchases-landing">
					<div className="purchase-item-box">
						<img
							src={purchaseImage1}
							alt="checkout-pic"
							className="purchase-pic"
						/>

						<div className="purchase-item-detail">
							<p> September 07,2020</p>
							<h4> Pearl The Cat: Toy edition </h4>
							<div className="price-info1">
								<h4
									style={{
										color: '#560f9f',

										margin: '0px',
									}}
								>
									$340.00
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
