import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Success from '../../Components/Success';

import removeImg from '../../assets/Closing X.svg';
import loadImg from '../../assets/LoadImg.svg';
import loadBigCam from '../../assets/Frame 123.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function PendingItems() {
	const [isLoading, setIsLoading] = useState(false);
	// const [enabled, setEnabled] = useState(true);

	// Info needed from backend:
	// listing id from params
	// Status: ACTIVE/COMPLETE(SOLD)/PENDING/CANCELLED
	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [category, setCategory] = useState('');
	const [condition, setCondition] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [status, setStatus] = useState('');

	console.log('status', status);

	//Create the arrays for calling the api and previewing what was selected
	const [images, setImages] = useState([]);
	const [imageIds, setImageIds] = useState([]);
	console.log('imageIds:', imageIds);

	const [showButton, setShowButton] = useState(true);
	const [showButton1, setShowButton1] = useState(true);
	const [showButton2, setShowButton2] = useState(true);
	const [showButton3, setShowButton3] = useState(true);
	const [showButton4, setShowButton4] = useState(true);
	const [showConfirmSoldButton, setShowConfirmSoldButton] = useState(false);
	const [showCancelListingButton, setShowCancelListingButton] = useState(false);
	const [showCancelSaleButton, setShowCancelSaleButton] = useState(false);
	const [showSaveButton, setShowSaveButton] = useState(false);

	//Show an alert if user cancels their listing
	const [showAlert, setShowAlert] = useState(false);

	const { id } = useParams();

	//Set up default images when the user hasn't picked any yet
	const placeholderImage = loadImg;
	const placeholderImage2 = loadBigCam;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const navigate = useNavigate();
	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};

	function filterByString(obj) {
		if (typeof obj === 'string') {
			return true;
		} else {
			return false;
		}
	}

	async function uploadImage() {
		const token = sessionStorage.getItem('accessToken');

		let newAddedImgs = images.filter((index) => index !== 'string');

		let oldImgArr = images.filter(filterByString);

		const arr1 = oldImgArr.map((index) =>
			index.replace(
				'https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/',
				''
			)
		);

		//Format the data for multiple image files
		let formData = new FormData();
		for (let i = 0; i < newAddedImgs.length; i++) {
			formData.append('file', newAddedImgs[i]);
		}

		let config = {
			method: 'post',
			url: 'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Upload',
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
			data: formData,
		};

		try {
			const response = await axios.request(config);
			const newImageIds = response.data;

			let arr2 = newImageIds.map((obj) => obj.id);
			let arr3 = arr1.concat(arr2);
			//PUT Request not removing old images, so I will just add new ones for now...
			setImageIds(arr3);

			console.log('Success! New images added:', response.data);

			updateListing(arr3);
		} catch (error) {
			console.log('ERROR: Unable to upload images:', error);
		}
	}

	function updateListing(imageIds) {
		const token = sessionStorage.getItem('accessToken');

		axios
			.put(
				'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product',
				{
					id: id,
					productName: productName,
					description: description,
					price: price,
					category: category,
					condition: condition,
					address: address,
					city: city,
					images: imageIds,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				console.log('SUCCESS: Listing updated!', res.data);
				navigateHome();
			})
			.catch((error) => console.log('ERROR: Unable to update listing:', error));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		uploadImage(images);
	};

	function onImageChange(e) {
		e.preventDefault();
		if (images.length < 5) {
			setImages([...images, ...e.target.files]);
		} else if (images.length > 5) {
			return window.alert('Sorry, there is a 5 image limit');
		}
	}

	function deleteFile(e) {
		const s = images.filter((index) => index !== e);
		setImages(s);
		console.log('image deleted:', s);
	}

	useEffect(() => {
		if (images.length === 0) {
			setShowButton(true);
			setShowButton1(true);
			setShowButton2(true);
			setShowButton3(true);
			setShowButton4(true);
		} else if (images.length === 1) {
			setShowButton(false);
			setShowButton1(true);
			setShowButton2(true);
			setShowButton3(true);
			setShowButton4(true);
		} else if (images.length === 2) {
			setShowButton(false);
			setShowButton1(false);
			setShowButton2(true);
			setShowButton3(true);
			setShowButton4(true);
		} else if (images.length === 3) {
			setShowButton(false);
			setShowButton1(false);
			setShowButton2(false);
			setShowButton3(true);
			setShowButton4(true);
		} else if (images.length === 4) {
			setShowButton(false);
			setShowButton1(false);
			setShowButton2(false);
			setShowButton3(false);
			setShowButton4(true);
		} else if (images.length >= 5) {
			setShowButton(false);
			setShowButton1(false);
			setShowButton2(false);
			setShowButton3(false);
			setShowButton4(false);
		}
	}, [images.length]);

	useEffect(() => {
		if (status === 'COMPLETE') {
			setShowConfirmSoldButton(false);
			setShowCancelListingButton(false);
			setShowCancelSaleButton(false);
			setShowSaveButton(false);
		} else if (status === 'PENDING') {
			setShowConfirmSoldButton(true);
			setShowCancelListingButton(false);
			setShowCancelSaleButton(true);
			setShowSaveButton(false);
		} else if (status === 'ACTIVE') {
			setShowConfirmSoldButton(false);
			setShowCancelListingButton(true);
			setShowCancelSaleButton(false);
			setShowSaveButton(true);
		} else if (status === 'CANCELLED') {
			setShowConfirmSoldButton(false);
			setShowCancelListingButton(false);
			setShowCancelSaleButton(false);
			setShowSaveButton(true);
		}
	}, [status]);

	useEffect(() => {
		async function getProduct() {
			const token = sessionStorage.getItem('accessToken');
			const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/${id}`;

			axios
				.get(url, { headers: { Authorization: `Bearer ${token}` } })
				.then((res) => {
					setProductName(res.data.productName);
					setPrice(res.data.price);
					setCategory(res.data.category);
					setCondition(res.data.condition);
					setDescription(res.data.description);
					setAddress(res.data.address);
					setStatus(res.data.status);
					setCity(res.data.city);
					setImages(res.data.images);
					return console.log('SUCCESS: Your listing was found!', res.data);
				})
				.catch((error) => {
					console.log('ERROR: Cannot find listing', error);
				});
		}
		getProduct();
	}, [id]);

	function Confirm() {
		const token = sessionStorage.getItem('accessToken');
		const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/complete/${id}`;

		axios
			.put(url, { headers: { Authorization: `Bearer ${token}` } })
			.then((res) => {
				console.log('SUCCESS: Your listing was SOLD!', res.data);
				navigateHome();
			})
			.catch((error) => {
				console.log('ERROR: Your listing was not changed', error);
			});
	}

	function Cancel() {
		const token = sessionStorage.getItem('accessToken');
		const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/cancel/${id}`;

		axios
			.put(url, { headers: { Authorization: `Bearer ${token}` } })
			.then((res) => {
				console.log(
					'SUCCESS: Your listing was cancelled. It is no longer active.',
					res.data
				);
				navigateHome();
			})
			.catch((error) => {
				console.log('ERROR: Your listing was not changed', error);
			});
	}

	function CancelSale() {
		const token = sessionStorage.getItem('accessToken');
		const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/cancelsale/${id}`;

		axios
			.put(url, { headers: { Authorization: `Bearer ${token}` } })
			.then((res) => {
				console.log(
					'SUCCESS: Your listing was cancelled. It is no longer active.',
					res.data
				);
				navigateHome();
			})
			.catch((error) => {
				console.log('ERROR: Your listing was not changed', error);
			});
	}

	function handleSrc(i) {
		let src;
		if (typeof images[i] === 'object') {
			src = URL.createObjectURL(images[i]);
		} else if (typeof images[i] === 'string') {
			src = images[i];
		}
		return src;
	}

	return (
		<>
			<div className="create-listing-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> My listings{' '}
					<img src={breadArrow} alt="path-arrow" /> Product
				</div>
				<h1> My listing</h1>
				<div onSubmit={handleSubmit}>
					<div className="create-listing-landing">
						<div className="listing-image-box">
							<>
								<label>
									{/*Load image button */}
									<input
										type="file"
										multiple
										accept="image/*"
										onChange={onImageChange}
										style={{
											visibility: 'hidden',
											width: '0',
											height: '0',
										}}
									/>
									<>
										<img
											className="main-listing-img"
											src={handleSrc(0) ? handleSrc(0) : placeholderImage}
											alt="preview"
											onError={onImageError}
										/>

										<button
											type="button"
											index="0"
											onClick={() => deleteFile(images[0])}
											className="replace-img-button"
											hidden={showButton}
										>
											<img
												className="replace-img"
												alt="close-button"
												src={removeImg}
											/>
										</button>
									</>

									{/* Mini-preview box */}
									<div className="mini-image-box">
										<>
											<img
												className="load-pic"
												src={handleSrc(1) ? handleSrc(1) : placeholderImage2}
												alt="preview"
												onError={onImageError}
											/>

											<button
												type="button"
												index="1"
												onClick={() => deleteFile(images[1])}
												className="mini-replace-img-button"
												hidden={showButton1}
											>
												<img alt="close-button" src={removeImg} />
											</button>
										</>
										<>
											<img
												className="load-pic"
												src={handleSrc(2) ? handleSrc(2) : placeholderImage2}
												alt="preview"
												onError={onImageError}
											/>

											<button
												type="button"
												index="2"
												onClick={() => deleteFile(images[2])}
												className="mini-replace-img-button"
												hidden={showButton2}
											>
												<img alt="close-button" src={removeImg} />
											</button>
										</>

										<>
											<img
												className="load-pic"
												src={handleSrc(3) ? handleSrc(3) : placeholderImage2}
												alt="preview"
												onError={onImageError}
											/>

											<button
												type="button"
												index="3"
												onClick={() => deleteFile(images[3])}
												className="mini-replace-img-button"
												hidden={showButton3}
											>
												<img alt="close-button" src={removeImg} />
											</button>
										</>

										<>
											<img
												className="load-pic"
												src={handleSrc(4) ? handleSrc(4) : placeholderImage2}
												alt="preview"
												onError={onImageError}
											/>

											<button
												type="button"
												index="4"
												onClick={() => deleteFile(images[4])}
												className="mini-replace-img-button"
												hidden={showButton4}
											>
												<img alt="close-button" src={removeImg} />
											</button>
										</>
									</div>
								</label>
							</>
						</div>

						<div className="listing-info-container">
							<div>
								<label>Product name</label>
								<br />

								<input
									placeholder="Insert product name"
									className="create-listing-categories"
									value={productName}
									onChange={(e) => setProductName(e.target.value)}
								/>
							</div>
							<div>
								<label>Description</label>
								<br />
								<textarea
									className="description-text-area"
									placeholder="Insert you description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
							<div>
								<label>Category</label>
								<br />
								<div>
									<select
										className="create-listing-categories"
										value={category}
										onChange={(e) => setCategory(e.target.value)}
									>
										<option value="">Choose your Category</option>
										<option value="VEHICLES">Cars & Vehicles</option>
										<option value="FURNITURE">Furniture</option>
										<option value="ELECTRONICS">Electronics</option>
										<option value="REAL_ESTATE">Real estate</option>
									</select>
								</div>
							</div>
							<div className="condition-price-box">
								<div>
									<label>Condition</label>
									<br />
									<select
										className="condition-input"
										value={condition}
										onChange={(e) => setCondition(e.target.value)}
									>
										<option value="">Select condition</option>
										<option value="NEW">NEW</option>
										<option value="USED">USED</option>
									</select>
								</div>
								<div>
									<label>Price</label>
									<br />
									<input
										className="price-input"
										placeholder="Type the price"
										value={price}
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
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>

							<div>
								<label>City</label>
								<br />
								<div>
									<select
										className="create-listing-categories"
										value={city}
										onChange={(e) => setCity(e.target.value)}
									>
										<option value="">Select your city</option>
										<option value="Calgary">Calgary</option>
										<option value="Brooks">Brooks</option>
										<option value="Camrose">Camrose</option>
										<option value="Cold Lake">Cold Lake</option>
										<option value="Edmonton">Edmonton</option>
										<option value="Fort McMurray">Fort McMurray</option>
										<option value="Lacombe">Lacombe</option>
										<option value="Leduc">Leduc</option>
										<option value="Lethbridge">Lethbridge</option>
										<option value="Medicine Hat">Medicine Hat</option>
										<option value="Red Deer">Red Deer</option>
										<option value="St. Albert">St. Albert</option>
									</select>
								</div>
							</div>
							{showSaveButton && (
								<button onClick={handleSubmit} className="save-changes-button">
									Save changes
								</button>
							)}

							{showConfirmSoldButton && (
								<button onClick={() => Confirm()} className="post-button">
									Confirm sold
								</button>
							)}

							{showCancelListingButton && (
								<button
									onClick={() => setShowAlert(true)}
									disabled={isLoading}
									className="cancel-listing-button"
									//make it unavailable but not complete
								>
									Cancel listing
								</button>
							)}

							{showCancelSaleButton && (
								<button
									onClick={() => CancelSale()}
									disabled={isLoading}
									className="cancel-listing-button"
									//make it available
								>
									Cancel Sale
								</button>
							)}

							{showAlert && (
								<div className="darkAlert" onClick={() => setShowAlert(false)}>
									<div
										className="cancel-alert"
										onClick={(e) => e.stopPropagation()}
									>
										<h3>Heads up!</h3>
										<p>You are about to cancel your listing. Are you sure?</p>
										<div className="alert-buttons-container">
											<button
												className="cancel-alert-button"
												onClick={() => setShowAlert(false)}
											>
												Cancel
											</button>
											<button
												className="confirm-alert-button"
												onClick={() => Cancel()}
											>
												Yes
											</button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{isLoading ? <Success /> : null}
		</>
	);
}
