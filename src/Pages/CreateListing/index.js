import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//import { Counter } from '../../Store/Counter';
//import UploadImage from '../../Components/UploadImage';
import Success from '../../Components/Success';
// import AddListing from './AddListing';
// import ListingList from './ListingList';

//import loadImg from '../../assets/LoadImg.svg';
//import loadBigCam from '../../assets/Frame 123.png';
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
	const [images, setImages] = useState(null);

	const navigate = useNavigate();

	const navigateHome = () => {
		setIsLoading(true);
		setTimeout(() => {
			navigate('/home');
			setIsLoading(false);
		}, 2000);
	};

	async function uploadImage() {
		let token = sessionStorage.getItem('accessToken');
		let formData = new FormData();
		formData.append('file', images[0]);

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
			sessionStorage.setItem('images', JSON.stringify(response.data));
			console.log('SUCCESS: Image(s) added!', JSON.stringify(response.data));
			return createListing();
		} catch (error) {
			console.log('ERROR: Unable to upload images:', error);
		}
	}

	function createListing() {
		let token = sessionStorage.getItem('accessToken');

		let imageID = sessionStorage.getItem('images');
		let imageUploadId = JSON.parse(imageID)[0].id;
		console.log(imageUploadId);

		if (images !== null) {
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
						images: imageUploadId,
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
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		uploadImage();
	};

	//handler function: accessing files through the event object then storing in our state
	function onImageChange(e) {
		setImages([...e.target.files]);
	}

	return (
		<>
			<div className="create-listing-container">
				<>
					<label>
						<input type="file" accept="image/*" onChange={onImageChange} />
					</label>
				</>

				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>

				<div onSubmit={handleSubmit}>
					<div className="create-listing-landing">
						{/* <div className="listing-image-box">
							<div>
								<UploadImage className="main-listing-img" src={loadImg} />
							</div>

							<div className="mini-image-box">
								<UploadImage className="load-pic" src={loadBigCam} />
								<UploadImage className="load-pic" src={loadBigCam} />
								<UploadImage className="load-pic" src={loadBigCam} />
								<UploadImage className="load-pic" src={loadBigCam} />
							</div>
						</div> */}

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
										defaultValue="Choose your Category"
										onChange={(e) => setCategory(e.target.value)}
									>
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
