import React from 'react';

import loadImg from '../../assets/LoadImg.svg';
import loadBigCam from '../../assets/bigCamera.svg';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function CreateListing() {
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
											className="account-input"
											placeholder="Insert you description"
										></textarea>
									</div>
									<div>
										<label>Category</label>
										<br />
										<select>
											<option>All</option>
											<option>Cars & Vehicles</option>
											<option>Furniture</option>
											<option>Electronics</option>
											<option>Real estate</option>
										</select>
									</div>
									<div>
										<label>Condition</label>
										<br />
										<select>
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
											className="account-input"
											placeholder="type the price"
										/>
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
								<div className="city-province">
									<div>
										<label>City</label>
										<br />
										<select>
											<option>Calgary</option>
											<option>Brooks</option>
											<option>Camrose</option>
										</select>
									</div>
								</div>

								<button className="post-button">Post your offer</button>

								<button className="cancel-listing-button">Cancel</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
