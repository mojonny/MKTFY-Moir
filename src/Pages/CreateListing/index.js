import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//import { Counter } from '../../Store/Counter';
import UploadImage from '../../Components/UploadImage';
import Success from '../../Components/Success';
// import AddListing from './AddListing';
// import ListingList from './ListingList';

import loadImg from '../../assets/LoadImg.svg';
import loadBigCam from '../../assets/Frame 123.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function CreateListing() {
	const [isLoading, setIsLoading] = useState(false);

	const [productName, setProductName] = useState(false);
	const [description, setDescription] = useState(false);
	const [price, setPrice] = useState(false);
	const [category, setCategory] = useState(false);
	const [condition, setCondition] = useState(false);
	const [address, setAddress] = useState(false);
	const [city, setCity] = useState(false);
	//const [images, setImages] = useState(false);

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
		const token = sessionStorage.getItem('accessToken');

		axios
			.post(
				'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product',
				{
					productName: productName,
					description: description,
					price: price,
					category: category,
					condition: condition,
					address: address,
					city: city,
					images: ['84f7bfc9-c182-475c-8790-2210f58e4cef'],
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				console.log('SUCCESS: Listing created!', res);
				navigateHome();
			})
			.catch((error) => console.log('ERROR: Unable to create listing:', error));
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
									placeholder="Insert product name"
									className="create-listing-categories"
									name={productName}
									onChange={(e) => setProductName(e.target.value)}
								/>
							</div>
							<div>
								<label>Description</label>
								<br />
								<textarea
									className="description-text-area"
									placeholder="Insert you description"
									name={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
							<div>
								<label>Category</label>
								<br />
								<div>
									<select
										required
										className="create-listing-categories"
										name={category}
										onChange={(e) => setCategory(e.target.value)}
									>
										<option value="" selected hidden>
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
									<select
										className="condition-input"
										name={condition}
										onChange={(e) => setCondition(e.target.value)}
									>
										<option value="" selected hidden>
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
										name={price}
										onChange={(e) => setPrice(e.target.value)}
									/>
								</div>
							</div>
							<div>
								<label>Address</label>
								<br />
								<input
									className="create-listing-categories"
									placeholder="Insert your address"
									name={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>

							<div>
								<label>City</label>
								<br />
								<div>
									<select
										className="create-listing-categories"
										name={city}
										onChange={(e) => setCity(e.target.value)}
									>
										<option value="" selected hidden>
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
								onClick={handleSubmit}
								disabled={isLoading}
								className="post-button"
							>
								Post your offer
							</button>

							<button
								onClick={navigateHome}
								disabled={isLoading}
								className="cancel-listing-button"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
			{isLoading ? <Success /> : null}
		</>
	);
}
