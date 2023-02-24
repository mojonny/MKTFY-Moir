import React from 'react';
import { useState, useEffect } from 'react';

//import loadImg from '../../assets/LoadImg.svg';

//import './index.css';

export default function UploadImage({ src }) {
	const [showDefaultImg, setShowDefaultImg] = useState(true);

	//A way to upload the images
	const [images, setImages] = useState([]);
	console.log(images);

	//A way to upload images
	const [imageURLs, setImageURLs] = useState([]);

	useEffect(() => {
		if (images.length < 1) return;
		const newImageUrls = [];
		images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
		setImageURLs(newImageUrls);
	}, [images]);

	function onImageChange(e) {
		setImages([...e.target.files]);
		setShowDefaultImg(false);
		console.log(setImages);
	}

	return (
		<>
			<label>
				{showDefaultImg && (
					<img
						src={src}
						alt="main-listing-pic"
						showDefaultImg={showDefaultImg}
					/>
				)}
				<input type="file" multiple accept="image/*" onChange={onImageChange} />

				{imageURLs.map((imageSrc) => (
					<img src={imageSrc} alt="uploaded img" />
				))}
			</label>
		</>
	);
}
