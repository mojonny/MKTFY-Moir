import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { getDealsAsync } from '../../Features/Deals/dealsSlice';

import defaultImg from '../../assets/LP.png';
import upDownArrow from '../../assets/UpDownArrow.png';
import listingIcon from '../../assets/listingTag.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function Product() {
	const [sellerId, setSellerId] = useState('');
	const [productName, setProductName] = useState('');
	const [price, setPrice] = useState('');
	const [condition, setCondition] = useState('');
	const [description, setDescription] = useState('');
	const [sellerFirstName, setSellerFirstName] = useState('');
	const [sellerLastName, setSellerLastName] = useState('');
	const [listingNumber, setListingNumber] = useState(0);
	const [images, setImages] = useState([]);
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');

	const [showCondition, setShowCondition] = useState(false);

	const [mainImage, setMainImage] = useState(images[0]);

	const dispatch = useDispatch();
	const { id } = useParams();
	sessionStorage.setItem('listingId', id);

	Storage.prototype.setObj = function (key, obj) {
		return this.setItem(key, JSON.stringify(obj));
	};

	//Scrolls through vertical image carousel
	const ScrollDown = () => {
		document.getElementById('container').scrollBy({
			top: -165,
			behavior: 'smooth',
		});
	};

	const ScrollUp = () => {
		document.getElementById('container').scrollBy({
			top: 165,
			behavior: 'smooth',
		});
	};

	const navigate = useNavigate();
	const navigateToCheckout = () => {
		if (images.length) {
			sessionStorage.setObj('productImage', images[0]);
		}

		sessionStorage.setItem('productName', productName);
		sessionStorage.setItem('productPrice', price);
		sessionStorage.setItem('sellerId', sellerId);
		sessionStorage.setItem('sellerFirstName', sellerFirstName);
		sessionStorage.setItem('sellerLastName', sellerLastName);
		sessionStorage.setItem('sellerPhone', phone);
		sessionStorage.setItem('itemAddress', address);
		sessionStorage.setItem('sellerCity', city);
		return navigate('/checkout');
	};

	useEffect(() => {
		//Check if user exists
		async function getProduct() {
			const token = sessionStorage.getItem('accessToken');
			const url = `http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/Product/${id}`;

			axios
				.get(url, { headers: { Authorization: `Bearer ${token}` } })
				.then((res) => {
					setSellerId(res.data.sellerProfile.id);
					setProductName(res.data.productName);
					setPrice(res.data.price);
					setCondition(res.data.condition);
					setDescription(res.data.description);
					setSellerFirstName(res.data.sellerProfile.firstName);
					setSellerLastName(res.data.sellerProfile.lastName);
					setListingNumber(res.data.sellerListingCount);
					setAddress(res.data.address);
					setPhone(res.data.sellerProfile.phone);
					setCity(res.data.sellerProfile.city);
					setImages(res.data.images);
					setMainImage(res.data.images[0]);
					return console.log('SUCCESS: Listing found!', res.data);
				})
				.catch((error) => {
					console.log('ERROR: User does not exist in db', error);
				});
		}
		getProduct();
	}, [id]);

	useEffect(() => {
		if (condition === 'NEW') {
			setShowCondition(true);
		} else if (condition === 'USED') {
			setShowCondition(false);
		}
	}, [condition]);

	const placeholderImage = defaultImg;

	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	return (
		<>
			<div className="product-container">
				<div>
					<button
						style={{ border: 'none', background: 'none' }}
						onClick={() => navigate('/deals') || dispatch(getDealsAsync())}
					>
						Deals for you
					</button>
					<img src={breadArrow} alt="path-arrow" />
					<button style={{ border: 'none', background: 'none' }}>
						Product listing
					</button>
				</div>
				<div className="product-landing">
					{/* VERTICAL SLIDER */}
					<>
						<div className="vert-slider-landing">
							{/* Scroll buttons */}
							<button onClick={ScrollDown} className="vert-up-arrow">
								<img src={upDownArrow} alt="up-arrow" />
							</button>

							<div id="container" className="vert-image-slider1">
								<button
									className="vert-button"
									onClick={() => setMainImage(images[0])}
								>
									<img
										src={images[0] ? images[0] : placeholderImage}
										className="vert-pic"
										alt="vert-pic"
										onError={onImageError}
									/>
								</button>
								<button
									className="vert-button"
									onClick={() => setMainImage(images[1])}
								>
									<img
										src={images[1] ? images[1] : placeholderImage}
										className="vert-pic"
										alt="vert-pic"
										onError={onImageError}
									/>
								</button>
								<button
									className="vert-button"
									onClick={() => setMainImage(images[2])}
								>
									<img
										src={images[2] ? images[2] : placeholderImage}
										className="vert-pic"
										alt="vert-pic"
										onError={onImageError}
									/>
								</button>
								<button
									className="vert-button"
									onClick={() => setMainImage(images[3])}
								>
									<img
										src={images[3] ? images[3] : placeholderImage}
										className="vert-pic"
										alt="vert-pic"
										onError={onImageError}
									/>
								</button>
								<button
									className="vert-button"
									onClick={() => setMainImage(images[4])}
								>
									<img
										src={images[4] ? images[4] : placeholderImage}
										className="vert-pic"
										alt="vert-pic"
										onError={onImageError}
									/>
								</button>
							</div>
							<button onClick={ScrollUp} className="vert-down-arrow">
								<img src={upDownArrow} alt="down-arrow" />
							</button>
						</div>
					</>

					{/* MAIN IMAGE */}
					<img
						src={mainImage ? mainImage : placeholderImage}
						className="main-img"
						alt="main-pic"
						onError={onImageError}
					/>

					<div className="side-info-container">
						<h1
							style={{
								fontSize: '48px',
								fontWeight: 'bold',
								lineHeight: '54px',
							}}
						>
							{' '}
							{productName}
						</h1>
						<div className="price-info">
							<h1
								style={{
									color: '#6e20be',
									fontSize: '40px',
									fontWeight: 'bold',
									lineHeight: '54px',
								}}
							>
								${price}
							</h1>

							{showCondition && (
								<div className="new-price-label">{condition}</div>
							)}
						</div>
						<button className="checkout-button" onClick={navigateToCheckout}>
							I want this!
						</button>
						<div className="product-details">
							<h4>Details</h4>
							<p>{description}</p>
						</div>
						<div className="product-seller-info">
							<h4 className="profile-icon">{sellerFirstName[0]}</h4>
							<div className="seller-details">
								<h4 style={{ margin: '15px 0px 2px' }}>
									{sellerFirstName} {sellerLastName}
								</h4>

								<div className="seller-listings">
									<img src={listingIcon} alt="listing icon" />
									<div>{listingNumber}</div>
									<p> listing(s)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
