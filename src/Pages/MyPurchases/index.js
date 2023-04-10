import React from 'react';

import purchaseImage from '../../assets/toy.svg';
import purchaseImage1 from '../../assets/xmas.svg';
import breadArrow from '../../assets/breadCrumbArrow.png';
import './index.css';

export default function MyPurchases() {
	const Items = '2 items';
	//http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/purchases

	// const [listings, setListings] = useState([]);

	// useEffect(() => {
	// 	const token = sessionStorage.getItem('accessToken');
	// 	const url =
	// 		'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/products';
	// 	const options = {
	// 		headers: { Authorization: `Bearer ${token}` },
	// 	};
	// 	axios
	// 		.get(url, options)
	// 		.then((res) => {
	// 			setListings(res.data);
	// 			console.log('SUCCESS: Retrieved your listings:', res.data);
	// 		})
	// 		.catch((error) =>
	// 			console.log('ERROR: Unable to retrieve your listings:', error)
	// 		);
	// }, []);

	// const placeholderImage = defaultImg;

	// const onImageError = (e) => {
	// 	e.target.src = placeholderImage;
	// };

	// const listingComponents = listings.map((product) => (
	// 	<ul className="listing-item-box" key={product.id}>
	// 		<li className="listing-landing">
	// 			<div className="listing-item-box">
	// 				<img
	// 					className="listing-pic"
	// 					src={product.images[0] ? product.images[0] : placeholderImage}
	// 					alt="Product pic"
	// 					onError={onImageError}
	// 				/>
	// 				<div className="listing-item-detail">
	// 					<p>{moment(product.created).format('MMM Do YYYY')}</p>
	// 					<h4>{product.productName}</h4>
	// 					<h4>{product.price}</h4>
	// 				</div>
	// 			</div>
	// 		</li>
	// 	</ul>
	// ));

	// [
	// 	{
	// 	  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
	// 	  "productName": "string",
	// 	  "description": "string",
	// 	  "price": 0,
	// 	  "category": "string",
	// 	  "condition": "string",
	// 	  "status": "string",
	// 	  "address": "string",
	// 	  "city": "string",
	// 	  "sellerListingCount": 0,
	// 	  "created": "2023-04-10T01:46:12.082Z",
	// 	  "userId": "string",
	// 	  "sellerProfile": {
	// 		"id": "string",
	// 		"firstName": "string",
	// 		"lastName": "string",
	// 		"email": "string",
	// 		"phone": "string",
	// 		"address": "string",
	// 		"city": "string"
	// 	  },
	// 	  "images": [
	// 		"string"
	// 	  ]
	// 	}
	//   ]

	return (
		<>
			<div className="purchase-container">
				<div className="purchase-labels">
					<div>
						Deals for you <img src={breadArrow} alt="path-arrow" /> My Purchases
					</div>
					<h1> My purchases</h1>
					<p>{Items}</p>
				</div>

				<div className="purchases-landing">
					<div className="purchase-item-box">
						<img
							src={purchaseImage}
							alt="purchase-pic"
							className="purchase-pic"
						/>

						<div className="purchase-item-detail">
							<p> September 07,2020</p>
							<h4> Pearl The Cat: Toy edition </h4>
							<div className="price-info1">
								<h4
									style={{
										color: '#560f9f',

										margin: '0px',
									}}
								>
									$340.00
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="purchases-landing">
					<div className="purchase-item-box">
						<img
							src={purchaseImage1}
							alt="checkout-pic"
							className="purchase-pic"
						/>

						<div className="purchase-item-detail">
							<p> September 07,2020</p>
							<h4> Pearl The Cat: Toy edition </h4>
							<div className="price-info1">
								<h4
									style={{
										color: '#560f9f',

										margin: '0px',
									}}
								>
									$340.00
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
