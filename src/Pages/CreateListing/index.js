import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Success from '../../Components/Success';

import removeImg from '../../assets/Closing X.svg';
import loadImg from '../../assets/LoadImg.svg';
import loadBigCam from '../../assets/Frame 123.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function CreateListing() {
	const [isLoading, setIsLoading] = useState(false);
	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [category, setCategory] = useState('');
	const [condition, setCondition] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');

	//A way to upload the images
	const [images, setImages] = useState([]);
	console.log('images:', images);
	const [imageIds, setImageIds] = useState([]);
	console.log('imageIds:', imageIds);

	const [showButton, setShowButton] = useState(true);
	const [showButton1, setShowButton1] = useState(true);
	const [showButton2, setShowButton2] = useState(true);
	const [showButton3, setShowButton3] = useState(true);
	const [showButton4, setShowButton4] = useState(true);

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

	async function uploadImage() {
		const token = sessionStorage.getItem('accessToken');

		let formData = new FormData();
		for (let i = 0; i < images.length; i++) {
			formData.append('file', images[i]);
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
			setImageIds(response.data);
			console.log('SUCCESS: Image(s) added!', response.data);
			return createListing();
		} catch (error) {
			console.log('ERROR: Unable to upload images:', error);
		}
	}

	function createListing() {
		setTimeout(() => {
			const token = sessionStorage.getItem('accessToken');

			let Arr = imageIds;
			const map1 = Arr.map((obj) => obj.id);
			console.log('Image Id Array:', map1);

			if (map1.length) {
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
							images: map1,
						},
						{ headers: { Authorization: `Bearer ${token}` } }
					)
					.then((res) => {
						console.log('SUCCESS: Listing created!', res.data);
					})
					.catch((error) =>
						console.log('ERROR: Unable to create listing:', error)
					);
			}
		}, 2000);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		uploadImage();
	};

	function onImageChange(e) {
		e.preventDefault();
		if (images.length < 5) {
			setImages([...images, ...e.target.files]);
		} else if (images.length > 5) {
			return window.alert('Sorry, there is a 5 image limit');
		}

		console.log('images length', images.length);
	}

	function deleteFile(e) {
		const s = images.filter((index) => index !== e);
		setImages(s);
		console.log(s);
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
		} else if (images.length === 5) {
			setShowButton(false);
			setShowButton1(false);
			setShowButton2(false);
			setShowButton3(false);
			setShowButton4(false);
		}
	}, [images.length]);

	return (
		<>
			<div className="create-listing-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>

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
											src={
												images[0]
													? URL.createObjectURL(images[0])
													: placeholderImage
											}
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
												src={
													images[1]
														? URL.createObjectURL(images[1])
														: placeholderImage2
												}
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
												src={
													images[2]
														? URL.createObjectURL(images[2])
														: placeholderImage2
												}
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
												src={
													images[3]
														? URL.createObjectURL(images[3])
														: placeholderImage2
												}
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
												src={
													images[4]
														? URL.createObjectURL(images[4])
														: placeholderImage2
												}
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
										<option>Choose your Category</option>
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
										name={condition}
										defaultValue="Select condition"
										onChange={(e) => setCondition(e.target.value)}
									>
										<option>Select condition</option>
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
										defaultValue="Select your city"
									>
										<option>Select your city</option>
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
