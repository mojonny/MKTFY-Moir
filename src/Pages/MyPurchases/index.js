import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { getDealsAsync } from '../../Features/Deals/dealsSlice';
import defaultImg from '../../assets/LP.png';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function MyPurchases() {
	const [listings, setListings] = useState([]);
	const [numberOfPurchases, setNumberOfPurchases] = useState(0);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		async function getMyPurchases() {
			try {
				const token = sessionStorage.getItem('accessToken');
				const url =
					'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/purchases';
				const options = {
					headers: { Authorization: `Bearer ${token}` },
				};
				const response = await axios.get(url, options);
				setListings(response.data);
				setNumberOfPurchases(response.data.length);
				console.log(numberOfPurchases);
				console.log('Get all Listings:', response.data);
			} catch (err) {
				console.log('err', err);
				throw new Error(err);
			}
		}
		getMyPurchases();
	}, [numberOfPurchases]);

	const placeholderImage = defaultImg;
	const onImageError = (e) => {
		e.target.src = placeholderImage;
	};

	const listingComponents = listings.map((product) => (
		<div className="purchases-landing" key={product.id}>
			<div className="purchase-item-box">
				<Link
					to={`/product/${product.id}`}
					key={product.id}
					id={product.id}
					style={{ textDecorationLine: 'none' }}
				>
					<img
						className="purchase-pic"
						src={product.images[0] ? product.images[0] : placeholderImage}
						alt="catPicture"
						onError={onImageError}
					/>
				</Link>
				<div className="purchase-item-detail">
					<p>{moment(product.created).format('MMM Do YYYY')}</p>
					<h4>{product.productName}</h4>
					<div className="price-info1">
						<h4
							style={{
								color: '#560f9f',

								margin: '0px',
							}}
						>
							${product.price.toFixed(2)}
						</h4>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<>
			<div className="purchase-container">
				<div className="purchase-labels">
					<div>
						<button
							style={{ border: 'none', background: 'none' }}
							onClick={() => navigate('/deals') || dispatch(getDealsAsync())}
						>
							Deals for you
						</button>
						<img src={breadArrow} alt="path-arrow" />

						<button style={{ border: 'none', background: 'none' }}>
							My Purchases
						</button>
					</div>
					<br />
					<h1> My purchases</h1>
					<br />
					<p>{numberOfPurchases} items</p>
				</div>

				{listingComponents}
			</div>
		</>
	);
}
