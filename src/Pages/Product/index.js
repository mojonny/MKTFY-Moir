import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import { productData } from '../../Store/productData';
// import { userData } from '../../Store/userData';

//import VerticalSlider from '../../Components/Sliders/Vertical-Slider';
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

	const { id } = useParams();

	// const filteredById = productData.filter(
	// 	(product) => product.id === productId
	// );

	// const filtered = filteredById[0];
	// console.log('filter by id:', filteredById);
	// const [mainImage, setMainImage] = useState(filtered.imageUrl);

	// const filterByUser = userData.filter(
	// 	(user) => user.userId === filtered.userId
	// );
	// const filteredUser = filterByUser[0];
	// console.log(filteredUser);

	Storage.prototype.setObj = function (key, obj) {
		return this.setItem(key, JSON.stringify(obj));
	};

	const profileLetter = filteredUser.firstName[0];
	console.log(profileLetter);

	const navigate = useNavigate();
	const navigateToCheckout = () => {
		navigate('/checkout');
		sessionStorage.setItem('productName', productName);
		sessionStorage.setItem('productPrice', price);
		sessionStorage.setObj('productImage', images[0]);
		sessionStorage.setItem('sellerId', sellerId);
		sessionStorage.setItem('sellerFirstName', sellerFirstName);
		sessionStorage.setItem('sellerLastName', sellerLastName);
		sessionStorage.setItem('sellerPhone', phone);
		sessionStorage.setItem('itemAddress', address);
		sessionStorage.setItem('sellerCity', city);
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
					return console.log('SUCCESS: User found!', res.data);
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

	return (
		<>
			<div className="product-container">
				<div className="breadcrumbs">
					Deals for you <img src={breadArrow} alt="path-arrow" /> Product
					listing
				</div>
				<div className="product-landing">
					{/* <VerticalSlider filtered={filtered} setMainImage={setMainImage} /> */}
					<img src={images[0]} alt="main-cat-pic" className="main-img" />

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
<<<<<<< HEAD
							<h4 className="profile-icon">{profileLetter}</h4>
=======
							<h4 className="profile-icon">{sellerFirstName[0]}</h4>
>>>>>>> main
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
