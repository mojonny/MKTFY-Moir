import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Success from '../../Components/Success';

import loadImg from '../../assets/LoadImg.svg';
import loadBigCam from '../../assets/bigCamera.svg';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function CreateListing() {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};

	return (
		<>
			<div className="create-listing-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>
				<div>
					<form>
						<div className="create-listing-landing">
							<div className="listing-image-box">
								<img
									src={loadImg}
									alt="main-listing-pic"
									className="main-listing-img"
								/>

								<div className="mini-image-box">
									<img src={loadBigCam} className="load-pic" alt="upload-pic" />
									<img src={loadBigCam} className="load-pic" alt="upload-pic" />
									<img src={loadBigCam} className="load-pic" alt="upload-pic" />
									<img src={loadBigCam} className="load-pic" alt="upload-pic" />
								</div>
							</div>

							<div className="listing-info-container">
								<div>
									<div>
										<label>Product name</label>
										<br />
										<input
											className="account-input"
											placeholder="Insert product name"
										/>
									</div>
									<div>
										<label>Description</label>
										<br />
										<textarea
											className="description-text-area"
											placeholder="Insert you description"
										></textarea>
									</div>
									<div>
										<label>Category</label>
										<br />
										<select className="create-listing-categories">
											<option>All</option>
											<option>Cars & Vehicles</option>
											<option>Furniture</option>
											<option>Electronics</option>
											<option>Real estate</option>
										</select>
									</div>
									<div className="condition-price-box">
										<div>
											<label>Condition</label>
											<br />
											<select className="condition-input">
												<option>New - unused</option>
												<option>Used - excellent</option>
												<option>Used - good</option>
												<option>Used - fair</option>
												<option>Used - still functional</option>
											</select>
										</div>
										<div>
											<label>Price</label>
											<br />
											<input
												className="price-input"
												placeholder="type the price"
											/>
										</div>
									</div>
								</div>

								<div>
									<label>Address</label>
									<br />
									<input
										className="account-input"
										placeholder="123 1st Street SW"
									/>
								</div>
								<div>
									<div>
										<label>City</label>
										<br />
										<select className="create-listing-categories">
											<option>Calgary</option>
											<option>Brooks</option>
											<option>Camrose</option>
										</select>
									</div>
								</div>

								<button
									onClick={navigateHome}
									disabled={isLoading}
									className="post-button"
								>
									{isLoading ? <Success /> : navigateHome}
									Post your offer
								</button>

								<button
									onClick={navigateHome}
									disabled={isLoading}
									className="cancel-listing-button"
								>
									{isLoading ? <Success /> : navigateHome}
									Cancel
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
