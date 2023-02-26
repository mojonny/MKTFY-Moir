import React from 'react';
import { useState, useEffect } from 'react';
//import removeImage from '../../assets/Closing X.svg';
import './index.css';

export default function UploadImage({ src, className }) {
	const [showDefaultImg, setShowDefaultImg] = useState(true);

	//A way to upload the images
	const [images, setImages] = useState([]);

	//A way to upload images
	const [imageURLs, setImageURLs] = useState([]);

	useEffect(() => {
		if (images.length < 1) return;
		const newImageUrls = [];
		//Create an object for each image that is loaded
		images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));

		setImageURLs(newImageUrls);
	}, [images]);

	function onImageChange(e) {
		setImages([...e.target.files]);
		setShowDefaultImg(false);
	}

	// const removeImg = (e) => {
	// 	setImages((oldState) => oldState.filter((item) => item.files !== files));
	// };

	return (
		<label>
			{/* Show a default image on load */}
			{showDefaultImg && (
				<img src={src} alt="listing-pic" showDefaultImg={showDefaultImg} />
			)}

			{/* Input to upload image and update page */}
			<input type="file" multiple accept="image/*" onChange={onImageChange} />

			{imageURLs.map((imageSrc) => (
				<>
					{imageSrc.files}
					{/* Uploaded new image */}
					<img src={imageSrc} alt="uploaded img" className={className} />

					{/* Show close button to remove uploaded picture */}
					{/* <button
						onClick={() => {
							// setShowDefaultImg(true);
							removeImg(imageSrc.files);
						}}
						className="remove-img-icon"
					>
						<img src={removeImage} alt="x" />
					</button> */}
				</>
			))}
		</label>
	);
}
