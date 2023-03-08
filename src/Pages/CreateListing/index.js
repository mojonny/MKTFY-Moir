import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import { Counter } from '../../Store/Counter';
import UploadImage from '../../Components/UploadImage';
import Success from '../../Components/Success';

import loadImg from '../../assets/LoadImg.svg';
import loadBigCam from '../../assets/Frame 123.png';
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

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<div className="create-listing-container">
				{/* <form onSubmit={handleSubmit}>
					<Counter />
				</form> */}

				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>

				<div onSubmit={handleSubmit}>
					<div className="create-listing-landing">
						<div className="listing-image-box">
							<div>
								<UploadImage className="main-listing-img" src={loadImg} />
							</div>

							<div className="mini-image-box">
								<UploadImage className="load-pic" src={loadBigCam} />
								<UploadImage className="load-pic" src={loadBigCam} />
								<UploadImage className="load-pic" src={loadBigCam} />
								<UploadImage className="load-pic" src={loadBigCam} />
							</div>
						</div>

						<div className="listing-info-container">
							<div>
								<label>Product name</label>
								<br />

								<input
									className="create-listing-categories"
									placeholder="Insert product name"
									required
								/>
							</div>
							<div>
								<label>Description</label>
								<br />
								<textarea
									className="description-text-area"
									placeholder="Insert you description"
									required
								/>
							</div>
							<div>
								<label>Category</label>
								<br />
								<div>
									<select required className="create-listing-categories">
										<option value="" disabled selected hidden>
											Choose your Category
										</option>
										<option>All</option>
										<option>Cars & Vehicles</option>
										<option>Furniture</option>
										<option>Electronics</option>
										<option>Real estate</option>
									</select>
								</div>
							</div>
							<div className="condition-price-box">
								<div>
									<label>Condition</label>
									<br />
									<select className="condition-input" required>
										<option value="" disabled selected hidden>
											Select condition
										</option>
										<option>New - unused</option>
										<option>Used - excellent</option>
										<option>Used - good</option>
										<option>Used - fair</option>
										<option>Used - my trash=your treasure?</option>
									</select>
								</div>
								<div>
									<label>Price</label>
									<br />
									<input
										className="price-input"
										placeholder="Type the price"
										required
									/>
								</div>
							</div>
							<div>
								<label>Address</label>
								<br />
								<input
									className="create-listing-categories"
									placeholder="Insert your address"
									required
								/>
							</div>

							<div>
								<label>City</label>
								<br />
								<div>
									<select className="create-listing-categories" required>
										<option value="" disabled selected hidden>
											Select your city
										</option>
										<option>Calgary</option>
										<option>Brooks</option>
										<option>Camrose</option>
										<option>Cold Lake</option>
										<option>Edmonton</option>
										<option>Fort McMurray</option>
										<option>Lacombe</option>
										<option>Leduc</option>
										<option>Lethbridge</option>
										<option>Medicine Hat</option>
										<option>Red Deer</option>
										<option>St. Albert</option>
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
				</div>
			</div>
		</>
	);
}
